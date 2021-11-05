var URL_CONFIG = {

	BING_MAP_KEY: 'AjZQFTIC1djVRAMMYgiekFSPjfqT_8qCjMrOhKQMEzOsUd-_zjIPEJbcm2vO2Xec',
	// SCENE_CBD : 'http://www.supermapol.com/realspace/services/3D-CBDCache20200416/rest/realspace' ,// CBD场景
	// SCENE_CBD: 'http://localhost:8090/iserver/services/3D-qilin/rest/realspace' // CBD场景

};

//var url = 'http://36.147.6.60:8090/';//服务器地址
var url = 'http://localhost:8090/';//本地地址

var dataServiceUrl1 =url+
				'iserver/services/data-data/rest/data/featureResults.rjson?returnContent=true'; // 数据服务URL

//测试
var cc = {
	dataServiceUrl: url + 'iserver/services/data-cc/rest/data/featureResults.rjson?returnContent=true', //数据服务url
	dataSourceName: 'cc', // 数据源名称
	dataSetName: 'New_Region', // 数据集名称
	sceneName: 'cc', //三维场景
	layerName: 'Config_4',
	restjsr: url +
		'iserver/services/spatialAnalysis-cc/restjsr/spatialanalyst/geometry/3d/extractvector3d.rjson?returnContent=true',
	promise: url + 'iserver/services/3D-cc/rest/realspace'

}

//生物医药
var swyy = {
	dataServiceUrl: url + 'iserver/services/data-swyykjcyy/rest/data/featureResults.rjson?returnContent=true', //数据服务url
	dataSourceName: 'swyykjcyy', // 数据源名称
	dataSetName: 'swyy', // 数据集名称
	sceneName: 'swyy', //三维场景
	layerName: 'Config',
	restjsr: url +
		'iserver/services/spatialAnalysis-swyykjcyy/restjsr/spatialanalyst/geometry/3d/extractvector3d.rjson?returnContent=true',
	promise: url + 'iserver/services/3D-swyykjcyy/rest/realspace'

}

//麒麟新材料产业园
var qlxcl = {
	dataServiceUrl: url + 'iserver/services/data-qilin/rest/data/featureResults.rjson?returnContent=true', //数据服务url
	dataSourceName: 'qilin', // 数据源名称
	dataSetName: 'ql', // 数据集名称
	sceneName: 'qlxcl', //三维场景
	layerName: 'Config',
	restjsr: url +
		'iserver/services/spatialAnalysis-qilin/restjsr/spatialanalyst/geometry/3d/extractvector3d.rjson?returnContent=true',
	promise: url + 'iserver/services/3D-qilin/rest/realspace'

}

//青龙片区
var qinglong = {
	dataServiceUrl: url + 'iserver/services/data-qinglong/rest/data/featureResults.rjson?returnContent=true', //数据服务url
	dataSourceName: 'qinglong', // 数据源名称
	dataSetName: 'qinglong', // 数据集名称
	sceneName: 'qinglong', //三维场景
	layerName: 'Config',
	restjsr: url +
		'iserver/services/spatialAnalysis-qinglong/restjsr/spatialanalyst/geometry/3d/extractvector3d.rjson?returnContent=true',
	promise: url + 'iserver/services/3D-qinglong/rest/realspace'

}

//化工园区草铺片区
var caopu = {
	dataServiceUrl: url + 'iserver/services/data-caopu/rest/data/featureResults.rjson?returnContent=true', //数据服务url
	dataSourceName: 'caopu', // 数据源名称
	dataSetName: 'caopu', // 数据集名称
	sceneName: 'caopu', //三维场景
	layerName: 'Config',
	restjsr: url +
		'iserver/services/spatialAnalysis-caopu/restjsr/spatialanalyst/geometry/3d/extractvector3d.rjson?returnContent=true',
	promise: url + 'iserver/services/3D-caopu/rest/realspace'

}

//化工园区禄裱片区
var lubiao = {
	dataServiceUrl: url + 'iserver/services/data-lubiao/rest/data/featureResults.rjson?returnContent=true', //数据服务url
	dataSourceName: 'lubiao', // 数据源名称
	dataSetName: 'lubiao', // 数据集名称
	sceneName: 'lubiao', //三维场景
	layerName: 'Config',
	restjsr: url +
		'iserver/services/spatialAnalysis-lubiao/restjsr/spatialanalyst/geometry/3d/extractvector3d.rjson?returnContent=true',
	promise: url + 'iserver/services/3D-lubiao/rest/realspace'

}

//冶金
var yejin = {
	dataServiceUrl: url + 'iserver/services/data-yejin/rest/data/featureResults.rjson?returnContent=true', //数据服务url
	dataSourceName: 'yejin', // 数据源名称
	dataSetName: 'yejin', // 数据集名称
	sceneName: 'yejin', //三维场景
	layerName: 'Config',
	restjsr: url +
		'iserver/services/spatialAnalysis-yejin/restjsr/spatialanalyst/geometry/3d/extractvector3d.rjson?returnContent=true',
	promise: url + 'iserver/services/3D-yejin/rest/realspace'

}

// 1是生物医药科技园
// 2是新材料产业园
// 3是化工产业园草铺
// 4是现代商贸服务中心
// 5是冶金
// 6是禄裱片区
// 7是青龙片区
