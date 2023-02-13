// Mettre un style Special
function mettreStyleSpecial() {
  document.getElementById("monTexte").classList.add('special');
}

// Enlever le style Special
function enleveStyleSpecial() {
  document.getElementById("monTexte").classList.remove('special');
}

function refresh(){
  var t = 1000; // rafraîchissement en millisecondes
  setTimeout('showDate()',t)
}

function showDate() {
  showDateParis();
  showDateKourou();
  showDateCap();
  showDateB()
  refresh();
}

function showDateParis() {
  var date = new Date()
  var calendar = date.toDateString();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  if( h < 10 ){ h = '0' + h; }
  if( m < 10 ){ m = '0' + m; }
  if( s < 10 ){ s = '0' + s; }
  var time = calendar + ' ' + h + ':' + m + ':' + s;
  document.getElementById('horlogeParis').innerHTML = time;
}

function showDateKourou() {
  var datekourou = new Date()
  datekourou.setTime(datekourou.getTime() - 4 * 3600 * 1000);
  var calendarkourou = datekourou.toDateString();
  var hkourou = datekourou.getHours();
  var mkourou = datekourou.getMinutes();
  var skourou = datekourou.getSeconds();
  if( hkourou < 10 ){ hkourou = '0' + hkourou; }
  if( mkourou < 10 ){ mkourou = '0' + mkourou; }
  if( skourou < 10 ){ skourou = '0' + skourou; }
  var timekourou = calendarkourou + ' ' + hkourou + ':' + mkourou + ':' + skourou;
  document.getElementById('horlogeKourou').innerHTML = timekourou;
}

function showDateCap() {
  var dateCap = new Date()
  dateCap.setTime(dateCap.getTime() - 6 * 3600 * 1000);
  var calendarCap = dateCap.toDateString();
  var hCap = dateCap.getHours();
  var mCap = dateCap.getMinutes();
  var sCap = dateCap.getSeconds();
  if( hCap < 10 ){ hCap = '0' + hCap; }
  if( mCap < 10 ){ mCap = '0' + mCap; }
  if( sCap < 10 ){ sCap = '0' + sCap; }
  var timeCap = calendarCap + ' ' + hCap + ':' + mCap + ':' + sCap;
  document.getElementById('horlogeCap').innerHTML = timeCap;
}

function showDateB() {
  var dateB = new Date()
  dateB.setTime(dateB.getTime() + 4 * 3600 * 1000);
  var calendarB = dateB.toDateString();
  var hB = dateB.getHours();
  var mB = dateB.getMinutes();
  var sB = dateB.getSeconds();
  if( hB < 10 ){ hB = '0' + hB; }
  if( mB < 10 ){ mB = '0' + mB; }
  if( sB < 10 ){ sB = '0' + sB; }
  var timeB = calendarB + ' ' + hB + ':' + mB + ':' + sB;
  document.getElementById('horlogeB').innerHTML = timeB;
}

function initBase() {
  document.getElementById("infoBase").classList.remove("special");
  document.getElementById("infoBase").textContent="";
  document.getElementById("infoimgb").textContent="";
}

