var headerLinkComponent = {
	
	render: function()
	{
		var _self = this;
		if(headerLinkData && headerLinkData.children)
	  	{
			Utils && Utils.renderMenuList(headerLinkData, "headerMenu","headerSub");	
		}
		$(".cls_headerMenuList:first-child a").addClass("cls_activeMenu")		  
	}	
}