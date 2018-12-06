ol.proj.get("EPSG:22332").setExtent([36094.264561, 3323933.865090, 1163050.806639, 4196042.672249]);
var wms_layers = [];
var lyr_CarteRETN_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Carte RET N",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CarteRETN_0.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [748354.846087, 4135546.784036, 1329026.392272, 4527272.180341]
                            })
                        });var lyr_CarteRETS_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Carte RET S",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CarteRETS_1.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [757254.893755, 3762324.984344, 1319113.190683, 4140026.469153]
                            })
                        });var lyr_Geolog_500_C_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Geolog_500_C",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Geolog_500_C_2.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [757880.603698, 3763169.617823, 1317300.755642, 4139966.379860]
                            })
                        });var lyr_Geolog_500_N_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Geolog_500_N",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Geolog_500_N_3.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [748738.221344, 4135273.169047, 1328790.581837, 4526658.702316]
                            })
                        });var lyr_Geolog_500_S_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Geolog_500_S",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Geolog_500_S_4.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [757879.652785, 3489210.098782, 1321428.281515, 3787256.649935]
                            })
                        });var lyr_YDRAYmosaiqueT200_CarthageUTMz32_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "YDRAY-mosaiqueT200_CarthageUTMz32",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/YDRAYmosaiqueT200_CarthageUTMz32_5.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:22332',
                                alwaysInRange: true,
                                imageExtent: [307064.393631, 3318527.974241, 789428.765752, 4209785.908467]
                            })
                        });
        var lyr_GoogleSatelliteHybrid_6 = new ol.layer.Tile({
            'title': 'GoogleSatelliteHybrid_6',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });var lyr_cartepedologique_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "carte pedologique",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/cartepedologique_7.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [808070.014554, 3846599.411761, 1333016.214053, 4518503.860271]
                            })
                        });var format_Limite_de_dlgation_8 = new ol.format.GeoJSON();
var features_Limite_de_dlgation_8 = format_Limite_de_dlgation_8.readFeatures(json_Limite_de_dlgation_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:22332'});
var jsonSource_Limite_de_dlgation_8 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Limite_de_dlgation_8.addFeatures(features_Limite_de_dlgation_8);var lyr_Limite_de_dlgation_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limite_de_dlgation_8, 
                style: style_Limite_de_dlgation_8,
                title: '<img src="styles/legend/Limite_de_dlgation_8.png" /> Limite_de_délégation'
            });var format_Limite_de_gouvernorat_9 = new ol.format.GeoJSON();
var features_Limite_de_gouvernorat_9 = format_Limite_de_gouvernorat_9.readFeatures(json_Limite_de_gouvernorat_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:22332'});
var jsonSource_Limite_de_gouvernorat_9 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Limite_de_gouvernorat_9.addFeatures(features_Limite_de_gouvernorat_9);var lyr_Limite_de_gouvernorat_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limite_de_gouvernorat_9, 
                style: style_Limite_de_gouvernorat_9,
                title: '<img src="styles/legend/Limite_de_gouvernorat_9.png" /> Limite_de_gouvernorat'
            });var format_SITPOL_10 = new ol.format.GeoJSON();
var features_SITPOL_10 = format_SITPOL_10.readFeatures(json_SITPOL_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:22332'});
var jsonSource_SITPOL_10 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SITPOL_10.addFeatures(features_SITPOL_10);var lyr_SITPOL_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SITPOL_10, 
                style: style_SITPOL_10,
    title: 'SITPOL<br />\
    <img src="styles/legend/SITPOL_10_0.png" /> Agricole<br />\
    <img src="styles/legend/SITPOL_10_1.png" /> Industriel<br />\
    <img src="styles/legend/SITPOL_10_2.png" /> Services<br />\
    <img src="styles/legend/SITPOL_10_3.png" /> Urbain<br />\
    <img src="styles/legend/SITPOL_10_4.png" /> <br />'
        });
var group_Cartegologique500 = new ol.layer.Group({
                                layers: [lyr_Geolog_500_C_2,lyr_Geolog_500_N_3,lyr_Geolog_500_S_4,],
                                title: "Carte géologique 500"});
var group_Cartedesressourceseneau500 = new ol.layer.Group({
                                layers: [lyr_CarteRETN_0,lyr_CarteRETS_1,],
                                title: "Carte des ressources en eau 500"});

