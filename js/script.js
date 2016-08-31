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
	Cufon.replace('.about p', {
		fontSize: '22px', 
		fontWeight: 'normal',
		color: '#333'
	});
	Cufon.replace('.contact>ul>li>div>p, .contact>ul>li>div>a', {
		fontSize: '22px'
	});

	$('.print').click(function() {
     	window.print();
	});

	$('#exampleModal').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget) 
		var recipient = button.data('whatever') 
		var modal = $(this)
		modal.find('.modal-title').text('Online contact')
		modal.find('.modal-body input').val(recipient)
	});
});