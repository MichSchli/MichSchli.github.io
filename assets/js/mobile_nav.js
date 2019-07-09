let burger = document.getElementById('burger'),
	 nav    = document.getElementById('main-nav');

var toggle_menu = function(e){
	burger.classList.toggle('is-open');
	nav.classList.toggle('is-open');
}

burger.addEventListener('click', toggle_menu);

var classname = document.getElementsByClassName("tabs__item");

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', toggle_menu, false);
}
