// Hay una lista infinita de eventos!!! https://www.w3schools.com/jsref/dom_obj_event.asp
document.addEventListener('keypress', function(tecla) {
if (tecla.key == "q"){

    //do magic xd

    $('#slider-chido-carrusel').slick({
        infinite:true,
        slidesToShow: 3,
        slidesToscroll: 2,
    });
}
});


//keycode (keycode.info)   para poder sacar los numeritos y poner 
//mausenter y mause live , es la misma estructura, el listener no va sobre el document va sobre el botón, 
// puntero encima a tal tobon que yo quiero. 

document.addEventListener('ondblclick', function(tecla) {
    if (tecla.key == "q"){
    
        //do magic xd
    
        $('#slider-chido-carrusel').slick({
            infinite:true,
            slidesToShow: 3,
            slidesToscroll: 2,
        });
    }
    });