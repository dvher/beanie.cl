
$.ajax({
    url: "/api/productos",
    type: "GET",
}).done(function (data) {
    console.log(data)
});

