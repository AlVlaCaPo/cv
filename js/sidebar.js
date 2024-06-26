$(function () {
    // Instancia de la barra lateral
    const sidebar = $("#sidebar");

    // Se agrega el callback para remover las clases una vez que termine la animación.
    $("#about_me").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animate__animated animate__fadeInDown');
    });

    // Mostrar el menú al hacer clic
    $("#toggle-btn").on('click', function (){
        sidebar.toggleClass("expand");
    });

    // Evento para mostrar las secciones al hacer clic en los enlaces
    $(".link__mostrar").on('click', function(){

        // Mostrar la sección correspondiente al enlace clickeado
        const navigation = $(this).attr("href");
        // CONTROL PARA ABOUT ME
        let animacion = "animate__fadeIn";
        if(navigation === "#about_me"){
            animacion = "animate__fadeInDown";
        }

        // Asegúrate de que las clases de animación no estén activas antes de agregarlas
        $(navigation).removeClass(`animate__animated ${animacion}`);
        // Agrega las clases de animación
        $(navigation).addClass(`animate__animated ${animacion}`);
        // Una vez que la animación haya terminado, eliminar las clases.
        $(navigation).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function() {
            $(navigation).removeClass(`animate__animated ${animacion}`);
        });
        // Si la barra lateral está expandida, colapsarla
        if(sidebar.hasClass("expand")) {
            sidebar.removeClass("expand");
        }
    });
});