function base(nomBase) {
  if (nomBase == "rien") {
    initBase();
  }
  else {
    initBase();
    document.getElementById("infoBase").classList.add("special");
    if (nomBase == "Kourou") {
    var imgbase = document.createElement("img");
    imgbase.src = "Kourou.jpg";
    imgbase.width = 600 ;
    imgbase.height = 420 ;
    document.getElementById("infoBase").textContent="Le Centre spatial guyanais, en abrégé CSG, est une base de lancement française et européenne située en Guyane (Amérique du Sud) sur les territoires des communes de Kourou et de Sinnamary. Le CSG est la base de lancement de l'Agence spatiale européenne (ESA) et de l'Agence de l'Union européenne pour le programme spatial (EUSPA). Elle est gérée conjointement par le Centre national d'études spatiales (son propriétaire), Arianespace et l'ESA.Le CSG dispose en 2021 de trois complexes de lancement actifs utilisés pour le tir des fusées européennes lourdes Ariane 5 (depuis 1996) et légères Vega (depuis 2012) ainsi que pour certains tirs du lanceur russe Soyouz (depuis 2011). Un quatrième complexe de lancement a été construit pour le lanceur Ariane 6 qui doit remplacer la fusée Ariane 5 à compter de 2023. Le Centre spatial guyanais dispose également d'installations industrielles dans lesquelles est fabriqué le propergol solide des propulseurs d'appoint des fusées Ariane et le premier étage du lanceur Vega C ainsi que d'un banc d'essais pour tester ceux-ci.";
    var block = document.getElementById("infoimgb");
    block.appendChild(imgbase);

    }
    if (nomBase == "CapeCanaveral") {
      var imgbase = document.createElement("img");
      imgbase.src = "Cape.jpg";
      imgbase.width = 600 ;
      imgbase.height = 420 ;
      document.getElementById("infoBase").textContent="Le cap Canaveral, appelé cap Kennedy de 1963 à 1973, est un cap des États-Unis situé sur un cordon littoral de la côte est de la Floride, dans le comté de Brevard, et s'avançant dans l'océan Atlantique.Il fait partie d'une région connue sous le nom de « Space Coast » (« Côte de l'espace »), en raison de l'implantation de la base de lancement de Cap Canaveral, qui occupe les terrains attenant au cap, et du centre spatial Kennedy, qui se trouve sur Merritt Island dont le cordon littoral est séparé par la lagune de Banana River. Ces deux sites accueillent les infrastructures d'où sont lancées depuis le début de l'ère spatiale la majorité des lanceurs américains. Construits à l'initiative du programme spatial Kennedy au début de la « course à l'espace » livrée à l'URSS durant la guerre froide, ces deux sites ont ainsi servi de base de lancement (à ne pas confondre avec le centre de contrôle des missions qui se trouve à Houston, Texas) à tous les programmes spatiaux américains, de Mercury aux programmes contemporains.Le terme de « cap Canaveral » est devenu une métonymie qui désigne le site de lancement de véhicules spatiaux.";
      var block = document.getElementById("infoimgb");
      block.appendChild(imgbase);
    }
    if (nomBase == "Baïkonour") {
      var imgbase = document.createElement("img");
      imgbase.src = "b.jpg";
      imgbase.width = 600 ;
      imgbase.height = 420 ;
      document.getElementById("infoBase").textContent="Le cosmodrome de Baïkonour (en kazakh : Байқоңыр Космодромы ; en russe : Космодром Байконур), créé en 1956, est une base de lancement russe située au centre du Kazakhstan, à proximité de la ville de Baïkonour. Le site est situé dans une région de steppe au climat extrême mais dispose d'un embranchement sur la ligne de chemin de fer Moscou - Tachkent. C’était aussi un des points les plus au sud de l’URSS (or il convient de se rapprocher le plus possible de l’équateur pour économiser du carburant lors d’un lancement spatial).Le site a été choisi en 1955 pour implanter un centre de lancement destiné à la mise au point des missiles balistiques intercontinentaux R 7 Semiorka de l'Union soviétique. Lorsque l'activité spatiale soviétique s'est développée sous l'impulsion des équipes de Korolev qui avaient mis au point le missile, le centre de Baïkonour a été choisi pour placer en orbite les premiers satellites artificiels puis le premier homme dans l'espace.Depuis cette époque, Baïkonour est le centre de lancement le plus actif de la planète. Une quinzaine de tirs ont lieu tous les ans, en particulier les vols habités russes et les lancements à destination de l'orbite géostationnaire. Le site, qui s'étend sur 6 717 km2, dispose d'installations de fabrication de carburant, de plusieurs bâtiments d'assemblage de lanceurs et de préparation des satellites et des vaisseaux. Le cosmodrome abrite des pas de tir opérationnels pour les lanceurs Soyouz, Proton, la version terrestre de la Zenit, Dnepr et Tsyklon ainsi que de nombreux pas de tir désaffectés témoins de l'ensemble de l'histoire spatiale soviétique et russe.";
      var block = document.getElementById("infoimgb");
      block.appendChild(imgbase);
    }
  }
}