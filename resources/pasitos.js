
// NO OLVIDAR ID UNICO
var stepssalsa = [
 {id:"pasitosn28", title: "Pasitos para guardar",
  comment: "",
  imagelink:"resources/img/cohete.jpg", videolink: "videos/pasitos.mp4", date:"Yo 02/2023", color:"red" },
 {id:"pasitosn28", title: "Rumbeo Cohete Noe",
  comment: "Levanta brazo primero codo en plan rumbeo, chacha, prepara vuelta y lanza brazo recoge y mueve primero torso arrastrando el otro brazo",
  imagelink:"resources/img/cohete.jpg", videolink: "videos/cohete.mp4", date:"Noe 02/2021", color:"yellowgreen" },
 {id:"stepssalsa1", title: "El callejero",
  comment: "",
  imagelink:"resources/img/callejero.jpg", videolink: "videos/callejero.mp4", date:"Yo 07/2022", color:"white" },
 {id:"pasitosn1", title: "Aleluya cubano",
  comment: "Rumba y acaba con brazos en alto y vuelta",
  imagelink:"resources/img/alelu.jpg", videolink: "videos/aleluya.mp4", date:"Mio 05/2020", color:"yellowgreen" },
 {id:"pasitosn5", title: "Pies rápidos Juanmi final repetido",
  comment: "De lado y haz sucesión rapida de taconeo. REPITE FINAL",
  imagelink:"resources/img/juanmi.jpg", videolink: "videos/juanmi.mp4", date:"Yo 07/2018", color:"yellowgreen" },
 {id:"pasitosn11", title: "Arrastrado con Slide de David",
  comment: "Cambia de posición con la chica y deja brazo alargado,  luego, desplázate lateralmente y deja pierna arrastrando en slide",
  imagelink:"resources/img/arrastradavid.jpg", videolink: "videos/arrastradavid.mp4", date:"Yo 07/2018", color:"yellowgreen" },
 {id:"pasitosn17", title: "Fernando Sosa",
  comment: "Recuerda la mano con palma hacia arriba la lanzar en 4 al igual que pierna de atrás",
  imagelink:"resources/img/sosa.jpg", videolink: "videos/sousa.mp4", date:"Yo 04/2020", color:"yellowgreen" },
 {id:"pasitosn18", title: "Son",
  comment: "Recuerda con la palma siempre hacia afuera y la pie por detras del otro en el cambio",
  imagelink:"resources/img/son.jpg", videolink: "videos/son.mp4", date:"Yo 04/2020", color:"yellowgreen" }
];

var stepsshuffle = [
  {id:"stepsshuffle1", title: "Cutting Shapes Basics",
   comment: "1. Walking man, 2. Walking man lateral, 3. Moonwalk, 4. Jumping lateral, 5. Cadereo Alba, 6. Arriba Michael J., 7. Perreo Mauriño",
   imagelink:"resources/img/runningman.jpg", videolink: "videos/cutting.mp4", date:"Yo 12/2021", color:"yellowgreen" },
];


var stepsurban = [
  {id:"pasitosn30", title: "Pistolas Alba",
    comment: "Pon las manos como en una moto y al retraerlas gira la muñeca",
    imagelink:"resources/img/albapisto.JPG", videolink: "videos/albapaso.mp4", date:"Yo 03/2021", color:"yellowgreen" },
];

var stepsbachata = [
  {id:"pasitosn25", title: "",
    comment: "",
    imagelink:"resources/img/", videolink: "videos/", date:"Yo 01/2021", color:"yellowgreen" },
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
   var shuffle = stepsshuffle.map(elem => cards_html.replace("#ID#", elem.id)
                                .replace("#ID#", elem.id)
                                .replace("#DATE#", elem.date)
                                .replace("#TITLE#", elem.title)
                                .replace("#TITLE#", elem.title)
                                .replace("#COMMENT#", elem.comment)
                                .replace("#IMAGELINK#", elem.imagelink)
                                .replace("#COLOR#", elem.color)
                                .replace("#VIDEOLINK#", elem.videolink)).join(' ');
   $("#shuffle").html(shuffle);

   var salsa = stepssalsa.map(elem => cards_html.replace("#ID#", elem.id)
                                .replace("#ID#", elem.id)
                                .replace("#DATE#", elem.date)
                                .replace("#TITLE#", elem.title)
                                .replace("#TITLE#", elem.title)
                                .replace("#COMMENT#", elem.comment)
                                .replace("#IMAGELINK#", elem.imagelink)
                                .replace("#COLOR#", elem.color)
                                .replace("#VIDEOLINK#", elem.videolink)).join(' ');
   $("#salsapas").html(salsa);

   var bachata = stepsbachata.map(elem => cards_html.replace("#ID#", elem.id)
                                .replace("#ID#", elem.id)
                                .replace("#DATE#", elem.date)
                                .replace("#TITLE#", elem.title)
                                .replace("#TITLE#", elem.title)
                                .replace("#COMMENT#", elem.comment)
                                .replace("#IMAGELINK#", elem.imagelink)
                                .replace("#COLOR#", elem.color)
                                .replace("#VIDEOLINK#", elem.videolink)).join(' ');
   $("#bachatapas").html(bachata);

   var urban = stepsurban.map(elem => cards_html.replace("#ID#", elem.id)
                                .replace("#ID#", elem.id)
                                .replace("#DATE#", elem.date)
                                .replace("#TITLE#", elem.title)
                                .replace("#TITLE#", elem.title)
                                .replace("#COMMENT#", elem.comment)
                                .replace("#IMAGELINK#", elem.imagelink)
                                .replace("#COLOR#", elem.color)
                                .replace("#VIDEOLINK#", elem.videolink)).join(' ');
   $("#urban").html(urban);
});
