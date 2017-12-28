$(document).ready(function(){
	$(".nav-container a").mouseover(function(){
		this.className='on';
	});
	$(".nav-container a").mouseout(function(){
		this.className='';
	});
});