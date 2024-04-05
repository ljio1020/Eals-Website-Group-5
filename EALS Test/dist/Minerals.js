function showDrop(){
	showSide();
  var getDropdown = document.getElementById("dropdown");
  //Will work to get to co-ordinate w/out interference from rest of JS bellow in this function
 if(getDropdown.style.display != "block")
   getDropdown.style.display = "block"
	var getDropdownConts = document.getElementById("dropdown-conts");
	if(getDropdownConts.style.display != "block") getDropdownConts.style.display = "block";
	else getDropdownConts.style.display = "none";
}

function showSide(){
	var statSide = document.getElementById("sidenav");
	statSide.classList.toggle("sidenavClick");
	statSide = document.getElementById("logo");
	statSide.classList.toggle("sidemenuClick");
	statSide = document.getElementById("side-conts");
	statSide.classList.toggle("sidemenuClick");
}

window.addEventListener('scroll', function() {
 
    var elements = document.querySelectorAll('.CTable, .Headers, .A1, .A2, .A3, .A4, .A5, .A6, .A7, .A8, .A9, .A10');


    elements.forEach(function(element) {
        var position = element.getBoundingClientRect();


        if (position.top >= 0 && position.bottom <= window.innerHeight) {
            element.style.opacity = 1;
        } else {
            element.style.opacity = 0;
        }
    });
});



