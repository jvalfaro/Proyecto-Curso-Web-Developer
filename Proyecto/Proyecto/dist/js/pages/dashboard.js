/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/
function formatNumber(number, fixed) {
    var number = parseFloat(number).toFixed(fixed) + '';
    var x = number.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

$(function () {

    var f = new Date();
    var month = new Array();
    month[0] = "Enero";
    month[1] = "Febrero";
    month[2] = "Marzo";
    month[3] = "Abril";
    month[4] = "Mayo";
    month[5] = "Junio";
    month[6] = "Julio";
    month[7] = "Agosto";
    month[8] = "Septiembre";
    month[9] = "Octubre";
    month[10] = "Noviembre";
    month[11] = "Diciembre";

    document.getElementById('lblfechact1').innerHTML = month[f.getMonth()] + ' ' + f.getFullYear();
    document.getElementById('lblfechact2').innerHTML = month[f.getMonth()] + ' ' + f.getFullYear();
    document.getElementById('lblfechact3').innerHTML = month[f.getMonth()] + ' ' + f.getFullYear();
    document.getElementById('lblfechact4').innerHTML = f.getDate() + ' ' + month[f.getMonth()] + ' ' + f.getFullYear();


    ///Consulta de datos Ajax 
    var vtotal = '';
    var vunidades = '';
    var vstock = '';
    var promediovdia = '';

    //VENTAS TOTALES
    $.ajax({
        type: 'GET',
        url: '/api/ventas/all/1',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {
            var datos_fin = new Array();

            $.each(data, function (key, item) {
                var venta = new Object();
                venta.IdTipoC = item.IdTipoC;
                document.getElementById('lblDash1').innerHTML = 'S/. ' + formatNumber(item.Porcentaje, 2);
                venta.FechaIni = item.FechaIni;
                venta.FechaFin = item.FechaFin;
            })
        },
        error: function () {
            console.log("error");
        }
    });

    //VENTAS UNIDADES
    $.ajax({
        type: 'GET',
        url: '/api/ventas/all/2',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {
            var datos_fin = new Array();

            $.each(data, function (key, item) {
                var venta = new Object();
                venta.IdTipoC = item.IdTipoC;
                document.getElementById('lblDash2').innerHTML = formatNumber(item.Porcentaje, 0);
                venta.FechaIni = item.FechaIni;
                venta.FechaFin = item.FechaFin;
            })
        },
        error: function () {
            console.log("error");
        }
    });


    //PROMEDIO DE VENTA DIARIA
    $.ajax({
        type: 'GET',
        url: '/api/ventas/all/3',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {
            var datos_fin = new Array();

            $.each(data, function (key, item) {
                var venta = new Object();
                venta.IdTipoC = item.IdTipoC;
                document.getElementById('lblDash3').innerHTML = 'S/. ' + formatNumber(item.Porcentaje, 2);
                venta.FechaIni = item.FechaIni;
                venta.FechaFin = item.FechaFin;
            })
        },
        error: function () {
            console.log("error");
        }
    });


    //PROMEDIO DE VENTA DIARIA
    $.ajax({
        type: 'GET',
        url: '/api/ventas/all/4',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {
            var datos_fin = new Array();

            $.each(data, function (key, item) {
                var venta = new Object();
                venta.IdTipoC = item.IdTipoC;
                document.getElementById('lblDash4').innerHTML = 'S/. ' + formatNumber(item.Porcentaje, 2);
                venta.FechaIni = item.FechaIni;
                venta.FechaFin = item.FechaFin;
            })
        },
        error: function () {
            console.log("error");
        }
    });



    //Make the dashboard widgets sortable Using jquery UI
    $(".connectedSortable").sortable({
        placeholder: "sort-highlight",
        connectWith: ".connectedSortable",
        handle: ".box-header, .nav-tabs",
        forcePlaceholderSize: true,
        zIndex: 999999
    });
    $(".connectedSortable .box-header, .connectedSortable .nav-tabs-custom").css("cursor", "move");

    //jQuery UI sortable for the todo list
    $(".todo-list").sortable({
        placeholder: "sort-highlight",
        handle: ".handle",
        forcePlaceholderSize: true,
        zIndex: 999999
    });

    //bootstrap WYSIHTML5 - text editor
    $(".textarea").wysihtml5();

    $('.daterange').daterangepicker({
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },
        startDate: moment().subtract(29, 'days'),
        endDate: moment()
    }, function (start, end) {
        window.alert("You chose: " + start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    });

    /* jQueryKnob */
    $(".knob").knob();

    //jvectormap data
    var visitorsData = {
        "US": 398, //USA
        "SA": 400, //Saudi Arabia
        "CA": 1000, //Canada
        "DE": 500, //Germany
        "FR": 760, //France
        "CN": 300, //China
        "AU": 700, //Australia
        "BR": 600, //Brazil
        "IN": 800, //India
        "GB": 320, //Great Britain
        "RU": 3000 //Russia
    };
    //World map by jvectormap
    $('#world-map').vectorMap({
        map: 'world_mill_en',
        backgroundColor: "transparent",
        regionStyle: {
            initial: {
                fill: '#e4e4e4',
                "fill-opacity": 1,
                stroke: 'none',
                "stroke-width": 0,
                "stroke-opacity": 1
            }
        },
        series: {
            regions: [{
                values: visitorsData,
                scale: ["#92c1dc", "#ebf4f9"],
                normalizeFunction: 'polynomial'
            }]
        },
        onRegionLabelShow: function (e, el, code) {
            if (typeof visitorsData[code] != "undefined")
                el.html(el.html() + ': ' + visitorsData[code] + ' new visitors');
        }
    });

    //Sparkline charts
    var myvalues = [1000, 1200, 920, 927, 931, 1027, 819, 930, 1021];
    $('#sparkline-1').sparkline(myvalues, {
        type: 'line',
        lineColor: '#92c1dc',
        fillColor: "#ebf4f9",
        height: '50',
        width: '80'
    });
    myvalues = [515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921];
    $('#sparkline-2').sparkline(myvalues, {
        type: 'line',
        lineColor: '#92c1dc',
        fillColor: "#ebf4f9",
        height: '50',
        width: '80'
    });
    myvalues = [15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21];
    $('#sparkline-3').sparkline(myvalues, {
        type: 'line',
        lineColor: '#92c1dc',
        fillColor: "#ebf4f9",
        height: '50',
        width: '80'
    });

    //The Calender
    $("#calendar").datepicker();

    //SLIMSCROLL FOR CHAT WIDGET
    $('#chat-box').slimScroll({
        height: '250px'
    });

    /* Morris.js Charts */
    // Sales chart
    var area = new Morris.Area({
        element: 'revenue-chart',
        resize: true,
        data: [
          { y: '2015 W44', item1: 4864.3 },
          { y: '2015 W45', item1: 117980.3 },
          { y: '2015 W46', item1: 148757.4 },
          { y: '2015 W47', item1: 95398 },
          { y: '2015 W48', item1: 131056.4 },
          { y: '2015 W49', item1: 173990.5 },
          { y: '2015 W50', item1: 152036.3 },
          { y: '2015 W51', item1: 132888.6 }
        ],
        xkey: 'y',
        ykeys: ['item1'],
        labels: ['Ventas (S/.)'],
        lineColors: ['#a0d0e0'],
        hideHover: 'auto'
    });
    var line = new Morris.Line({
        element: 'line-chart',
        resize: true,
        data: [
          { y: '2015 W44', item1: 24 },
          { y: '2015 W45', item1: 252 },
          { y: '2015 W46', item1: 297 },
          { y: '2015 W47', item1: 210 },
          { y: '2015 W48', item1: 265 },
          { y: '2015 W49', item1: 470 },
          { y: '2015 W50', item1: 496 },
          { y: '2015 W51', item1: 364 }
        ],
        xkey: 'y',
        ykeys: ['item1'],
        labels: ['Unidades'],
        lineColors: ['#efefef'],
        lineWidth: 2,
        hideHover: 'auto',
        gridTextColor: "#fff",
        gridStrokeWidth: 0.4,
        pointSize: 4,
        pointStrokeColors: ["#efefef"],
        gridLineColor: "#efefef",
        gridTextFamily: "Open Sans",
        gridTextSize: 10
    });

    //Donut Chart
    var donut = new Morris.Donut({
        element: 'sales-chart',
        resize: true,
        colors: ["#3c8dbc", "#f56954", "#00a65a"],
        data: [
          { label: "Download Sales", value: 12 },
          { label: "In-Store Sales", value: 30 },
          { label: "Mail-Order Sales", value: 20 }
        ],
        hideHover: 'auto'
    });

    //Fix for charts under tabs
    $('.box ul.nav a').on('shown.bs.tab', function () {
        area.redraw();
        donut.redraw();
        line.redraw();
    });

    /* The todo list plugin */
    $(".todo-list").todolist({
        onCheck: function (ele) {
            window.console.log("The element has been checked");
            return ele;
        },
        onUncheck: function (ele) {
            window.console.log("The element has been unchecked");
            return ele;
        }
    });

});
