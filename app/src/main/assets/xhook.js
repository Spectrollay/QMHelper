(function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H=[].indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1};q=null,q="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:"undefined"!=typeof global?global:a,x=q.document,d="before",c="after",o="readyState",n="addEventListener",m="removeEventListener",h="dispatchEvent",u="XMLHttpRequest",g="fetch",i="FormData",p=["load","loadend","loadstart"],e=["progress","abort","error","timeout"],E="undefined"!=typeof navigator&&navigator.useragent?navigator.userAgent:"",A=parseInt((/msie (\d+)/.exec(E.toLowerCase())||[])[1]),isNaN(A)&&(A=parseInt((/trident\/.*; rv:(\d+)/.exec(E.toLowerCase())||[])[1])),(G=Array.prototype).indexOf||(G.indexOf=function(a){var b,c,d,e;for(b=d=0,e=this.length;d<e;b=++d)if(c=this[b],c===a)return b;return-1}),D=function(a,b){return Array.prototype.slice.call(a,b)},w=function(a){return"returnValue"===a||"totalSize"===a||"position"===a},z=function(a,b){var c;for(c in a)if(a[c],!w(c))try{b[c]=a[c]}catch(a){}return b},B=function(a){return void 0===a?null:a},C=function(a,b,c){var d,e,f,g;for(e=function(a){return function(d){var e,f,g;e={};for(f in d)w(f)||(g=d[f],e[f]=g===b?c:g);return c[h](a,e)}},f=0,g=a.length;f<g;f++)d=a[f],c._has(d)&&(b["on"+d]=e(d))},y=function(a){var b;if(x&&null!=x.createEventObject)return b=x.createEventObject(),b.type=a,b;try{return new Event(a)}catch(b){return{type:a}}},f=function(a){var c,d,e;return d={},e=function(a){return d[a]||[]},c={},c[n]=function(a,c,f){d[a]=e(a),d[a].indexOf(c)>=0||(f=f===b?d[a].length:f,d[a].splice(f,0,c))},c[m]=function(a,c){var f;if(a===b)return void(d={});c===b&&(d[a]=[]),f=e(a).indexOf(c),f!==-1&&e(a).splice(f,1)},c[h]=function(){var b,d,f,g,h,i,j,k;for(b=D(arguments),d=b.shift(),a||(b[0]=z(b[0],y(d))),g=c["on"+d],g&&g.apply(c,b),k=e(d).concat(e("*")),f=i=0,j=k.length;i<j;f=++i)h=k[f],h.apply(c,b)},c._has=function(a){return!(!d[a]&&!c["on"+a])},a&&(c.listeners=function(a){return D(e(a))},c.on=c[n],c.off=c[m],c.fire=c[h],c.once=function(a,b){var d;return d=function(){return c.off(a,d),b.apply(null,arguments)},c.on(a,d)},c.destroy=function(){return d={}}),c},F=f(!0),F.EventEmitter=f,F[d]=function(a,b){if(a.length<1||a.length>2)throw"invalid hook";return F[n](d,a,b)},F[c]=function(a,b){if(a.length<2||a.length>3)throw"invalid hook";return F[n](c,a,b)},F.enable=function(){q[u]=t,"function"==typeof r&&(q[g]=r),k&&(q[i]=s)},F.disable=function(){q[u]=F[u],q[g]=F[g],k&&(q[i]=k)},v=F.headers=function(a,b){var c,d,e,f,g,h,i,j,k;switch(null==b&&(b={}),typeof a){case"object":d=[];for(e in a)g=a[e],f=e.toLowerCase(),d.push(f+":\t"+g);return d.join("\n")+"\n";case"string":for(d=a.split("\n"),i=0,j=d.length;i<j;i++)c=d[i],/([^:]+):\s*(.+)/.test(c)&&(f=null!=(k=RegExp.$1)?k.toLowerCase():void 0,h=RegExp.$2,null==b[f]&&(b[f]=h));return b}},k=q[i],s=function(a){var b;this.fd=a?new k(a):new k,this.form=a,b=[],Object.defineProperty(this,"entries",{get:function(){var c;return c=a?D(a.querySelectorAll("input,select")).filter(function(a){var b;return"checkbox"!==(b=a.type)&&"radio"!==b||a.checked}).map(function(a){return[a.name,"file"===a.type?a.files:a.value]}):[],c.concat(b)}}),this.append=function(a){return function(){var c;return c=D(arguments),b.push(c),a.fd.append.apply(a.fd,c)}}(this)},k&&(F[i]=k,q[i]=s),l=q[u],F[u]=l,t=q[u]=function(){var a,b,g,i,j,k,l,m,q,r,t,w,x,y,D,E,G,I,J,K,L;a=-1,I=new F[u],t={},y=null,l=void 0,D=void 0,w=void 0,r=function(){var b,c,d,e;if(w.status=y||I.status,y===a&&A<10||(w.statusText=I.statusText),y!==a){e=v(I.getAllResponseHeaders());for(b in e)d=e[b],w.headers[b]||(c=b.toLowerCase(),w.headers[c]=d)}},q=function(){if(I.responseType&&"text"!==I.responseType)"document"===I.responseType?(w.xml=I.responseXML,w.data=I.responseXML):w.data=I.response;else{w.text=I.responseText,w.data=I.responseText;try{w.xml=I.responseXML}catch(a){}}"responseURL"in I&&(w.finalUrl=I.responseURL)},G=function(){k.status=w.status,k.statusText=w.statusText},E=function(){"text"in w&&(k.responseText=w.text),"xml"in w&&(k.responseXML=w.xml),"data"in w&&(k.response=w.data),"finalUrl"in w&&(k.responseURL=w.finalUrl)},i=function(a){for(;a>b&&b<4;)k[o]=++b,1===b&&k[h]("loadstart",{}),2===b&&G(),4===b&&(G(),E()),k[h]("readystatechange",{}),4===b&&(t.async===!1?g():setTimeout(g,0))},g=function(){l||k[h]("load",{}),k[h]("loadend",{}),l&&(k[o]=0)},b=0,x=function(a){var b,d;if(4!==a)return void i(a);b=F.listeners(c),(d=function(){var a;return b.length?(a=b.shift(),2===a.length?(a(t,w),d()):3===a.length&&t.async?a(t,w,d):d()):i(4)})()},k=t.xhr=f(),I.onreadystatechange=function(a){try{2===I[o]&&r()}catch(a){}4===I[o]&&(D=!1,r(),q()),x(I[o])},m=function(){l=!0},k[n]("error",m),k[n]("timeout",m),k[n]("abort",m),k[n]("progress",function(){b<3?x(3):k[h]("readystatechange",{})}),("withCredentials"in I||F.addWithCredentials)&&(k.withCredentials=!1),k.status=0,L=e.concat(p);for(J=0,K=L.length;J<K;J++)j=L[J],k["on"+j]=null;return k.open=function(a,c,d,e,f){b=0,l=!1,D=!1,t.headers={},t.headerNames={},t.status=0,w={},w.headers={},t.method=a,t.url=c,t.async=d!==!1,t.user=e,t.pass=f,x(1)},k.send=function(a){var b,c,f,g,h,i,j,l;for(l=["type","timeout","withCredentials"],i=0,j=l.length;i<j;i++)c=l[i],f="type"===c?"responseType":c,f in k&&(t[c]=k[f]);t.body=a,h=function(){var a,b,d,g,h,i;for(C(e,I,k),k.upload&&C(e.concat(p),I.upload,k.upload),D=!0,I.open(t.method,t.url,t.async,t.user,t.pass),h=["type","timeout","withCredentials"],d=0,g=h.length;d<g;d++)c=h[d],f="type"===c?"responseType":c,c in t&&(I[f]=t[c]);i=t.headers;for(a in i)b=i[a],a&&I.setRequestHeader(a,b);t.body instanceof s&&(t.body=t.body.fd),I.send(t.body)},b=F.listeners(d),(g=function(){var a,c;return b.length?(a=function(a){if("object"==typeof a&&("number"==typeof a.status||"number"==typeof w.status))return z(a,w),H.call(a,"data")<0&&(a.data=a.response||a.text),void x(4);g()},a.head=function(a){return z(a,w),x(2)},a.progress=function(a){return z(a,w),x(3)},c=b.shift(),1===c.length?a(c(t)):2===c.length&&t.async?c(t,a):a()):h()})()},k.abort=function(){y=a,D?I.abort():k[h]("abort",{})},k.setRequestHeader=function(a,b){var c,d;c=null!=a?a.toLowerCase():void 0,d=t.headerNames[c]=t.headerNames[c]||a,t.headers[d]&&(b=t.headers[d]+", "+b),t.headers[d]=b},k.getResponseHeader=function(a){var b;return b=null!=a?a.toLowerCase():void 0,B(w.headers[b])},k.getAllResponseHeaders=function(){return B(v(w.headers))},I.overrideMimeType&&(k.overrideMimeType=function(){return I.overrideMimeType.apply(I,arguments)}),I.upload&&(k.upload=t.upload=f()),k.UNSENT=0,k.OPENED=1,k.HEADERS_RECEIVED=2,k.LOADING=3,k.DONE=4,k.response="",k.responseText="",k.responseXML=null,k.readyState=0,k.statusText="",k},"function"==typeof q[g]&&(j=q[g],F[g]=j,r=q[g]=function(a,b){var e,f,g;return null==b&&(b={headers:{}}),b.url=a,g=null,f=F.listeners(d),e=F.listeners(c),new Promise(function(a,c){var d,h,i,k,l;h=function(){return b.body instanceof s&&(b.body=b.body.fd),b.headers&&(b.headers=new Headers(b.headers)),g||(g=new Request(b.url,b)),z(b,g)},i=function(b){var c;return e.length?(c=e.shift(),2===c.length?(c(h(),b),i(b)):3===c.length?c(h(),b,i):i(b)):a(b)},d=function(b){var c;if(void 0!==b)return c=new Response(b.body||b.text,b),a(c),void i(c);k()},k=function(){var a;return f.length?(a=f.shift(),1===a.length?d(a(b)):2===a.length?a(h(),d):void 0):void l()},l=function(){return j(h()).then(function(a){return i(a)}).catch(function(a){return i(a),c(a)})},k()})}),t.UNSENT=0,t.OPENED=1,t.HEADERS_RECEIVED=2,t.LOADING=3,t.DONE=4,"function"==typeof define&&define.amd?define("xhook",[],function(){return F}):"object"==typeof module&&module.exports?module.exports={xhook:F}:q&&(q.xhook=F)}).call(this,window);

window.XMLHttpRequest.prototype.addEventListener = xhook.addEventListener;

xhook.after(function(request, response) {
    response.text = hooker.hook(request.url, request.body, response.text)
});
