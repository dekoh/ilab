$(document).ready(function(){
	var haut = 524;
		var moit = 	$(window).height() / 2;
		var dif = moit - haut;
		var pal = dif / 20;
		

	$(document).scroll( function() {
		var possub = $(document).scrollTop() + moit;
		if($(document).scrollTop() <= 240){
			
		    $("#sub .bulle").css('display', 'none');
		    if($(document).scrollTop() >= 100 && $("#sub .sub").hasClass('wb') ){
			    $("#sub").css('top', '600px');
			    $("#sub .sub").removeClass('wb');
			     $("#sub").css('position','absolute');
		    }
		    if($(document).scrollTop() <= 239 && !$("#sub .sub").hasClass('wb') ){
			    $("#sub").css('top', '524px');
			    $("#sub .sub").addClass('wb');
			     $("#sub").css('position','absolute');
		    }
		   
	    }
	    else{
		    $("#sub").css({
		    'position' : 'absolute',
		    'top' : possub
		    });
		    $("#sub .bulle").css('display', 'block');
	    }
    });
});