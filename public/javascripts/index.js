var ApplicationKey = '56eb6de760229181bfe4e43fd53e986b'
var options = {
    sceneModePicker:false,          // 模式选择
    animation: false,               // 动画
    geocoder:false,
    homeButton:false,               // 主页按钮
    baseLayerPicker:false,          // 图层选择器
    navigationHelpButton:false,     // 导引按钮
    timeline:false,                 // 时间线
    fullscreenButton:false,         // 全屏按钮
    vrButton:false,                 // VR模式
    infoBox: false,                 // 信息弹框
    imageryProvider: new Cesium.WebMapTileServiceImageryProvider({ // 天地图影像图层
        url: 'http://t0.tianditu.gov.cn/img_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles&TILEMATRIX={TileMatrix}&TILEROW={TileRow}&TILECOL={TileCol}&tk=' + ApplicationKey,
        layer: 'img',
        style: 'default',
        format: 'tiles',
        tileMatrixSetID: "c",
        subdomains:['t0','t1','t2','t3','t4','t5','t6','t7'],
        maximumLevel: 14,
        tilingScheme: new Cesium.GeographicTilingScheme(),
        tileMatrixLabels : ['1','2','3','4','5','6','7','8','9','10','11','12','13','14']
    })
}

var viewer = new Cesium.Viewer('container', options);
// 删去Cesium logo
$(".cesium-viewer-bottom").remove()

// $.getJSON('http://localhost:8080/geoserver/China_real/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=China_real%3Abeijing&outputFormat=application%2Fjson')
//     .done(function(data){
//         var datasource = Cesium.GeoJsonDataSource.load(data);
//         datasource.then(function(dataSource) {
//             viewer.dataSources.add(dataSource);
//             viewer.zoomTo(dataSource)
//         })
//     })
