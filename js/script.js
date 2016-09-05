$(document).ready(function(){
	Cufon.replace('h1', {
		fontSize: '60px', 
		fontWeight: 'bold', 
		color: '#333'
	});
	Cufon.replace('h2', {
		fontSize: '40px', 
		fontWeight: 'bold',
		fontStyle: 'italic',
		color: '#173D5F'
	});
	Cufon.replace('h3, .modal-title', {
		fontSize: '35px', 
		fontWeight: 'bold',
		color: '#333'
	});
	Cufon.replace('h4', {
		fontSize: '28px', 
		fontWeight: 'bold',
		fontStyle: 'italic',
		color: '#173D5F'
	});
	Cufon.replace('h5', {
		fontSize: '18px', 
		fontWeight: 'normal',
		color: 'white'
	});
	Cufon.replace('.about p, .form-group label', {
		fontSize: '22px', 
		fontWeight: 'normal',
		color: '#333'
	});
	Cufon.replace('.contact>ul>li>div>p, .contact>ul>li>div>a', {
		fontSize: '22px'
	});
	Cufon.replace('.description, #cufon_lis', {
		fontSize: '20px',
		letterSpacing: '1px'
	});
	Cufon.replace('.form-group button, .modal-footer button', {
		fontSize: '18px',
		letterSpacing: '1px', 
		fontWeight: 'normal',
		color: 'white'
	});

	$('.print').click(function() {
     	window.print();
	});

	$('#exampleModal').on('show.bs.modal', function(event){});
	$('#fotoModal').on('show.bs.modal', function(event){});

	// Form validation
	
	var form = $('#main_form');
	
	form.on("submit", function(e){
		e.preventDefault();
		
		var name = form.find("#name").val();
		var nameLen = form.find("#name").val().length;
		var email = form.find("#email").val();
		var number = form.find("#phone_number").val();
		var message = form.find("#message").val();
		var messageLen = form.find("#message").val().length;
		var numberLen = number.length;
		var errors = $("p.errors");
		
		$(".delegation").on("input", "input", function(e) {
		$(this).removeClass("border_red");
		errors.html("");
		});
		
		if (name === ""){
			errors.html("Please enter Your name!");
			$("#name").addClass("border_red");
			return;
		}
		
		if (nameLen < 2) {
		errors.html("Your name is too short!");
		$("#name").addClass("border_red");
		return;
		}
		
		if (email === ""){
			errors.html("You have not entered email!");
			$("#email").addClass("border_red");
			return;
		}
		var emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var validEmail = emailRegexp.test(email);
		if (!validEmail) {
			errors.html("Invalid email!");
			$("#email").addClass("border_red");
			return;
		}
		
		if (number === ""){
			errors.html("You have not entered phone number!");
			$("#phone_number").addClass("border_red");
			return;
		}
		
		if (isNaN(parseInt(number))){
			errors.html("Number must consist only digits!");
			$("#phone_number").addClass("border_red");
			return;
		}
		
		if (numberLen < 6) {
		errors.html("Entered phone number is too short!");
		$("#phone_number").addClass("border_red");
		return;
		}

		if (message === ""){
			errors.html("Please enter Your message!");
			$("#message").addClass("border_red");
			return;
		}
		
		if (messageLen < 2) {
		errors.html("Your message is too short!");
		$("#message").addClass("border_red");
		return;
		}
		this.submit();
	});
});