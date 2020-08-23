var articleComponent = {
	getArticleDom: function()
	{
		if(articleData && articleData.children)
	  	{	  
			var htmlStr = "";	  
		  	$.each( articleData.children, function( key, val ) {
				if(val.desc)
				{
					Utils && Utils.renderDescDom(val, "artFirst");
				}
				else if(val.src)
				{
					Utils && Utils.renderDescDom(val, "artVideo");
				}
				else if(val.images)
				{
					Utils && Utils.renderImageList(val, "articleBottom")
				}
			});
		}
	},	
	render: function()
	{
		var _self = this;
		_self.getArticleDom();
	}
	
}