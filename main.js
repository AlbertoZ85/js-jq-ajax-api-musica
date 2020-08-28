$(document).ready(function () {
	$.ajax({
		'url': "https://flynn.boolean.careers/exercises/api/array/music",
		'method': 'GET',
		'success': function (response) {

		},
		'error': function () {
			alert('È stato rilevato un errore.')
		}
	});
});

