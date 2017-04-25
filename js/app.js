$('form').submit(function(event) {
	event.preventDefault();
	console.log($(this).serialize());
	$.ajax({
		type: 'POST',
		url: 'api/index.php/tareas',
		data: $(this).serialize(),
		success: function(data) {
			console.log(data);
			 var row = '<tr>'
				 row += '<td>'+data[0].id;
				 row += '<td>'+data[0].descripcion;
				 row += '<td>'+data[0].estado;
				 $('table tbody').append(row);
			
			$('form').trigger('reset');
		},
		error: function() {
			console.log('error ajax');
		}
	});

});

$('table').ready(function () {
	$.ajax({
		type: 'GET',
		url: 'api/index.php/tareas',
		success:function (data) {
			for (var i = 0; i <data.length; i++) {
				//debugger;//para q pare la ejecucion
				var row = '<tr>'
				row += '<td>'+data[i].id;
				row += '<td>'+data[i].descripcion;
				row += '<td>'+data[i].estado;
				$('table tbody').append(row);
			}
		},
		error:function() {
			console.log('Error al cargar datos');

		} 

	});
});