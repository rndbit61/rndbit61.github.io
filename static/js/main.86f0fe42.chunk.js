(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,a){e.exports=a(62)},53:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(27),r=a.n(l),i=a(10),o=a(16),s=a(20),m=a(11),g=a(18),E=a(13),u=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={toggle:!1},e}return Object(g.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(){this.setState({toggle:!this.state.toggle}),this.props.toggler(this.state.toggle)}},{key:"render",value:function(){return c.a.createElement("svg",{viewBox:"0 0 96 96",height:this.props.height,onClick:this.handleClick.bind(this),style:{overflow:"visible",cursor:"pointer",WebkitTapHighlightColor:"rgba(0,0,0,0)"}},c.a.createElement(E.Motion,{style:{x:Object(E.spring)(this.state.toggle?1:0,E.presets.wobbly),y:Object(E.spring)(this.state.toggle?0:1,E.presets.wobbly)}},function(e){var t=e.x,a=e.y;return c.a.createElement("g",{id:"navicon",fill:"none",stroke:"currentColor",strokeWidth:"14",strokeLinecap:"round",strokeLinejoin:"round"},c.a.createElement("line",{transform:"translate(".concat(12*t,", ").concat(-7*t,") rotate(").concat(45*t,", 7, 26)"),x1:"7",y1:"26",x2:"89",y2:"26"}),c.a.createElement("line",{transform:"translate(".concat(12*t,", ").concat(7*t,") rotate(").concat(-45*t,", 7, 70)"),x1:"7",y1:"70",x2:"89",y2:"70"}),c.a.createElement("line",{transform:"translate(".concat(-96*t,")"),opacity:a,x1:"7",y1:"48",x2:"89",y2:"48"}))}))}}]),t}(n.Component);a(53);function d(){return c.a.createElement("nav",{className:"mainNav"},c.a.createElement("ul",{className:"mainMenu"},c.a.createElement("li",null,c.a.createElement("div",{id:"hamburger"}," ",c.a.createElement(u,{height:"3em",toggler:function(e){var t=document.getElementsByClassName("menuItem");Array.prototype.forEach.call(t,function(e){e.classList.toggle("displayMenu")})}})," ")),c.a.createElement("li",{className:"menuItem"},c.a.createElement("a",{href:"#services"},"\u0423\u0441\u043b\u0443\u0433\u0438")),c.a.createElement("li",{className:"menuItem"},c.a.createElement("a",{href:"#contacts"},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"))))}var f=Object(n.createContext)({}),_=a(29);function p(e){return c.a.createElement("div",{className:e.className}," ",c.a.createElement("a",{href:e.logoLink}," ",c.a.createElement("img",{src:e.logoSrc,width:"180px",height:"120px",alt:"logo"})," ")," ")}var h=function(e){return c.a.createElement("iframe",{src:"https://yandex.ru/map-widget/v1/?um=constructor%3A0536078fd7413b40ee6c1ec14a1d219d7bf45ee732531b2fbc0369af82c978a2&source=constructor",width:"500",height:"400",frameborder:"0"})},b=function(e){return c.a.createElement("div",{className:"contacts-details",id:"contacts"},c.a.createElement("div",{className:"contacts-details--logo"},c.a.createElement("img",{src:"img/icon-ok-01.svg",className:"contacts-details--logo--image",alt:""})),c.a.createElement("span",{className:"phone"},c.a.createElement("a",{href:"tel:+7 (8634) 38-62-81"},"+7 (8634) 38-62-81"),c.a.createElement("br",null)),c.a.createElement("span",{className:"address"},"347942, \u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c, \u0433.\u0422\u0430\u0433\u0430\u043d\u0440\u043e\u0433, ",c.a.createElement("br",null),"\u0443\u043b. \u041f\u043e\u043b\u044f\u043a\u043e\u0432\u0441\u043a\u043e\u0435 \u0448\u043e\u0441\u0441\u0435, 16 \u043e\u0444\u0438\u0441 412-3"),c.a.createElement("span",{className:"email"},c.a.createElement("a",{href:"mailto:info@rndbit.ru"},"info@rndbit.ru"),c.a.createElement("br",null)))};var v=function(e){return c.a.createElement("footer",{className:"footer-section"},c.a.createElement("div",{className:"footer-section--container"},c.a.createElement("div",{className:"footer-section--container--logo"},c.a.createElement("img",{src:"img/logo-main_logo-main.png",alt:"logo"})),c.a.createElement("div",{className:"footer-section--container--copyright"},"\xa9 ",(new Date).getFullYear()," \u0411\u0418\u0422. \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b."),c.a.createElement("div",{className:"footer-section--container--social"})))},k=a(5),N=a(38),y=(a(55),a(6)),x=function(e){var t=e.name,a=e.image,n=e.link,l=void 0===n?"":n;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"2em"}},c.a.createElement("h1",null,t),l?c.a.createElement("a",{href:l,target:"_blank"},c.a.createElement("img",{src:a,width:220,height:80})):c.a.createElement("img",{src:a,width:220,height:80})))};a(14),a(7),a(28),a(37);r.a.render(c.a.createElement(c.a.Fragment,null,c.a.createElement(f.Provider,{value:{}},c.a.createElement(function(e){Object(n.useContext)(f).color="blue";var t=Object(n.useRef)(null);return Object(n.useEffect)(function(){_.b.from(t.current,1,{opacity:0,scale:.4,ease:_.a.easeOut})},[]),c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"header--container"},c.a.createElement(p,{className:"header--container--logo",logoLink:e.logoLink,logoSrc:e.logoSrc}),c.a.createElement("div",{className:"header--container--text-block",ref:t},c.a.createElement("h1",{className:"header--container--text-block--title"},"\u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439"),c.a.createElement("p",{className:"header--container--text-block--description"},"\u041d\u0430\u0448 \u043e\u043f\u044b\u0442 \u043d\u0430 \u0441\u043b\u0443\u0436\u0431\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438 \u0432\u0430\u0448\u0435\u0433\u043e \u0434\u0435\u043b\u0430. \u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b \u0438 \u0443\u0441\u043b\u0443\u0433\u0438 \u0432\u044b\u0441\u0448\u0435\u0433\u043e \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430.")),c.a.createElement(d,null)))},{logoSrc:"./img/logo-main_logo-main.png",logoLink:"#"}),c.a.createElement(function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{style:{textAlign:"center",marginTop:"1em"}},"\u041d\u0430\u0448\u0438 \u043f\u0430\u0440\u0442\u043d\u0451\u0440\u044b"),c.a.createElement("div",{style:{padding:"3em"}},c.a.createElement(N.a,{breakpoints:{250:{spaceBetween:50,slidesPerView:1},775:{spaceBetween:50,slidesPerView:3}},modules:[y.a,y.b,y.c],autoplay:!0,navigation:!0,pagination:{clickable:!0},spaceBetween:50,slidesPerView:3,onSlideChange:function(){return console.log("slide change")},onSwiper:function(e){return console.log(e)}},c.a.createElement(k.a,null,c.a.createElement(x,{name:"P7",image:"/img/p7.jpg",link:"https://r7-office.ru/contact"})),c.a.createElement(k.a,null,c.a.createElement(x,{name:"Positive Technologies",image:"/img/pt.png"})),c.a.createElement(k.a,null,c.a.createElement(x,{name:"\u0420\u0443\u0442\u043e\u043a\u0435\u043d",image:"/img/Rutoken.png"})),c.a.createElement(k.a,null,c.a.createElement(x,{name:"\u041a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0442",image:"/img/conf.png"})),c.a.createElement(k.a,null,c.a.createElement(x,{name:"\u0410\u043b\u0430\u0434\u0434\u0438\u043d",image:"/img/alladin.png"})),c.a.createElement(k.a,null,c.a.createElement(x,{name:"\u041a\u043e\u0434 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438",image:"/img/kb.jpg"})),c.a.createElement(k.a,null,c.a.createElement(x,{name:"\u042d\u0448\u0435\u043b\u043e\u043d",image:"/img/eshelon.png"})),c.a.createElement(k.a,null,c.a.createElement(x,{name:"Dr. Web",image:"/img/drweb.png"})),c.a.createElement(k.a,null,c.a.createElement(x,{name:"Kaspersky",image:"/img/kasp.png"})),c.a.createElement(k.a,null,c.a.createElement(x,{name:"\u0410\u043b\u044c\u0442 \u041b\u0438\u043d\u0443\u043a\u0441",image:"/img/alt.png"})),c.a.createElement(k.a,null,c.a.createElement(x,{name:"\u0410\u0441\u0442\u0440\u0430 \u041b\u0438\u043d\u0443\u043a\u0441",image:"/img/astra.png"})))))},null),c.a.createElement(function(e){return c.a.createElement("section",{className:"info__section",id:"services"},c.a.createElement("div",{className:"info__section--container"},c.a.createElement("div",{className:"info__section--container--first__block"},c.a.createElement("div",{className:"info__section--container--first__block--item"},c.a.createElement("img",{src:"img/icon-ok-02.svg",className:"info__section--container--first__block--item--logo",alt:""}),c.a.createElement("span",{className:"info__section--container--first__block--item--text"},"\u041d\u0430\u0448\u0438 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u044b \u0432\u044b\u0441\u043e\u043a\u043e\u0439 \u043a\u0432\u0430\u043b\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0443\u0442 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044e \u0432 \u043a\u0440\u0430\u0442\u0447\u0430\u0439\u0448\u0438\u0435 \u0441\u0440\u043e\u043a\u0438.")),c.a.createElement("div",{className:"info__section--container--first__block--item"},c.a.createElement("img",{src:"img/icon-ok-03.svg",className:"info__section--container--first__block--item--logo",alt:""}),c.a.createElement("span",{className:"info__section--container--first__block--item--text"},"\u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0439\u0448\u0438\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0438 \u0441\u043e\u0432\u0435\u0442\u044b \u043e\u0442 \u043b\u044e\u0434\u0435\u0439 \u0441 \u0441\u0443\u043c\u043c\u0430\u0440\u043d\u043e \u0434\u0435\u0441\u044f\u0442\u043a\u0430\u043c\u0438 \u043b\u0435\u0442 \u043e\u043f\u044b\u0442\u0430, \u0430 \u0442\u0430\u043a\u0436\u0435 - \u0446\u0435\u043b\u044b\u0439 \u043d\u0430\u0431\u043e\u0440 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0439 \u043f\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044f\u043c \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044f \u0438 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f \u0432\u0430\u0448\u0435\u0439 \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b"))),c.a.createElement("div",{className:"info__section--container--second__block"},c.a.createElement("div",{className:"info__section--container--second__block--item"},c.a.createElement("img",{src:"img/icon-ok-04.svg",className:"info__section--container--second__block--item--logo",alt:""}),c.a.createElement("span",{className:"info__section--container--second__block--item--text"},"\u041c\u044b \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u043c \u043f\u043e\u0441\u0442\u0430\u0432\u043a\u0443 \u0438 \u0432\u043d\u0435\u0434\u0440\u0435\u043d\u0438\u0435 \u0432\u0441\u0435\u0433\u043e \u0441\u043f\u0435\u043a\u0442\u0440\u0430 \u0442\u0435\u0445\u043d\u0438\u043a\u0438 \u0438 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u0435\u0434\u043f\u0440\u0438\u044f\u0442\u0438\u044f.")),c.a.createElement("div",{className:"info__section--container--second__block--item"},c.a.createElement("img",{src:"img/icon-ok-05.svg",className:"info__section--container--second__block--item--logo",alt:""}),c.a.createElement("span",{className:"info__section--container--second__block--item--text"},"\u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c - \u043d\u0430\u0448\u0435 \u043a\u0440\u0435\u0434\u043e. \u041c\u044b \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u043c, \u043f\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c \u0438 \u0432\u043d\u0435\u0434\u0440\u044f\u0435\u043c \u043b\u0443\u0447\u0448\u0438\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043d\u0430 \u0440\u044b\u043d\u043a\u0435 \u043f\u043e \u043a\u043e\u043d\u043a\u0443\u0440\u0435\u043d\u0442\u043e\u0441\u043f\u043e\u0441\u043e\u0431\u043d\u044b\u043c \u0446\u0435\u043d\u0430\u043c.")))))},null),c.a.createElement(function(e){return c.a.createElement("section",{className:"contacts__section"},c.a.createElement("div",{className:"contacts__section--container"},c.a.createElement(h,null),c.a.createElement(b,null)))},null),c.a.createElement(v,null))),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.86f0fe42.chunk.js.map
