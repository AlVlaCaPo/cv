$(document).ready(function () {
    // Instancia de la barra lateral
    const sidebar = $("#sidebar");

    // Mostrar el menú al hacer clic
    $("#toggle-btn").on('click', function (){
        sidebar.toggleClass("expand");
    });

    // Ocultar todas las secciones excepto 'Acerca de mí'
    $(".articles__cv").hide();
    $("#about_me").show();

    // Evento para mostrar las secciones al hacer clic en los enlaces
    $(".link__mostrar").on('click', function(){

        // Ocultar todas las secciones
        $(".articles__cv").hide();

        // Mostrar la sección correspondiente al enlace clickeado
        const navigation = $(this).attr("href");
        $(navigation).show();

        // Si la barra lateral está expandida, colapsarla
        if(sidebar.hasClass("expand")) {
            sidebar.removeClass("expand");
        }
    });
});
