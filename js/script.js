$(document).ready(function() {
	$('.user-input').submit(function(event) {
		event.preventDefault();
		var something = $('.input-box').val();
		if (something === "") {
			alert('Please enter an item!')
		}
		else {
			$('.cart-div ul')
			.append(
				"<li class='cart-list-item'> <input type='checkbox' class='cart-list-box'> " 
				+ " " + something + " " 
				+ " <img src='img/delete.png' alt='' class='delete-button'></li>"
				);
		}
		$('.user-input')[0].reset();
	});
	assignlisteners();
	function assignlisteners() {
		$('ul').on('click', '.cart-list-box', function(event) {
			$(this).closest('li').toggleClass('strikethrough');
		});
		$('ul').on('click', '.delete-button', function(event){
			console.log('trash clicked');
			$(this).closest('li').remove();
		});			
	};
});

//Web Storage API Work
//Do I merely need to store var something then apply html on load
//Or do I need to store the entire ul cart-list
//Or do I need to store the entire li cart-list
//Or do I need to store individual li