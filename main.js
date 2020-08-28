// Attraverso una chiamata AJAX all’API di Boolean avremo a disposizione una decina di dischi musicali.
// Servendoci di Handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.
// Bonus: Creare un select con i seguenti generi: pop, rock, metal e jazz. In base a cosa scegliamo nel select vedremo i corrispondenti cd.

$(document).ready(function () {
	// Chiamata AJAX per popolare il DOM con gli oggetti dell'API
	$.ajax({
		url: "https://flynn.boolean.careers/exercises/api/array/music",
		method: 'GET',
		success: function (obj) {
			populate(obj.response);
		},
		error: function () {
			alert('È avvenuto un errore.');
		}
	});
});

// *** FUNCTIONS *** //
// a. Creazione dinamica di tutto il contenuto del DOM (category ALL)
function populate(data) {
	var source = $('#entry-template').html();
	var template = Handlebars.compile(source);

	for (var i = 0; i < data.length; i++) {
		var html = template(data[i]);
		$('.cds-container').append(html);
	}
}

