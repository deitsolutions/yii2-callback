var callbackApp = {
	init: function() {
		$('#callbackSubmit').on('click', this.callbackSubmit);
	},
	callbackSubmit: function( event ) {

		var data = $('#callback-form').serialize();
		$.ajax({
        	url: '/callback/callback/create-ajax',
        	type: "POST",
        	data: data,
        	success: function (result) {
	            if (result == 'true') {
	            	console.log('post callback');
					$('#modal-callback').modal('hide');
					window.location.assign('/thankyou');
	            } else {
	            	var res = $.parseJSON(result);
	            	$('#callback-errorSummary').empty();
	            	$.each(res, function(key, value) {
	            		$('#callback-errorSummary').append("<li>"+value+"</li>");
	            	});
	            }
        }
    });
	}
}

callbackApp.init();
