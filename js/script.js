// ==== Menu Opening ===================================

$(function(){
	$('.menu__img').on('click', function(){
		$('.menu__burger').slideToggle(800, function(){
			if($(this).css('display') === 'none'){
				$(this).removeAttr('style');
		}
	});
 });
});


//==== Closing menu =====================================

 $(function(){
 	$('.close__icon').on('click', function(){
 		$('.menu__burger').hide(800);
 	});
 });