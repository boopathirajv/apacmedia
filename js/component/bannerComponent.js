var bannerComponent = {
	getBannerInfo: function()
	{
		
	  var items = [];
	  if(bannerData && bannerData.images)
	  {
		  $.each( bannerData.images, function( key, val ) {
			items.push( "<img src='"+ val.link +"' alt='"+ val.name +"' />"  );
		  });
		 
		  $( "<div/>", {
			"id": "slider",
			html: items.join( "" )
		  }).appendTo( "#id_bannerCont" );
	  }
	},
	render: function()
	{
		var _self = this;
		this.getBannerInfo();
		setTimeout(function(){
			$('#slider').nivoSlider({});
		},100);
	}
	
}