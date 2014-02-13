$(document).ready(function(){
	var haut = 290;
		var moit = 	$(document).height() / 2;
		var dif = moit - haut;
		var pal = dif / 20;

	$(document).scroll( function() {
				if($(document).scrollTop() <= 260){
			$("#sub").css({
		    'position' : 'absolute',
		    'top' : haut+'px'
		    });
		    $("#sub .bulle").css('display', 'none');
		    for (var i = 0; i < 20; i++) {
		    	pali = i * 10;
			   if($(document).scrollTop() > pali){
			   		hpal = pal * i;
			   		top = haut + hpal;
				    $("#sub").css('top', top+'px');
			    }
			    console.log(pal);
			}
		    /*
if($(document).scrollTop() > 10){
			    $("#sub").css('top','300px');
		    }
		    if($(document).scrollTop() > 20){
			    $("#sub").css('top','310px');
		    }
		    if($(document).scrollTop() > 30){
			    $("#sub").css('top','320px');
		    }
		    if($(document).scrollTop() > 40){
			    $("#sub").css('top','330px');
		    }
		    if($(document).scrollTop() > 60){
			    $("#sub").css('top','350px');
		    }
		    if($(document).scrollTop() > 80){
			    $("#sub").css('top','370px');
		    }
		    if($(document).scrollTop() > 100){
			    $("#sub").css('top','390px');
		    }
		    if($(document).scrollTop() > 120){
			    $("#sub").css('top','410px');
		    }
		    if($(document).scrollTop() > 140){
			    $("#sub").css('top','430px');
		    }
		    if($(document).scrollTop() > 160){
			    $("#sub").css('top','450px');
		    }
		    if($(document).scrollTop() > 180){
			    $("#sub").css('top','470px');
		    }
		    if($(document).scrollTop() > 200){
			    $("#sub").css('top','490px');
		    }
*/
	    }
	    else{
		    $("#sub").css({
		    'position' : 'fixed',
		    'top' : '50%'
		    });
		    $("#sub .bulle").css('display', 'block');
	    }
    });
});