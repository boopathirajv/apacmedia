var sliderComponent = {
	getSliderDom: function()
	{
		
	  var items = [];
	  if(slideImageData )
	  {
		$("#id_sliderCont").html("<div class='cls_slideInfo'><h2 class='cls_subHeader'>"+slideImageData.name+"</h2><div class='cls_slideImgCont'></div></div>")
	  	  
		if(slideImageData && slideImageData.images)
		{
			$.each( slideImageData.images, function( key, val ) {
				items.push( "<div class='slide'><a href='"+val.link+"'><img src='"+ val.src +"' alt='"+ val.name +"' /></a></div>"  );
			});
			
			$( "<div/>", {
				"id": "bxsliderCont",
				html: items.join( "" )
			}).appendTo( ".cls_slideImgCont" );
		}
	  }
	},
	render: function()
	{
		var _self = this;
		this.getSliderDom();
		setTimeout(function(){
			$('#bxsliderCont').bxSlider({
				slideWidth: 300,
				minSlides: 2,
				maxSlides: 3,
				moveSlides: 1,
				slideMargin: 10,
				height:200,
				auto:true
			});
		},100);
	}
	
}