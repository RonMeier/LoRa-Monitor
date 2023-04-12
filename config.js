(function () {
var ecDistPath;
if (!ecDistPath) {
 ecDistPath = 'lib/echarts';
}
if (typeof require !== 'undefined'){
require.config({
 paths: {
 'echarts': ecDistPath,
  }
 });
} 
})();