// JavaScript Document
jQuery(document).ready(function () {
jQuery('#edit-field-plot-creature-und').hide();
jQuery('#edit-field-plot-group-und').focusout(function() {
		var tid = jQuery('#edit-field-plot-group-und').val();
		if(tid != '') {
			
			var URL = window.location.hostname + '/eco/json/creatures/' + tid;
			alert(URL);
				$.getJSON(URL, function(data) {
					alert(data.data);			
			});
			jQuery('#edit-field-plot-creature-und').show();
		}
});

});