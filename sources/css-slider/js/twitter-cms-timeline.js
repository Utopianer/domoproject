$(document).ready(function() {
	$.ajax({url: "https://cors-anywhere.herokuapp.com/https://twitter.com/domocoin?ref_src=twsrc%5Etfw/", success: function(result){
	
   		var div=document.createElement("div");
		   div.innerHTML=result;
		   
   		var lis=$(div).find("li.stream-item");
   		var html="";
   		var i=0;
   		lis.each(function(){
   			if(++i>9) return;
				html+="<figure>"+this.innerHTML+"</figure>";
   		});
		$("#carouselContainer").html(html);   		
		 new WOW().init();
		 
		 $('a[href^="/"]').each(function(){ 
            var oldUrl = $(this).attr("href"); // Get current url
            var newUrl = oldUrl.replace("/", "http://twitter.com/"); // Create new url
            $(this).attr("href", newUrl); // Set herf value
        });

		}
	});
});


