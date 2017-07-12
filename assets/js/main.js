$(document).ready(function(){
	//mirando que sucede
	$('#btn-agregar').click(function(){
		var tareas = $('input').val();
		if (tareas =="") {
			alert('Ingrese una tarea');
		} else{
			$('#misTareas').append('<li><input type="checkbox" id="test6" checked="checked"/><label for="test6">' + tareas +
      					'</label><button class="rmvBtn btn-floating">x</button></li>');
	    	tareas;
		}
		//$('.tareas-nuevas').append('<div class=".tareas-nuevas">' + tareas + '</div>'); 
		$('.check').on('click', marcar);
		$('.rmvBtn').on('click', borrar);
	});
});

function borrar(){
    $(this).closest('li').remove();
}

function marcar(){
	if(this.check){
		$(this).closest('li').addClass('done');
	} else{
		$(this).closest('li').removeClass('done');
	}
}


