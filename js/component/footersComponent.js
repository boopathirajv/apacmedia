var footerComponent = {
	getFooterTopDom: function()
	{
		if(footerData && footerData.children)
	  	{	  
			var htmlStr = "";	  
		  	$.each( footerData.children, function( key, val ) {
				var id = "id_footerSectionCont_" + key;
				$(".cls_FooterTopContainer").append("<div class='cls_footerSectionCont' id='"+ id +"'></div>")
				Utils && Utils.renderDescDom(val, "footerSection", "#"+id);
				Utils && Utils.renderMenuList(val, "footerSection", "", true, "#"+id);

			});
		}
	},	
	getFooterBottomDom: function()
	{
		var _self = this;
		Utils && Utils.renderMenuList(headerLinkData, "bottomMenu", "bottomSub", true);	
		Utils && Utils.renderDescDom(socialIconData, "socialMenu");
		Utils && Utils.renderImageList(socialIconData, "socialMenu");	
	},
	render: function()
	{
		var _self = this;
		_self.getFooterTopDom();
		_self.getFooterBottomDom();
	}
	
}