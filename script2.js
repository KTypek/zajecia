require(["esri/WebMap", "esri/Map", "esri/views/MapView" //"esri/widgets/BasemapGallery"
], 
    function(WebMap, Map, MapView, //basemapGallery
        ){
    let topo = document.getElementById("topo");
    let sat = document.getElementById("sat");
    let OSM = document.getElementById("OSM");
    let agol = document.getElementById("agol")
    //let base = document.getElementById("basemap")

    let webmap = new WebMap({portalItem: {id: "131eb8b1a13640ddbb38049cd88941c1"}});
    let map1 = new Map({basemap:'topo'}); 
    let map2 = new Map({basemap:'satellite'});
    let map3 = new Map({basemap:'osm'});
    let bmap = new Map({basemap:'topo-vector'});

    //   var basemapGallery = new BasemapGallery({
    //     view: view,
    //     source: {
    //       portal: {
    //         url: "http://www.arcgis.com",
    //         useVectorBasemaps: true, // Load vector tile basemap group
    //       },
    //     } 
    //   });

   //   view.ui.add(basemapGallery, "top-right"); // Add to the view
      
    });


    let mapContainer = new MapView({
        container: "mapa", 
        map: map1, 
        zoom: 12,
        center: [23.4161600,50.4476700]
    });

    topo.addEventListener("click",function(){
        mapContainer.map = map1;
    });

    sat.addEventListener("click",function(){
        mapContainer.map = map2;
    });

    OSM.addEventListener("click",function(){
        mapContainer.map = map3;
    });

    agol.addEventListener("click", function(){
        mapContainer.map = webmap;
    });


})