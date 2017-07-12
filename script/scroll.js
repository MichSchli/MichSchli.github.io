$("#about").waypoint(function(direction) {
   toggleNavbarItem('about');
},{
    offset: '20%'
});


$("#publications").waypoint(function(direction) {
   toggleNavbarItem('publications');
   toggleNavbarItem('about');
},{
    offset: '20%'
});


$("#contact").waypoint(function() {
   toggleNavbarItem('contact');
   toggleNavbarItem('publications');
},{
    offset: '20%'
});

$("#hero-navbar").waypoint(function(direction) {
	if (direction == 'down'){
		$("#header").show();
	} else {
		$("#header").hide();
	}	
},{
});

function toggleNavbarItem(name) {
   var navbarItemId = "#header-"+name+"-scroller"
   $(navbarItemId).toggleClass("michael-header-navigation-item-selected");
}
