var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Limitedintervention_1 = new ol.format.GeoJSON();
var features_Limitedintervention_1 = format_Limitedintervention_1.readFeatures(json_Limitedintervention_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitedintervention_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitedintervention_1.addFeatures(features_Limitedintervention_1);
var lyr_Limitedintervention_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitedintervention_1, 
                style: style_Limitedintervention_1,
                popuplayertitle: 'Limite d\'intervention',
                interactive: true,
                title: '<img src="styles/legend/Limitedintervention_1.png" /> Limite d\'intervention'
            });
var format_Voiedaccs_2 = new ol.format.GeoJSON();
var features_Voiedaccs_2 = format_Voiedaccs_2.readFeatures(json_Voiedaccs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Voiedaccs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voiedaccs_2.addFeatures(features_Voiedaccs_2);
var lyr_Voiedaccs_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Voiedaccs_2, 
                style: style_Voiedaccs_2,
                popuplayertitle: 'Voie d\'accès',
                interactive: true,
                title: '<img src="styles/legend/Voiedaccs_2.png" /> Voie d\'accès'
            });
var format_Infrastructure_3 = new ol.format.GeoJSON();
var features_Infrastructure_3 = format_Infrastructure_3.readFeatures(json_Infrastructure_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infrastructure_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infrastructure_3.addFeatures(features_Infrastructure_3);
var lyr_Infrastructure_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infrastructure_3, 
                style: style_Infrastructure_3,
                popuplayertitle: 'Infrastructure',
                interactive: true,
    title: 'Infrastructure<br />\
    <img src="styles/legend/Infrastructure_3_0.png" /> Bar<br />\
    <img src="styles/legend/Infrastructure_3_1.png" /> École <br />\
    <img src="styles/legend/Infrastructure_3_2.png" /> Marché <br />\
    <img src="styles/legend/Infrastructure_3_3.png" /> Restaurant <br />\
    <img src="styles/legend/Infrastructure_3_4.png" /> Station <br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_Limitedintervention_1.setVisible(true);lyr_Voiedaccs_2.setVisible(true);lyr_Infrastructure_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Limitedintervention_1,lyr_Voiedaccs_2,lyr_Infrastructure_3];
lyr_Limitedintervention_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_Voiedaccs_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_Infrastructure_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nom': 'Nom', 'Type': 'Type', 'Accès': 'Accès', 'Produit': 'Produit', 'Commentair': 'Commentair', });
lyr_Limitedintervention_1.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_Voiedaccs_2.set('fieldImages', {'fid': '', 'id': '', });
lyr_Infrastructure_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nom': 'TextEdit', 'Type': 'TextEdit', 'Accès': 'TextEdit', 'Produit': 'TextEdit', 'Commentair': 'TextEdit', });
lyr_Limitedintervention_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_Voiedaccs_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_Infrastructure_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Nom': 'header label - always visible', 'Type': 'header label - always visible', 'Accès': 'header label - always visible', 'Produit': 'header label - always visible', 'Commentair': 'header label - always visible', });
lyr_Infrastructure_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});