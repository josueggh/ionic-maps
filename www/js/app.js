// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])
angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {
 
  $stateProvider
  .state('map', {
    url: '/',
    templateUrl: 'templates/map.html',
    controller: 'MapCtrl'
  });
 
  $urlRouterProvider.otherwise("/");
 
})


.controller('MapCtrl', function($scope, $state, $cordovaGeolocation) {
  var options = {timeout: 10000, enableHighAccuracy: true};
  var data = {"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-98.86839729999997,19.682163,0]},"properties":{"name":"100 BC - 250 AD : Teotihuacán","description":"Pyramid of the Sun"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.08174079999998,19.3474546,0]},"properties":{"name":"100 - 650 AD : Cerro de La Estrella"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.179215,19.455559,0]},"properties":{"name":"1520 : Plaza de el Arbol de la Noche Triste"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.0205431,19.398806,0]},"properties":{"name":"1530 : Exconvento de Churubusco"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.13012200000003,19.436111,0]},"properties":{"name":"1576-1603 : Museo de la Luz"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.143933,19.435694,0]},"properties":{"name":"1592 : Central Alameda"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.31039800000002,19.313006,0]},"properties":{"name":"1606 : Ex Convento Desierto de los Leones"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.14016300000004,19.434329,0]},"properties":{"name":"XVI : Casa de los Azulejos"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.13903979999998,19.4337305,0]},"properties":{"name":"1779 - 1785 : Palacio de Cultura Banamex - Palacio de Iturbide"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.1568585,19.4496434,0]},"properties":{"name":"IX : Kiosco Morisco de Santa María La Ribera"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.14023700000001,19.435559,0]},"properties":{"name":"1907: Palacio de Correos"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.19743,19.349619,0]},"properties":{"name":"1929: Museo Casa Estudio Diego Rivera y Frida Kahlo"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.14182299999999,19.436407,0]},"properties":{"name":"1934 : Palacio de Bellas Artes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.16776400000003,19.413674,0]},"properties":{"name":"1945 : Edificio Basurto"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.19240400000001,19.411091,0]},"properties":{"name":"1947 : Casa Luis Barragán","description":"House and studio of Luis Barragan, only Mexican architect who has won the Pritzker Prize"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.186577,19.322831,0]},"properties":{"name":"1950s : Ciudad Universitaria (UNAM)","description":"One of th<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<kml xmlns=\"http://www.opengis.net/kml/2.2\">\n  <Placemark>\n    <name>Simple placemark</name>\n    <description>Attached to the ground. Intelligently places itself\n       at the height of the underlying terrain.</description>\n    <Point>\n      <coordinates>-122.0822035425683,37.42228990140251,0</coordinates>\n    </Point>\n  </Placemark>\n</kml>e most prestigious universities in Latin America, variety of architecture has designated the campus a UNESCO site"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.19823900000002,19.411777,0]},"properties":{"name":"1951 : Carcamo de Dolores"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.161226,19.433433000000004,0]},"properties":{"name":"1953 : Museo Experimental El Eco"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.164376,19.288234,0]},"properties":{"name":"1960 : Tlalpan Chapel - Luis Barragan"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.179869,19.422591,0]},"properties":{"name":"1964 : Museo de Arte Moderno"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.13759199999998,19.451689,0]},"properties":{"name":"1966 : Plaza de las tres culturas"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.18342869999998,19.3155876,0]},"properties":{"name":"1976 - 1980 : Espacio Escultórico"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.181716,19.42572,0]},"properties":{"name":"1981 : Museo Tamayo Arte Contemporáneo"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.13937599999997,19.355942,0]},"properties":{"name":"1994 : Centro Nacional de las Artes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.18538000000001,19.314391,0]},"properties":{"name":"2008 : MUAC"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.2047,19.440693,0]},"properties":{"name":"2011: Soumaya Museum"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.16252500000002,19.355143,0]},"properties":{"name":"Frida Kahlo Museum, The Blue House"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.274382,19.359884,0]},"properties":{"name":"Chedraui Santa Fe Selecto"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.19193899999999,19.43044,0]},"properties":{"name":"Tori Tori Temistocles"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.13813500000003,19.429621,0]},"properties":{"name":"Biblioteca MIGUEL LERDO DE TEJADA"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.189456,19.419482,0]},"properties":{"name":"Bosque de Chapultepec"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.182342,19.300911,0]},"properties":{"name":"Cuicuilco Ecological Park"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-98.75079210000001,18.9525587,0]},"properties":{"name":"Cerrada de Ehécatl"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.150891,19.447353,0]},"properties":{"name":"Biblioteca Vasconcelos"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.13188100000002,19.434604,0]},"properties":{"name":"Museo del Templo Mayor"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.15895849999998,19.376571600000002,0]},"properties":{"name":"Tenayuca"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.13431779999998,19.4233897,0]},"properties":{"name":"Plaza Tlaxcoaque"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.131193,19.4324451,0]},"properties":{"name":"National Palace"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.17115039999999,19.4153363,0]},"properties":{"name":"España Park"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.16910569999999,19.411927,0]},"properties":{"name":"Parque México"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.1663115,19.4200098,0]},"properties":{"name":"Fuente de la Cibeles"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.09305280000001,18.9848015,0]},"properties":{"name":"Tepoztlán"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.50986899999998,18.669665,0]},"properties":{"name":"Parque Nacional Grutas de Cacahuamilpa"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-100.13267250000001,19.1950964,0]},"properties":{"name":"Valle de Bravo","description":"http://www.xcmag.com/2014/02/guide-to-valle-de-bravo-mexico/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.65566530000001,19.2826098,0]},"properties":{"name":"Toluca"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-98.61606699999999,19.128509,0]},"properties":{"name":"Iztaccíhuatl - Popocatépetl National Park"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.758331,19.108334,0]},"properties":{"name":"Nevado de Toluca National Park"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.0363888,18.9788888,0]},"properties":{"name":"Amatlán de Quetzalcóatl"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.2555481,19.2948637,0]},"properties":{"name":"Los Dinamos"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.11326639999999,18.7287959,0]},"properties":{"name":"Las Estacas"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.16916100000003,19.41618,0]},"properties":{"name":"La Clandestina","description":"Great selection of mezcales"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.13743299999999,19.4329,0]},"properties":{"name":"La Bipo Pasagüero","description":"Casual drinking place, great for a day drink"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.16573940000002,19.4159263,0]},"properties":{"name":"La Mil Amores"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.1451108,19.43323579999999,0]},"properties":{"name":"Bósforo"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.16827899999998,19.413808000000003,0]},"properties":{"name":"Tres Condesas"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.1334405,19.4274237,0]},"properties":{"name":"Calle de Regina"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.1643636,19.4194989,0]},"properties":{"name":"Mano Santa Mezcal"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.1640127,19.4192826,0]},"properties":{"name":"Pulqueria los Insurgentes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.16044399999998,19.40897,0]},"properties":{"name":"Cine Tonalá"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.163388,19.360097,0]},"properties":{"name":"Cineteca Nacional"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.271751,19.359313,0]},"properties":{"name":"Autocinema Coyote"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.13775599999997,19.43076,0]},"properties":{"name":"La Casa del Cine"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.19854399999997,19.33529,0]},"properties":{"name":"The Movie Company"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.177458,19.407499,0]},"properties":{"name":"CENTRO CULTURAL BELLA ÉPOCA"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.1418703,19.4275609,0]},"properties":{"name":"Cinemas Teresa"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.13719179999998,19.4499614,0]},"properties":{"name":"Sociedad de Cine Tlatelolco"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.17511730000001,19.4225736,0]},"properties":{"name":"Cine Más Allá (CCD)"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.15672599999999,19.441942,0]},"properties":{"name":"Cinematógrafo del Chopo"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.13719179999998,19.4499614,0]},"properties":{"name":"Centro Cultural Tlatelolco"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.19260099999997,19.339392,0]},"properties":{"name":"Cinemanía Loreto"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.175927,19.319345,0]},"properties":{"name":"Filmoteca Nacional UNAM"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.13613199999998,19.432871000000002,0]},"properties":{"name":"Azul Histórico","description":"http://www.azul.rest/index.html"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.163656,19.348755,0]},"properties":{"name":"Los Danzantes"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.158973,19.414772,0]},"properties":{"name":"La Chicha"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.16078049999999,19.4253146,0]},"properties":{"name":"Panadería Rosetta","description":"Amazing bakery, great for anytime of the day"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.16614470000002,19.411467500000004,0]},"properties":{"name":"Por Siempre Vegana Taquería","description":"https://www.facebook.com/porsiempreveganataqueria"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.17148829999996,19.4128632,0]},"properties":{"name":"AzulCONDESA"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.14625089999998,19.4363137,0]},"properties":{"name":"Barrio Alameda"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.18452130000003,19.4068567,0]},"properties":{"name":"Chilakiller's"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.16192590000003,19.4337783,0]},"properties":{"name":"Muebles Sullivan","description":"Great coffee, building designed by Luis Barragan"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.1557755,19.4298832,0]},"properties":{"name":"Comedor Lucerna"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.13605009999998,19.4362453,0]},"properties":{"name":"Donceles"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.15973819999999,19.4232467,0]},"properties":{"name":"Libreria Casa Bosques","description":"http://casabosques.net/en/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.16113339999998,19.4251488,0]},"properties":{"name":"Aeromoto"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.1700596,19.4294741,0]},"properties":{"name":"EXIT La Librería","description":"http://www.exitlalibreria.com/"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.1345887,19.4333277,0]},"properties":{"name":"MUMEDI Museo Mexicano del Diseño"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.1645284,19.4141052,0]},"properties":{"name":"Mercado Roma"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.14784800000002,19.430065,0]},"properties":{"name":"La Ciudadela","description":"Incredible hand-made crafts"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.1358131,19.4362883,0]},"properties":{"name":"Camera Stores"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.12382500000001,19.426896,0]},"properties":{"name":"Mercado de La Merced","description":"Quintessential market of the city, utilized since the time of the Aztecs, you can find everything from prostitution to papayas"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.13629800000001,19.443114,0]},"properties":{"name":"La Lagunilla Market","description":"Public drinking and antiques"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.12350900000001,19.406941000000003,0]},"properties":{"name":"Mercado de Jamaica","description":"Flower market"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.12519399999996,19.42217,0]},"properties":{"name":"Mercado Sonora","description":"Mysticism, exotic animals and more"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.13298900000002,19.435283,0]},"properties":{"name":"Centro Cultura de España"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.18627900000001,19.426003,0]},"properties":{"name":"The National Museum of Anthropology"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.13941599999998,19.436372,0]},"properties":{"name":"Museo Nacional De Arte"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.16252500000002,19.355143,0]},"properties":{"name":"Frida Kahlo Museum"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.181716,19.42572,0]},"properties":{"name":"Tamayo Museum"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.18538000000001,19.314391,0]},"properties":{"name":"MUAC"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.14410099999999,19.322598,0]},"properties":{"name":"Museo Anahuacalli"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.136079,19.427911,0]},"properties":{"name":"Casa Vecina"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.13426300000003,19.438951,0]},"properties":{"name":"Centro Cultural del México Contemporáneo"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.179869,19.422591,0]},"properties":{"name":"Museo de Arte Moderno"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.148819,19.429252000000005,0]},"properties":{"name":"Centro de la Imagen"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.15672599999999,19.441942,0]},"properties":{"name":"Museo Universitario del Chopo"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.12534099999999,19.265603,0]},"properties":{"name":"Museo Dolores Olmedo"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.14612299999999,19.436426,0]},"properties":{"name":"Laboratorio Arte Alameda"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.156364,19.416632,0]},"properties":{"name":"Centro Cultural Border"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.186487,19.42267,0]},"properties":{"name":"Casa del Lago"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.17512310000002,19.4225766,0]},"properties":{"name":"Centro de Cultura Digital","description":"www.centroculturadigital.mx"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.146322,19.43377899999999,0]},"properties":{"name":"Museo de Arte Popular"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.20386630000002,19.4404115,0]},"properties":{"name":"Museo Jumex"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.20470009999997,19.4406926,0]},"properties":{"name":"Soumaya Museum"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.14056,19.43393,0]},"properties":{"name":"Mirador Torre Latino"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.133082,19.434394,0]},"properties":{"name":"Mexico City Metropolitan Cathedral"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.167665,19.427024,0]},"properties":{"name":"The Angel of Independence"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.15463,19.436209,0]},"properties":{"name":"Monument to the Revolution"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.16649540000003,19.4117355,0]},"properties":{"name":"LIGA Espacio para arquitectura","description":"www.liga-df.com"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.1719357,19.4162078,0]},"properties":{"name":"Hotel Condesa df"}}]};


  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
  var image = {
      url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      size: new google.maps.Size(20, 32),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 32)
    };

    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
    
    // Marker section
      google.maps.event.addListenerOnce($scope.map, 'idle', function() {
      var marker = new google.maps.Marker({
        map: $scope.map,
        animation : google.maps.Animation.DROP,
        position: latLng
      });
      var infoWindow = new google.maps.InfoWindow({
        content: "You are here!"
      });

      var globalmap = $scope.map;

      angular.forEach( data.features, function(e){
        var latLngTmp = new google.maps.LatLng( e.geometry.coordinates[1], e.geometry.coordinates[0]);
        console.log(latLngTmp , latLng);
        var marker = new google.maps.Marker({
          map: globalmap,
          position: latLngTmp,
          title : e.properties.name,
          icon: image,
        });
      });

      
      google.maps.event.addListener(marker, 'click', function () {
        infoWindow.open($scope.map, marker);
      });

      
     
    });
    // End Marker section
  }, function(error){
    console.log("Could not get location");
  });
});


// // sidemenu
// app.controller('MainCtrl', function($scope, $ionicSideMenuDelegate){
//   $scope.toggleLeft = function(){
//     $ionicSideMenuDelegate.toggleLeft()
//   }
// })