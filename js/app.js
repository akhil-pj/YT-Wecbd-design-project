$(document).ready (function(){
    // hero-slider
    $('#hero-slider').owlCarousel({
        loop:true,
    
        nav:true,
        items:1,
        smartSpeed:1000,
        dots:false,
        navText:['prev','next'],
        responsive:{
            0:{
              nav:false, 
            },
           768:{
            nav:true,
           }
        }
    })

});

$('#projec-slider').owlCarousel({
    loop:true,  
    nav:true,
    items:1,
    smartSpeed:1000,
    dots:false,
    navText:['prev','next'],
    margin:24,
    responsive:{
        0:{
          items:1,
          nav:false,
          margin:0,
        },
       768:{
        items:2,
       },
       1140:{
        items:2,
        center:true,

       }
    }
})
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    items:1,
    
        
})

