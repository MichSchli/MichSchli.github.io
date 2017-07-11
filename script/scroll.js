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


function toggleNavbarItem(name) {
   var navbarItemId = "#"+name+"-header-item"
   $(navbarItemId).toggleClass("michael-header-navigation-item-selected");
}
