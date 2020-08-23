var productLinkComponent = {
	getproductLinkDom: function()
	{
	  if(productLinkData && productLinkData.children)
	  {
		  var htmlHeadStr = "<h3 class='cls_sideMenuHeader'>" + productLinkData.name;
				  htmlHeadStr += "<span class='cls_sideMenuImg'><img src='"+productLinkData.src+"' alt='side-nav-title'/></span>";
				  htmlHeadStr +="</h3>";
				  
		  $(".cls_sideMenuCont").append(htmlHeadStr);
		  Utils && Utils.renderMenuList(productLinkData, "sideMenu","sideSub");
	  }
	},
	registerEvents: function()
	{
		$(".cls_sideMenuHead").off("click").on("click",function(evt){
			evt.preventDefault();
			$(this).next().slideToggle();
		})
	},
	render: function()
	{
		var _self = this;
		this.getproductLinkDom();
		setTimeout(function(){
			_self.registerEvents();
		},100);
	}
	
}