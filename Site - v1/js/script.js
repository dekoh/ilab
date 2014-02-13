$(document).ready(function(){
	var haut = 390;
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
		    /*
for (var i = 0; i < 20; i++) {
		    	pali = i * 10;
			   if($(document).scrollTop() > pali){
			   		hpal = pal * i;
			   		top = haut + hpal;
				    $("#sub").css('top', top+'px');
			    }
			    console.log(pal);
			}
*/
		    
if($(document).scrollTop() > 10){
			    $("#sub").css('top','400px');
		    }
		    if($(document).scrollTop() > 20){
			    $("#sub").css('top','409px');
		    }
		    if($(document).scrollTop() > 30){
			    $("#sub").css('top','418px');
		    }
		    if($(document).scrollTop() > 40){
			    $("#sub").css('top','427px');
		    }
		    if($(document).scrollTop() > 50){
			    $("#sub").css('top','436px');
		    }
		    if($(document).scrollTop() > 60){
			    $("#sub").css('top','445px');
		    }
		    if($(document).scrollTop() > 80){
			    $("#sub").css('top','463px');
		    }
		    if($(document).scrollTop() > 100){
			    $("#sub").css('top','481px');
		    }
		    if($(document).scrollTop() > 120){
			    $("#sub").css('top','499px');
		    }
		    if($(document).scrollTop() > 140){
			    $("#sub").css('top','517px');
		    }
		    if($(document).scrollTop() > 160){
			    $("#sub").css('top','535px');
		    }
		    if($(document).scrollTop() > 180){
			    $("#sub").css('top','553px');
		    }
		    if($(document).scrollTop() > 200){
			    $("#sub").css('top','571px');
		    }

	    }
	    else{
		    $("#sub").css({
		    'position' : 'fixed',
		    'top' : '280px'
		    });
		    $("#sub .bulle").css('display', 'block');
	    }
    });
});