(function () {
var ecDistPath;
if (!ecDistPath) {
 ecDistPath = 'lib/echarts.min';
}
if (typeof require !== 'undefined'){
require.config({
 paths: {
 'echarts': ecDistPath,
  }
 });
} 
})();