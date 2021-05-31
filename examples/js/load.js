var map;
var zoom = 14;
var marker;

function onLoad() {
	//初始化地图对象
	map = new T.Map("map");
	//设置显示地图的中心点和级别
	map.centerAndZoom(new T.LngLat(102.48, 24.92), zoom);
	//允许鼠标滚轮缩放地图
	map.enableScrollWheelZoom();

	var imageURL = "https://t0.tianditu.gov.cn/img_w/wmts?" +
		"SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles" +
		"&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=10908abdd40599d3a3ebbc012bb3549a";
	//创建自定义图层对象
	var lay = new T.TileLayer(imageURL, {
		minZoom: 1,
		maxZoom: 18
	});
	//将图层增加到地图上
	map.addLayer(lay);

}

function enterprisePoint(res) {

	var lat = $(res).attr("lat");
	var lng = $(res).attr("lng");

	var lnglat = {
		lat: lat,
		lng: lng
	}
	map.centerAndZoom(lnglat, 14)

	// alert("获取定位坐标：" + lnglat.lat + "," + lnglat.lng)
	marker = new T.Marker(lnglat);
	map.addOverLay(marker);

	var infoWin = new T.InfoWindow();
	var sContent =
		"<div style='margin:0px;'>" +
		"<div style='margin:10px 10px; '>" +
		"<img style='float:left;margin:0px 10px' src='http://lbs.tianditu.gov.cn/images/logo.png' width='101' height='49' title='天安门'/>" +
		"<div style='margin:10px 0px 10px 120px;'>电话 : (010)88187700 <br>地址：北京市顺义区机场东路国门商务区地理信息产业园2号楼天地图大厦" +
		"<input style='width: 80px;height: 24px; text-align: center; background: #5596de;color: #FFF;border: none;display: block;cursor: pointer;' type='button' value='三维面貌'  onClick=\"javascript: window.open('../examples/demo1.html?longitude=113.05929987159&latitude=28.788296598019')\">" +
		"</div>" +
		"</div>" +
		"</div>";
	infoWin.setContent(sContent);
	marker.addEventListener("click", function() {
		marker.openInfoWindow(infoWin);
	}); // 将标注添加到地图中

}
