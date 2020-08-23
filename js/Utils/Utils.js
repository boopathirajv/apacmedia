var Utils = {
    renderMenuList: function(data, mainMenuName,subMenuName,isHideSubmenu, ele)
    {
        if(data && data.children)
        {
            var items = [];
            var htmlStr = "";	  
            ele = ele || $( ".cls_"+ mainMenuName +"Cont");

            $.each( data.children, function( key, val ) {
                htmlStr = "";	  
                htmlStr += "<li class='cls_"+ mainMenuName +"List'><div class='cls_"+ mainMenuName +"Head'><a href='"+val.link+"'>"+val.name+"</a></div>"
                if(val.children && val.children.length > 0 && !isHideSubmenu)
                {
                    htmlStr +=  "<ul class='cls_"+subMenuName+"List'>";
                    $.each( val.children, function( subkey, subval ) {
                        htmlStr += "<li><a href='"+subval.link+"'>"+ subval.name +"</a></li>";
                    });
                    htmlStr += "</ul>";
                }
                htmlStr += "</li>";
                items.push(htmlStr);
            });
            if(ele && ele.length > 0)
            {
                $( "<ul/>", {
                    "id": "id_"+ mainMenuName +"ListCont",
                    html: items.join( "" )
                }).appendTo( ele );
            }
        }
    },
    renderDescDom: function(data, mainMenuName, ele)
    {
        var htmlHeadStr = "";
        if(data)
        {
            ele = ele || $( ".cls_"+ mainMenuName +"Cont");
            if(data.name){
                htmlHeadStr = "<h1 class='cls_"+ mainMenuName +"Header'>" + data.name +"</h1>";
            } 
            if(data.desc){
                htmlHeadStr += "<p class='cls_"+ mainMenuName +"Desc'>"+ data.desc +"</p>";  
            }
            if(data.readMoreText){
                htmlHeadStr += "<a class='cls_"+ mainMenuName +"Read' href='"+data.readMoreLink+"'>"+ data.readMoreText +"</a>";  
            }
            if(data.src){
                htmlHeadStr += "<div class='cls_"+ mainMenuName +"Img'><img src='"+data.src+"'/></div>";		
            }
            if(ele && ele.length > 0)
            {
                $(ele).append(htmlHeadStr);
            }
            
        }
    },
    renderImageList: function(data, mainMenuName)
    {
        if(data && data.images)
		{
            var items = [];
			$.each( data.images, function( key, val ) {
				items.push( "<div class='cls_"+ mainMenuName+"List'><a href='"+val.link+"'><img src='"+ val.src +"' alt='"+ val.name +"' /></a></div>"  );
			});
			
			$( "<div/>", {
				"id": "cls_"+ mainMenuName +"ListCont",
				html: items.join( "" )
			}).appendTo( ".cls_"+ mainMenuName +"Cont" );
		}
    }
};

function googleTranslateElementInit() {
	new google.translate.TranslateElement({
	  pageLanguage: 'en',
	  gaTrack: false,
	  gaId: '',
	  layout: google.translate.TranslateElement.InlineLayout.SIMPLE
	}, 'google_translate_element');
}