(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{209:function(t,e,n){},210:function(t,e,n){var r={"./vg_1.jpg":211,"./vg_10.jpg":212,"./vg_2.jpg":213,"./vg_3.jpg":214,"./vg_4.jpg":215,"./vg_5.jpg":216,"./vg_6.jpg":217,"./vg_7.jpg":218,"./vg_8.jpg":219,"./vg_9.jpg":220};function a(t){var e=c(t);return n(e)}function c(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}a.keys=function(){return Object.keys(r)},a.resolve=c,t.exports=a,a.id=210},211:function(t,e,n){t.exports=n.p+"static/media/vg_1.ce200e46.jpg"},212:function(t,e,n){t.exports=n.p+"static/media/vg_10.845494ce.jpg"},213:function(t,e,n){t.exports=n.p+"static/media/vg_2.73c0a678.jpg"},214:function(t,e,n){t.exports=n.p+"static/media/vg_3.1311d7c7.jpg"},215:function(t,e,n){t.exports=n.p+"static/media/vg_4.e65e888b.jpg"},216:function(t,e,n){t.exports=n.p+"static/media/vg_5.70e1d38a.jpg"},217:function(t,e,n){t.exports=n.p+"static/media/vg_6.a43cc8f9.jpg"},218:function(t,e,n){t.exports=n.p+"static/media/vg_7.e1ff9886.jpg"},219:function(t,e,n){t.exports=n.p+"static/media/vg_8.8c98fe1f.jpg"},220:function(t,e,n){t.exports=n.p+"static/media/vg_9.21e67d68.jpg"},221:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(71),o=n.n(c),i=(n(80),n(9)),u=n.n(i),s=n(42),p=n(72),f=n(4),g=n(3),v=n(10),d=n(74),j=n(73),l=n.n(j);n(209);var m,b=(m=n(210)).keys().map(function(t){return m(t)}).reverse(),O=function(t){return{x:0,y:-4*t,scale:1,rot:20*Math.random()-10,delay:100*t}},x=function(t){return Object(g.a)({x:0,y:-4*t,rot:0,scale:1.5},"y",-1e3)},w=function(t,e){return"perspective(1500px) rotateX(30deg) rotateY(".concat(t/10,"deg) rotateZ(").concat(t,"deg) scale(").concat(e,")")};var _=function(){var t=Object(r.useState)(function(){return new Set}),e=Object(f.a)(t,1)[0],n=Object(v.c)(b.length,function(t){return Object(p.a)({},O(t),{from:x(t)})}),c=Object(f.a)(n,2),o=c[0],i=c[1],g=Object(r.useState)([]),j=Object(f.a)(g,2),m=j[0],_=j[1];Object(r.useEffect)(function(){!function(){var t=Object(s.a)(u.a.mark(function t(){var e,n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=b.map(function(){var t=Object(s.a)(u.a.mark(function t(e){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l()(e).then(function(t){return t[0]});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()),t.next=3,Promise.all(e);case 3:n=t.sent,_(n);case 5:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()()},[b]);var h=Object(r.useState)(b.length-1),y=Object(f.a)(h,2),k=y[0],E=y[1];Object(r.useEffect)(function(){document.getElementById("root").style.backgroundColor=m[k]},[k,m]);var S=Object(d.a)(function(t){var n=Object(f.a)(t.args,1)[0],r=t.down,a=Object(f.a)(t.delta,1)[0],c=(t.distance,Object(f.a)(t.direction,1)[0]),o=t.velocity,u=o>.2;if(!r&&u){var s=n-1;s<0&&(s=b.length-1),E(s)}var p=c<0?-1:1;!r&&u&&e.add(n),i(function(t){if(n===t){var c=e.has(n);return{x:c?(200+window.innerWidth)*p:r?a:0,rot:a/100+(c?10*p*o:0),scale:r?1.1:1,delay:void 0,config:{friction:50,tension:r?800:c?200:500}}}}),r||e.size!==b.length||setTimeout(function(){return e.clear()||i(function(t){return O(t)})},600)});return o.map(function(t,e){var n=t.x,r=t.y,c=t.rot,o=t.scale;return a.a.createElement(v.a.div,{key:e,style:{transform:Object(v.b)([n,r],function(t,e){return"translate3d(".concat(t,"px,").concat(e,"px,0)")})}},a.a.createElement(v.a.div,Object.assign({},S(e),{style:{transform:Object(v.b)([c,o],w),backgroundImage:"url(".concat(b[e],")")}})))})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},75:function(t,e,n){t.exports=n(221)},80:function(t,e,n){}},[[75,1,2]]]);
//# sourceMappingURL=main.da96833d.chunk.js.map