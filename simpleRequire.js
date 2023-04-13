(function (global) {
    if (typeof __VRT_INIT__ !== 'undefined') {
        __VRT_INIT__();
        var vstRunContextStr = localStorage.getItem('vstRunContext');
        if (vstRunContextStr) {
            window.__VRT_RUN_CONTEXT__ = JSON.parse(vstRunContextStr);
            localStorage.removeItem('vstRunContext');
        }
        else {
            localStorage.clear();
        }
    }
    var requireCfg = { paths: {} }
    var currentDefinedFactory;
    var currentDefinedDeps;
    var exportsPlaceholder = {};
    var ALLOWED_EXTS = [
        'gexf', 'txt', 'csv', 'svg',
        'js', 'json'
    ];
    var mods = {};
    function handleLoadError(url, resolve, reject) {
        var errMsg = 'require: failed to load ' + url;
        if (typeof __VRT_LOAD_ERROR__ !== 'undefined') {
            __VRT_LOAD_ERROR__(errMsg);
            resolve();
        }
        else {
            reject(errMsg);
        }
    }
    function loadText(url) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onload = function (e) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                }
                else {
                    handleLoadError(url, resolve, reject);
                }
            }
            xhr.onerror = function (e) {
                handleLoadError(url, resolve, reject);
            }
            xhr.open('GET', url);
            xhr.send();
        });
    }
    function loadJSON(url) {
        return loadText(url).then(function (text) {
            return JSON.parse(text);
        });
    }
    function loadScript(url) {
        return new Promise(function (resolve, reject) {
            var script = document.createElement('script');
            script.async = true;
            script.onload = function () {
                resolve();
            }
            script.onerror = function () {
                handleLoadError(url, resolve, reject);
            }
            script.src = url;
            document.head.appendChild(script);
        });
    }
    function resolvePath(p) {
        var paths = requireCfg.paths || {};

        for (var key in paths) {
            if (paths.hasOwnProperty(key)) {
                if (p.indexOf(key) === 0) {
                    p = p.replace(key, paths[key]);
                    break;
                }
            }
        }

        var ext = getExt(p);
        if (ALLOWED_EXTS.indexOf(ext) < 0) {
            p = p + '.js';
        }
        return p;
    }
    function getExt(str) {
        return str.split('.').pop();
    }
    function invokeFactory(factory, depsPromise) {
        if (typeof factory === 'function') {
            return depsPromise.then(function (deps) {
                var modExports = {};
                var factoryRet = factory.apply(null, deps.map(function (dep) {
                    return dep === exportsPlaceholder ? modExports : dep;
                }));
                return factoryRet || modExports;
            });
        }
        else {
            return factory;
        }
    }
    function define(modId, depsIds, factory) {
        if (factory == null) {
            // define(function () {});
            if (depsIds == null) {
                factory = modId;
                modId = null;
            }
            else {
                factory = depsIds;
                depsIds = null;
                // define(['depsId'], function () {});
                if (modId instanceof Array) {
                    depsIds = modId;
                    modId = null;
                }
            }
        }
        if (modId) {
            mods[modId] = invokeFactory(factory, loadDeps(depsIds));
        }
        else {
            currentDefinedFactory = factory;
            currentDefinedDeps = loadDeps(depsIds || []);
        }
    }
    function loadMod(modId) {
        if (!mods[modId]) {
            mods[modId] = {};
            function loaded(exports) {
                var ret;
                if (currentDefinedDeps) {
                    ret = invokeFactory(currentDefinedFactory, currentDefinedDeps);
                }
                else {
                    ret = exports;
                }
                currentDefinedFactory = null;
                currentDefinedDeps = null;
                return ret;
            }
            var url = resolvePath(modId);
            var ext = getExt(url);
            if (ext === 'js') {
                mods[modId].exports = loadScript(url).then(loaded);
            }
            else if (ext === 'json' || ext === 'geojson') {
                mods[modId].exports = loadJSON(url).then(loaded);
            }
            else {
                mods[modId].exports = loadText(url).then(loaded);
            }
        }
        return mods[modId].exports;
    }

    function loadDeps(depsIds) {
        return Promise.all(depsIds.map(function (depId) {
            if (depId === 'exports') {
                return Promise.resolve(exportsPlaceholder);
            }
            else {
                return loadMod(depId);
            }
        }));
    }
    var pendingRequireCallbacks = [];
    var pendingRequireCallbackParams = [];
    var requireCount = 0;
    function require(depsIds, cb) {
        if (typeof depsIds === 'string') {
            depsIds = [depsIds];
        }
        var cbIdx = requireCount;
        pendingRequireCallbacks.push(cb);
        requireCount++;

        loadDeps(depsIds).then(function (deps) {
            pendingRequireCallbackParams[cbIdx] = deps;
            requireCount--;
            if (requireCount === 0) {
                var requireCallbackToFlush = pendingRequireCallbacks;
                var requireCallbackParamsToFlush = pendingRequireCallbackParams;
                pendingRequireCallbacks = [];
                pendingRequireCallbackParams = [];
               if (typeof __VRT_START__ !== 'undefined') {
                    __VRT_START__();
                }

                for (var i = 0; i < requireCallbackToFlush.length; i++) {
                    requireCallbackToFlush[i] && requireCallbackToFlush[i].apply(null, requireCallbackParamsToFlush[i]);
                }
            }
        });
    }
    require.config = function (cfg) {
        requireCfg = cfg || {};
    }
    global.require = require;
    global.define = define;
    global.define.amd = {};
})(window);
