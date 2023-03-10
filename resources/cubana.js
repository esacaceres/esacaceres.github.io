
// NO OLVIDAR ID UNICO

// News
var cubananews = [
 {id:"cubananews3", title: "Basicos David&Noe",
  comment: "1. Paso básico cubano 2. Guapeala 3. 70 Enchufla en redondo 4. 71 + con mambo + zero 5. Exhibela",
  imagelink:"resources/img/basicocubano.jpg", videolink: "videos/basicoscubano.mp4", date:"Congress 08/2022", color:"white" },
 {id:"cubananews4", title: "71 cuerdeala",
  comment: "",
  imagelink:"resources/img/setentayunoengana.jpg", videolink: "videos/setentayunoengana.mp4", date:"12/2022", color:"yellowgreen" },
 {id:"cubananews5", title: "71 doble cazala",
  comment: "",
  imagelink:"resources/img/setentayunorecoge.jpg", videolink: "videos/setentayunorecoge.mp4", date:"12/2022", color:"yellowgreen" },
];

// Cool
var cubanacool = [
  {id:"cubanacool1", title: "Paraguas Kofee",
   comment: "",
   imagelink:"resources/img/paraguaskofee.jpg", videolink: "videos/paraguaskofee.mp4", date:"Clase 08/2015", color:"white" },
  {id:"cubanacool2", title: "Crusaito",
   comment: "",
   imagelink:"resources/img/crusaito.jpg", videolink: "videos/crusaito.mp4", date:"Clase 08/2015", color:"white" },
];

// Basicos
var cubanabasicos = [
  {id:"cubanabasicos1", title: "Enchufla Doble",
   comment: "",
   imagelink:"resources/img/enchufladoble.jpg", videolink: "videos/enchufladoble.mp4", date:"Congress 08/2012", color:"white" },
];


// ----------------------------------------------------------------------------------------------------------------------

var cards_html = '<div class="card" style="width:9rem; height:11rem;  margin:5px; float:left; padding: 7px; background: #COLOR# ">' +
  '<a href="#" class="btn" data-toggle="modal" data-target="##ID#"><img class="card-img-top" src="#IMAGELINK#"></a>' +
  '<div class="card-body">' +
    '<h6 class="card-title">#TITLE#</h6>' +
    '<p class="card-text"></p>' +
  '</div>' +
'</div>' +
'<div class="modal fade" id="#ID#" role="dialog">' +
    '<div class="modal-dialog modal-lg" >' +
      '<div class="modal-content" style="width:1000px">' +
        '<div class="modal-header">' +
          '<h4 class="modal-title">#TITLE#</h4>' +
        '</div>' +
        '<div class="modal-body">' +
          '<p>#COMMENT# <small>#DATE#</small></p>' +
        '</div>' +
        '<div class="modal-trigger">' +
            '<video preload="auto" controls="controls" poster="" width="998">' +
              '<source src="#VIDEOLINK#" type="video/mp4">' +
              '<source src="#VIDEOLINK#" type="video/webm">' +
            '</video>' +
          '</div>' +
      '</div>' +
    '</div>' +
 '</div>';

$(document).ready(function(){
  var cubananewsStep = cubananews.map(elem => cards_html.replace("#ID#", elem.id)
                               .replace("#ID#", elem.id)
                               .replace("#DATE#", elem.date)
                               .replace("#TITLE#", elem.title)
                               .replace("#TITLE#", elem.title)
                               .replace("#COMMENT#", elem.comment)
                               .replace("#IMAGELINK#", elem.imagelink)
                               .replace("#COLOR#", elem.color)
                               .replace("#VIDEOLINK#", elem.videolink)).join(' ');
   $("#cubananews").html(cubananewsStep);


   var cubanacoolStep = cubanacool.map(elem => cards_html.replace("#ID#", elem.id)
   															.replace("#ID#", elem.id)
                                .replace("#DATE#", elem.date)
   															.replace("#TITLE#", elem.title)
                                .replace("#TITLE#", elem.title)
                                .replace("#COMMENT#", elem.comment)
                                .replace("#IMAGELINK#", elem.imagelink)
                                .replace("#COLOR#", elem.color)
                                .replace("#VIDEOLINK#", elem.videolink)).join(' ');
   $("#cubanacool").html(cubanacoolStep);

   var cubanabasicosStep = cubanabasicos.map(elem => cards_html.replace("#ID#", elem.id)
   															.replace("#ID#", elem.id)
                                .replace("#DATE#", elem.date)
   															.replace("#TITLE#", elem.title)
                                .replace("#TITLE#", elem.title)
                                .replace("#COMMENT#", elem.comment)
                                .replace("#IMAGELINK#", elem.imagelink)
                                .replace("#COLOR#", elem.color)
                                .replace("#VIDEOLINK#", elem.videolink)).join(' ');
   $("#cubanabasicos").html(cubanabasicosStep);
});