lyr_CarteRETN_0.setVisible(true);lyr_CarteRETS_1.setVisible(true);lyr_Geolog_500_C_2.setVisible(true);lyr_Geolog_500_N_3.setVisible(true);lyr_Geolog_500_S_4.setVisible(true);lyr_YDRAYmosaiqueT200_CarthageUTMz32_5.setVisible(true);lyr_GoogleSatelliteHybrid_6.setVisible(true);lyr_cartepedologique_7.setVisible(true);lyr_Limite_de_dlgation_8.setVisible(true);lyr_Limite_de_gouvernorat_9.setVisible(true);lyr_SITPOL_10.setVisible(true);
var layersList = [group_Cartedesressourceseneau500,group_Cartegologique500,lyr_YDRAYmosaiqueT200_CarthageUTMz32_5,lyr_GoogleSatelliteHybrid_6,lyr_cartepedologique_7,lyr_Limite_de_dlgation_8,lyr_Limite_de_gouvernorat_9,lyr_SITPOL_10];
lyr_Limite_de_dlgation_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'NOM_DEL_AR': 'NOM_DEL_AR', 'NOM_DEL_FR': 'NOM_DEL_FR', 'GOUV_AR': 'GOUV_AR', 'GOUV_FR': 'GOUV_FR', 'SURFACE': 'SURFACE', 'texte': 'texte', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Limite_de_gouvernorat_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GOUV_FR': 'GOUV_FR', 'GOUV_AR': 'GOUV_AR', 'KM2': 'KM2', 'TEST': 'TEST', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SITPOL_10.set('fieldAliases', {'ID3': 'ID3', 'Commune': 'Commune', 'Délégati': 'Délégati', 'Gouvernora': 'Gouvernora', 'Situation': 'Situation', 'Nom_usue_1': 'Nom_usue_1', 'Occupant': 'Occupant', 'Type_de__s': 'Type_de__s', 'Type_d_occ': 'Type_d_occ', 'Secteur_1': 'Secteur_1', 'nb_employe': 'nb_employe', 'Activité': 'Activité', 'Classe': 'Classe', 'Sous_class': 'Sous_class', 'Surface_ap': 'Surface_ap', 'Topographi': 'Topographi', 'Descriptio': 'Descriptio', 'nature_pol': 'nature_pol', 'nature_p_1': 'nature_p_1', 'nature_p_2': 'nature_p_2', 'Constituan': 'Constituan', 'Constitu_1': 'Constitu_1', 'Constitu_2': 'Constitu_2', 'Divers_1': 'Divers_1', 'Divers_2': 'Divers_2', 'Divers_3': 'Divers_3', 'degré_pol': 'degré_pol', 'degré_po_': 'degré_po_', 'degré_po1': 'degré_po1', 'Indices': 'Indices', 'provenance': 'provenance', 'Type': 'Type', 'Sols_faibl': 'Sols_faibl', 'Sols_Signi': 'Sols_Signi', 'Sols_For_1': 'Sols_For_1', 'Réseau_Hy': 'Réseau_Hy', 'Réseau_H_': 'Réseau_H_', 'Réseau_H1': 'Réseau_H1', 'Nappes_Fai': 'Nappes_Fai', 'Nappes_Sig': 'Nappes_Sig', 'Nappes_For': 'Nappes_For', 'Santé_pub': 'Santé_pub', 'Santé_pu_': 'Santé_pu_', 'Santé_pu1': 'Santé_pu1', 'Agricultur': 'Agricultur', 'Agricult_1': 'Agricult_1', 'Agricult_2': 'Agricult_2', 'Evaluation': 'Evaluation', 'Climat': 'Climat', 'Pluviometr': 'Pluviometr', 'Lithologie': 'Lithologie', 'Permeabili': 'Permeabili', 'Inondabili': 'Inondabili', 'Plan_eau_l': 'Plan_eau_l', 'Profondeur': 'Profondeur', 'Distance_a': 'Distance_a', 'Type_Popul': 'Type_Popul', 'Distance_m': 'Distance_m', 'Densité': 'Densité', 'Type_Activ': 'Type_Activ', 'Distance': 'Distance', });
lyr_Limite_de_dlgation_8.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'NOM_DEL_AR': 'TextEdit', 'NOM_DEL_FR': 'TextEdit', 'GOUV_AR': 'TextEdit', 'GOUV_FR': 'TextEdit', 'SURFACE': 'TextEdit', 'texte': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Limite_de_gouvernorat_9.set('fieldImages', {'OBJECTID': 'Range', 'GOUV_FR': 'TextEdit', 'GOUV_AR': 'TextEdit', 'KM2': 'TextEdit', 'TEST': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SITPOL_10.set('fieldImages', {'ID3': 'TextEdit', 'Commune': 'TextEdit', 'Délégati': 'TextEdit', 'Gouvernora': 'TextEdit', 'Situation': 'TextEdit', 'Nom_usue_1': 'TextEdit', 'Occupant': 'TextEdit', 'Type_de__s': 'TextEdit', 'Type_d_occ': 'TextEdit', 'Secteur_1': 'TextEdit', 'nb_employe': 'TextEdit', 'Activité': 'TextEdit', 'Classe': 'TextEdit', 'Sous_class': 'TextEdit', 'Surface_ap': 'TextEdit', 'Topographi': 'TextEdit', 'Descriptio': 'TextEdit', 'nature_pol': 'TextEdit', 'nature_p_1': 'TextEdit', 'nature_p_2': 'TextEdit', 'Constituan': 'TextEdit', 'Constitu_1': 'TextEdit', 'Constitu_2': 'TextEdit', 'Divers_1': 'TextEdit', 'Divers_2': 'TextEdit', 'Divers_3': 'TextEdit', 'degré_pol': 'TextEdit', 'degré_po_': 'TextEdit', 'degré_po1': 'TextEdit', 'Indices': 'TextEdit', 'provenance': 'TextEdit', 'Type': 'TextEdit', 'Sols_faibl': 'TextEdit', 'Sols_Signi': 'TextEdit', 'Sols_For_1': 'TextEdit', 'Réseau_Hy': 'TextEdit', 'Réseau_H_': 'TextEdit', 'Réseau_H1': 'TextEdit', 'Nappes_Fai': 'TextEdit', 'Nappes_Sig': 'TextEdit', 'Nappes_For': 'TextEdit', 'Santé_pub': 'TextEdit', 'Santé_pu_': 'TextEdit', 'Santé_pu1': 'TextEdit', 'Agricultur': 'TextEdit', 'Agricult_1': 'TextEdit', 'Agricult_2': 'TextEdit', 'Evaluation': 'TextEdit', 'Climat': 'TextEdit', 'Pluviometr': 'TextEdit', 'Lithologie': 'TextEdit', 'Permeabili': 'TextEdit', 'Inondabili': 'TextEdit', 'Plan_eau_l': 'TextEdit', 'Profondeur': 'TextEdit', 'Distance_a': 'TextEdit', 'Type_Popul': 'TextEdit', 'Distance_m': 'TextEdit', 'Densité': 'TextEdit', 'Type_Activ': 'TextEdit', 'Distance': 'TextEdit', });
lyr_Limite_de_dlgation_8.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'NOM_DEL_AR': 'no label', 'NOM_DEL_FR': 'no label', 'GOUV_AR': 'no label', 'GOUV_FR': 'no label', 'SURFACE': 'no label', 'texte': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Limite_de_gouvernorat_9.set('fieldLabels', {'OBJECTID': 'no label', 'GOUV_FR': 'no label', 'GOUV_AR': 'no label', 'KM2': 'no label', 'TEST': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SITPOL_10.set('fieldLabels', {'ID3': 'no label', 'Commune': 'no label', 'Délégati': 'no label', 'Gouvernora': 'no label', 'Situation': 'no label', 'Nom_usue_1': 'no label', 'Occupant': 'no label', 'Type_de__s': 'no label', 'Type_d_occ': 'no label', 'Secteur_1': 'no label', 'nb_employe': 'no label', 'Activité': 'no label', 'Classe': 'no label', 'Sous_class': 'no label', 'Surface_ap': 'no label', 'Topographi': 'no label', 'Descriptio': 'no label', 'nature_pol': 'no label', 'nature_p_1': 'no label', 'nature_p_2': 'no label', 'Constituan': 'no label', 'Constitu_1': 'no label', 'Constitu_2': 'no label', 'Divers_1': 'no label', 'Divers_2': 'no label', 'Divers_3': 'no label', 'degré_pol': 'no label', 'degré_po_': 'no label', 'degré_po1': 'no label', 'Indices': 'no label', 'provenance': 'no label', 'Type': 'no label', 'Sols_faibl': 'no label', 'Sols_Signi': 'no label', 'Sols_For_1': 'no label', 'Réseau_Hy': 'no label', 'Réseau_H_': 'no label', 'Réseau_H1': 'no label', 'Nappes_Fai': 'no label', 'Nappes_Sig': 'no label', 'Nappes_For': 'no label', 'Santé_pub': 'no label', 'Santé_pu_': 'no label', 'Santé_pu1': 'no label', 'Agricultur': 'no label', 'Agricult_1': 'no label', 'Agricult_2': 'no label', 'Evaluation': 'no label', 'Climat': 'no label', 'Pluviometr': 'no label', 'Lithologie': 'no label', 'Permeabili': 'no label', 'Inondabili': 'no label', 'Plan_eau_l': 'no label', 'Profondeur': 'no label', 'Distance_a': 'no label', 'Type_Popul': 'no label', 'Distance_m': 'no label', 'Densité': 'no label', 'Type_Activ': 'no label', 'Distance': 'no label', });
lyr_SITPOL_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});