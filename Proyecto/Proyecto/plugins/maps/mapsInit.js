
function MapsInit() {
    "use strict";

    var map1, path;

    map1 = new GMaps({
        el: '#gmaps-basic',
        lat: -12.043333,
        lng: -77.028333,
        zoomControl: true,
        zoomControlOpt: {
            style: 'SMALL',
            position: 'TOP_LEFT'
        },
        center: { lat: -12.043333, lng: -77.03 },
        panControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        overviewMapControl: false
    });

    GMaps.geolocate({
        success: function (position) {
            map1.setCenter(position.coords.latitude, position.coords.longitude);
        },
        error: function (error) {
            alert('Geolocation failed: ' + error.message);
        },
        not_supported: function () {
            alert("Your browser does not support geolocation");
        },
        always: function () {
            //alert("Done!");
        }
    });

    map1.setZoom(15);
}


function MapUpdate(events) {
    "use strict";

    var map1;

    if (events.length > 0) {
        map1 = new GMaps({
            el: '#gmaps-basic',
            lat: events[0].CoordenadaX,
            lng: events[0].CoordenadaY,
            zoomControl: true,
            zoomControlOpt: {
                style: 'SMALL',
                position: 'TOP_LEFT'
            },
            center: { lat: events[0].CoordenadaX, lng: events[0].CoordenadaY },
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false
        });

        var point, i;
        var path = new Array();
        var coor = new Array();
        var bounds = new google.maps.LatLngBounds();

        for (i = 0; i < events.length; i++) {
            map1.addMarker({
                lat: events[i].CoordenadaX,
                lng: events[i].CoordenadaY,
                title: 'Lima',
                details: {
                    database_id: 42,
                    author: 'HPNeo'
                },
                click: function (e) {
                    if (console.log)
                        console.log(e);
                    alert('You clicked in this marker');
                },
                mouseover: function (e) {
                    if (console.log)
                        console.log(e);
                }
            });

            coor = new Array();
            coor.push(events[i].CoordenadaX);
            coor.push(events[i].CoordenadaY);

            point = new google.maps.LatLng(events[i].CoordenadaX, events[i].CoordenadaY);

            path.push(coor);
            bounds.extend(point);
        }

        map1.drawPolyline({
            path: path,
            strokeColor: '#131540',
            strokeOpacity: 0.6,
            strokeWeight: 6
        });

        map1.fitBounds(bounds);

        map1.setCenter(bounds.getCenter().lat(), bounds.getCenter().lng());
    } else {

        var map1;

        map1 = new GMaps({
            el: '#gmaps-basic',
            lat: -12.043333,
            lng: -77.028333,
            zoomControl: true,
            zoomControlOpt: {
                style: 'SMALL',
                position: 'TOP_LEFT'
            },
            center: { lat: -12.043333, lng: -77.03 },
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false
        });


        GMaps.geolocate({
            success: function (position) {
                map1.setCenter(position.coords.latitude, position.coords.longitude);
            },
            error: function (error) {
                alert('Geolocation failed: ' + error.message);
            },
            not_supported: function () {
                alert("Your browser does not support geolocation");
            },
            always: function () {
                //alert("Done!");
            }
        });

        map1.setZoom(15);
    }


    
}