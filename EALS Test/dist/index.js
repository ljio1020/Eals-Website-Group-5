window.addEventListener('scroll', function() {
 
    var elements = document.querySelectorAll('.fade');


    elements.forEach(function(element) {
        var position = element.getBoundingClientRect();


        if (position.top >= 0 && position.bottom <= window.innerHeight) {
            element.style.opacity = 1;
        } else {
            element.style.opacity = 0;
        }
    });
});
