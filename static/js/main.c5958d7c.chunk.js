(this["webpackJsonpyoutube-clone"]=this["webpackJsonpyoutube-clone"]||[]).push([[0],{117:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(29),i=a.n(r);a(61),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(21),l=a(18),o=a(55),u=a(23),d=(a(66),a(25)),h=a(10),m=a(12),E=a(27),v=a(17),p=a(20),b=(a(70),function(e){var t=e.list,a=e.selectedNav,n=e.handleNavigationClick;return c.a.createElement("ul",{className:"sideList-container list-unstyled"},t.map((function(e){return c.a.createElement("li",{key:e.iconName,className:"py-2 ".concat(a===e.iconName?"active":null),onClick:function(){return n(e.iconName)}},c.a.createElement(p.a,{icon:e.iconSymbol,className:"w-25"}),c.a.createElement("p",null,e.iconName))})))}),f=(a(71),function(e){var t=e.listGroup,a=e.selectedNav,n=e.handleNavigationClick;return c.a.createElement("aside",{className:"sideBar-container"},t.map((function(e){return c.a.createElement("div",{key:e[0].iconName},c.a.createElement(b,{list:e,selectedNav:a,handleNavigationClick:n}),c.a.createElement("hr",null))})))}),O=function(e){var t=e.listGroup,a=e.selectedNav,n=e.handleNavigationClick;return c.a.createElement(f,{listGroup:t,selectedNav:a,handleNavigationClick:n})},g=a(120),S=(a(72),function(e){var t=e.thumbnail,a=e.title,n=e.channelTitle,r=(e.channelIcon,e.views),i=e.uploaded,s=e.videoId,l=e.handleVideoClick;return c.a.createElement(g.a,{className:"video-list-card-container",onClick:function(){return l(s)}},c.a.createElement(g.a.Img,{variant:"top",src:t.url}),c.a.createElement(g.a.Body,null,c.a.createElement("div",{className:"title"},a),c.a.createElement(g.a.Text,{className:"text"},n," \xb7","\n".concat(r," views")," \xb7 ","".concat(i," ago"))))}),C=function(e){var t=e.title,a=e.channelTitle,n=e.views,r=e.thumbnail,i=e.videoId,s=e.handleVideoClick;return c.a.createElement(S,{title:t,channelTitle:a,views:n,thumbnail:r,videoId:i,handleVideoClick:s})},w=a(48),I=function(e){return c.a.createElement(w.a,Object.assign({speed:2,width:e.width,height:e.height,viewBox:"0 0 100% 300",backgroundColor:"#ddd",foregroundColor:"#eee"},e),e.children)},N=(a(73),function(e){var t=e.fetchedVideos,a=Object(h.f)(),n=function(e){a.push("watch?v=".concat(e))};if(Object(v.isEmpty)(t)){for(var r=[],i=0;i<12;i++)r.push(c.a.createElement(I,{className:"homeVideoList-container py-2",width:400,height:300},c.a.createElement("rect",{x:"8",y:"2",rx:"0",ry:"0",width:"352",height:"166"}),c.a.createElement("circle",{cx:"35",cy:"210",r:"29"}),c.a.createElement("rect",{x:"77",y:"190",rx:"0",ry:"0",width:"282",height:"36"}),c.a.createElement("rect",{x:"79",y:"236",rx:"0",ry:"0",width:"278",height:"23"})));return c.a.createElement("div",{className:"homeVideoList-container py-2"},r)}return c.a.createElement("div",{className:"homeVideoList-container py-2"},t.map((function(e){var t=e.videoId,a=e.title,r=e.channelTitle,i=e.thumbnails,s=(e.channelId,e.publishedAt,e.views);return c.a.createElement(C,{title:a,channelTitle:r,views:s,thumbnail:i.medium,videoId:t,handleVideoClick:n})})))}),y=function(e){return{type:"GET_SEARCH_VIDEOS",searchValue:e}},j=function(e){return{type:"GET_WATCH_SEARCH_VIDEOS",searchValue:e}};function _(e){return{type:"GET_WATCH_VIDEO_DETAIL",videoId:e}}a(75);var V=Object(n.memo)((function(e){var t=e.listGroup,a=e.selectedNav,r=e.handleNavigationClick,i=Object(l.b)(),s=Object(l.c)((function(e){return e.videoSearch}));Object(n.useEffect)((function(){i({type:"GET_HOME_VIDEOS"})}),[]);return c.a.createElement("div",{className:"mainScreen"},c.a.createElement(O,{listGroup:t,selectedNav:a,handleNavigationClick:r}),Object(v.isEmpty)(s.errorMsg)?c.a.createElement(N,{fetchedVideos:s&&s.fetchVideos}):c.a.createElement("p",null,s.errorMsg))}));function k(e,t){return new URLSearchParams(e).get(t)}a(76);var x=function(e){var t=e.thumbnail,a=e.title,n=e.channelTitle,r=(e.channelIcon,e.views),i=(e.uploaded,e.videoId),s=e.handleVideoClick;return c.a.createElement("section",{className:"searchVideoList-component",onClick:function(){return s(i)}},c.a.createElement("div",{className:"searchVideoList-subSection"},c.a.createElement("img",{src:t.url}),c.a.createElement("div",{className:"searchVideoList-text"},c.a.createElement("h6",null,a),c.a.createElement("p",null,"".concat(n,"\t"),"\xb7","\t".concat(r)," views"))))};a(77);var D=function(e){var t=e.fetchedVideos,a=Object(h.f)(),n=function(e){a.push("watch?v=".concat(e))};if(Object(v.isEmpty)(t)){for(var r=[],i=0;i<12;i++)r.push(c.a.createElement(I,{className:"searchVideoList-container",width:"100%",height:200},c.a.createElement("rect",{x:"289",y:"4",rx:"2",ry:"2",width:"600",height:"22"}),c.a.createElement("rect",{x:"290",y:"37",rx:"2",ry:"2",width:"167",height:"18"}),c.a.createElement("rect",{x:"4",y:"-23",rx:"2",ry:"2",width:"264",height:"178"})));return c.a.createElement("div",{className:"searchVideoList-container"},r)}return c.a.createElement("div",{className:"searchVideoList-container"},t.map((function(e){var t=e.videoId,a=e.title,r=e.channelTitle,i=e.thumbnails,s=(e.channelId,e.publishedAt,e.views);return c.a.createElement(x,{key:t,title:a,channelTitle:r,views:s,thumbnail:i.medium,videoId:t,handleVideoClick:n})})))},A=(a(78),function(e){var t=e.listGroup,a=e.selectedNav,r=e.handleNavigationClick,i=Object(l.b)(),s=Object(l.c)((function(e){return e.videoSearch})),o=k(Object(h.g)().search,"search_query");Object(n.useEffect)((function(){i(y(o))}),[o,y]);return c.a.createElement("div",{className:"searchScreen"},c.a.createElement(O,{listGroup:t,selectedNav:a,handleNavigationClick:r}),Object(v.isEmpty)(s.searchErrorMsg)?c.a.createElement(D,{fetchedVideos:s&&s.fetchSearchVideos}):c.a.createElement("p",null,s.searchErrorMsg))}),L=a(49);var T=function(e){var t=e.videoId,a=Object(n.useState)(.75*window.innerHeight),r=Object(d.a)(a,2),i=r[0],s=r[1],l=function(){s(.75*window.innerHeight)};Object(n.useEffect)((function(){return window.addEventListener("resize",l),function(){window.removeEventListener("resize",l)}}),[]);var o={height:i,width:"100%",playerVars:{autoplay:1}};return c.a.createElement(L.a,{videoId:t,opts:o})},H=a(118),W=a(119);a(90);var M=function(e){var t=e.videoId,a=e.videoDetail;return c.a.createElement(W.a,{fluid:!0,className:"videoPlayer-component py-4"},c.a.createElement(T,{videoId:t}),a&&function(){var e=a.title,t=a.description,n=a.channelTitle,r=(a.publishedAt,a.channelId,a.tags),i=a.viewCount,s=a.likeCount,l=a.dislikeCount,o=a.thumbnail,u=a.subscriberCount;return c.a.createElement("div",{className:"videoPlayer-detail"},c.a.createElement("div",{className:"videoPlayer-mainDetail"},r&&r.map((function(e){return c.a.createElement("p",{className:"pr-3 mb-0"},"#",e)})),c.a.createElement("h4",null,e),c.a.createElement("div",{className:"videoPlayer-subDetail"},c.a.createElement("p",null,i," views"),c.a.createElement("div",{className:"videoPlayer-otherDetail"},c.a.createElement("span",null,c.a.createElement(p.a,{icon:m.i,className:"text-muted"}),c.a.createElement("p",{className:"m-0 pl-1"},s)),c.a.createElement("span",null,c.a.createElement(p.a,{icon:m.h,className:"text-muted"}),c.a.createElement("p",{className:"m-0 pl-1"},l)))),c.a.createElement("hr",null)),c.a.createElement("div",{className:"videoPlayer-channelDetail"},c.a.createElement(H.a,{src:o&&o.url,roundedCircle:!0}),c.a.createElement("div",{className:"videoPlayer-videoDesc pl-2"},c.a.createElement("h5",{className:"mb-1"},n),c.a.createElement("p",{className:"mb-1"},u," subscribers"),c.a.createElement("p",null,t))))}())};var G=function(e){var t=Object(h.f)(),a=k(Object(h.g)().search,"v"),r=Object(l.b)(),i=Object(l.c)((function(e){return e.videoSearch})),s=Object(l.c)((function(e){return e.videoWatch})),o=s.fetchWatchDetails.title,u=Object(n.useCallback)((function(e){t.push("watch?v=".concat(e))}),[a]);return Object(n.useEffect)((function(){r(_(a))}),[a,_]),Object(n.useEffect)((function(){r(j(o))}),[o,j]),c.a.createElement("div",null,c.a.createElement(M,{videoId:a,videoDetail:s.fetchWatchDetails}),function(){if(!Object(v.isEmpty)(i))return Object(v.isEmpty)(i.fetchWatchSearchVideos)?Object(v.isEmpty)(i.watchSearchErrorMsg)?c.a.createElement("p",null,"Loading..."):c.a.createElement("p",null,i.watchSearchErrorMsg):i.fetchWatchSearchVideos.map((function(e){var t=e.videoId,a=e.title,n=e.channelTitle,r=e.thumbnails,i=(e.channelId,e.publishedAt,e.views);return c.a.createElement(x,{key:t,title:a,channelTitle:n,views:i,thumbnail:r.medium,videoId:t,handleVideoClick:u})}))}())},R=a(52),B=a.n(R),F=(a(95),function(e){var t=e.size;return c.a.createElement("div",{className:"youtubeLogo-container"},c.a.createElement(p.a,{icon:E.a,className:"text-danger",size:t}),c.a.createElement("h4",null,"YouTube ",c.a.createElement("sup",{className:"text-muted"},"IN")))}),P=a(121),U=(a(96),function(e){var t=e.searchStyle,a=e.searchValue,n=e.handleSearchValue,r=e.handleSearchClick;return c.a.createElement("div",{className:"searchBarContainer d-flex rounded"},c.a.createElement("input",{type:"text",className:"border-0",style:t,placeholder:"Search",id:"searchBar",value:a,onChange:function(e){return n(e.target.value)},onKeyDown:function(e){return 13==e.keyCode&&r()}}),c.a.createElement(P.a,{variant:"light",className:"rounded-0",onClick:r},c.a.createElement(p.a,{icon:m.g,className:"text-muted"})))}),z=(a(97),function(e){var t=e.searchValue,a=e.showSideBar,n=e.handleSearchValue,r=e.handleSearchClick;return c.a.createElement(B.a,null,c.a.createElement(W.a,{fluid:!0,className:"header-component d-flex py-4 justify-content-between"},c.a.createElement("div",{className:"header-subComponent d-flex justify-content-between"},c.a.createElement(p.a,{icon:m.a,size:"2x",onClick:a,className:"header-component-barIcon"}),c.a.createElement(F,{size:"2x"})),c.a.createElement(U,{searchStyle:{width:"50vw",maxWidth:"30rem"},searchValue:t,handleSearchValue:n,handleSearchClick:r})))}),q=function(e){var t=e.searchValue,a=e.showSideBar,n=e.handleSearchValue,r=e.handleSearchClick;return c.a.createElement(z,{searchValue:t,showSideBar:a,handleSearchValue:n,handleSearchClick:r})};a(98);var J=function(e){var t=e.show,a=e.onDismiss,n=["backdrop"];return t&&n.push("showBackdrop"),c.a.createElement("div",{className:n.join(" "),onClick:a})};a(99);var K=function(e){var t=e.listGroup,a=e.selectedNav,n=e.show,r=e.handleNavigationClick,i=["sideBarModal-container"];return n&&i.push("showModal"),c.a.createElement("aside",{className:i.join(" ")},t.map((function(e){return c.a.createElement("div",{key:e[0].iconName},c.a.createElement(b,{modal:!0,list:e,selectedNav:a,handleNavigationClick:r}),c.a.createElement("hr",null))})))},Y=function(e){var t=Object(h.f)(),a=Object(n.useState)("Home"),r=Object(d.a)(a,2),i=r[0],s=r[1],l=Object(n.useState)(""),o=Object(d.a)(l,2),u=o[0],v=o[1],p=Object(n.useState)(!1),b=Object(d.a)(p,2),f=b[0],O=b[1],g=[[{iconName:"Home",iconSymbol:m.f},{iconName:"Trending",iconSymbol:m.d},{iconName:"Subscription",iconSymbol:E.a}],[{iconName:"Library",iconSymbol:m.b},{iconName:"History",iconSymbol:m.e},{iconName:"Your Videos",iconSymbol:E.a},{iconName:"Watch Later",iconSymbol:m.c},{iconName:"Liked Videos",iconSymbol:m.i}]],S=Object(h.g)();Object(n.useEffect)((function(){var e=k(S.search,"search_query");v(e)}),[]);var C=Object(n.useCallback)((function(e){s(e)}),[s]),w=Object(n.useCallback)((function(e){v(e)}),[v]),I=Object(n.useCallback)((function(){t.push("results?search_query=".concat(u))}),[t,u]);return c.a.createElement(c.a.Fragment,null,console.log(t,"history"),c.a.createElement(J,{show:f,onDismiss:function(){return O(!1)}}),c.a.createElement(K,{listGroup:g,selectedNav:i,show:f,handleNavigationClick:C}),c.a.createElement(q,{searchValue:u,showSideBar:function(){return O(!0)},handleSearchValue:w,handleSearchClick:I}),c.a.createElement(h.c,null,c.a.createElement(h.a,{path:"/results"},c.a.createElement(A,{listGroup:g,selectedNav:i,handleNavigationClick:C})),c.a.createElement(h.a,{path:"/watch"},c.a.createElement(G,null)),c.a.createElement(h.a,{path:"/"},c.a.createElement(V,{listGroup:g,selectedNav:i,handleNavigationClick:C}))))},X=a(7),$={isLoading:!1,fetchVideos:[],errorMsg:"",isLoadingSearch:!1,fetchSearchVideos:[],searchErrorMsg:"",isLoadingWatchSearch:!1,fetchWatchSearchVideos:[],watchSearchErrorMsg:""};function Q(e,t,a,n){return Object(X.a)(Object(X.a)({},e),{},{fetchVideos:t,isLoading:a,errorMsg:n})}function Z(e,t,a,n){return Object(X.a)(Object(X.a)({},e),{},{fetchSearchVideos:t,isLoadingSearch:a,searchErrorMsg:n})}function ee(e,t,a,n){return Object(X.a)(Object(X.a)({},e),{},{fetchWatchSearchVideos:t,isLoadingWatchSearch:a,watchSearchErrorMsg:n})}var te={isLoadingWatchDetails:!1,fetchWatchDetails:{},watchErrorMsg:""};var ae=Object(s.c)({videoSearch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"VIDEO_FETCH_SUCCESS":return Q(e,t.data,!1,"");case"VIDEO_FETCH_FAIL":return Q(e,[],!1,t.errorMsg);case"LOADING_VIDEOS":return Object(X.a)(Object(X.a)({},e),{},{isLoading:!0});case"VIDEO_SEARCH_SUCCESS":return Z(e,t.data,!1,"");case"VIDEO_SEARCH_FAIL":return Z(e,[],!1,t.errorMsg);case"LOADING_SEARCH_VIDEOS":return Object(X.a)(Object(X.a)({},e),{},{isLoadingSearch:!0});case"VIDEO_WATCH_SEARCH_SUCCESS":return ee(e,t.data,!1,"");case"VIDEO_WATCH_SEARCH_FAIL":return ee(e,[],!1,t.errorMsg);case"LOADING_WATCH_SEARCH_VIDEOS":return Object(X.a)(Object(X.a)({},e),{},{isLoadingWatchSearch:!0});default:return e}},videoWatch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_WATCH_VIDEO_DETAIL":return Object(X.a)(Object(X.a)({},e),{},{isLoadingWatchDetails:!0});case"WATCH_VIDEO_DETAIL_SUCCESS":return Object(X.a)(Object(X.a)({},e),{},{isLoadingWatchDetails:!1,fetchWatchDetails:t.data,watchErrorMsg:""});case"WATCH_VIDEO_DETAIL_FAIL":return Object(X.a)(Object(X.a)({},e),{},{isLoadingWatchDetails:!1,fetchWatchDetails:{},watchErrorMsg:t.errorMsg});default:return e}}}),ne=a(8),ce=a.n(ne),re=a(9),ie=(a(38),a(53)),se=a(54),le=a.n(se),oe=function(){var e=Object(ie.a)(ce.a.mark((function e(t){var a,n,c,r,i;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,le()({method:"get",url:t});case 3:return a=e.sent,n=a.data,c=a.status,null!=(r=n)?(r.status=c,r.success=!0):r={status:a.status,success:!1,errorMessage:"Sorry, something went wrong, Please try again"},e.abrupt("return",r);case 10:if(e.prev=10,e.t0=e.catch(0),e.t0.response){e.next=14;break}return e.abrupt("return",{status:0,success:!1,errorMessage:"Check your Internet"});case 14:return i=e.t0.response,e.abrupt("return",{status:i.status,success:!1,errorMessage:"Sorry, something went wrong, Please try again"});case 16:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),ue="https://www.googleapis.com/youtube/v3/",de="&key=AIzaSyBo2aIWNiuPhiLP_WBx5EpmXLyKj5sCc40";function he(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"song",t="search?part=snippet&maxResults=12&type=video&q=";return ue+t+e+de}var me=ce.a.mark(fe),Ee=ce.a.mark(Oe),ve=ce.a.mark(ge),pe=ce.a.mark(Se),be=ce.a.mark(Ce);function fe(e,t,a,n){var c,r,i;return ce.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,Object(re.c)({type:t});case 3:return c=e.searchValue?he(e.searchValue):he(),s.next=6,Object(re.b)(oe,c);case 6:if((r=s.sent).success=!0,!r.success){s.next=14;break}return i=r.items.map((function(e){var t=e.snippet,a=t.title,n=t.channelTitle,c=t.publishedAt,r=t.thumbnails,i=t.channelId;return{videoId:e.id.videoId,title:a,channelTitle:n,thumbnails:r,channelId:i,publishedAt:c,views:"30k"}})),s.next=12,Object(re.c)({type:a,data:i});case 12:s.next=16;break;case 14:return s.next=16,Object(re.c)({type:n,errorMsg:r.errorMessage});case 16:s.next=22;break;case 18:return s.prev=18,s.t0=s.catch(0),s.next=22,Object(re.c)({type:n,errorMsg:s.t0.errorMessage});case 22:case"end":return s.stop()}}),me,null,[[0,18]])}function Oe(e){return ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(re.b)(fe,e,"LOADING_VIDEOS","VIDEO_FETCH_SUCCESS","VIDEO_FETCH_FAIL");case 2:case"end":return t.stop()}}),Ee)}function ge(e){return ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(re.b)(fe,e,"LOADING_SEARCH_VIDEOS","VIDEO_SEARCH_SUCCESS","VIDEO_SEARCH_FAIL");case 2:case"end":return t.stop()}}),ve)}function Se(e){return ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(re.b)(fe,e,"LOADING_WATCH_SEARCH_VIDEOS","VIDEO_WATCH_SEARCH_SUCCESS","VIDEO_WATCH_SEARCH_FAIL");case 2:case"end":return t.stop()}}),pe)}function Ce(){return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(re.d)("GET_HOME_VIDEOS",Oe);case 2:return e.next=4,Object(re.d)("GET_SEARCH_VIDEOS",ge);case 4:return e.next=6,Object(re.d)("GET_WATCH_SEARCH_VIDEOS",Se);case 6:case"end":return e.stop()}}),be)}var we=ce.a.mark(Ne),Ie=ce.a.mark(ye);function Ne(e){var t,a,n,c,r,i,s;return ce.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,Object(re.c)({type:"LOADING_WATCH_VIDEO_DETAIL"});case 3:return u=e.videoId,t=ue+"videos?part=statistics&part=snippet&maxResults=12&id="+u+de,l.next=6,Object(re.b)(oe,t);case 6:return a=l.sent,o=a.items[0].snippet.channelId,n=ue+"channels?part=snippet&part=statistics&maxResults=12&id="+o+de,l.next=10,Object(re.b)(oe,n);case 10:if(c=l.sent,console.log(a),r={},!a.success){l.next=21;break}return a.items.map((function(e){var t=e.snippet,a=t.title,n=t.description,c=t.channelTitle,i=t.publishedAt,s=t.channelId,l=t.tags,o=e.statistics,u=o.viewCount,d=o.likeCount,h=o.dislikeCount;r={videoId:e.id,description:n,title:a,channelTitle:c,channelId:s,publishedAt:i,tags:l.slice(0,2),views:"30k",viewCount:u,likeCount:d,dislikeCount:h}})),c.success&&(i=c.items[0].snippet.thumbnails,s=c.items[0].statistics.subscriberCount,r=Object(X.a)(Object(X.a)({},r),{},{thumbnail:i.medium,subscriberCount:s})),console.log(r),l.next=19,Object(re.c)({type:"WATCH_VIDEO_DETAIL_SUCCESS",data:r});case 19:l.next=23;break;case 21:return l.next=23,Object(re.c)({type:"WATCH_VIDEO_DETAIL_FAIL",errorMsg:a.errorMessage});case 23:l.next=30;break;case 25:return l.prev=25,l.t0=l.catch(0),console.log(l.t0),l.next=30,Object(re.c)({type:"WATCH_VIDEO_DETAIL_FAIL",errorMsg:l.t0.errorMessage});case 30:case"end":return l.stop()}var o,u}),we,null,[[0,25]])}function ye(){return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(re.d)("GET_WATCH_VIDEO_DETAIL",Ne);case 2:case"end":return e.stop()}}),Ie)}var je=ce.a.mark(_e);function _e(){return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(re.a)([Ce(),ye()]);case 2:case"end":return e.stop()}}),je)}var Ve=function(){var e=Object(o.a)(),t=Object(s.e)(ae,Object(s.a)(e));return e.run(_e),c.a.createElement(l.a,{store:t},c.a.createElement(u.a,{basename:"/youtube-clone"},c.a.createElement(Y,null)))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},38:function(e){e.exports=JSON.parse("{}")},56:function(e,t,a){e.exports=a(117)},61:function(e,t,a){},66:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},90:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[56,1,2]]]);
//# sourceMappingURL=main.c5958d7c.chunk.js.map