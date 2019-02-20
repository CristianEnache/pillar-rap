// Particles Animation
particlesJS.load('particles-js', '/particles.json', function() {
    console.log('callback - particles.js config loaded');
});


window.addEventListener('scroll', function(e){
   // console.log(e.pageY);



    var shape_translate_amount =  -Math.abs(e.pageY) * 0.3;
   $('.shape').css('transform', 'translate(0,' + shape_translate_amount + 'px)');

    var particles_translate_amount =  -Math.abs(e.pageY) * 0.1;
    $('#particles-js').css('transform', 'translate(0,' + particles_translate_amount + 'px)');




});