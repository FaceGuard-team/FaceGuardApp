GMaps.prototype.createPanorama=function(e){return e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")||(e.lat=this.getCenter().lat(),e.lng=this.getCenter().lng()),this.panorama=GMaps.createPanorama(e),this.map.setStreetView(this.panorama),this.panorama},GMaps.createPanorama=function(e){var t=getElementById(e.el,e.context);e.position=new google.maps.LatLng(e.lat,e.lng),delete e.el,delete e.context,delete e.lat,delete e.lng;for(var a=["closeclick","links_changed","pano_changed","position_changed","pov_changed","resize","visible_changed"],n=extend_object({visible:!0},e),o=0;o<a.length;o++)delete n[a[o]];var r=new google.maps.StreetViewPanorama(t,n);for(o=0;o<a.length;o++)!function(t,a){e[a]&&google.maps.event.addListener(t,a,(function(){e[a].apply(this)}))}(r,a[o]);return r};