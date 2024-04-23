ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([24.842667, -5.699127, 48.540376, 6.913033]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KenyaCounties_1 = new ol.format.GeoJSON();
var features_KenyaCounties_1 = format_KenyaCounties_1.readFeatures(json_KenyaCounties_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KenyaCounties_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KenyaCounties_1.addFeatures(features_KenyaCounties_1);
var lyr_KenyaCounties_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KenyaCounties_1, 
                style: style_KenyaCounties_1,
                popuplayertitle: "Kenya Counties",
                interactive: true,
                title: '<img src="styles/legend/KenyaCounties_1.png" /> Kenya Counties'
            });
var format_ke_keyairfields_2 = new ol.format.GeoJSON();
var features_ke_keyairfields_2 = format_ke_keyairfields_2.readFeatures(json_ke_keyairfields_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ke_keyairfields_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ke_keyairfields_2.addFeatures(features_ke_keyairfields_2);
var lyr_ke_keyairfields_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ke_keyairfields_2, 
                style: style_ke_keyairfields_2,
                popuplayertitle: "ke_key-airfields",
                interactive: true,
                title: '<img src="styles/legend/ke_keyairfields_2.png" /> ke_key-airfields'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_KenyaCounties_1.setVisible(true);lyr_ke_keyairfields_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_KenyaCounties_1,lyr_ke_keyairfields_2];
lyr_KenyaCounties_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_ke_keyairfields_2.set('fieldAliases', {'TYPE': 'TYPE', });
lyr_KenyaCounties_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM1_REF': 'TextEdit', 'ADM1ALT1EN': 'TextEdit', 'ADM1ALT2EN': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_ke_keyairfields_2.set('fieldImages', {'TYPE': 'TextEdit', });
lyr_KenyaCounties_1.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_EN': 'inline label - always visible', 'ADM1_PCODE': 'no label', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_ke_keyairfields_2.set('fieldLabels', {'TYPE': 'inline label - always visible', });
lyr_ke_keyairfields_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});