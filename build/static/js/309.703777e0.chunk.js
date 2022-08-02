"use strict";(self.webpackChunkkol_marketplace_new=self.webpackChunkkol_marketplace_new||[]).push([[309],{6309:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var o=n(2791),s=n(9085),r=n(6871),l=(n(5462),n(9434)),i=n(6313),a=(n(5518),n(7925),n(4483),n(184)),c=n(1413),h=n(4165),u=n(2982),d=n(5861),p=n(885),f=function(e,t){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},f(e,t)};var m=function(){return m=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},m.apply(this,arguments)};var g="Pixel",v="Percent",x={unit:v,value:.8};function b(e){return"number"===typeof e?{unit:v,value:100*e}:"string"===typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:g,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:v,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),x):(console.warn("scrollThreshold should be string or number"),x)}var j=function(e){function t(t){var n=e.call(this,t)||this;return n.lastScrollTop=0,n.actionTriggered=!1,n.startY=0,n.currentY=0,n.dragging=!1,n.maxPullDownDistance=0,n.getScrollableTarget=function(){return n.props.scrollableTarget instanceof HTMLElement?n.props.scrollableTarget:"string"===typeof n.props.scrollableTarget?document.getElementById(n.props.scrollableTarget):(null===n.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},n.onStart=function(e){n.lastScrollTop||(n.dragging=!0,e instanceof MouseEvent?n.startY=e.pageY:e instanceof TouchEvent&&(n.startY=e.touches[0].pageY),n.currentY=n.startY,n._infScroll&&(n._infScroll.style.willChange="transform",n._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},n.onMove=function(e){n.dragging&&(e instanceof MouseEvent?n.currentY=e.pageY:e instanceof TouchEvent&&(n.currentY=e.touches[0].pageY),n.currentY<n.startY||(n.currentY-n.startY>=Number(n.props.pullDownToRefreshThreshold)&&n.setState({pullToRefreshThresholdBreached:!0}),n.currentY-n.startY>1.5*n.maxPullDownDistance||n._infScroll&&(n._infScroll.style.overflow="visible",n._infScroll.style.transform="translate3d(0px, "+(n.currentY-n.startY)+"px, 0px)")))},n.onEnd=function(){n.startY=0,n.currentY=0,n.dragging=!1,n.state.pullToRefreshThresholdBreached&&(n.props.refreshFunction&&n.props.refreshFunction(),n.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame((function(){n._infScroll&&(n._infScroll.style.overflow="auto",n._infScroll.style.transform="none",n._infScroll.style.willChange="unset")}))},n.onScrollListener=function(e){"function"===typeof n.props.onScroll&&setTimeout((function(){return n.props.onScroll&&n.props.onScroll(e)}),0);var t=n.props.height||n._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;n.actionTriggered||((n.props.inverse?n.isElementAtTop(t,n.props.scrollThreshold):n.isElementAtBottom(t,n.props.scrollThreshold))&&n.props.hasMore&&(n.actionTriggered=!0,n.setState({showLoader:!0}),n.props.next&&n.props.next()),n.lastScrollTop=t.scrollTop)},n.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},n.throttledOnScrollListener=function(e,t,n,o){var s,r=!1,l=0;function i(){s&&clearTimeout(s)}function a(){var a=this,c=Date.now()-l,h=arguments;function u(){l=Date.now(),n.apply(a,h)}function d(){s=void 0}r||(o&&!s&&u(),i(),void 0===o&&c>e?u():!0!==t&&(s=setTimeout(o?d:u,void 0===o?e-c:e)))}return"boolean"!==typeof t&&(o=n,n=t,t=void 0),a.cancel=function(){i(),r=!0},a}(150,n.onScrollListener).bind(n),n.onStart=n.onStart.bind(n),n.onMove=n.onMove.bind(n),n.onEnd=n.onEnd.bind(n),n}return function(e,t){function n(){this.constructor=e}f(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.componentDidMount=function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},t.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},t.prototype.componentDidUpdate=function(e){this.props.dataLength!==e.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},t.getDerivedStateFromProps=function(e,t){return e.dataLength!==t.prevDataLength?m(m({},t),{prevDataLength:e.dataLength}):null},t.prototype.isElementAtTop=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,o=b(t);return o.unit===g?e.scrollTop<=o.value+n-e.scrollHeight+1:e.scrollTop<=o.value/100+n-e.scrollHeight+1},t.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,o=b(t);return o.unit===g?e.scrollTop+n>=e.scrollHeight-o.value:e.scrollTop+n>=o.value/100*e.scrollHeight},t.prototype.render=function(){var e=this,t=m({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),n=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),s=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return o.createElement("div",{style:s,className:"infinite-scroll-component__outerdiv"},o.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&o.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},o.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!n&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},t}(o.Component),w=j,y=n(3383),S=n(3504),T=n(9689),E=n(859),N=n(8690),L=function(){var e=(0,l.I0)(),t=(0,o.useState)({name:"",kolType:""}),n=(0,p.Z)(t,2),s=(n[0],n[1],localStorage.getItem("token")),i=(0,l.v9)(E.NQ),f=i.kolType,m=i.name,g=(i.message,i.isSuccess);console.log(g);var v=(0,r.s0)(),x=(0,o.useState)({}),b=(0,p.Z)(x,2),j=b[0],L=b[1],_=(0,o.useState)(""),k=(0,p.Z)(_,2),D=k[0],Y=k[1],Z=(0,o.useState)(""),M=(0,p.Z)(Z,2),C=M[0],R=M[1],O=(0,o.useState)(""),A=(0,p.Z)(O,2),F=A[0],B=A[1],P=(0,o.useState)({}),H=(0,p.Z)(P,2),I=H[0],U=H[1],z=(0,o.useState)({}),V=(0,p.Z)(z,2),W=V[0],$=V[1],q=(0,o.useState)(""),G=(0,p.Z)(q,2),J=G[0],Q=G[1],K=(0,o.useState)(""),X=(0,p.Z)(K,2),ee=X[0],te=X[1],ne=(0,o.useState)([]),oe=(0,p.Z)(ne,2),se=oe[0],re=oe[1],le=(0,o.useState)([]),ie=(0,p.Z)(le,2),ae=(ie[0],ie[1],(0,o.useState)(1)),ce=(0,p.Z)(ae,2),he=ce[0],ue=ce[1],de=((0,o.useRef)(!1),function(){var e=(0,d.Z)((0,h.Z)().mark((function e(){var t,n,o,r,l=arguments;return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:"normal",n="reset"===t?1:he,e.next=4,fetch("".concat(y.b,"/kol-profile/list?limit=").concat(2,"&page=").concat(n,"&languages=").concat(D||"","&stream=").concat(C||"","&state=").concat(F||"","&search=").concat(J||"","&kol_type=").concat(ee||""),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s)}});case 4:return o=e.sent,e.next=7,o.json();case 7:401===(r=e.sent).statusCode&&(localStorage.removeItem("token"),v("/login")),re([].concat((0,u.Z)(se),(0,u.Z)(r.kolProfiles))),ue((function(e){return e+1})),401==r.statusCode&&(localStorage.removeItem("token"),v("/login"));case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());(0,o.useEffect)((function(){Q(m),re([])}),[m]),(0,o.useEffect)((function(){te(f),re([])}),[f]),(0,o.useEffect)((function(){ue(1),de("reset")}),[D,C,F,J,ee]);(0,o.useEffect)((function(){(0,N.iZ)((function(e){L((0,c.Z)({},e))}))}),[]),(0,o.useEffect)((function(){(0,N.Ae)((function(e){$((0,c.Z)({},e))}))}),[]),(0,o.useEffect)((function(){(0,N.Rh)((function(e){U((0,c.Z)({},e))}))}),[]),console.log(se);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"row justify-content-between border-bottom pt-3 pb-4",children:[(0,a.jsxs)("div",{className:"col-lg-7 d-flex filter-col",children:[(0,a.jsxs)("select",{className:"form-select","aria-label":"Default select example",onChange:function(e){re([]),Y(e.target.value)},children:[(0,a.jsx)("option",{selected:!0,children:"Languages"}),j&&Object.entries(j).map((function(e){var t=(0,p.Z)(e,2),n=t[0],o=t[1];return(0,a.jsx)("option",{value:n,children:o})}))]}),(0,a.jsxs)("select",{className:"form-select mx-3","aria-label":"Default select example",onChange:function(e){re([]),R(e.target.value)},children:[(0,a.jsx)("option",{selected:!0,children:"Streams"}),W&&Object.entries(W).map((function(e){var t=(0,p.Z)(e,2),n=t[0],o=t[1];return(0,a.jsx)("option",{value:n,children:o})}))]}),(0,a.jsxs)("select",{className:"form-select","aria-label":"Default select example",onChange:function(e){re([]),B(e.target.value)},children:[(0,a.jsx)("option",{selected:!0,children:"Location"}),I&&Object.entries(I).map((function(e){var t=(0,p.Z)(e,2),n=t[0],o=t[1];return(0,a.jsx)("option",{value:n,children:o})}))]})]}),(0,a.jsxs)("div",{className:"col-lg-2 ml-auto",children:[" ",(0,a.jsxs)(T.Z,{children:[(0,a.jsx)(T.Z.Toggle,{variant:"",className:"sort",id:"dropdown-basic",children:"sort By"}),(0,a.jsxs)(T.Z.Menu,{children:[(0,a.jsx)(T.Z.Item,{children:"followers"}),(0,a.jsx)(T.Z.Item,{children:" Views"})]})]})]})]}),(0,a.jsx)(w,{dataLength:se.length,next:function(){return de()},hasMore:!0,endMessage:(0,a.jsx)("p",{style:{textAlign:"center"},children:(0,a.jsx)("b",{children:"Yay! You have seen it all"})}),children:se&&se.map((function(t,n){return(0,a.jsxs)("div",{className:"row justify-content-between py-4 list-row",children:[(0,a.jsx)("div",{className:"col-lg-3 py-2",children:(0,a.jsx)("div",{className:"kol-user-img",children:(0,a.jsxs)(S.rU,{to:"/details/".concat(t.profile_id),children:[" ",(0,a.jsx)("img",{src:t.avatar})]})})}),(0,a.jsxs)("div",{className:"col-lg-8 border-bottom  py-2",children:[(0,a.jsxs)("div",{className:"row justify-content-between",children:[(0,a.jsxs)("div",{className:"col-lg-8",children:[(0,a.jsxs)("h3",{className:"text-bold",children:[(0,a.jsx)(S.rU,{className:"headText",to:"/details/".concat(t.profile_id),children:t.username}),(0,a.jsx)("sup",{children:(0,a.jsx)("i",{className:"bi bi-patch-check-fill heading-icon"})})]}),(0,a.jsxs)("p",{children:["(",t.tags,")"]})]}),(0,a.jsx)("div",{className:"col-lg-4",children:(0,a.jsxs)("p",{className:"text-right",children:[(0,a.jsx)("i",{className:"bi bi-geo-alt mx-1 geo-icon"}),(0,a.jsxs)("span",{children:[t.city," ",t.state,",india"]}),(0,a.jsx)("span",{className:"book-icon",children:(0,a.jsx)("i",{className:"bi bi-bookmark mx-1 bookmark-icon ".concat(t.bookmark?"active":""),onClick:function(n){!function(t,n){n.target.classList.contains("active")?(n.target.classList.remove("active"),e((0,E.FY)({profileId:t,token:s}))):(n.target.classList.add("active"),e((0,E.Fo)({profileId:t,token:s})))}(t.profile_id,n)}})})]})})]}),(0,a.jsx)("div",{className:"row py-1",children:(0,a.jsxs)("div",{className:"col-lg-12 d-flex",children:[(0,a.jsxs)("h5",{className:"text-bold",children:["Languages:"," ",(0,a.jsx)("span",{className:"text-normal",children:t.languages})]}),t.SocialMedia.map((function(e,t){return(0,a.jsx)("ul",{className:"social-count-list",children:(0,a.jsxs)("li",{className:"",children:[(0,a.jsx)("span",{}),(0,a.jsx)("i",{className:e.social_icon})," ",e.followers,"k"]})},t)}))]})}),(0,a.jsx)("div",{className:"row py-1",children:(0,a.jsxs)("div",{className:"col-lg-12",children:[(0,a.jsx)("h5",{className:"text-bold",children:"Bio"}),(0,a.jsx)("div",{className:"kol-bio",children:(0,a.jsx)("p",{children:t.bio})})]})}),(0,a.jsxs)("div",{className:"row py-1",children:[(0,a.jsx)("div",{className:"col-lg-4 align-items-center d-flex",children:(0,a.jsxs)("div",{className:"more-button",children:["Mostly Active user",t.social_active]})}),(0,a.jsx)("div",{className:"col-lg-8 text-right",children:(0,a.jsx)(S.rU,{to:"/chat?id=".concat(t.user_id),children:(0,a.jsxs)("button",{className:"ml-auto btn theme-btn",children:[(0,a.jsx)("span",{className:"mx-2",children:(0,a.jsx)("i",{className:"bi bi-chat-dots"})})," ","Chat with me"]})})})]})]})]},n)}))})]})},_=function(){var e=(0,l.I0)(),t=(0,r.s0)(),n=(0,l.v9)(i.np),c=(n.isFetching,n.errorMessage),h=n.isError,u=n.isSuccess,d=localStorage.getItem("token");(0,o.useEffect)((function(){u&&s.Am.success(c)}),[d]);var p=(0,l.v9)(i.np);p.username,p.email;return(0,o.useEffect)((function(){h&&(e((0,i.Jo)()),t("/login"))}),[h]),(0,a.jsx)(a.Fragment,{children:d&&(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"card",children:(0,a.jsx)("div",{className:"card-body",children:(0,a.jsx)(L,{})})})})})}},5462:function(){}}]);
//# sourceMappingURL=309.703777e0.chunk.js.map