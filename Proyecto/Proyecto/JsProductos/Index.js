
function () {
    var oTable = $("#example1").DataTable(
                    {
                        "dom": "Bfrtip",
                        "processing": true,
                        "serverSide": false, "ajax":
                            {
                                type: 'POST',
                                url: "@Url.Action("CargarProductos", "Productos")",
                        dataType: "json",
                    },
                        "autoWidth": true,
    "deferred": true,
    "scrollX": false,
    "scrollCollapse": true,
    "select": true,
    "columns": [
        { "data": "Id" },
        { "data": "Title" },
        { "data": "Description" },
        { "data": "Marca" },
        {
            "data": null,
            "defaultContent": "<button class= btn btn-default pull-left>Detalle</button>"
        }
    ],
    "buttons": [
        {
            text: 'Nuevo',
            action: function (e, dt, node, config) {
   
                $("#myModal").modal('show');

            }
        }
    ]


}
                       
("#example1 tbody").on("click", "button", function () {
    var data = oTable.row($(this).parents("tr")).data();
    var url = '@Url.Action("Details", "Reviews", new { id = "_id_" })'
    .replace('_id_',  data.Id);

    window.location.href = url;
    //'@Url.Action("Details", "Reviews")?id=' + data.Id;


});

});

function () {
    $("#myModal").modal('hide');
};