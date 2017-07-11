$(document).ready(function(){
	$('#btn-agregar').click(function(){
		var tareas = $('input').val();
		$('.tareas-nuevas').append('<div class=".tareas-nuevas">' + tareas + '</div>'); 
	});
});

$(document).on('click', '.tareas-nuevas', function() {
    $(this).remove()
});
