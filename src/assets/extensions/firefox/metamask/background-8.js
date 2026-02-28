LavaPack.loadBundle([[585,{"../../../shared/lib/sentry":5992,"@metamask/network-controller":2426,"@metamask/utils":3207,lodash:4940,uuid:5835},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.MEGAETH_TESTNET_V2_CONFIG=n.MEGAETH_TESTNET_V1_CHAIN_ID=void 0,n.migrate=async function(e,t){e.meta.version=c;const n=(0,i.cloneDeep)(e),o=new Set;try{!function(e,t){const n=function(e){if(!(0,r.hasProperty)(e,"NetworkController"))return(0,a.captureException)(new Error(`Migration ${c}: Invalid NetworkController state: missing NetworkController`)),undefined;const t=e.NetworkController;if(!function(e){if(!(0,r.isObject)(e))return(0,a.captureException)(new Error(`Migration ${c}: Invalid NetworkController state: NetworkController state is not an object: '${typeof e}'`)),!1;if(!(0,r.hasProperty)(e,"networkConfigurationsByChainId"))return(0,a.captureException)(new Error(`Migration ${c}: Invalid NetworkController state: missing networkConfigurationsByChainId property`)),!1;if(!function(e){return(0,r.isObject)(e)&&Object.entries(e).every(([e])=>"string"==typeof e&&(0,r.isHexString)(e))}(e.networkConfigurationsByChainId))return(0,a.captureException)(new Error(`Migration ${c}: Invalid NetworkController state: networkConfigurationsByChainId is not a valid Record<Hex, unknown>`)),!1;if(!(0,r.hasProperty)(e,"selectedNetworkClientId"))return(0,a.captureException)(new Error(`Migration ${c}: Invalid NetworkController state: missing selectedNetworkClientId property`)),!1;if("string"!=typeof e.selectedNetworkClientId)return(0,a.captureException)(new Error(`Migration ${c}: Invalid NetworkController state: selectedNetworkClientId is not a string: '${typeof e.selectedNetworkClientId}'`)),!1;return!0}(t))return undefined;return t}(e);if(n===undefined)return console.warn(`Migration ${c}: Missing or invalid NetworkController state, skip the migration`),e;t.add("NetworkController");const{networkConfigurationsByChainId:o,selectedNetworkClientId:i}=n;if((0,r.hasProperty)(o,u.chainId)){const t=o[u.chainId];if(!d(t))return console.warn(`Migration ${c}: Invalid MegaETH Testnet v2 network configuration, skip the migration`),e;!function(e){e.name=u.name,e.nativeCurrency=u.nativeCurrency;const t=e.rpcEndpoints.find(e=>e.url===u.rpcEndpoints[0].url);t||(e.rpcEndpoints.push({failoverUrls:[],networkClientId:(0,s.v4)(),type:"custom",url:u.rpcEndpoints[0].url}),e.defaultRpcEndpointIndex=e.rpcEndpoints.length-1);const n=e.blockExplorerUrls.find(e=>e===u.blockExplorerUrls[0]);n||(e.blockExplorerUrls.push(u.blockExplorerUrls[0]),e.defaultBlockExplorerUrlIndex=e.blockExplorerUrls.length-1)}(t)}else n.networkConfigurationsByChainId[u.chainId]=u;("megaeth-testnet"===i||function(e,t,n){if(!(0,r.hasProperty)(n,e))return!1;const o=n[e];return d(o)&&o.rpcEndpoints.some(e=>e.networkClientId===t)}(l,i,o))&&(n.selectedNetworkClientId="mainnet");const f=function(e){if(!(0,r.hasProperty)(e,"NetworkEnablementController"))return undefined;const t=e.NetworkEnablementController;if(!function(e){if(!(0,r.isObject)(e))return(0,a.captureException)(new Error(`Migration ${c}: Invalid NetworkEnablementController state: '${typeof e}'`)),!1;if(!(0,r.hasProperty)(e,"enabledNetworkMap"))return(0,a.captureException)(new Error(`Migration ${c}: Invalid NetworkEnablementController state: missing property enabledNetworkMap.`)),!1;if(!(0,r.isObject)(e.enabledNetworkMap))return(0,a.captureException)(new Error(`Migration ${c}: Invalid NetworkEnablementController state: NetworkEnablementController.enabledNetworkMap is not an object: ${typeof e.enabledNetworkMap}.`)),!1;if(!(0,r.hasProperty)(e.enabledNetworkMap,r.KnownCaipNamespace.Eip155))return(0,a.captureException)(new Error(`Migration ${c}: Invalid NetworkEnablementController state: NetworkEnablementController.enabledNetworkMap missing property Eip155.`)),!1;if(!h(e.enabledNetworkMap[r.KnownCaipNamespace.Eip155]))return(0,a.captureException)(new Error(`Migration ${c}: Invalid NetworkEnablementController state: NetworkEnablementController.enabledNetworkMap[Eip155] is not a valid enabledNetworkMap.`)),!1;return!0}(t))return undefined;return t}(e);if(f===undefined)console.warn(`Migration ${c}: Missing or invalid NetworkEnablementController state, skip the NetworkEnablementController migration`);else{t.add("NetworkEnablementController");const e=f.enabledNetworkMap[r.KnownCaipNamespace.Eip155];(0,r.hasProperty)(e,u.chainId)||(f.enabledNetworkMap[r.KnownCaipNamespace.Eip155][u.chainId]=!1);const o=(0,r.hasProperty)(e,l),i=o&&!0===e[l];!function(e){if((0,r.isObject)(e)){let t=0;const n=Object.values(e);for(const e of n)if(h(e)&&(t+=Object.values(e).filter(Boolean).length),t>1)return!0}return!1}(f.enabledNetworkMap)&&i&&(f.enabledNetworkMap[r.KnownCaipNamespace.Eip155]["0x1"]=!0,n.selectedNetworkClientId="mainnet"),o&&delete f.enabledNetworkMap[r.KnownCaipNamespace.Eip155][l]}(0,r.hasProperty)(o,l)&&delete n.networkConfigurationsByChainId[l]}(n.data,o),e.data=n.data,o.forEach(e=>t.add(e))}catch(e){console.error(e);const t=new Error(`Migration #${c}: ${(0,r.getErrorMessage)(e)}`);(0,a.captureException)(t)}},n.version=void 0;var r=e("@metamask/utils"),o=e("@metamask/network-controller"),i=e("lodash"),s=e("uuid"),a=e("../../../shared/lib/sentry");const c=n.version=186,l=n.MEGAETH_TESTNET_V1_CHAIN_ID="0x18c6",u=n.MEGAETH_TESTNET_V2_CONFIG={chainId:"0x18c7",name:"MegaETH Testnet",nativeCurrency:"MegaETH",blockExplorerUrls:["https://megaeth-testnet-v2.blockscout.com"],defaultRpcEndpointIndex:0,defaultBlockExplorerUrlIndex:0,rpcEndpoints:[{failoverUrls:[],networkClientId:"megaeth-testnet-v2",type:o.RpcEndpointType.Custom,url:"https://carrot.megaeth.com/rpc"}]};function d(e){return(0,r.isObject)(e)&&(0,r.hasProperty)(e,"chainId")&&"string"==typeof e.chainId&&(0,r.isHexString)(e.chainId)&&(0,r.hasProperty)(e,"rpcEndpoints")&&Array.isArray(e.rpcEndpoints)&&e.rpcEndpoints.every(f)&&(0,r.hasProperty)(e,"name")&&"string"==typeof e.name&&(0,r.hasProperty)(e,"nativeCurrency")&&"string"==typeof e.nativeCurrency&&(0,r.hasProperty)(e,"blockExplorerUrls")&&Array.isArray(e.blockExplorerUrls)&&e.blockExplorerUrls.every(e=>"string"==typeof e)&&(0,r.hasProperty)(e,"defaultRpcEndpointIndex")&&"number"==typeof e.defaultRpcEndpointIndex&&(!(0,r.hasProperty)(e,"defaultBlockExplorerUrlIndex")||(0,r.hasProperty)(e,"defaultBlockExplorerUrlIndex")&&"number"==typeof e.defaultBlockExplorerUrlIndex)}function f(e){return(0,r.isObject)(e)&&(0,r.hasProperty)(e,"networkClientId")&&"string"==typeof e.networkClientId&&(0,r.hasProperty)(e,"url")&&"string"==typeof e.url}function h(e){return(0,r.isObject)(e)&&Object.entries(e).every(([e,t])=>"string"==typeof e&&"boolean"==typeof t)}}}},{package:"$root$",file:"app/scripts/migrations/186.ts"}],[5852,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){t.exports=function e(t,n){var i,s=0,a=0,c=n=n||0,l=t.length;do{if(c>=l||a>49)throw e.bytes=0,new RangeError("Could not decode varint");i=t[c++],s+=a<28?(i&o)<<a:(i&o)*Math.pow(2,a),a+=7}while(i>=r);return e.bytes=c-n,s};var r=128,o=127}}},{package:"sass-embedded>varint",file:"node_modules/varint/decode.js"}],[5853,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){t.exports=function e(t,n,s){if(Number.MAX_SAFE_INTEGER&&t>Number.MAX_SAFE_INTEGER)throw e.bytes=0,new RangeError("Could not encode varint");n=n||[];var a=s=s||0;for(;t>=i;)n[s++]=255&t|r,t/=128;for(;t&o;)n[s++]=255&t|r,t>>>=7;return n[s]=0|t,e.bytes=s-a+1,n};var r=128,o=-128,i=Math.pow(2,31)}}},{package:"sass-embedded>varint",file:"node_modules/varint/encode.js"}],[5854,{"./decode.js":5852,"./encode.js":5853,"./length.js":5855},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){t.exports={encode:e("./encode.js"),decode:e("./decode.js"),encodingLength:e("./length.js")}}}},{package:"sass-embedded>varint",file:"node_modules/varint/index.js"}],[5855,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){var r=Math.pow(2,7),o=Math.pow(2,14),i=Math.pow(2,21),s=Math.pow(2,28),a=Math.pow(2,35),c=Math.pow(2,42),l=Math.pow(2,49),u=Math.pow(2,56),d=Math.pow(2,63);t.exports=function(e){return e<r?1:e<o?2:e<i?3:e<s?4:e<a?5:e<c?6:e<l?7:e<u?8:e<d?9:10}}}},{package:"sass-embedded>varint",file:"node_modules/varint/length.js"}],[586,{"../../../shared/lib/sentry":5992,"@metamask/utils":3207},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.migrate=async function(e,t){e.meta.version=i;try{(function(e){if(!(0,r.hasProperty)(e,"TransactionController")){var t,n;return null===(t=global.sentry)||void 0===t||null===(n=t.captureException)||void 0===n||n.call(t,new Error(`Migration ${i}: state.TransactionController is not defined`)),!1}const o=e.TransactionController;if(!(0,r.isObject)(o)){var s,a;return null===(s=global.sentry)||void 0===s||null===(a=s.captureException)||void 0===a||a.call(s,new Error(`Migration ${i}: typeof state.TransactionController is ${typeof o}`)),!1}if(!(0,r.hasProperty)(o,"transactions"))return console.warn(`Migration ${i}: state.TransactionController.transactions not found, skipping.`),!1;if(!Array.isArray(o.transactions)){var c,l;return null===(c=global.sentry)||void 0===c||null===(l=c.captureException)||void 0===l||l.call(c,new Error(`Migration ${i}: state.TransactionController.transactions is not an array: ${typeof o.transactions}`)),!1}return o.transactions=o.transactions.map(e=>{if(!(0,r.isObject)(e))return e;const t={...e};return delete t.history,delete t.sendFlowHistory,t}),!0})(e.data)&&t.add("TransactionController")}catch(e){console.error(e);const t=new Error(`Migration #${i} failed: ${(0,r.getErrorMessage)(e)}`);(0,o.captureException)(t)}},n.version=void 0;var r=e("@metamask/utils"),o=e("../../../shared/lib/sentry");const i=n.version=187}}},{package:"$root$",file:"app/scripts/migrations/187.ts"}],[5863,{util:5834},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){n.TextEncoder="undefined"!=typeof TextEncoder?TextEncoder:e("util").TextEncoder,n.TextDecoder="undefined"!=typeof TextDecoder?TextDecoder:e("util").TextDecoder}}},{package:"@ensdomains/content-hash>multihashes>web-encoding",file:"node_modules/web-encoding/src/lib.js"}],[5865,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){!function(e,r){"object"==typeof n&&void 0!==t?r(n):"function"==typeof define&&define.amd?define(["exports"],r):r(e.WHATWGFetch={})}(this,function(e){var t="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||"undefined"!=typeof global&&global||{},n="URLSearchParams"in t,r="Symbol"in t&&"iterator"in Symbol,o="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(e){return!1}}(),i="FormData"in t,s="ArrayBuffer"in t;if(s)var a=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],c=ArrayBuffer.isView||function(e){return e&&a.indexOf(Object.prototype.toString.call(e))>-1};function l(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||""===e)throw new TypeError('Invalid character in header field name: "'+e+'"');return e.toLowerCase()}function u(e){return"string"!=typeof e&&(e=String(e)),e}function d(e){var t={next:function(){var t=e.shift();return{done:t===undefined,value:t}}};return r&&(t[Symbol.iterator]=function(){return t}),t}function f(e){this.map={},e instanceof f?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){if(2!=e.length)throw new TypeError("Headers constructor: expected name/value pair to be length 2, found"+e.length);this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function h(e){if(!e._noBody)return e.bodyUsed?Promise.reject(new TypeError("Already read")):void(e.bodyUsed=!0)}function p(e){return new Promise(function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}})}function g(e){var t=new FileReader,n=p(t);return t.readAsArrayBuffer(e),n}function m(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function b(){return this.bodyUsed=!1,this._initBody=function(e){var t;this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:o&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:i&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:n&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():s&&o&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=m(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s&&(ArrayBuffer.prototype.isPrototypeOf(e)||c(e))?this._bodyArrayBuffer=m(e):this._bodyText=e=Object.prototype.toString.call(e):(this._noBody=!0,this._bodyText=""),this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o&&(this.blob=function(){var e=h(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))}),this.arrayBuffer=function(){if(this._bodyArrayBuffer){var e=h(this);return e||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}if(o)return this.blob().then(g);throw new Error("could not read as ArrayBuffer")},this.text=function(){var e,t,n,r,o,i=h(this);if(i)return i;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,n=p(t),r=/charset=([A-Za-z0-9_-]+)/.exec(e.type),o=r?r[1]:"utf-8",t.readAsText(e,o),n;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},i&&(this.formData=function(){return this.text().then(v)}),this.json=function(){return this.text().then(JSON.parse)},this}f.prototype.append=function(e,t){e=l(e),t=u(t);var n=this.map[e];this.map[e]=n?n+", "+t:t},f.prototype.delete=function(e){delete this.map[l(e)]},f.prototype.get=function(e){return e=l(e),this.has(e)?this.map[e]:null},f.prototype.has=function(e){return this.map.hasOwnProperty(l(e))},f.prototype.set=function(e,t){this.map[l(e)]=u(t)},f.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},f.prototype.keys=function(){var e=[];return this.forEach(function(t,n){e.push(n)}),d(e)},f.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),d(e)},f.prototype.entries=function(){var e=[];return this.forEach(function(t,n){e.push([n,t])}),d(e)},r&&(f.prototype[Symbol.iterator]=f.prototype.entries);var w=["CONNECT","DELETE","GET","HEAD","OPTIONS","PATCH","POST","PUT","TRACE"];function y(e,n){if(!(this instanceof y))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var r,o,i=(n=n||{}).body;if(e instanceof y){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,n.headers||(this.headers=new f(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,i||null==e._bodyInit||(i=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=n.credentials||this.credentials||"same-origin",!n.headers&&this.headers||(this.headers=new f(n.headers)),this.method=(r=n.method||this.method||"GET",o=r.toUpperCase(),w.indexOf(o)>-1?o:r),this.mode=n.mode||this.mode||null,this.signal=n.signal||this.signal||function(){if("AbortController"in t)return(new AbortController).signal}(),this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&i)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(i),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==n.cache&&"no-cache"!==n.cache)){var s=/([?&])_=[^&]*/;if(s.test(this.url))this.url=this.url.replace(s,"$1_="+(new Date).getTime());else{this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}function v(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var n=e.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(o))}}),t}function k(e,t){if(!(this instanceof k))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');if(t||(t={}),this.type="default",this.status=t.status===undefined?200:t.status,this.status<200||this.status>599)throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");this.ok=this.status>=200&&this.status<300,this.statusText=t.statusText===undefined?"":""+t.statusText,this.headers=new f(t.headers),this.url=t.url||"",this._initBody(e)}y.prototype.clone=function(){return new y(this,{body:this._bodyInit})},b.call(y.prototype),b.call(k.prototype),k.prototype.clone=function(){return new k(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new f(this.headers),url:this.url})},k.error=function(){var e=new k(null,{status:200,statusText:""});return e.ok=!1,e.status=0,e.type="error",e};var C=[301,302,303,307,308];k.redirect=function(e,t){if(-1===C.indexOf(t))throw new RangeError("Invalid status code");return new k(null,{status:t,headers:{location:e}})},e.DOMException=t.DOMException;try{new e.DOMException}catch(t){e.DOMException=function(e,t){this.message=e,this.name=t;var n=Error(e);this.stack=n.stack},e.DOMException.prototype=Object.create(Error.prototype),e.DOMException.prototype.constructor=e.DOMException}function E(n,r){return new Promise(function(i,a){var c=new y(n,r);if(c.signal&&c.signal.aborted)return a(new e.DOMException("Aborted","AbortError"));var d=new XMLHttpRequest;function h(){d.abort()}if(d.onload=function(){var e,t,n={statusText:d.statusText,headers:(e=d.getAllResponseHeaders()||"",t=new f,e.replace(/\r?\n[\t ]+/g," ").split("\r").map(function(e){return 0===e.indexOf("\n")?e.substr(1,e.length):e}).forEach(function(e){var n=e.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();try{t.append(r,o)}catch(e){console.warn("Response "+e.message)}}}),t)};0===c.url.indexOf("file://")&&(d.status<200||d.status>599)?n.status=200:n.status=d.status,n.url="responseURL"in d?d.responseURL:n.headers.get("X-Request-URL");var r="response"in d?d.response:d.responseText;setTimeout(function(){i(new k(r,n))},0)},d.onerror=function(){setTimeout(function(){a(new TypeError("Network request failed"))},0)},d.ontimeout=function(){setTimeout(function(){a(new TypeError("Network request timed out"))},0)},d.onabort=function(){setTimeout(function(){a(new e.DOMException("Aborted","AbortError"))},0)},d.open(c.method,function(e){try{return""===e&&t.location.href?t.location.href:e}catch(t){return e}}(c.url),!0),"include"===c.credentials?d.withCredentials=!0:"omit"===c.credentials&&(d.withCredentials=!1),"responseType"in d&&(o?d.responseType="blob":s&&(d.responseType="arraybuffer")),r&&"object"==typeof r.headers&&!(r.headers instanceof f||t.Headers&&r.headers instanceof t.Headers)){var p=[];Object.getOwnPropertyNames(r.headers).forEach(function(e){p.push(l(e)),d.setRequestHeader(e,u(r.headers[e]))}),c.headers.forEach(function(e,t){-1===p.indexOf(t)&&d.setRequestHeader(t,e)})}else c.headers.forEach(function(e,t){d.setRequestHeader(t,e)});c.signal&&(c.signal.addEventListener("abort",h),d.onreadystatechange=function(){4===d.readyState&&c.signal.removeEventListener("abort",h)}),d.send(void 0===c._bodyInit?null:c._bodyInit)})}E.polyfill=!0,t.fetch||(t.fetch=E,t.Headers=f,t.Request=y,t.Response=k),e.Headers=f,e.Request=y,e.Response=k,e.fetch=E,Object.defineProperty(e,"__esModule",{value:!0})})}}},{package:"@open-rpc/test-coverage>isomorphic-fetch>whatwg-fetch",file:"node_modules/whatwg-fetch/dist/fetch.umd.js"}],[587,{"../../../shared/constants/network":5896,"../../../shared/lib/sentry":5992,"@metamask/network-controller":2426,"@metamask/utils":3207,_process:5191,lodash:4940},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){(function(t){(function(){Object.defineProperty(n,"__esModule",{value:!0}),n.migrate=async function(e,n){e.meta.version=c;try{a=e.data,(0,o.hasProperty)(a,"NetworkController")&&(0,o.isObject)(a.NetworkController)&&(0,o.hasProperty)(a.NetworkController,"networkConfigurationsByChainId")&&(0,o.isObject)(a.NetworkController.networkConfigurationsByChainId)&&(!function(e){const{networkConfigurationsByChainId:n}=e.NetworkController,a=n[l];if(!a)return;if(u=a,!((0,o.isObject)(u)&&(0,o.hasProperty)(u,"rpcEndpoints")&&Array.isArray(u.rpcEndpoints)))return void(0,s.captureException)(new Error(`Migration ${c}: Monad network configuration has invalid rpcEndpoints structure.`));var u;a.rpcEndpoints=a.rpcEndpoints.map(e=>{if(!function(e){return(0,o.isObject)(e)&&(0,o.hasProperty)(e,"url")&&"string"==typeof e.url&&(!(0,o.hasProperty)(e,"failoverUrls")||(0,o.hasProperty)(e,"failoverUrls")&&Array.isArray(e.failoverUrls)&&e.failoverUrls.every(e=>"string"==typeof e))}(e))return e;if(e.failoverUrls&&Array.isArray(e.failoverUrls)&&e.failoverUrls.length>0)return e;if(!function(e){if(e.type===r.RpcEndpointType.Infura)return!0;const n=/^https:\/\/(.+?)\.infura\.io\/v3\//u,o=e.url.match(n);if(!o)return!1;{const n=`https://${o[1]}.infura.io/v3/${(0,i.escapeRegExp)(t.env.INFURA_PROJECT_ID)}`;return e.url.startsWith(n)}return!0}(e))return e;const n="https://icy-attentive-sky.monad-mainnet.quiknode.pro/a7e9228229f88a7c30b3f12c1c534de7fb89a879/";return n?{...e,failoverUrls:[n]}:e})}(e.data),n.add("NetworkController"))}catch(e){console.error(e);const t=new Error(`Migration #${c}: ${(0,o.getErrorMessage)(e)}`);throw(0,s.captureException)(t),t}var a},n.version=void 0;var r=e("@metamask/network-controller"),o=e("@metamask/utils"),i=e("lodash"),s=e("../../../shared/lib/sentry"),a=e("../../../shared/constants/network");const c=n.version=188,l=a.CHAIN_IDS.MONAD}).call(this)}).call(this,e("_process"))}}},{package:"$root$",file:"app/scripts/migrations/188.ts"}],[5873,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.METAMETRICS_FINALIZE_EVENT_FRAGMENT_ALARM=n.AUTO_LOCK_TIMEOUT_ALARM=void 0;n.AUTO_LOCK_TIMEOUT_ALARM="AUTO_LOCK_TIMEOUT_ALARM",n.METAMETRICS_FINALIZE_EVENT_FRAGMENT_ALARM="METAMETRICS_FINALIZE_EVENT_FRAGMENT_ALARM"}}},{package:"$root$",file:"shared/constants/alarms.js"}],[588,{"../../../shared/constants/network":5896,"../../../shared/lib/sentry":5992,"@metamask/utils":3207,lodash:4940,uuid:5835},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.MEGAETH_MAINNET_CHAIN_ID=void 0,n.migrate=async function(e,t){e.meta.version=c;const n=(0,o.cloneDeep)(e),d=new Set;try{!function(e,t){const n=function(e){if(!(0,r.hasProperty)(e,"NetworkController"))return(0,s.captureException)(new Error(`Migration ${c}: Invalid NetworkController state: missing NetworkController`)),undefined;const t=e.NetworkController;if(!function(e){if(!(0,r.isObject)(e))return(0,s.captureException)(new Error(`Migration ${c}: Invalid NetworkController state: NetworkController state is not an object: '${typeof e}'`)),!1;if(!(0,r.hasProperty)(e,"networkConfigurationsByChainId"))return(0,s.captureException)(new Error(`Migration ${c}: Invalid NetworkController state: missing networkConfigurationsByChainId property`)),!1;if(!function(e){return(0,r.isObject)(e)&&Object.entries(e).every(([e])=>"string"==typeof e&&(0,r.isHexString)(e))}(e.networkConfigurationsByChainId))return(0,s.captureException)(new Error(`Migration ${c}: Invalid NetworkController state: networkConfigurationsByChainId is not a valid Record<Hex, unknown>`)),!1;if(!(0,r.hasProperty)(e,"selectedNetworkClientId"))return(0,s.captureException)(new Error(`Migration ${c}: Invalid NetworkController state: missing selectedNetworkClientId property`)),!1;if("string"!=typeof e.selectedNetworkClientId)return(0,s.captureException)(new Error(`Migration ${c}: Invalid NetworkController state: selectedNetworkClientId is not a string: '${typeof e.selectedNetworkClientId}'`)),!1;return!0}(t))return undefined;return t}(e);if(n===undefined)return e;const{networkConfigurationsByChainId:o}=n;if((0,r.hasProperty)(o,l)){const n=o[l];if(d=n,!((0,r.isObject)(d)&&(0,r.hasProperty)(d,"chainId")&&"string"==typeof d.chainId&&(0,r.isHexString)(d.chainId)&&(0,r.hasProperty)(d,"rpcEndpoints")&&Array.isArray(d.rpcEndpoints)&&d.rpcEndpoints.every(u)&&(0,r.hasProperty)(d,"name")&&"string"==typeof d.name&&(0,r.hasProperty)(d,"nativeCurrency")&&"string"==typeof d.nativeCurrency&&(0,r.hasProperty)(d,"blockExplorerUrls")&&Array.isArray(d.blockExplorerUrls)&&d.blockExplorerUrls.every(e=>"string"==typeof e)&&(0,r.hasProperty)(d,"defaultRpcEndpointIndex")&&"number"==typeof d.defaultRpcEndpointIndex&&(!(0,r.hasProperty)(d,"defaultBlockExplorerUrlIndex")||(0,r.hasProperty)(d,"defaultBlockExplorerUrlIndex")&&"number"==typeof d.defaultBlockExplorerUrlIndex)))return console.warn(`Migration ${c}: Invalid MegaETH Mainnet network configuration, skip the migration`),e;!function(e){if(a.infuraProjectId){const t=`https://megaeth-mainnet.infura.io/v3/${a.infuraProjectId}`;e.rpcEndpoints.find(e=>e.url===t)||(e.rpcEndpoints.push({failoverUrls:[],networkClientId:(0,i.v4)(),type:"custom",url:t}),e.defaultRpcEndpointIndex=e.rpcEndpoints.length-1)}else(0,s.captureException)(new Error(`Migration ${c}: Infura project ID is not set, skip the MegaETH RPC part of the migration`));const t="https://megaeth.blockscout.com",n=e.blockExplorerUrls.find(e=>e.includes(t));n||(e.blockExplorerUrls.push(t),e.defaultBlockExplorerUrlIndex=e.blockExplorerUrls.length-1)}(n),t.add("NetworkController")}var d}(n.data,d),e.data=n.data,d.forEach(e=>t.add(e))}catch(e){console.error(e);const t=new Error(`Migration #${c}: ${(0,r.getErrorMessage)(e)}`);(0,s.captureException)(t)}},n.version=void 0;var r=e("@metamask/utils"),o=e("lodash"),i=e("uuid"),s=e("../../../shared/lib/sentry"),a=e("../../../shared/constants/network");const c=n.version=189,l=n.MEGAETH_MAINNET_CHAIN_ID="0x10e6";function u(e){return(0,r.isObject)(e)&&(0,r.hasProperty)(e,"networkClientId")&&"string"==typeof e.networkClientId&&(0,r.hasProperty)(e,"url")&&"string"==typeof e.url}}}},{package:"$root$",file:"app/scripts/migrations/189.ts"}],[5883,{"@metamask/keyring-api":2300},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.ETH_EOA_METHODS=n.ETH_4337_METHODS=void 0;var r=e("@metamask/keyring-api");n.ETH_EOA_METHODS=[r.EthMethod.PersonalSign,r.EthMethod.SignTransaction,r.EthMethod.SignTypedDataV1,r.EthMethod.SignTypedDataV3,r.EthMethod.SignTypedDataV4],n.ETH_4337_METHODS=[r.EthMethod.PrepareUserOperation,r.EthMethod.PatchUserOperation,r.EthMethod.SignUserOperation]}}},{package:"$root$",file:"shared/constants/eth-methods.ts"}],[589,{"@metamask/transaction-controller":3085,lodash:4940},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,n){return function(i){const s=(0,r.cloneDeep)(i);s.meta.version=e;try{const e=function(e,t,n){const r=e,{TransactionController:i}=r;if(i&&i.transactions){const{transactions:e}=i;r.TransactionController.transactions=e.map(e=>t(e)?(e.status=o.TransactionStatus.failed,e.err={message:n,note:`Tx automatically failed by migration because ${n}`},e):e)}return r}(s.data,n,t);s.data=e}catch(t){console.warn(`MetaMask Migration #${e}${t.stack}`)}return Promise.resolve(s)}};var r=e("lodash"),o=e("@metamask/transaction-controller")}}},{package:"$root$",file:"app/scripts/migrations/fail-tx.js"}],[5890,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.LOG_EVENT=void 0;n.LOG_EVENT={VERSION_UPDATE:"Extension version update"}}}},{package:"$root$",file:"shared/constants/logs.ts"}],[5891,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.EXTENSION_MESSAGES=void 0;n.EXTENSION_MESSAGES={READY:"METAMASK_EXTENSION_READY"}}}},{package:"$root$",file:"shared/constants/messages.ts"}],[5898,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.TrezorAction=n.OffscreenCommunicationTarget=n.OffscreenCommunicationEvents=n.OFFSCREEN_LOAD_TIMEOUT=n.OFFSCREEN_LEDGER_INIT_TIMEOUT=n.LedgerAction=n.KnownOrigins=void 0;const r=n.OFFSCREEN_LEDGER_INIT_TIMEOUT=4e3;n.OFFSCREEN_LOAD_TIMEOUT=r+1e3;n.OffscreenCommunicationTarget=function(e){return e.trezorOffscreen="trezor-offscreen",e.ledgerOffscreen="ledger-offscreen",e.latticeOffscreen="lattice-offscreen",e.extension="extension-offscreen",e.extensionMain="extension",e}({}),n.OffscreenCommunicationEvents=function(e){return e.trezorDeviceConnect="trezor-device-connect",e.ledgerDeviceConnect="ledger-device-connect",e.metamaskBackgroundReady="metamask-background-ready",e.connectivityChange="connectivity-change",e}({}),n.TrezorAction=function(e){return e.init="trezor-init",e.dispose="trezor-dispose",e.getPublicKey="trezor-get-public-key",e.signTransaction="trezor-sign-transaction",e.signMessage="trezor-sign-message",e.signTypedData="trezor-sign-typed-data",e}({}),n.LedgerAction=function(e){return e.getAppNameAndVersion="ledger-get-app-name-and-version",e.makeApp="ledger-make-app",e.updateTransport="ledger-update-transport",e.getPublicKey="ledger-unlock",e.signTransaction="ledger-sign-transaction",e.signPersonalMessage="ledger-sign-personal-message",e.signTypedData="ledger-sign-typed-data",e}({}),n.KnownOrigins=function(e){return e.lattice="https://lattice.gridplus.io",e.ledger="https://metamask.github.io",e}({})}}},{package:"$root$",file:"shared/constants/offscreen-communication.ts"}],[59,{"@metamask/messenger":2365},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getAccountOrderControllerMessenger=function(e){return new r.Messenger({namespace:"AccountOrderController",parent:e})};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/account-order-controller-messenger.ts"}],[590,{"./002":370,"./003":371,"./004":372,"./005":373,"./006":374,"./007":375,"./008":376,"./009":377,"./010":378,"./011":379,"./012":380,"./013":381,"./014":382,"./015":383,"./016":384,"./017":385,"./018":386,"./019":387,"./020":388,"./021":389,"./022":390,"./023":391,"./024":392,"./025":393,"./026":394,"./027":395,"./028":396,"./029":397,"./030":398,"./031":399,"./032":400,"./033":401,"./034":402,"./035":403,"./036":404,"./037":405,"./038":406,"./039":407,"./040":408,"./041":409,"./042":410,"./043":411,"./044":412,"./045":413,"./046":414,"./047":415,"./048":416,"./049":417,"./050":418,"./051":419,"./052":420,"./053":421,"./054":422,"./055":423,"./056":424,"./057":425,"./058":426,"./059":427,"./060":428,"./061":429,"./062":430,"./063":431,"./064":432,"./065":433,"./066":434,"./067":435,"./068":436,"./069":437,"./070":438,"./071":439,"./072":440,"./073":441,"./074":442,"./075":443,"./076":444,"./077":449,"./078":450,"./079":451,"./080":452,"./081":453,"./082":454,"./083":455,"./084":456,"./085":457,"./086":458,"./087":459,"./088":460,"./089":461,"./090":462,"./091":463,"./092":467,"./092.1":464,"./092.2":465,"./092.3":466,"./093":468,"./094":469,"./095":470,"./096":471,"./097":472,"./098":473,"./099":474,"./100":475,"./101":476,"./102":477,"./103":478,"./104":479,"./105":480,"./106":481,"./107":482,"./108":483,"./109":484,"./110":485,"./111":486,"./112":487,"./113":488,"./114":489,"./115":490,"./116":491,"./117":492,"./118":493,"./119":494,"./120":500,"./120.1":495,"./120.2":496,"./120.4":497,"./120.5":498,"./120.6":499,"./121":503,"./121.1":501,"./121.2":502,"./122":504,"./123":505,"./124":506,"./125":508,"./125.1":507,"./126":510,"./126.1":509,"./127":511,"./128":512,"./129":513,"./130":514,"./131":516,"./131.1":515,"./132":517,"./133":520,"./133.1":518,"./133.2":519,"./134":522,"./134.1":521,"./135":523,"./136":524,"./137":525,"./138":526,"./139":527,"./140":528,"./141":529,"./142":530,"./143":532,"./143.1":531,"./144":533,"./145":534,"./146":536,"./146.1":535,"./147":537,"./148":538,"./149":539,"./150":540,"./151":541,"./152":544,"./152.1":542,"./152.2":543,"./153":545,"./154":546,"./155":547,"./156":549,"./156.1":548,"./157":550,"./158":551,"./159":552,"./160":553,"./161":555,"./161.1":554,"./162":556,"./163":557,"./164":558,"./165":559,"./166":560,"./167":561,"./168":563,"./168.1":562,"./169":564,"./170":567,"./170.1":565,"./170.2":566,"./171":568,"./172":569,"./173":570,"./174":571,"./175":572,"./176":574,"./176.1":573,"./177":575,"./178":576,"./179":577,"./180":578,"./181":579,"./182":580,"./183":582,"./183.1":581,"./184":583,"./185":584,"./186":585,"./187":586,"./188":587,"./189":588},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;const r=[e("./002").default,e("./003").default,e("./004").default,e("./005").default,e("./006").default,e("./007").default,e("./008").default,e("./009").default,e("./010").default,e("./011").default,e("./012").default,e("./013").default,e("./014").default,e("./015").default,e("./016").default,e("./017").default,e("./018").default,e("./019").default,e("./020").default,e("./021").default,e("./022").default,e("./023").default,e("./024").default,e("./025").default,e("./026").default,e("./027").default,e("./028").default,e("./029").default,e("./030").default,e("./031").default,e("./032").default,e("./033").default,e("./034").default,e("./035").default,e("./036").default,e("./037").default,e("./038").default,e("./039").default,e("./040").default,e("./041").default,e("./042").default,e("./043").default,e("./044").default,e("./045").default,e("./046").default,e("./047").default,e("./048").default,e("./049").default,e("./050").default,e("./051").default,e("./052").default,e("./053").default,e("./054").default,e("./055").default,e("./056").default,e("./057").default,e("./058").default,e("./059").default,e("./060").default,e("./061").default,e("./062").default,e("./063").default,e("./064").default,e("./065").default,e("./066").default,e("./067").default,e("./068").default,e("./069").default,e("./070").default,e("./071").default,e("./072").default,e("./073").default,e("./074").default,e("./075").default,e("./076").default,e("./077").default,e("./078"),e("./079").default,e("./080").default,e("./081"),e("./082"),e("./083"),e("./084"),e("./085"),e("./086"),e("./087"),e("./088"),e("./089"),e("./090"),e("./091"),e("./092"),e("./092.1"),e("./092.2"),e("./092.3"),e("./093"),e("./094"),e("./095"),e("./096"),e("./097"),e("./098"),e("./099"),e("./100"),e("./101"),e("./102"),e("./103"),e("./104"),e("./105"),e("./106"),e("./107"),e("./108"),e("./109"),e("./110"),e("./111"),e("./112"),e("./113"),e("./114"),e("./115"),e("./116"),e("./117"),e("./118"),e("./119"),e("./120"),e("./120.1"),e("./120.2"),e("./120.4"),e("./120.5"),e("./120.6"),e("./121"),e("./121.1"),e("./121.2"),e("./122"),e("./123"),e("./124"),e("./125"),e("./125.1"),e("./126"),e("./126.1"),e("./127"),e("./128"),e("./129"),e("./130"),e("./131"),e("./131.1"),e("./132"),e("./133"),e("./133.1"),e("./133.2"),e("./134"),e("./134.1"),e("./135"),e("./136"),e("./137"),e("./138"),e("./139"),e("./140"),e("./141"),e("./142"),e("./143"),e("./143.1"),e("./144"),e("./145"),e("./146"),e("./146.1"),e("./147"),e("./148"),e("./149"),e("./150"),e("./151"),e("./152"),e("./152.1"),e("./152.2"),e("./153"),e("./154"),e("./155"),e("./156"),e("./156.1"),e("./157"),e("./158"),e("./159"),e("./160"),e("./161"),e("./161.1"),e("./162"),e("./163"),e("./164"),e("./165"),e("./166"),e("./167"),e("./168"),e("./168.1"),e("./169"),e("./170"),e("./170.1"),e("./170.2"),e("./171"),e("./172"),e("./173"),e("./174"),e("./175"),e("./176"),e("./176.1"),e("./177"),e("./178"),e("./179"),e("./180"),e("./181"),e("./182"),e("./183"),e("./183.1"),e("./184"),e("./185"),e("./186"),e("./187"),e("./188"),e("./189")];n.default=r}}},{package:"$root$",file:"app/scripts/migrations/index.js"}],[5902,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.PRICE_API_CURRENCIES=void 0;n.PRICE_API_CURRENCIES=["aud","hkd","sgd","idr","inr","nzd","php","btc","cad","eur","gbp","jpy","ltc","rub","uah","usd","xlm","xrp","sek","aed","ars","bch","bnb","brl","clp","cny","czk","dkk","chf","dot","eos","eth","gel","huf","ils","krw","mxn","myr","ngn","nok","pln","thb","try","zar"]}}},{package:"$root$",file:"shared/constants/price-api-currencies.ts"}],[591,{"../../shared/constants/offscreen-communication":5898,"../../shared/lib/sentry":5992},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.addOffscreenConnectivityListener=function(e){const{chrome:t}=globalThis;if(!t.offscreen)return;t.runtime.onMessage.addListener(t=>{t&&t.target===o.OffscreenCommunicationTarget.extensionMain&&t.event===o.OffscreenCommunicationEvents.connectivityChange&&e(t.isOnline)})},n.createOffscreen=async function(){const{chrome:e}=globalThis;if(!e.offscreen)return;let t;const n=new Promise(n=>{t=r=>{r.target===o.OffscreenCommunicationTarget.extensionMain&&r.isBooted&&(e.runtime.onMessage.removeListener(t),n())},e.runtime.onMessage.addListener(t)});try{const t=await async function(){const{chrome:e,clients:t}=globalThis;if("getContexts"in e.runtime){return(await e.runtime.getContexts({contextTypes:["OFFSCREEN_DOCUMENT"]})).length>0}const n=await t.matchAll(),r=e.runtime.getURL("offscreen.html");return n.some(e=>e.url===r)}();t&&(console.debug("Found existing offscreen document, closing."),await e.offscreen.closeDocument()),await e.offscreen.createDocument({url:"./offscreen.html",reasons:["IFRAME_SCRIPTING"],justification:"Used for Hardware Wallet and Snaps scripts to communicate with the extension."})}catch(n){return t&&e.runtime.onMessage.removeListener(t),void(0,r.captureException)(n)}const i=new Promise(e=>{setTimeout(e,o.OFFSCREEN_LOAD_TIMEOUT)});await Promise.race([n,i]),console.debug("Offscreen iframe loaded")};var r=e("../../shared/lib/sentry"),o=e("../../shared/constants/offscreen-communication")}}},{package:"$root$",file:"app/scripts/offscreen.js"}],[592,{"../../shared/constants/app":5876,"./lib/util":368,loglevel:4948,timers:4178},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){(function(t){(function(){Object.defineProperty(n,"__esModule",{value:!0}),n.onUpdate=function(e,n,r,a){const{appStateController:c}=e,{lastUpdatedFromVersion:l}=c.state,u=(0,s.getPlatform)()===i.PLATFORM_FIREFOX;if(o.default.debug("[onUpdate]: Update installation detected"),o.default.info(`[onUpdate]: Updated from version ${r}`),o.default.info(`[onUpdate]: Recorded last updated from version: ${l}`),o.default.info(`[onUpdate]: isFirefox: ${u}`),o.default.info(`[onUpdate]: Current version: ${n.getVersion()}`),r===l)return;const d=Date.now();c.setLastUpdatedAt(d),c.setLastUpdatedFromVersion(r),u||(o.default.info(`[onUpdate]: Requesting "safe reload" after update to ${n.getVersion()}`),t(a))};var r,o=(r=e("loglevel"))&&r.__esModule?r:{default:r},i=e("../../shared/constants/app"),s=e("./lib/util")}).call(this)}).call(this,e("timers").setImmediate)}}},{package:"$root$",file:"app/scripts/on-update.ts"}],[594,{"../../../shared/modules/fetch-with-timeout":6021,"@metamask/utils":3207,cockatiel:4236},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.RETRIES=n.MAX_CONSECUTIVE_FAILURES=n.DataDeletionService=void 0;var r,o=e("@metamask/utils"),i=e("cockatiel"),s=(r=e("../../../shared/modules/fetch-with-timeout"))&&r.__esModule?r:{default:r};function a(e,t,n){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,n)}function c(e,t){return e.get(u(e,t))}function l(e,t,n){return e.set(u(e,t),n),n}function u(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}const d=n.RETRIES=3,f=n.MAX_CONSECUTIVE_FAILURES=3*(1+d);function h(e){return function(e){return(0,o.isObject)(e)&&(0,o.hasProperty)(e,"statusCode")&&"number"==typeof e.statusCode}(e)&&e.statusCode>=500}function p({circuitBreakDuration:e,degradedThreshold:t,maximumConsecutiveFailures:n,onBreak:r,onDegraded:o,retries:s}){const a=(0,i.retry)(i.handleAll.orWhenResult(h),{maxAttempts:s,backoff:new i.ExponentialBackoff}),c=(0,i.circuitBreaker)(i.handleAll,{halfOpenAfter:e,breaker:new i.ConsecutiveBreaker(n)});return r&&c.onBreak(r),o&&(a.onGiveUp(()=>{c.state===i.CircuitState.Closed&&o()}),a.onSuccess(({duration:e})=>{c.state===i.CircuitState.Closed&&e>t&&o()})),(0,i.wrap)(a,c)}var g=new WeakMap,m=new WeakMap,b=new WeakMap,w=new WeakMap,y=new WeakMap;n.DataDeletionService=class{constructor({analyticsDataDeletionEndpoint:e="https://proxy.api.cx.metamask.io/segment/v1",analyticsDataDeletionSourceId:t="mytXhbDHVobxqatxZKaZQX",circuitBreakDuration:n=18e5,degradedThreshold:r=5e3,onBreak:o,onDegraded:i,timeout:c}={}){if(a(this,g,void 0),a(this,m,void 0),a(this,b,void 0),a(this,w,void 0),a(this,y,void 0),!e)throw new Error("Missing ANALYTICS_DATA_DELETION_ENDPOINT");if(!t)throw new Error("Missing ANALYTICS_DATA_DELETION_SOURCE_ID");l(y,this,(0,s.default)(c)),l(g,this,e),l(m,this,t),l(w,this,p({circuitBreakDuration:n,degradedThreshold:r,maximumConsecutiveFailures:f,onBreak:o,onDegraded:i,retries:d})),l(b,this,p({circuitBreakDuration:n,degradedThreshold:r,maximumConsecutiveFailures:f,onBreak:o,onDegraded:i,retries:d}))}async createDataDeletionRegulationTask(e){const t=await c(w,this).execute(()=>c(y,this).call(this,`${c(g,this)}/regulations/sources/${c(m,this)}`,{method:"POST",headers:{"Content-Type":"application/vnd.segment.v1+json"},body:JSON.stringify({regulationType:"DELETE_ONLY",subjectType:"USER_ID",subjectIds:[e]})}));if(!t.ok)throw new Error(`Fetch failed with status '${t.status}' for request`);return(await t.json()).data.regulateId}async fetchDeletionRegulationStatus(e){const t=await c(b,this).execute(()=>c(y,this).call(this,`${c(g,this)}/regulations/${e}`,{method:"GET",headers:{"Content-Type":"application/vnd.segment.v1+json"}}));if(!t.ok)throw new Error(`Fetch failed with status '${t.status}' for request`);return(await t.json()).data.regulation.overallStatus}}}}},{package:"$root$",file:"app/scripts/services/data-deletion-service.ts"}],[5949,{"@metamask/abi-utils":1215,"@metamask/delegation-core":1501,buffer:4176,"ethereumjs-util":4430},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){(function(t){(function(){Object.defineProperty(n,"__esModule",{value:!0}),n.getCaveatArrayPacketHash=n.createCaveat=void 0;var r=e("@metamask/abi-utils"),o=e("ethereumjs-util"),i=e("@metamask/delegation-core");const s=e=>{const n=(0,r.encode)(["bytes32","address","bytes32"],[i.CAVEAT_TYPEHASH,e.enforcer,(0,o.keccak)((0,o.toBuffer)(e.terms))]);return(0,o.keccak)(t.from(n))};n.getCaveatArrayPacketHash=e=>{let n=t.from([]);for(const o of e){const e=s(o);n=t.from((0,r.encode)(["bytes","bytes32"],[n,e],!0))}return(0,o.keccak)(n)};n.createCaveat=(e,t,n="0x")=>({enforcer:e,terms:t,args:n})}).call(this)}).call(this,e("buffer").Buffer)}}},{package:"$root$",file:"shared/lib/delegation/caveat.ts"}],[595,{"./base-login-handler":596,"./utils":602,"@metamask/seedless-onboarding-controller":2712},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.AppleLoginHandler=void 0;var r=e("@metamask/seedless-onboarding-controller"),o=e("./base-login-handler"),i=e("./utils");function s(e,t,n){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,n)}function a(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){return e.get(function(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}(e,t))}var l=new WeakMap;class u extends o.BaseLoginHandler{constructor(e){super(e),a(this,"OAUTH_SERVER_URL",void 0),s(this,l,["name","email"]),a(this,"serverRedirectUri",void 0),this.serverRedirectUri=`${e.authServerUrl}/api/v1/oauth/callback`,this.OAUTH_SERVER_URL=`${e.authServerUrl}/api/v1/oauth/initiate`}get authConnection(){return r.AuthConnection.Apple}get scope(){return c(l,this)}async getAuthUrl(){const e=new URL(this.OAUTH_SERVER_URL),t=this.options.webAuthenticator.getRedirectURL(),n=this.generateNonce(),{challenge:r}=await this.generateCodeVerifierChallenge();return e.searchParams.set("client_id",this.options.oAuthClientId),e.searchParams.set("response_type","code"),e.searchParams.set("redirect_uri",t),e.searchParams.set("response_mode","form_post"),e.searchParams.set("prompt",this.prompt),e.searchParams.set("state",JSON.stringify({client_redirect_back_uri:this.options.webAuthenticator.getRedirectURL(),nonce:n,code_challenge:r})),e.searchParams.set("scope",c(l,this).join(" ")),Promise.resolve(e.toString())}async getAuthIdToken(){const e=this.generateAuthTokenRequestData();return await this.requestVerifyAuthToken(e)}generateAuthTokenRequestData(){const{web3AuthNetwork:e}=this.options,t={code_verifier:this.codeVerifier,client_id:this.options.oAuthClientId,redirect_uri:this.serverRedirectUri,login_provider:this.authConnection,network:e,access_type:"offline"};return JSON.stringify(t)}async requestVerifyAuthToken(e){const t=await fetch(`${this.options.authServerUrl}/api/v1/oauth/callback/verify`,{method:"POST",headers:{"Content-Type":"application/json"},body:e});return await t.json()}async getUserInfo(e){const t=(0,i.decodeIdToken)(e),n=JSON.parse(t);return{email:n.email,sub:n.sub}}}n.AppleLoginHandler=u}}},{package:"$root$",file:"app/scripts/services/oauth/apple-login-handler.ts"}],[596,{"../../../../shared/modules/error":6020},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.BaseLoginHandler=void 0;var r=e("../../../../shared/modules/error");function o(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.BaseLoginHandler=class{constructor(e){o(this,"options",void 0),o(this,"codeVerifier",void 0),o(this,"nonce",void 0),o(this,"prompt","select_account"),o(this,"CODE_CHALLENGE_METHOD","S256"),o(this,"AUTH_SERVER_TOKEN_PATH","/api/v1/oauth/token"),o(this,"AUTH_SERVER_REVOKE_PATH","/api/v2/oauth/revoke"),o(this,"AUTH_SERVER_RENEW_REFRESH_PATH","/api/v2/oauth/renew_refresh_token"),this.options=e}validateState(e){const t=new URL(e).searchParams.get("state");if("string"!=typeof t)throw new Error(r.OAuthErrorMessages.INVALID_OAUTH_STATE_ERROR);if(JSON.parse(t).nonce!==this.nonce)throw new Error(r.OAuthErrorMessages.INVALID_OAUTH_STATE_ERROR)}async refreshAuthToken(e){const{web3AuthNetwork:t}=this.options,n={client_id:this.options.oAuthClientId,login_provider:this.authConnection,network:t,refresh_token:e,grant_type:"refresh_token"};return await this.requestAuthToken(JSON.stringify(n))}async revokeRefreshToken(e){const t={revoke_token:e};if(!(await fetch(`${this.options.authServerUrl}${this.AUTH_SERVER_REVOKE_PATH}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).ok)throw new Error("Failed to revoke refresh token")}async renewRefreshToken(e){const t={revoke_token:e},n=await fetch(`${this.options.authServerUrl}${this.AUTH_SERVER_RENEW_REFRESH_PATH}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!n.ok)throw new Error("Failed to renew refresh token");const r=await n.json();return{refresh_token:r.refresh_token,revoke_token:r.revoke_token}}async requestAuthToken(e){const t=await fetch(`${this.options.authServerUrl}${this.AUTH_SERVER_TOKEN_PATH}`,{method:"POST",headers:{"Content-Type":"application/json"},body:e});if(!t.ok)throw new Error("Failed to get auth token");return await t.json()}generateNonce(){return this.nonce=this.options.webAuthenticator.generateNonce(),this.nonce}async generateCodeVerifierChallenge(){const{codeVerifier:e,challenge:t}=await this.options.webAuthenticator.generateCodeVerifierAndChallenge();return this.codeVerifier=e,{codeVerifier:e,challenge:t}}}}}},{package:"$root$",file:"app/scripts/services/oauth/base-login-handler.ts"}],[5964,{"@metamask/delegation-deployments":1502},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.PREFERRED_VERSION=void 0,n.getDeleGatorEnvironment=function(e,t=o){var n;const i=null===(n=r.DELEGATOR_CONTRACTS[t])||void 0===n?void 0:n[e];if(!i)throw new Error(`No contracts found for version ${t} chain ${e}`);return{EIP7702StatelessDeleGatorImpl:i.EIP7702StatelessDeleGatorImpl,DelegationManager:i.DelegationManager,EntryPoint:i.EntryPoint,SimpleFactory:i.SimpleFactory,implementations:{MultiSigDeleGatorImpl:i.MultiSigDeleGatorImpl,HybridDeleGatorImpl:i.HybridDeleGatorImpl},caveatEnforcers:{AllowedCalldataEnforcer:i.AllowedCalldataEnforcer,AllowedMethodsEnforcer:i.AllowedMethodsEnforcer,AllowedTargetsEnforcer:i.AllowedTargetsEnforcer,ArgsEqualityCheckEnforcer:i.ArgsEqualityCheckEnforcer,BlockNumberEnforcer:i.BlockNumberEnforcer,DeployedEnforcer:i.DeployedEnforcer,ERC20BalanceChangeEnforcer:i.ERC20BalanceChangeEnforcer,ERC20BalanceGteEnforcer:i.ERC20BalanceGteEnforcer,ERC20TransferAmountEnforcer:i.ERC20TransferAmountEnforcer,ERC20StreamingEnforcer:i.ERC20StreamingEnforcer,ERC721BalanceChangeEnforcer:i.ERC721BalanceChangeEnforcer,ERC721BalanceGteEnforcer:i.ERC721BalanceGteEnforcer,ERC721TransferEnforcer:i.ERC721TransferEnforcer,ERC1155BalanceChangeEnforcer:i.ERC1155BalanceChangeEnforcer,ERC1155BalanceGteEnforcer:i.ERC1155BalanceGteEnforcer,IdEnforcer:i.IdEnforcer,LimitedCallsEnforcer:i.LimitedCallsEnforcer,NonceEnforcer:i.NonceEnforcer,TimestampEnforcer:i.TimestampEnforcer,ValueLteEnforcer:i.ValueLteEnforcer,MultiTokenPeriodEnforcer:i.MultiTokenPeriodEnforcer,NativeTokenTransferAmountEnforcer:i.NativeTokenTransferAmountEnforcer,NativeBalanceChangeEnforcer:i.NativeBalanceChangeEnforcer,NativeBalanceGteEnforcer:i.NativeBalanceGteEnforcer,NativeTokenStreamingEnforcer:i.NativeTokenStreamingEnforcer,NativeTokenPaymentEnforcer:i.NativeTokenPaymentEnforcer,OwnershipTransferEnforcer:i.OwnershipTransferEnforcer,RedeemerEnforcer:i.RedeemerEnforcer,SpecificActionERC20TransferBatchEnforcer:"0x6649b61c873F6F9686A1E1ae9ee98aC380c7bA13",ERC20PeriodTransferEnforcer:i.ERC20PeriodTransferEnforcer,NativeTokenPeriodTransferEnforcer:i.NativeTokenPeriodTransferEnforcer,ExactCalldataBatchEnforcer:i.ExactCalldataBatchEnforcer,ExactCalldataEnforcer:i.ExactCalldataEnforcer,ExactExecutionEnforcer:i.ExactExecutionEnforcer,ExactExecutionBatchEnforcer:i.ExactExecutionBatchEnforcer}}};var r=e("@metamask/delegation-deployments");const o=n.PREFERRED_VERSION="1.3.0"}}},{package:"$root$",file:"shared/lib/delegation/environment.ts"}],[5966,{"./caveat":5949,"./caveatBuilder":5958,"./delegation":5963,"./environment":5964,"./execution":5965},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"ANY_BENEFICIARY",{enumerable:!0,get:function(){return o.ANY_BENEFICIARY}}),Object.defineProperty(n,"BATCH_DEFAULT_MODE",{enumerable:!0,get:function(){return i.BATCH_DEFAULT_MODE}}),Object.defineProperty(n,"BATCH_TRY_MODE",{enumerable:!0,get:function(){return i.BATCH_TRY_MODE}}),Object.defineProperty(n,"ROOT_AUTHORITY",{enumerable:!0,get:function(){return o.ROOT_AUTHORITY}}),Object.defineProperty(n,"SINGLE_DEFAULT_MODE",{enumerable:!0,get:function(){return i.SINGLE_DEFAULT_MODE}}),Object.defineProperty(n,"SINGLE_TRY_MODE",{enumerable:!0,get:function(){return i.SINGLE_TRY_MODE}}),Object.defineProperty(n,"createCaveat",{enumerable:!0,get:function(){return s.createCaveat}}),Object.defineProperty(n,"createCaveatBuilder",{enumerable:!0,get:function(){return a.createCaveatBuilder}}),Object.defineProperty(n,"createDelegation",{enumerable:!0,get:function(){return o.createDelegation}}),Object.defineProperty(n,"createExecution",{enumerable:!0,get:function(){return i.createExecution}}),Object.defineProperty(n,"createOpenDelegation",{enumerable:!0,get:function(){return o.createOpenDelegation}}),Object.defineProperty(n,"encodeBatchExecution",{enumerable:!0,get:function(){return i.encodeBatchExecution}}),Object.defineProperty(n,"encodeDelegation",{enumerable:!0,get:function(){return o.encodeDelegation}}),Object.defineProperty(n,"encodeExecutionCalldata",{enumerable:!0,get:function(){return i.encodeExecutionCalldata}}),Object.defineProperty(n,"encodeExecutionCalldatas",{enumerable:!0,get:function(){return i.encodeExecutionCalldatas}}),Object.defineProperty(n,"encodePermissionContexts",{enumerable:!0,get:function(){return o.encodePermissionContexts}}),Object.defineProperty(n,"encodeSingleExecution",{enumerable:!0,get:function(){return i.encodeSingleExecution}}),Object.defineProperty(n,"getDeleGatorEnvironment",{enumerable:!0,get:function(){return r.getDeleGatorEnvironment}}),Object.defineProperty(n,"getDelegationHashOffchain",{enumerable:!0,get:function(){return o.getDelegationHashOffchain}}),Object.defineProperty(n,"toDelegationStruct",{enumerable:!0,get:function(){return o.toDelegationStruct}});var r=e("./environment"),o=e("./delegation"),i=e("./execution"),s=e("./caveat"),a=e("./caveatBuilder")}}},{package:"$root$",file:"shared/lib/delegation/index.ts"}],[5968,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.checkEip7702Support=function(e){const t=Boolean(e&&(!e.delegationAddress||e.isSupported));return{isSupported:t,upgradeContractAddress:t?(null==e?void 0:e.upgradeContractAddress)??null:null,delegationAddress:t?(null==e?void 0:e.delegationAddress)??null:null}},n.findAtomicBatchSupportForChain=function(e,t){return e.find(e=>e.chainId.toLowerCase()===t.toLowerCase())}}}},{package:"$root$",file:"shared/lib/eip7702-support-utils.ts"}],[597,{"../../../../development/build/constants":608,"@metamask/seedless-onboarding-controller":2712},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.OauthConfigMap=n.BuildTypeEnv=void 0,n.isDevOrTestBuild=a,n.loadOAuthConfig=function(){let e=i.DevMain;e=a()?i.DevMain:c()||l()?i.ProdMain:i.UatMain;return s[e]};var r=e("@metamask/seedless-onboarding-controller"),o=e("../../../../development/build/constants");let i=n.BuildTypeEnv=function(e){return e.DevMain="DevMain",e.DevFlask="DevFlask",e.UatMain="UatMain",e.UatFlask="UatFlask",e.ProdMain="ProdMain",e.ProdFlask="ProdFlask",e.Beta="Beta",e}({});const s=n.OauthConfigMap={[i.DevMain]:{googleAuthConnectionId:"mm-google-dev-extension",appleAuthConnectionId:"mm-apple-dev-common",googleGroupedAuthConnectionId:"mm-google-dev",appleGroupedAuthConnectionId:"mm-apple-dev",authServerUrl:"https://auth-service.dev-api.cx.metamask.io",web3AuthNetwork:r.Web3AuthNetwork.Devnet},[i.DevFlask]:{googleAuthConnectionId:"mm-google-flask-dev-extension",appleAuthConnectionId:"mm-apple-flask-dev-common",googleGroupedAuthConnectionId:"mm-google-flask-dev",appleGroupedAuthConnectionId:"mm-apple-flask-dev",authServerUrl:"https://auth-service.dev-api.cx.metamask.io",web3AuthNetwork:r.Web3AuthNetwork.Devnet},[i.UatMain]:{googleAuthConnectionId:"mm-google-uat-extension",appleAuthConnectionId:"mm-apple-uat-common",googleGroupedAuthConnectionId:"mm-google-uat",appleGroupedAuthConnectionId:"mm-apple-uat",authServerUrl:"https://auth-service.uat-api.cx.metamask.io",web3AuthNetwork:r.Web3AuthNetwork.Mainnet},[i.UatFlask]:{googleAuthConnectionId:"mm-google-flask-uat-extension",appleAuthConnectionId:"mm-apple-flask-uat-common",googleGroupedAuthConnectionId:"mm-google-flask-uat",appleGroupedAuthConnectionId:"mm-apple-flask-uat",authServerUrl:"https://auth-service.uat-api.cx.metamask.io",web3AuthNetwork:r.Web3AuthNetwork.Mainnet},[i.ProdMain]:{googleAuthConnectionId:"mm-google-main-extension",appleAuthConnectionId:"mm-apple-main-common",googleGroupedAuthConnectionId:"mm-google-main",appleGroupedAuthConnectionId:"mm-apple-main",authServerUrl:"https://auth-service.api.cx.metamask.io",web3AuthNetwork:r.Web3AuthNetwork.Mainnet},[i.ProdFlask]:{googleAuthConnectionId:"mm-google-flask-main-extension",appleAuthConnectionId:"mm-apple-flask-main-common",googleGroupedAuthConnectionId:"mm-google-flask-main",appleGroupedAuthConnectionId:"mm-apple-flask-main",authServerUrl:"https://auth-service.api.cx.metamask.io",web3AuthNetwork:r.Web3AuthNetwork.Mainnet},[i.Beta]:{googleAuthConnectionId:"mm-google-main-extension",appleAuthConnectionId:"mm-apple-main-common",googleGroupedAuthConnectionId:"mm-google-main",appleGroupedAuthConnectionId:"mm-apple-main",authServerUrl:"https://auth-service.api.cx.metamask.io",web3AuthNetwork:r.Web3AuthNetwork.Mainnet}};function a(){return"production"===o.ENVIRONMENT.DEVELOPMENT||"production"===o.ENVIRONMENT.TESTING}function c(){return"production"===o.ENVIRONMENT.PRODUCTION}function l(){return"production"===o.ENVIRONMENT.RELEASE_CANDIDATE}}}},{package:"$root$",file:"app/scripts/services/oauth/config.ts"}],[598,{"./apple-login-handler":595,"./google-login-handler":599,"@metamask/seedless-onboarding-controller":2712},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.createLoginHandler=function(e,t,n){const s={web3AuthNetwork:t.web3AuthNetwork,authServerUrl:t.authServerUrl,webAuthenticator:n};switch(e){case r.AuthConnection.Google:return new i.GoogleLoginHandler({...s,oAuthClientId:t.googleClientId});case r.AuthConnection.Apple:return new o.AppleLoginHandler({...s,oAuthClientId:t.appleClientId});default:throw new Error(`Invalid social login provider: ${e}`)}};var r=e("@metamask/seedless-onboarding-controller"),o=e("./apple-login-handler"),i=e("./google-login-handler")}}},{package:"$root$",file:"app/scripts/services/oauth/create-login-handler.ts"}],[599,{"./base-login-handler":596,"./utils":602,"@metamask/seedless-onboarding-controller":2712},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.GoogleLoginHandler=void 0;var r=e("@metamask/seedless-onboarding-controller"),o=e("./base-login-handler"),i=e("./utils");function s(e,t,n){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,n)}function a(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){return e.get(function(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}(e,t))}var l=new WeakMap;class u extends o.BaseLoginHandler{constructor(...e){super(...e),a(this,"OAUTH_SERVER_URL","https://accounts.google.com/o/oauth2/v2/auth"),s(this,l,["openid","profile","email"])}get authConnection(){return r.AuthConnection.Google}get scope(){return c(l,this)}async getAuthUrl(){const e=new URL(this.OAUTH_SERVER_URL),t=this.generateNonce(),{challenge:n}=await this.generateCodeVerifierChallenge(),r=this.options.webAuthenticator.getRedirectURL();return e.searchParams.set("client_id",this.options.oAuthClientId),e.searchParams.set("response_type","code"),e.searchParams.set("scope",c(l,this).join(" ")),e.searchParams.set("code_challenge_method",this.CODE_CHALLENGE_METHOD),e.searchParams.set("code_challenge",n),e.searchParams.set("state",JSON.stringify({nonce:t})),e.searchParams.set("redirect_uri",r),e.searchParams.set("prompt",this.prompt),e.toString()}async getAuthIdToken(e){const t=this.generateAuthTokenRequestData(e);return await this.requestAuthToken(t)}generateAuthTokenRequestData(e){const{web3AuthNetwork:t}=this.options,n=this.options.webAuthenticator.getRedirectURL(),r={code:e,client_id:this.options.oAuthClientId,redirect_uri:n,login_provider:this.authConnection,network:t,code_verifier:this.codeVerifier,access_type:"offline"};return JSON.stringify(r)}async getUserInfo(e){const t=(0,i.decodeIdToken)(e),n=JSON.parse(t);return{email:n.email,sub:n.sub}}}n.GoogleLoginHandler=u}}},{package:"$root$",file:"app/scripts/services/oauth/google-login-handler.ts"}],[5998,{"@ethersproject/contracts":771,"@ethersproject/providers":809,"@metamask/metamask-eth-abis":2370},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.fetchERC1155Balance=async function(e,t,n,s){if(!t||!n)return null;const a=new i.Web3Provider(s),c=new o.Contract(e,r.abiERC1155,a),l=c?c.balanceOf(t,n):Promise.resolve();return await l},n.fetchTokenBalance=async function(e,t,n){const s=new i.Web3Provider(n),a=new o.Contract(e,r.abiERC20,s),c=a?a.balanceOf(t):Promise.resolve();return await c},n.getTokenIdParam=function(e={}){var t,n;return(null==e||null===(t=e.args)||void 0===t||null===(t=t._tokenId)||void 0===t?void 0:t.toString())??(null==e||null===(n=e.args)||void 0===n||null===(n=n.id)||void 0===n?void 0:n.toString())};var r=e("@metamask/metamask-eth-abis"),o=e("@ethersproject/contracts"),i=e("@ethersproject/providers")}}},{package:"$root$",file:"shared/lib/token-util.ts"}],[60,{"@metamask/messenger":2365},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getAccountTrackerControllerInitMessenger=function(e){const t=new r.Messenger({namespace:"AccountTrackerControllerInit",parent:e});return e.delegate({messenger:t,actions:["RemoteFeatureFlagController:getState","PreferencesController:getState"],events:["NetworkController:networkDidChange"]}),t},n.getAccountTrackerControllerMessenger=function(e){const t=new r.Messenger({namespace:"AccountTrackerController",parent:e});return e.delegate({messenger:t,actions:["AccountsController:getSelectedAccount","AccountsController:listAccounts","NetworkController:getNetworkClientById","NetworkController:getState","PreferencesController:getState","KeyringController:getState"],events:["AccountsController:selectedEvmAccountChange","TransactionController:transactionConfirmed","TransactionController:unapprovedTransactionAdded","NetworkController:networkAdded","KeyringController:lock","KeyringController:unlock"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/account-tracker-controller-messenger.ts"}],[600,{"../../../../shared/constants/metametrics":5892,"../../../../shared/constants/onboarding":5899,"../../../../shared/lib/trace":5999,"../../../../shared/modules/browser-runtime.utils":6012,"../../../../shared/modules/error":6020,"./config":597,"./create-login-handler":598,"./types":601,"@metamask/seedless-onboarding-controller":2712,loglevel:4948},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r,o=e("@metamask/seedless-onboarding-controller"),i=(r=e("loglevel"))&&r.__esModule?r:{default:r},s=e("../../../../shared/modules/error"),a=e("../../../../shared/modules/browser-runtime.utils"),c=e("../../../../shared/lib/trace"),l=e("../../../../shared/constants/metametrics"),u=e("../../../../shared/constants/onboarding"),d=e("./create-login-handler"),f=e("./types"),h=e("./config");function p(e,t,n){g(e,t),t.set(e,n)}function g(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function m(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){return e.get(y(e,t))}function w(e,t,n){return e.set(y(e,t),n),n}function y(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}const v="/api/v1/oauth/marketing_opt_in_status";var k=new WeakMap,C=new WeakMap,E=new WeakMap,_=new WeakMap,T=new WeakMap,S=new WeakMap,A=new WeakMap,I=new WeakMap,M=new WeakSet;function O(e,t){if(Boolean(b(I,this).call(this)))b(S,this).call(this,e,t);else{const t={...e,actionId:`${Date.now()+Math.random()}`};b(A,this).call(this,t)}}function P(){try{const e=b(k,this).call("OnboardingController:getState");return e.firstTimeFlowType===u.FirstTimeFlowType.socialImport&&!e.completedOnboarding}catch(e){return i.default.error("Error checking rehydration flow:",e),null}}async function N(e,t){const n=await e.getAuthUrl(),r=y(M,this,P).call(this);let o=!1,i=null;try{var a;null===(a=b(_,this))||void 0===a||a.call(this,{name:c.TraceName.OnboardingOAuthProviderLogin,op:c.TraceOperation.OnboardingSecurityOp}),i=await new Promise((t,r)=>{b(E,this).launchWebAuthFlow({interactive:!0,url:n},n=>{try{if(n)try{e.validateState(n),t(n)}catch(e){r(e)}else{const e=y(M,this,x).call(this);if(e)return void r(e);r(new Error(s.OAuthErrorMessages.NO_REDIRECT_URL_FOUND_ERROR))}}catch(e){r(e)}})}),o=!0}catch(e){const n=(0,s.isUserCancelledLoginError)(e);var u,d;if(y(M,this,O).call(this,{event:l.MetaMetricsEventName.SocialLoginFailed,category:l.MetaMetricsEventCategory.Onboarding,properties:{account_type:`${l.MetaMetricsEventAccountType.Default}_${t}`,is_rehydration:null===r?"unknown":String(r),failure_type:n?"user_cancelled":"error",error_category:"provider_login"}}),!n)null===(u=(d=b(k,this)).captureException)||void 0===u||u.call(d,(0,s.createSentryError)(c.TraceName.OnboardingOAuthProviderLoginError,e));throw e}finally{var f;null===(f=b(T,this))||void 0===f||f.call(this,{name:c.TraceName.OnboardingOAuthProviderLogin,data:{success:o}})}let h=!1;try{var p;null===(p=b(_,this))||void 0===p||p.call(this,{name:c.TraceName.OnboardingOAuthBYOAServerGetAuthTokens,op:c.TraceOperation.OnboardingSecurityOp});const t=await y(M,this,j).call(this,e,i);return h=!0,t}catch(e){var g,m;throw y(M,this,O).call(this,{event:l.MetaMetricsEventName.SocialLoginFailed,category:l.MetaMetricsEventCategory.Onboarding,properties:{account_type:`${l.MetaMetricsEventAccountType.Default}_${t}`,is_rehydration:null===r?"unknown":String(r),failure_type:"error",error_category:"get_auth_tokens"}}),null===(g=(m=b(k,this)).captureException)||void 0===g||g.call(m,(0,s.createSentryError)(`OAuth2 token exchange failed for ${t}`,e)),e}finally{var w;null===(w=b(T,this))||void 0===w||w.call(this,{name:c.TraceName.OnboardingOAuthBYOAServerGetAuthTokens,data:{success:h}})}}async function j(e,t){const{authConnection:n}=e,r=n===o.AuthConnection.Google?y(M,this,D).call(this,t):null;return await y(M,this,R).call(this,e,r)}async function R(e,t){let n="",r="";e.authConnection===o.AuthConnection.Google?(n=b(C,this).googleAuthConnectionId,r=b(C,this).googleGroupedAuthConnectionId):e.authConnection===o.AuthConnection.Apple&&(n=b(C,this).appleAuthConnectionId,r=b(C,this).appleGroupedAuthConnectionId);const i=await e.getAuthIdToken(t),s=i.id_token,a=await e.getUserInfo(s);return{authConnectionId:n,groupedAuthConnectionId:r,userId:a.sub||a.email,idTokens:[s],authConnection:e.authConnection,socialLoginEmail:a.email,refreshToken:i.refresh_token,revokeToken:i.revoke_token,accessToken:i.access_token,metadataAccessToken:i.metadata_access_token}}function D(e){return new URL(e).searchParams.get("code")}function x(){const e=(0,a.checkForLastError)();return(0,s.isUserCancelledLoginError)(e)?e:undefined}n.default=class{constructor({messenger:e,env:t,webAuthenticator:n,bufferedTrace:r,bufferedEndTrace:o,trackEvent:i,addEventBeforeMetricsOptIn:s,getParticipateInMetaMetrics:a}){!function(e,t){g(e,t),t.add(e)}(this,M),m(this,"name",f.SERVICE_NAME),m(this,"state",null),p(this,k,void 0),p(this,C,void 0),p(this,E,void 0),p(this,_,void 0),p(this,T,void 0),p(this,S,void 0),p(this,A,void 0),p(this,I,void 0),w(k,this,e);const c=(0,h.loadOAuthConfig)();w(C,this,{...t,...c}),w(E,this,n),w(_,this,r),w(T,this,o),w(S,this,i),w(A,this,s),w(I,this,a),b(k,this).registerActionHandler(`${f.SERVICE_NAME}:startOAuthLogin`,this.startOAuthLogin.bind(this)),b(k,this).registerActionHandler(`${f.SERVICE_NAME}:getNewRefreshToken`,this.getNewRefreshToken.bind(this)),b(k,this).registerActionHandler(`${f.SERVICE_NAME}:revokeRefreshToken`,this.revokeRefreshToken.bind(this)),b(k,this).registerActionHandler(`${f.SERVICE_NAME}:renewRefreshToken`,this.renewRefreshToken.bind(this))}async startOAuthLogin(e){const t=(0,d.createLoginHandler)(e,b(C,this),b(E,this));return await y(M,this,N).call(this,t,e)}async getNewRefreshToken(e){const{connection:t,refreshToken:n}=e,r=(0,d.createLoginHandler)(t,b(C,this),b(E,this)),o=await r.refreshAuthToken(n);return{idTokens:[o.id_token],accessToken:o.access_token,metadataAccessToken:o.metadata_access_token}}async renewRefreshToken(e){const{connection:t,revokeToken:n}=e,r=(0,d.createLoginHandler)(t,b(C,this),b(E,this)),o=await r.renewRefreshToken(n);return{newRefreshToken:o.refresh_token,newRevokeToken:o.revoke_token}}async revokeRefreshToken(e){const{connection:t,revokeToken:n}=e,r=(0,d.createLoginHandler)(t,b(C,this),b(E,this));await r.revokeRefreshToken(n)}async setMarketingConsent(e){try{const t=b(k,this).call("SeedlessOnboardingController:getState"),{accessToken:n}=t;if(!n)throw new Error("No access token found");const r={opt_in_status:e},o=await fetch(`${b(C,this).authServerUrl}${v}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify(r)});if(!o.ok)throw new Error("Failed to post marketing opt in status");return o.ok}catch(e){var t,n;throw i.default.error("Failed to post marketing opt in status",e),null===(t=(n=b(k,this)).captureException)||void 0===t||t.call(n,(0,s.createSentryError)("Failed to post marketing opt in status",e)),e}}async getMarketingConsent(){try{const e=b(k,this).call("SeedlessOnboardingController:getState"),{accessToken:t}=e;if(!t)throw new Error("No access token found");const n=await fetch(`${b(C,this).authServerUrl}${v}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`}});if(!n.ok)throw new Error("Failed to get marketing opt in status");const r=await n.json();return Boolean((null==r?void 0:r.is_opt_in)??!1)}catch(n){var e,t;return i.default.error("Failed to get marketing opt in status",n),null===(e=(t=b(k,this)).captureException)||void 0===e||e.call(t,(0,s.createSentryError)("Failed to get marketing opt in status",n)),!1}}}}}},{package:"$root$",file:"app/scripts/services/oauth/oauth-service.ts"}],[6007,{"../constants/metametrics":5892,"@metamask/utils":3207},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.hasNonZeroTokenBalance=n.hasNonZeroMultichainBalance=n.getWalletFundsObtainedEventProperties=n.getMidnightISOTimestamp=n.getAmountBucket=n.AmountBucket=void 0;var r=e("@metamask/utils"),o=e("../constants/metametrics");const i=n.AmountBucket={Low:"<$100",Medium:"$100-1000",High:">$1000"},s=e=>{const t=Number(e);return t<100?i.Low:t<=1e3?i.Medium:i.High};n.getAmountBucket=s;const a=()=>{const e=new Date;return e.setHours(0,0,0,0),e.toISOString()};n.getMidnightISOTimestamp=a;n.hasNonZeroTokenBalance=(e={})=>{for(const t of Object.values(e))for(const e of Object.values(t||{}))for(const t of Object.values(e||{}))if((0,r.hexToNumber)(t||"0x0")>0)return!0;return!1};n.hasNonZeroMultichainBalance=(e={})=>{for(const t of Object.values(e))for(const e of Object.values(t||{}))if(null!=e&&e.amount&&"0"!==e.amount)return!0;return!1};n.getWalletFundsObtainedEventProperties=({chainId:e,amountUsd:t})=>({event:o.MetaMetricsEventName.WalletFundsObtained,timestamp:a(),properties:{chain_id_caip:(0,r.toCaipChainId)(r.KnownCaipNamespace.Eip155,e.toString()),funding_amount_usd:s(t)}})}}},{package:"$root$",file:"shared/lib/wallet-funds-obtained-metric.ts"}],[6009,{"@metamask/profile-sync-controller/sdk":2610},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.isForceAuthMatchBuild=o,n.loadAuthenticationConfig=function(){if(!o())return r.Env.PRD;0;return r.Env.PRD};var r=e("@metamask/profile-sync-controller/sdk");function o(){var e;return"true"===(null===(e=!1)?void 0:e.toString())}}}},{package:"$root$",file:"shared/modules/authentication/config.ts"}],[601,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.SERVICE_NAME=void 0;n.SERVICE_NAME="OAuthService"}}},{package:"$root$",file:"app/scripts/services/oauth/types.ts"}],[6010,{"./config":6009},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});var r=e("./config");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&(e in n&&n[e]===r[e]||Object.defineProperty(n,e,{enumerable:!0,get:function(){return r[e]}}))})}}},{package:"$root$",file:"shared/modules/authentication/index.ts"}],[6013,{"@metamask/utils":3207,"readable-stream":5378},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.createCaipStream=n.CaipStream=void 0;var r=e("@metamask/utils"),o=e("readable-stream");function i(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class s extends o.Duplex{constructor(e){super({objectMode:!0}),i(this,"parent",void 0),this.parent=e}_read(){return undefined}_write(e,t,n){this.parent.push({type:"caip-348",data:e}),n()}}class a extends o.Duplex{constructor(){super({objectMode:!0}),i(this,"substream",void 0),this.substream=new s(this)}_read(){return undefined}_write(e,t,n){(0,r.isObject)(e)&&"caip-348"===e.type&&this.substream.push(e.data),n()}}n.CaipStream=a;n.createCaipStream=e=>{var t,n;const r=new a,i=()=>{r.substream.destroyed||r.substream.writableEnded||r.substream.end()};return null===(t=e.once)||void 0===t||t.call(e,"close",i),null===(n=e.once)||void 0===n||n.call(e,"end",i),(0,o.pipeline)(e,r,e,e=>{r.substream.destroy(),e&&"Premature close"!==e.message&&console.error("MetaMask CAIP stream error:",e)}),r.substream}}}},{package:"$root$",file:"shared/modules/caip-stream.ts"}],[602,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){function r(e){const t=e.length,n=4-t%4;if(4===n)return e;const r=t+n;return e.padEnd(r,"=")}function o(e){return e.replace(/\+/gu,"-").replace(/\//gu,"_").replace(/[=]+$/u,"")}function i(e){return e.replace(/-/gu,"+").replace(/_/gu,"/").replace(/[=]/gu,"")}function s(e){const t=i(e),n=atob(t),r=Uint8Array.from(n,e=>e.charCodeAt(0));return(new TextDecoder).decode(r)}Object.defineProperty(n,"__esModule",{value:!0}),n.applyUrlSafeReplacementsToBase64String=o,n.base64urlencode=function(e){let t="";const n=new Uint8Array(e);for(let e=0;e<n.byteLength;e++)t+=String.fromCharCode(n[e]);return o(btoa(t))},n.convertUrlSafeBase64StringToBase64String=i,n.decodeBase64WithSafeUrlReplacements=s,n.decodeIdToken=function(e){const[,t]=e.split(".");return s(i(r(t)))},n.padBase64String=r}}},{package:"$root$",file:"app/scripts/services/oauth/utils.ts"}],[6025,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getSmartTransactionMetricsProperties=void 0;n.getSmartTransactionMetricsProperties=(e,t)=>{var n;const r=e.getIsSmartTransaction(t.chainId),o={is_smart_transaction:r};if(!r)return o;o.gas_included=null===(n=t.swapMetaData)||void 0===n?void 0:n.gas_included;const i=e.getSmartTransactionByMinedTxHash(t.hash),s=null==i?void 0:i.statusMetadata;return s?(o.smart_transaction_timed_out=s.timedOut,o.smart_transaction_proxied=s.proxied,o):o}}}},{package:"$root$",file:"shared/modules/metametrics.ts"}],[603,{"./utils":602,"webextension-polyfill":5864},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getIdentityAPI=c,n.webAuthenticatorFactory=function(){0;return{launchWebAuthFlow:l,generateCodeVerifierAndChallenge:s,generateNonce:a,getRedirectURL:u}};var r,o=(r=e("webextension-polyfill"))&&r.__esModule?r:{default:r},i=e("./utils");async function s(){const e=new Uint8Array(32);crypto.getRandomValues(e);const t=(0,i.base64urlencode)(e),n=await crypto.subtle.digest("SHA-256",(new TextEncoder).encode(t));return{codeVerifier:t,challenge:(0,i.base64urlencode)(n)}}function a(){return crypto.randomUUID()}function c(){var e;return null!==(e=chrome)&&void 0!==e&&e.identity&&"getRedirectURL"in chrome.identity&&"launchWebAuthFlow"in chrome.identity?chrome.identity:o.default.identity}async function l(e,t){return c().launchWebAuthFlow(e,t)}function u(){return c().getRedirectURL()}}}},{package:"$root$",file:"app/scripts/services/oauth/web-authenticator-factory.ts"}],[604,{"../../../../shared/constants/metametrics":5892,"../../../../shared/constants/time":5913,"../../../../shared/lib/sentry":5992,"../../../../shared/lib/shield":5993,"../../../../shared/modules/error":6020,"../../../../shared/modules/selectors":6032,"../../../../shared/modules/shield":6041,"../../../../shared/modules/shield/metrics":6042,"../../../../ui/pages/swaps/swaps.util":8184,"../../lib/transaction/sentinel-api":360,"./types":605,"@metamask/controller-utils":1488,"@metamask/keyring-controller":2310,"@metamask/subscription-controller":3023,"@metamask/transaction-controller":3085,"@metamask/utils":3207,loglevel:4948},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.SubscriptionService=void 0;var r,o=e("@metamask/subscription-controller"),i=e("@metamask/transaction-controller"),s=(r=e("loglevel"))&&r.__esModule?r:{default:r},a=e("@metamask/keyring-controller"),c=e("@metamask/utils"),l=e("@metamask/controller-utils"),u=e("../../lib/transaction/sentinel-api"),d=e("../../../../shared/modules/selectors"),f=e("../../../../ui/pages/swaps/swaps.util"),h=e("../../../../shared/modules/shield/metrics"),p=e("../../../../shared/constants/metametrics"),g=e("../../../../shared/constants/time"),m=e("../../../../shared/lib/shield"),b=e("../../../../shared/modules/shield"),w=e("../../../../shared/lib/sentry"),y=e("../../../../shared/modules/error"),v=e("./types");function k(e,t,n){C(e,t),t.set(e,n)}function C(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function E(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e,t){return e.get(S(e,t))}function T(e,t,n){return e.set(S(e,t),n),n}function S(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}const A=5*g.SECOND,I=60*g.SECOND;var M=new WeakMap,O=new WeakMap,P=new WeakMap,N=new WeakMap,j=new WeakSet;async function R(e){const t=await _(O,this).openTab({url:e.url});await new Promise((n,r)=>{let o=!1;const i=(n,r)=>{var i;n===t.id&&null!==(i=r.url)&&void 0!==i&&i.startsWith(e.successUrl)&&(o=!0,_(O,this).closeTab(n))};_(O,this).addTabUpdatedListener(i);const s=e=>{const a=()=>{_(O,this).removeTabUpdatedListener(i),_(O,this).removeTabRemovedListener(s)};e===t.id&&(a(),o?n():r(new Error(b.SHIELD_ERROR.tabActionFailed)))};_(O,this).addTabRemovedListener(s)})}async function D(e=A,t=I){const n=Date.now();for(;Date.now()-n<t;){const t=await _(M,this).call("SubscriptionController:getSubscriptions");if((0,m.getIsShieldSubscriptionActive)(t)||(0,m.getIsShieldSubscriptionPaused)(t))return t;await new Promise(t=>setTimeout(t,e))}throw new Error(b.SHIELD_ERROR.subscriptionPollingTimedOut)}async function x(e){const{isGasFeeSponsored:t,chainId:n}=e,r=await(0,u.isSendBundleSupported)(n),o=Boolean(t&&r),i=await S(j,this,W).call(this),a=(0,m.getIsShieldSubscriptionActive)(i??[]);try{a||S(j,this,V).call(this,"started",i,e,{has_sufficient_crypto_balance:!0});const t=await S(j,this,U).call(this);await _(M,this).call("SubscriptionController:submitShieldSubscriptionCryptoApproval",e,o,t),i&&a?S(j,this,K).call(this,"succeeded",i,e):S(j,this,V).call(this,"completed",i,e,{gas_sponsored:o||!1})}catch(t){s.default.error("Error on Shield subscription approval transaction",t);const n=t instanceof Error?t.message:"Unknown error";throw i&&a?S(j,this,K).call(this,"failed",i,e,{error:n}):S(j,this,V).call(this,"failed",i,e,{error:n}),_(N,this).call(this,(0,y.createSentryError)("Error on Shield subscription approval transaction",t)),t}}async function $(e){const t={metamask:{...await S(j,this,B).call(this),..._(M,this).call("AccountsController:getState"),..._(M,this).call("PreferencesController:getState"),..._(M,this).call("SmartTransactionsController:getState"),..._(M,this).call("NetworkController:getState"),..._(M,this).call("RemoteFeatureFlagController:getState")}},n=(0,d.getIsSmartTransaction)(t,e);return await(0,u.isSendBundleSupported)(e)&&n}async function B(){const e=_(M,this).call("SwapsController:getState"),{swapsFeatureFlags:t}=e.swapsState;try{if(!t||0===Object.keys(t).length){const t=await(0,f.fetchSwapsFeatureFlags)();return t?{...e,swapsState:{...e.swapsState,swapsFeatureFlags:t}}:e}}catch(t){return s.default.error("Failed to fetch swaps feature flags",t),e}return e}function L(){const{internalAccounts:e}=_(M,this).call("AccountsController:getState"),t=e.accounts[e.selectedAccount],n=_(M,this).call("KeyringController:getState").keyrings.filter(e=>e.type===a.KeyringTypes.hd);return(0,h.getUserAccountTypeAndCategory)(t,n)}async function U(){try{const e=await _(M,this).call("RewardsController:getSeasonMetadata","current"),{startDate:t,endDate:n}=e,r=Date.now();if(r<t||r>n)return undefined;const o=await S(j,this,F).call(this);if(!o)return undefined;return await _(M,this).call("RewardsController:getHasAccountOptedIn",o)?o:undefined}catch(e){return s.default.warn("Failed to get reward season metadata",e),undefined}}async function F(){try{const e=_(M,this).call("KeyringController:getState").keyrings.find(e=>e.type===a.KeyringTypes.hd);if(!e)return undefined;const{internalAccounts:t}=_(M,this).call("AccountsController:getState"),n=Object.values(t.accounts).find(t=>{var n;const r=null===(n=t.options)||void 0===n?void 0:n.entropySource;return"string"==typeof r&&(0,l.isEqualCaseInsensitive)(r,e.metadata.id)});if(!n)return undefined;const{namespace:r,reference:o}=(0,c.parseCaipChainId)(n.scopes[0]);return(0,c.toCaipAccountId)(r,o,n.address)}catch(e){return s.default.warn("[getPrimaryCaipAccountId] Failed to get primary CAIP account ID",e),undefined}}function H(e){try{if(!e.type)return;const t=[i.TransactionType.simpleSend,i.TransactionType.tokenMethodTransfer,i.TransactionType.swap,i.TransactionType.swapAndSend].includes(e.type),{pendingShieldCohort:n,shieldSubscriptionMetricsProps:r}=_(M,this).call("AppStateController:getState");t&&!n&&(_(M,this).call("AppStateController:setPendingShieldCohort",o.COHORT_NAMES.POST_TX,e.type),_(M,this).call("MetaMetricsController:trackEvent",{event:p.MetaMetricsEventName.ShieldEligibilityCohortAssigned,category:p.MetaMetricsEventCategory.Shield,properties:{...S(j,this,L).call(this),multi_chain_balance_category:(0,h.getUserBalanceCategory)((null==r?void 0:r.userBalanceInUSD)??0),assigned_cohort:o.COHORT_NAMES.POST_TX}}))}catch(e){s.default.error("Failed to assign post tx cohort",e),_(N,this).call(this,(0,y.createSentryError)("Failed to assign post tx cohort",e))}}function V(e,t,n,r){if(n&&n.type!==i.TransactionType.shieldSubscriptionApprove)return;const o=_(M,this).call("SubscriptionController:getState"),s=_(M,this).call("AppStateController:getState"),{defaultSubscriptionPaymentOptions:a,shieldSubscriptionMetricsProps:c}=s,l=S(j,this,L).call(this),u=(0,h.getSubscriptionRequestTrackingProps)(o,t||o.lastSubscription,a,c,n);_(M,this).call("MetaMetricsController:trackEvent",{event:p.MetaMetricsEventName.ShieldSubscriptionRequest,category:p.MetaMetricsEventCategory.Shield,properties:{...l,...u,...r,status:e}})}function K(e,t,n,r){if(n&&n.type!==i.TransactionType.shieldSubscriptionApprove)return;const o=_(M,this).call("SubscriptionController:getState"),s=S(j,this,L).call(this),a=(0,h.formatCaptureShieldPaymentMethodChangeEventProps)(o,t,n);_(M,this).call("MetaMetricsController:trackEvent",{event:p.MetaMetricsEventName.ShieldPaymentMethodChange,category:p.MetaMetricsEventCategory.Shield,properties:{...s,...a,...r,status:e}})}function G(e,t){const n=S(j,this,L).call(this),{shieldSubscriptionMetricsProps:r}=_(M,this).call("AppStateController:getState"),o=t??(null==r?void 0:r.rewardPoints);o&&_(M,this).call("MetaMetricsController:trackEvent",{event:p.MetaMetricsEventName.ShieldOptInRewards,category:p.MetaMetricsEventCategory.Shield,properties:{...n,multi_chain_balance_category:(0,h.getUserBalanceCategory)((null==r?void 0:r.userBalanceInUSD)??0),rewards_point:o,rewards_opt_in_type:e}})}async function W(){const e=await _(M,this).call("SubscriptionController:getSubscriptions");return(0,m.getShieldSubscription)(e)}n.SubscriptionService=class{constructor({messenger:e,platform:t,webAuthenticator:n,captureException:r=w.captureException}){!function(e,t){C(e,t),t.add(e)}(this,j),E(this,"name",v.SERVICE_NAME),E(this,"state",null),k(this,M,void 0),k(this,O,void 0),k(this,P,void 0),k(this,N,void 0),T(M,this,e),T(O,this,t),T(P,this,n),T(N,this,r),_(M,this).registerActionHandler(`${v.SERVICE_NAME}:submitSubscriptionSponsorshipIntent`,this.submitSubscriptionSponsorshipIntent.bind(this))}async updateSubscriptionCardPaymentMethod(e,t){try{const{paymentType:n}=e;if(n!==o.PAYMENT_TYPES.byCard)throw new Error("Only card payment type is supported");const r=_(P,this).getRedirectURL(),{redirectUrl:i}=await _(M,this).call("SubscriptionController:updatePaymentMethod",{...e,successUrl:r});await S(j,this,R).call(this,{url:i,successUrl:r}),t||_(O,this).openExtensionInBrowser("/settings/transaction-shield");return await _(M,this).call("SubscriptionController:getSubscriptions")}catch(e){throw _(N,this).call(this,(0,y.createSentryError)("Failed to update subscription card payment method",e)),e}}async updateSubscriptionCryptoPaymentMethod(e){try{const{paymentType:t}=e;if(t!==o.PAYMENT_TYPES.byCrypto)throw new Error("Only crypto payment type is supported");await _(M,this).call("SubscriptionController:updatePaymentMethod",e);return await _(M,this).call("SubscriptionController:getSubscriptions")}catch(e){throw _(N,this).call(this,(0,y.createSentryError)("Failed to update subscription crypto payment method",e)),e}}async startSubscriptionWithCard(e,t,n,r){const o=await S(j,this,W).call(this);try{const i=_(P,this).getRedirectURL(),s=await S(j,this,U).call(this),{checkoutSessionUrl:a}=await _(M,this).call("SubscriptionController:startShieldSubscriptionWithCard",{...e,successUrl:i,rewardAccountId:s});await S(j,this,R).call(this,{url:a,successUrl:i}),t||_(O,this).openExtensionInBrowser("/settings/transaction-shield?waitForSubscriptionCreation=true");const c=await S(j,this,D).call(this,n,r);return S(j,this,V).call(this,"completed",o),s&&S(j,this,G).call(this,"create_new_subscription"),c}catch(e){const t=e instanceof Error?e.message:"Unknown error";throw S(j,this,V).call(this,"failed",o,undefined,{error:t}),t.toLocaleLowerCase().includes("already exists")&&await _(M,this).call("SubscriptionController:getSubscriptions"),_(N,this).call(this,(0,y.createSentryError)("Failed to start subscription with card",e)),e}}async handlePostTransaction(e){S(j,this,H).call(this,e),e.type===i.TransactionType.shieldSubscriptionApprove&&await S(j,this,x).call(this,e)}async submitSubscriptionSponsorshipIntent(e){const{chainId:t,type:n,txParams:r,actionId:a,id:c}=e;if(n!==i.TransactionType.shieldSubscriptionApprove)return;const l=_(M,this).call("TransactionController:getTransactions")||[];if(null==l?void 0:l.find(e=>a&&e.actionId===a||e.id===c))return;if(await S(j,this,$).call(this,t))try{await _(M,this).call("SubscriptionController:submitSponsorshipIntents",{chainId:t,address:r.from,products:[o.PRODUCT_TYPES.SHIELD]})}catch(e){s.default.error("Failed to submit sponsorship intent",e),_(N,this).call(this,(0,y.createSentryError)("Failed to submit sponsorship intent",e))}}async linkRewardToExistingSubscription(e,t){try{const n=await S(j,this,U).call(this);if(!n)return;await _(M,this).call("SubscriptionController:linkRewards",{subscriptionId:e,rewardAccountId:n}),n&&t&&S(j,this,G).call(this,"link_existing_subscription",t)}catch(e){s.default.error("Failed to link reward to existing subscription",e),_(N,this).call(this,(0,y.createSentryError)("Failed to link reward to existing subscription",e))}}}}}},{package:"$root$",file:"app/scripts/services/subscription/subscription-service.ts"}],[6048,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.sanitizeMessageRecursively=function e(t,n,r){const o={},i=n[r];if(!i)return t;for(const r of i){const{name:i,type:s}=r;t[i]!==undefined&&(n[s]?o[i]=e(t[i],n,s):o[i]=t[i])}return o}}}},{package:"$root$",file:"shared/modules/typed-signature.ts"}],[6049,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.UI_NOTIFICATIONS=void 0;n.UI_NOTIFICATIONS={}}}},{package:"$root$",file:"shared/notifications/index.ts"}],[605,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.SERVICE_NAME=void 0;n.SERVICE_NAME="SubscriptionService"}}},{package:"$root$",file:"app/scripts/services/subscription/types.ts"}],[61,{"@metamask/messenger":2365},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getAccountsControllerMessenger=function(e){const t=new r.Messenger({namespace:"AccountsController",parent:e});return e.delegate({messenger:t,actions:["KeyringController:getState","KeyringController:getKeyringsByType"],events:["SnapController:stateChange","KeyringController:stateChange","SnapKeyring:accountAssetListUpdated","SnapKeyring:accountBalancesUpdated","SnapKeyring:accountTransactionsUpdated","MultichainNetworkController:networkDidChange"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/accounts-controller-messenger.ts"}],[62,{"@metamask/messenger":2365},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getAccountTreeControllerInitMessenger=function(e){const t=new r.Messenger({namespace:"AccountTreeControllerInit",parent:e});return e.delegate({messenger:t,actions:["MetaMetricsController:trackEvent","AccountsController:getAccount","AccountOrderController:getState"],events:[]}),t},n.getAccountTreeControllerMessenger=function(e){const t=new r.Messenger({namespace:"AccountTreeController",parent:e});return e.delegate({messenger:t,events:["AccountsController:accountAdded","AccountsController:accountRemoved","AccountsController:selectedAccountChange","UserStorageController:stateChange","MultichainAccountService:walletStatusChange"],actions:["AccountsController:listMultichainAccounts","AccountsController:getAccount","AccountsController:getSelectedMultichainAccount","AccountsController:setSelectedAccount","UserStorageController:getState","UserStorageController:performGetStorage","UserStorageController:performGetStorageAllFeatureEntries","UserStorageController:performSetStorage","UserStorageController:performBatchSetStorage","AuthenticationController:getSessionProfile","MultichainAccountService:createMultichainAccountGroup","SnapController:get","KeyringController:getState"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/accounts/account-tree-controller-messenger.ts"}],[63,{"./account-tree-controller-messenger":62,"./institutional-snap-controller-messenger":64,"./multichain-account-service-messenger":65,"./snap-keyring-builder-messenger":66},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getAccountTreeControllerInitMessenger",{enumerable:!0,get:function(){return r.getAccountTreeControllerInitMessenger}}),Object.defineProperty(n,"getAccountTreeControllerMessenger",{enumerable:!0,get:function(){return r.getAccountTreeControllerMessenger}}),Object.defineProperty(n,"getInstitutionalSnapControllerMessenger",{enumerable:!0,get:function(){return i.getInstitutionalSnapControllerMessenger}}),Object.defineProperty(n,"getMultichainAccountServiceInitMessenger",{enumerable:!0,get:function(){return o.getMultichainAccountServiceInitMessenger}}),Object.defineProperty(n,"getMultichainAccountServiceMessenger",{enumerable:!0,get:function(){return o.getMultichainAccountServiceMessenger}}),Object.defineProperty(n,"getSnapKeyringBuilderInitMessenger",{enumerable:!0,get:function(){return s.getSnapKeyringBuilderInitMessenger}}),Object.defineProperty(n,"getSnapKeyringBuilderMessenger",{enumerable:!0,get:function(){return s.getSnapKeyringBuilderMessenger}});var r=e("./account-tree-controller-messenger"),o=e("./multichain-account-service-messenger"),i=e("./institutional-snap-controller-messenger"),s=e("./snap-keyring-builder-messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/accounts/index.ts"}],[64,{"@metamask/messenger":2365},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getInstitutionalSnapControllerMessenger=function(e){const t=new r.Messenger({namespace:"InstitutionalSnapController",parent:e});return e.delegate({messenger:t,actions:["AccountsController:getAccountByAddress","SnapController:handleRequest","TransactionController:updateCustodialTransaction"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/accounts/institutional-snap-controller-messenger.ts"}],[644,{buffer:4176},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){const{Buffer:r}=e("buffer");t.exports=class{constructor(e,t,n,o){this.name=e,this.code=t,this.codeBuf=r.from(this.code),this.alphabet=o,this.engine=n(o)}encode(e){return this.engine.encode(e)}decode(e){for(const t of e)if(this.alphabet&&this.alphabet.indexOf(t)<0)throw new Error(`invalid character '${t}' in '${e}'`);return this.engine.decode(e)}}}}},{package:"@ensdomains/content-hash>multihashes>multibase",file:"node_modules/@ensdomains/content-hash/node_modules/multibase/src/base.js"}],[645,{"./base.js":644,"./rfc4648":647,"./util":648,"base-x":4060},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){const r=e("base-x"),o=e("./base.js"),i=e("./rfc4648"),{decodeText:s,encodeText:a}=e("./util"),c=[["identity","\0",()=>({encode:s,decode:a}),""],["base2","0",i(1),"01"],["base8","7",i(3),"01234567"],["base10","9",r,"0123456789"],["base16","f",i(4),"0123456789abcdef"],["base16upper","F",i(4),"0123456789ABCDEF"],["base32hex","v",i(5),"0123456789abcdefghijklmnopqrstuv"],["base32hexupper","V",i(5),"0123456789ABCDEFGHIJKLMNOPQRSTUV"],["base32hexpad","t",i(5),"0123456789abcdefghijklmnopqrstuv="],["base32hexpadupper","T",i(5),"0123456789ABCDEFGHIJKLMNOPQRSTUV="],["base32","b",i(5),"abcdefghijklmnopqrstuvwxyz234567"],["base32upper","B",i(5),"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"],["base32pad","c",i(5),"abcdefghijklmnopqrstuvwxyz234567="],["base32padupper","C",i(5),"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567="],["base32z","h",i(5),"ybndrfg8ejkmcpqxot1uwisza345h769"],["base36","k",r,"0123456789abcdefghijklmnopqrstuvwxyz"],["base36upper","K",r,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"],["base58btc","z",r,"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"],["base58flickr","Z",r,"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"],["base64","m",i(6),"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"],["base64pad","M",i(6),"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="],["base64url","u",i(6),"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"],["base64urlpad","U",i(6),"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_="]],l=c.reduce((e,t)=>(e[t[0]]=new o(t[0],t[1],t[2],t[3]),e),{}),u=c.reduce((e,t)=>(e[t[1]]=l[t[0]],e),{});t.exports={names:l,codes:u}}}},{package:"@ensdomains/content-hash>multihashes>multibase",file:"node_modules/@ensdomains/content-hash/node_modules/multibase/src/constants.js"}],[646,{"./constants":645,"./util":648,buffer:4176},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){const{Buffer:r}=e("buffer"),o=e("./constants"),{decodeText:i,asBuffer:s}=e("./util");function a(e){if(o.names[e])return o.names[e];if(o.codes[e])return o.codes[e];throw new Error(`Unsupported encoding: ${e}`)}(n=t.exports=function(e,t){if(!t)throw new Error("requires an encoded buffer");const{name:n,codeBuf:o}=a(e);!function(e,t){const n=a(e);n.decode(i(t))}(n,t);const s=r.alloc(o.length+t.length);return s.set(o,0),s.set(t,o.length),s}).encode=function(e,t){const n=a(e);return r.concat([n.codeBuf,r.from(n.encode(t))])},n.decode=function(e){ArrayBuffer.isView(e)&&(e=i(e));const t=e[0];["f","F","v","V","t","T","b","B","c","C","h","k","K"].includes(t)&&(e=e.toLowerCase());const n=a(e[0]);return s(n.decode(e.substring(1)))},n.isEncoded=function(e){if(e instanceof Uint8Array&&(e=i(e)),"[object String]"!==Object.prototype.toString.call(e))return!1;try{return a(e[0]).name}catch(e){return!1}},n.encoding=a,n.encodingFromData=function(e){return e instanceof Uint8Array&&(e=i(e)),a(e[0])},n.names=Object.freeze(o.names),n.codes=Object.freeze(o.codes)}}},{package:"@ensdomains/content-hash>multihashes>multibase",file:"node_modules/@ensdomains/content-hash/node_modules/multibase/src/index.js"}],[647,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){t.exports=e=>t=>({encode:n=>((e,t,n)=>{const r="="===t[t.length-1],o=(1<<n)-1;let i="",s=0,a=0;for(let r=0;r<e.length;++r)for(a=a<<8|e[r],s+=8;s>n;)s-=n,i+=t[o&a>>s];if(s&&(i+=t[o&a<<n-s]),r)for(;i.length*n&7;)i+="=";return i})(n,t,e),decode:n=>((e,t,n)=>{const r={};for(let e=0;e<t.length;++e)r[t[e]]=e;let o=e.length;for(;"="===e[o-1];)--o;const i=new Uint8Array(o*n/8|0);let s=0,a=0,c=0;for(let t=0;t<o;++t){const o=r[e[t]];if(o===undefined)throw new SyntaxError("Invalid character "+e[t]);a=a<<n|o,s+=n,s>=8&&(s-=8,i[c++]=255&a>>s)}if(s>=n||255&a<<8-s)throw new SyntaxError("Unexpected end of data");return i})(n,t,e)})}}},{package:"@ensdomains/content-hash>multihashes>multibase",file:"node_modules/@ensdomains/content-hash/node_modules/multibase/src/rfc4648.js"}],[648,{buffer:4176,"web-encoding":5863},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){const{Buffer:r}=e("buffer"),{TextEncoder:o,TextDecoder:i}=e("web-encoding"),s=new i,a=new o;t.exports={decodeText:e=>s.decode(e),encodeText:e=>a.encode(e),asBuffer:({buffer:e,byteLength:t,byteOffset:n})=>r.from(e,n,t)}}}},{package:"@ensdomains/content-hash>multihashes>multibase",file:"node_modules/@ensdomains/content-hash/node_modules/multibase/src/util.js"}],[649,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){const r=Object.freeze({identity:0,sha1:17,"sha2-256":18,"sha2-512":19,"sha3-512":20,"sha3-384":21,"sha3-256":22,"sha3-224":23,"shake-128":24,"shake-256":25,"keccak-224":26,"keccak-256":27,"keccak-384":28,"keccak-512":29,blake3:30,"murmur3-128":34,"murmur3-32":35,"dbl-sha2-256":86,md4:212,md5:213,bmt:214,"sha2-256-trunc254-padded":4114,"ripemd-128":4178,"ripemd-160":4179,"ripemd-256":4180,"ripemd-320":4181,x11:4352,"sm3-256":21325,"blake2b-8":45569,"blake2b-16":45570,"blake2b-24":45571,"blake2b-32":45572,"blake2b-40":45573,"blake2b-48":45574,"blake2b-56":45575,"blake2b-64":45576,"blake2b-72":45577,"blake2b-80":45578,"blake2b-88":45579,"blake2b-96":45580,"blake2b-104":45581,"blake2b-112":45582,"blake2b-120":45583,"blake2b-128":45584,"blake2b-136":45585,"blake2b-144":45586,"blake2b-152":45587,"blake2b-160":45588,"blake2b-168":45589,"blake2b-176":45590,"blake2b-184":45591,"blake2b-192":45592,"blake2b-200":45593,"blake2b-208":45594,"blake2b-216":45595,"blake2b-224":45596,"blake2b-232":45597,"blake2b-240":45598,"blake2b-248":45599,"blake2b-256":45600,"blake2b-264":45601,"blake2b-272":45602,"blake2b-280":45603,"blake2b-288":45604,"blake2b-296":45605,"blake2b-304":45606,"blake2b-312":45607,"blake2b-320":45608,"blake2b-328":45609,"blake2b-336":45610,"blake2b-344":45611,"blake2b-352":45612,"blake2b-360":45613,"blake2b-368":45614,"blake2b-376":45615,"blake2b-384":45616,"blake2b-392":45617,"blake2b-400":45618,"blake2b-408":45619,"blake2b-416":45620,"blake2b-424":45621,"blake2b-432":45622,"blake2b-440":45623,"blake2b-448":45624,"blake2b-456":45625,"blake2b-464":45626,"blake2b-472":45627,"blake2b-480":45628,"blake2b-488":45629,"blake2b-496":45630,"blake2b-504":45631,"blake2b-512":45632,"blake2s-8":45633,"blake2s-16":45634,"blake2s-24":45635,"blake2s-32":45636,"blake2s-40":45637,"blake2s-48":45638,"blake2s-56":45639,"blake2s-64":45640,"blake2s-72":45641,"blake2s-80":45642,"blake2s-88":45643,"blake2s-96":45644,"blake2s-104":45645,"blake2s-112":45646,"blake2s-120":45647,"blake2s-128":45648,"blake2s-136":45649,"blake2s-144":45650,"blake2s-152":45651,"blake2s-160":45652,"blake2s-168":45653,"blake2s-176":45654,"blake2s-184":45655,"blake2s-192":45656,"blake2s-200":45657,"blake2s-208":45658,"blake2s-216":45659,"blake2s-224":45660,"blake2s-232":45661,"blake2s-240":45662,"blake2s-248":45663,"blake2s-256":45664,"skein256-8":45825,"skein256-16":45826,"skein256-24":45827,"skein256-32":45828,"skein256-40":45829,"skein256-48":45830,"skein256-56":45831,"skein256-64":45832,"skein256-72":45833,"skein256-80":45834,"skein256-88":45835,"skein256-96":45836,"skein256-104":45837,"skein256-112":45838,"skein256-120":45839,"skein256-128":45840,"skein256-136":45841,"skein256-144":45842,"skein256-152":45843,"skein256-160":45844,"skein256-168":45845,"skein256-176":45846,"skein256-184":45847,"skein256-192":45848,"skein256-200":45849,"skein256-208":45850,"skein256-216":45851,"skein256-224":45852,"skein256-232":45853,"skein256-240":45854,"skein256-248":45855,"skein256-256":45856,"skein512-8":45857,"skein512-16":45858,"skein512-24":45859,"skein512-32":45860,"skein512-40":45861,"skein512-48":45862,"skein512-56":45863,"skein512-64":45864,"skein512-72":45865,"skein512-80":45866,"skein512-88":45867,"skein512-96":45868,"skein512-104":45869,"skein512-112":45870,"skein512-120":45871,"skein512-128":45872,"skein512-136":45873,"skein512-144":45874,"skein512-152":45875,"skein512-160":45876,"skein512-168":45877,"skein512-176":45878,"skein512-184":45879,"skein512-192":45880,"skein512-200":45881,"skein512-208":45882,"skein512-216":45883,"skein512-224":45884,"skein512-232":45885,"skein512-240":45886,"skein512-248":45887,"skein512-256":45888,"skein512-264":45889,"skein512-272":45890,"skein512-280":45891,"skein512-288":45892,"skein512-296":45893,"skein512-304":45894,"skein512-312":45895,"skein512-320":45896,"skein512-328":45897,"skein512-336":45898,"skein512-344":45899,"skein512-352":45900,"skein512-360":45901,"skein512-368":45902,"skein512-376":45903,"skein512-384":45904,"skein512-392":45905,"skein512-400":45906,"skein512-408":45907,"skein512-416":45908,"skein512-424":45909,"skein512-432":45910,"skein512-440":45911,"skein512-448":45912,"skein512-456":45913,"skein512-464":45914,"skein512-472":45915,"skein512-480":45916,"skein512-488":45917,"skein512-496":45918,"skein512-504":45919,"skein512-512":45920,"skein1024-8":45921,"skein1024-16":45922,"skein1024-24":45923,"skein1024-32":45924,"skein1024-40":45925,"skein1024-48":45926,"skein1024-56":45927,"skein1024-64":45928,"skein1024-72":45929,"skein1024-80":45930,"skein1024-88":45931,"skein1024-96":45932,"skein1024-104":45933,"skein1024-112":45934,"skein1024-120":45935,"skein1024-128":45936,"skein1024-136":45937,"skein1024-144":45938,"skein1024-152":45939,"skein1024-160":45940,"skein1024-168":45941,"skein1024-176":45942,"skein1024-184":45943,"skein1024-192":45944,"skein1024-200":45945,"skein1024-208":45946,"skein1024-216":45947,"skein1024-224":45948,"skein1024-232":45949,"skein1024-240":45950,"skein1024-248":45951,"skein1024-256":45952,"skein1024-264":45953,"skein1024-272":45954,"skein1024-280":45955,"skein1024-288":45956,"skein1024-296":45957,"skein1024-304":45958,"skein1024-312":45959,"skein1024-320":45960,"skein1024-328":45961,"skein1024-336":45962,"skein1024-344":45963,"skein1024-352":45964,"skein1024-360":45965,"skein1024-368":45966,"skein1024-376":45967,"skein1024-384":45968,"skein1024-392":45969,"skein1024-400":45970,"skein1024-408":45971,"skein1024-416":45972,"skein1024-424":45973,"skein1024-432":45974,"skein1024-440":45975,"skein1024-448":45976,"skein1024-456":45977,"skein1024-464":45978,"skein1024-472":45979,"skein1024-480":45980,"skein1024-488":45981,"skein1024-496":45982,"skein1024-504":45983,"skein1024-512":45984,"skein1024-520":45985,"skein1024-528":45986,"skein1024-536":45987,"skein1024-544":45988,"skein1024-552":45989,"skein1024-560":45990,"skein1024-568":45991,"skein1024-576":45992,"skein1024-584":45993,"skein1024-592":45994,"skein1024-600":45995,"skein1024-608":45996,"skein1024-616":45997,"skein1024-624":45998,"skein1024-632":45999,"skein1024-640":46e3,"skein1024-648":46001,"skein1024-656":46002,"skein1024-664":46003,"skein1024-672":46004,"skein1024-680":46005,"skein1024-688":46006,"skein1024-696":46007,"skein1024-704":46008,"skein1024-712":46009,"skein1024-720":46010,"skein1024-728":46011,"skein1024-736":46012,"skein1024-744":46013,"skein1024-752":46014,"skein1024-760":46015,"skein1024-768":46016,"skein1024-776":46017,"skein1024-784":46018,"skein1024-792":46019,"skein1024-800":46020,"skein1024-808":46021,"skein1024-816":46022,"skein1024-824":46023,"skein1024-832":46024,"skein1024-840":46025,"skein1024-848":46026,"skein1024-856":46027,"skein1024-864":46028,"skein1024-872":46029,"skein1024-880":46030,"skein1024-888":46031,"skein1024-896":46032,"skein1024-904":46033,"skein1024-912":46034,"skein1024-920":46035,"skein1024-928":46036,"skein1024-936":46037,"skein1024-944":46038,"skein1024-952":46039,"skein1024-960":46040,"skein1024-968":46041,"skein1024-976":46042,"skein1024-984":46043,"skein1024-992":46044,"skein1024-1000":46045,"skein1024-1008":46046,"skein1024-1016":46047,"skein1024-1024":46048,"poseidon-bls12_381-a2-fc1":46081,"poseidon-bls12_381-a2-fc1-sc":46082});t.exports={names:r}}}},{package:"@ensdomains/content-hash>multihashes",file:"node_modules/@ensdomains/content-hash/node_modules/multihashes/src/constants.js"}],[65,{"@metamask/messenger":2365},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getMultichainAccountServiceInitMessenger=function(e){const t=new r.Messenger({namespace:"MultichainAccountServiceInit",parent:e});return e.delegate({messenger:t,actions:["PreferencesController:getState","RemoteFeatureFlagController:getState"],events:["PreferencesController:stateChange"]}),t},n.getMultichainAccountServiceMessenger=function(e){const t=new r.Messenger({namespace:"MultichainAccountService",parent:e});return e.delegate({messenger:t,events:["KeyringController:stateChange","SnapController:stateChange","AccountsController:accountAdded","AccountsController:accountRemoved","RemoteFeatureFlagController:stateChange"],actions:["AccountsController:listMultichainAccounts","AccountsController:getAccountByAddress","AccountsController:getAccount","SnapController:getState","SnapController:handleRequest","KeyringController:getState","KeyringController:withKeyring","KeyringController:addNewKeyring","KeyringController:getKeyringsByType","NetworkController:getNetworkClientById","NetworkController:findNetworkClientIdByChainId"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/accounts/multichain-account-service-messenger.ts"}],[650,{"./constants":649,buffer:4176,multibase:646,varint:653,"web-encoding":5863},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){const{Buffer:r}=e("buffer"),o=e("multibase"),i=e("varint"),{names:s}=e("./constants"),{TextDecoder:a}=e("web-encoding"),c=new a,l={};for(const e in s)l[s[e]]=e;function u(e){n.decode(e)}n.names=s,n.codes=Object.freeze(l),n.toHexString=function(e){if(!(e instanceof Uint8Array))throw new Error("must be passed a Uint8Array");return(r.isBuffer(e)?e:r.from(e.buffer,e.byteOffset,e.byteLength)).toString("hex")},n.fromHexString=function(e){return r.from(e,"hex")},n.toB58String=function(e){if(!(e instanceof Uint8Array))throw new Error("must be passed a Uint8Array");return c.decode(o.encode("base58btc",e)).slice(1)},n.fromB58String=function(e){const t=e instanceof Uint8Array?c.decode(e):e;return o.decode("z"+t)},n.decode=function(e){if(!(e instanceof Uint8Array))throw new Error("multihash must be a Uint8Array");let t=r.isBuffer(e)?e:r.from(e.buffer,e.byteOffset,e.byteLength);if(t.length<2)throw new Error("multihash too short. must be > 2 bytes.");const o=i.decode(t);if(!n.isValidCode(o))throw new Error(`multihash unknown function code: 0x${o.toString(16)}`);t=t.slice(i.decode.bytes);const s=i.decode(t);if(s<0)throw new Error(`multihash invalid length: ${s}`);if(t=t.slice(i.decode.bytes),t.length!==s)throw new Error(`multihash length inconsistent: 0x${t.toString("hex")}`);return{code:o,name:l[o],length:s,digest:t}},n.encode=function(e,t,o){if(!e||t===undefined)throw new Error("multihash encode requires at least two args: digest, code");const s=n.coerceCode(t);if(!(e instanceof Uint8Array))throw new Error("digest should be a Uint8Array");if(null==o&&(o=e.length),o&&e.length!==o)throw new Error("digest length should be equal to specified length.");const a=i.encode(s),c=i.encode(o),l=r.alloc(a.length+c.length+e.length);return l.set(a,0),l.set(c,a.length),l.set(e,a.length+c.length),l},n.coerceCode=function(e){let t=e;if("string"==typeof e){if(s[e]===undefined)throw new Error(`Unrecognized hash function named: ${e}`);t=s[e]}if("number"!=typeof t)throw new Error(`Hash function code should be a number. Got: ${t}`);if(l[t]===undefined&&!n.isAppCode(t))throw new Error(`Unrecognized function code: ${t}`);return t},n.isAppCode=function(e){return e>0&&e<16},n.isValidCode=function(e){return!!n.isAppCode(e)||!!l[e]},n.validate=u,n.prefix=function(e){return u(e),r.from(e.buffer,e.byteOffset,2)}}}},{package:"@ensdomains/content-hash>multihashes",file:"node_modules/@ensdomains/content-hash/node_modules/multihashes/src/index.js"}],[651,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){t.exports=function e(t,n){var i,s=0,a=0,c=n=n||0,l=t.length;do{if(c>=l)throw e.bytes=0,new RangeError("Could not decode varint");i=t[c++],s+=a<28?(i&o)<<a:(i&o)*Math.pow(2,a),a+=7}while(i>=r);return e.bytes=c-n,s};var r=128,o=127}}},{package:"@ensdomains/content-hash>multihashes>varint",file:"node_modules/@ensdomains/content-hash/node_modules/varint/decode.js"}],[652,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){t.exports=function e(t,n,s){n=n||[];var a=s=s||0;for(;t>=i;)n[s++]=255&t|r,t/=128;for(;t&o;)n[s++]=255&t|r,t>>>=7;return n[s]=0|t,e.bytes=s-a+1,n};var r=128,o=-128,i=Math.pow(2,31)}}},{package:"@ensdomains/content-hash>multihashes>varint",file:"node_modules/@ensdomains/content-hash/node_modules/varint/encode.js"}],[653,{"./decode.js":651,"./encode.js":652,"./length.js":654},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){t.exports={encode:e("./encode.js"),decode:e("./decode.js"),encodingLength:e("./length.js")}}}},{package:"@ensdomains/content-hash>multihashes>varint",file:"node_modules/@ensdomains/content-hash/node_modules/varint/index.js"}],[654,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){var r=Math.pow(2,7),o=Math.pow(2,14),i=Math.pow(2,21),s=Math.pow(2,28),a=Math.pow(2,35),c=Math.pow(2,42),l=Math.pow(2,49),u=Math.pow(2,56),d=Math.pow(2,63);t.exports=function(e){return e<r?1:e<o?2:e<i?3:e<s?4:e<a?5:e<c?6:e<l?7:e<u?8:e<d?9:10}}}},{package:"@ensdomains/content-hash>multihashes>varint",file:"node_modules/@ensdomains/content-hash/node_modules/varint/length.js"}],[655,{cids:4207},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){const r=e("cids");n.cidForWeb=e=>{let t=new r(e);0===t.version&&(t=t.toV1());let n=t.toString("base32");if(n.length>63){const e=t.toString("base36");if(e.length<=63)return e;throw new TypeError("CID is longer than DNS limit of 63 characters and is not compatible with public gateways")}return n};n.cidV0ToV1Base32=e=>{let t=new r(e);return 0===t.version&&(t=t.toV1()),t.toString("base32")}}}},{package:"@ensdomains/content-hash",file:"node_modules/@ensdomains/content-hash/src/helpers.js"}],[656,{"./helpers":655,"./profiles":657,multicodec:5103,multihashes:650},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){const r=e("multicodec"),o=e("multihashes"),{hexStringToBuffer:i,profiles:s}=e("./profiles"),{cidForWeb:a,cidV0ToV1Base32:c}=e("./helpers");t.exports={helpers:{cidForWeb:a,cidV0ToV1Base32:c},decode:function(e){const t=i(e),n=r.getCodec(t),o=r.rmPrefix(t);let a=s[n];return a||(a=s.default),a.decode(o)},fromIpfs:function(e){return this.encode("ipfs-ns",e)},fromSkylink:function(e){return this.encode("skynet-ns",e)},fromSwarm:function(e){return this.encode("swarm-ns",e)},fromArweave:function(e){return this.encode("arweave-ns",e)},encode:function(e,t){let n=s[e];n||(n=s.default);const i=n.encode(t);return o.toHexString(r.addPrefix(e,i))},getCodec:function(e){let t=i(e);return r.getCodec(t)}}}}},{package:"@ensdomains/content-hash",file:"node_modules/@ensdomains/content-hash/src/index.js"}],[657,{buffer:4176,cids:4207,"js-base64":4752,multihashes:650},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){(function(t){(function(){const r=e("cids"),o=e("multihashes"),i=e("js-base64"),s=e=>{let t=e.slice(0,2),n=e.slice(2),r="";return r="0x"===t?n:e,o.fromHexString(r)},a=e=>{try{const{multihash:t}=e;if(t.length<38){const e=o.decode(t);if("identity"===e.name&&e.length<36)return!1}return!0}catch(e){return!1}},c={skynet:e=>i.toUint8Array(e),swarm:e=>{const t=o.encode(s(e),"keccak-256");return new r(1,"swarm-manifest",t).bytes},ipfs:e=>new r(e).toV1().bytes,ipns:e=>{const t=new r(e);if(!a(t))throw Error("ipns-ns allows only valid cryptographic libp2p-key identifiers, try using ED25519 pubkey instead");return new r(1,"libp2p-key",t.multihash).bytes},utf8:e=>t.from(e,"utf8"),arweave:e=>i.toUint8Array(e)},l={hexMultiHash:e=>{const t=new r(e);return o.decode(t.multihash).digest.toString("hex")},ipfs:e=>{const t=new r(e).toV1();return t.toString("libp2p-key"===t.codec?"base36":"base32")},ipns:e=>{const t=new r(e).toV1();return a(t)?t.toString("base36"):(console.warn("[ensdomains/content-hash] use of non-cryptographic identifiers in ipns-ns is deprecated and will be removed, migrate to ED25519 libp2p-key"),String(o.decode(new r(e).multihash).digest))},utf8:e=>e.toString("utf8"),base64:e=>i.fromUint8Array(e,!0)},u={"skynet-ns":{encode:c.skynet,decode:l.base64},"swarm-ns":{encode:c.swarm,decode:l.hexMultiHash},"ipfs-ns":{encode:c.ipfs,decode:l.ipfs},"ipns-ns":{encode:c.ipns,decode:l.ipns},"arweave-ns":{encode:c.arweave,decode:l.base64},default:{encode:c.utf8,decode:l.utf8}};n.hexStringToBuffer=s,n.profiles=u}).call(this)}).call(this,e("buffer").Buffer)}}},{package:"@ensdomains/content-hash",file:"node_modules/@ensdomains/content-hash/src/profiles.js"}],[66,{"@metamask/messenger":2365},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getSnapKeyringBuilderInitMessenger=function(e){const t=new r.Messenger({namespace:"SnapKeyringInit",parent:e});return e.delegate({messenger:t,actions:["AccountsController:updateAccounts","KeyringController:persistAllKeyrings","MetaMetricsController:trackEvent"]}),t},n.getSnapKeyringBuilderMessenger=function(e){const t=new r.Messenger({namespace:"SnapKeyring",parent:e});return e.delegate({messenger:t,actions:["ApprovalController:addRequest","ApprovalController:acceptRequest","ApprovalController:rejectRequest","ApprovalController:startFlow","ApprovalController:endFlow","ApprovalController:showSuccess","ApprovalController:showError","PhishingController:testOrigin","PhishingController:maybeUpdateState","KeyringController:getAccounts","AccountsController:setSelectedAccount","AccountsController:getAccountByAddress","AccountsController:setAccountName","AccountsController:listMultichainAccounts","SnapController:handleRequest","SnapController:get","SnapController:isMinimumPlatformVersion","PreferencesController:getState","RemoteFeatureFlagController:getState"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/accounts/snap-keyring-builder-messenger.ts"}],[67,{"@metamask/messenger":2365},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getAddressBookControllerMessenger=function(e){return new r.Messenger({namespace:"AddressBookController",parent:e})};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/address-book-controller-messenger.ts"}],[68,{"@metamask/messenger":2365},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getAlertControllerMessenger=function(e){const t=new r.Messenger({namespace:"AlertController",parent:e});return e.delegate({messenger:t,actions:["AccountsController:getSelectedAccount"],events:["AccountsController:selectedAccountChange"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/alert-controller-messenger.ts"}],[69,{"@metamask/messenger":2365},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getAnnouncementControllerMessenger=function(e){return new r.Messenger({namespace:"AnnouncementController",parent:e})};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/announcement-controller-messenger.ts"}],[7,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){var r,o,i,s,a,c,l,u;Object.defineProperty(n,"__esModule",{value:!0}),n.PREINSTALLED_SNAPS_URLS=void 0;n.PREINSTALLED_SNAPS_URLS=[new URL("/snaps/permissions-kernel-snap.json",(null===(r=self.document)||void 0===r?void 0:r.baseURI)||self.location.href),new URL("/snaps/gator-permissions-snap.json",(null===(o=self.document)||void 0===o?void 0:o.baseURI)||self.location.href),new URL("/snaps/message-signing-snap.json",(null===(i=self.document)||void 0===i?void 0:i.baseURI)||self.location.href),new URL("/snaps/ens-resolver-snap.json",(null===(s=self.document)||void 0===s?void 0:s.baseURI)||self.location.href),new URL("/snaps/institutional-wallet-snap.json",(null===(a=self.document)||void 0===a?void 0:a.baseURI)||self.location.href),new URL("/snaps/bitcoin-wallet-snap.json",(null===(c=self.document)||void 0===c?void 0:c.baseURI)||self.location.href),new URL("/snaps/solana-wallet-snap.json",(null===(l=self.document)||void 0===l?void 0:l.baseURI)||self.location.href),new URL("/snaps/tron-wallet-snap.json",(null===(u=self.document)||void 0===u?void 0:u.baseURI)||self.location.href)]}}},{package:"$root$",file:"app/scripts/constants/snaps.ts"}],[70,{"@metamask/messenger":2365},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getAppMetadataControllerMessenger=function(e){return new r.Messenger({namespace:"AppMetadataController",parent:e})};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/app-metadata-controller-messenger.ts"}],[71,{"@metamask/messenger":2365},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getAppStateControllerMessenger=function(e){const t=new r.Messenger({namespace:"AppStateController",parent:e});return e.delegate({messenger:t,actions:["ApprovalController:addRequest","ApprovalController:acceptRequest","KeyringController:getState","PreferencesController:getState","ProfileMetricsController:skipInitialDelay"],events:["KeyringController:unlock","PreferencesController:stateChange"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/app-state-controller-messenger.ts"}],[72,{"@metamask/messenger":2365},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getApprovalControllerMessenger=function(e){return new r.Messenger({namespace:"ApprovalController",parent:e})};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/approval-controller-messenger.ts"}],[73,{"@metamask/messenger":2365},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getAssetsContractControllerInitMessenger=function(e){const t=new r.Messenger({namespace:"AssetsContractControllerInit",parent:e});return e.delegate({messenger:t,actions:["NetworkController:getNetworkClientById","NetworkController:getState"],events:[]}),t},n.getAssetsContractControllerMessenger=function(e){const t=new r.Messenger({namespace:"AssetsContractController",parent:e});return e.delegate({messenger:t,actions:["NetworkController:getNetworkClientById","NetworkController:getNetworkConfigurationByNetworkClientId","NetworkController:getSelectedNetworkClient","NetworkController:getState"],events:["PreferencesController:stateChange","NetworkController:networkDidChange"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/assets/assets-contract-controller-messenger.ts"}],[74,{"./assets-contract-controller-messenger":73,"./network-enablement-controller-messenger":75,"./network-order-controller-messenger":76,"./nft-controller-messenger":77,"./nft-detection-controller-messenger":78,"./token-rates-controller-messenger":79},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getAssetsContractControllerInitMessenger",{enumerable:!0,get:function(){return s.getAssetsContractControllerInitMessenger}}),Object.defineProperty(n,"getAssetsContractControllerMessenger",{enumerable:!0,get:function(){return s.getAssetsContractControllerMessenger}}),Object.defineProperty(n,"getNetworkEnablementControllerInitMessenger",{enumerable:!0,get:function(){return c.getNetworkEnablementControllerInitMessenger}}),Object.defineProperty(n,"getNetworkEnablementControllerMessenger",{enumerable:!0,get:function(){return c.getNetworkEnablementControllerMessenger}}),Object.defineProperty(n,"getNetworkOrderControllerMessenger",{enumerable:!0,get:function(){return a.getNetworkOrderControllerMessenger}}),Object.defineProperty(n,"getNftControllerInitMessenger",{enumerable:!0,get:function(){return o.getNftControllerInitMessenger}}),Object.defineProperty(n,"getNftControllerMessenger",{enumerable:!0,get:function(){return o.getNftControllerMessenger}}),Object.defineProperty(n,"getNftDetectionControllerMessenger",{enumerable:!0,get:function(){return i.getNftDetectionControllerMessenger}}),Object.defineProperty(n,"getTokenRatesControllerInitMessenger",{enumerable:!0,get:function(){return r.getTokenRatesControllerInitMessenger}}),Object.defineProperty(n,"getTokenRatesControllerMessenger",{enumerable:!0,get:function(){return r.getTokenRatesControllerMessenger}});var r=e("./token-rates-controller-messenger"),o=e("./nft-controller-messenger"),i=e("./nft-detection-controller-messenger"),s=e("./assets-contract-controller-messenger"),a=e("./network-order-controller-messenger"),c=e("./network-enablement-controller-messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/assets/index.ts"}],[75,{"@metamask/messenger":2365},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getNetworkEnablementControllerInitMessenger=function(e){const t=new r.Messenger({namespace:"NetworkEnablementControllerInit",parent:e});return e.delegate({messenger:t,actions:["AccountTreeController:getAccountsFromSelectedAccountGroup"],events:["AccountsController:selectedAccountChange","AccountTreeController:selectedAccountGroupChange"]}),t},n.getNetworkEnablementControllerMessenger=function(e){const t=new r.Messenger({namespace:"NetworkEnablementController",parent:e});return e.delegate({messenger:t,actions:["NetworkController:getState","MultichainNetworkController:getState"],events:["NetworkController:networkAdded","NetworkController:networkRemoved","NetworkController:stateChange","TransactionController:transactionSubmitted"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/assets/network-enablement-controller-messenger.ts"}],[76,{"@metamask/messenger":2365},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getNetworkOrderControllerMessenger=function(e){const t=new r.Messenger({namespace:"NetworkOrderController",parent:e});return e.delegate({messenger:t,events:["NetworkController:stateChange","NetworkController:networkRemoved"],actions:["NetworkController:getState","NetworkController:setActiveNetwork"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/assets/network-order-controller-messenger.ts"}],[77,{"@metamask/messenger":2365},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getNftControllerInitMessenger=function(e){const t=new r.Messenger({namespace:"NftControllerInit",parent:e});return e.delegate({messenger:t,actions:["MetaMetricsController:trackEvent"]}),t},n.getNftControllerMessenger=function(e){const t=new r.Messenger({namespace:"NftController",parent:e});return e.delegate({messenger:t,events:["PreferencesController:stateChange","AccountsController:selectedEvmAccountChange"],actions:["ApprovalController:addRequest","NetworkController:getNetworkClientById","AccountsController:getSelectedAccount","AccountsController:getAccount","AssetsContractController:getERC721AssetName","AssetsContractController:getERC721AssetSymbol","AssetsContractController:getERC721TokenURI","AssetsContractController:getERC721OwnerOf","AssetsContractController:getERC1155BalanceOf","AssetsContractController:getERC1155TokenURI","NetworkController:findNetworkClientIdByChainId","PhishingController:bulkScanUrls"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/assets/nft-controller-messenger.ts"}],[78,{"@metamask/messenger":2365},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getNftDetectionControllerMessenger=function(e){const t=new r.Messenger({namespace:"NftDetectionController",parent:e});return e.delegate({messenger:t,events:["NetworkController:stateChange","PreferencesController:stateChange"],actions:["ApprovalController:addRequest","NetworkController:getState","NetworkController:getNetworkClientById","AccountsController:getSelectedAccount","NetworkController:findNetworkClientIdByChainId","PhishingController:bulkScanUrls"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/assets/nft-detection-controller-messenger.ts"}],[79,{"@metamask/messenger":2365},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getTokenRatesControllerInitMessenger=function(e){const t=new r.Messenger({namespace:"TokenRatesControllerInit",parent:e});return e.delegate({messenger:t,actions:["PreferencesController:getState"],events:["PreferencesController:stateChange"]}),t},n.getTokenRatesControllerMessenger=function(e){const t=new r.Messenger({namespace:"TokenRatesController",parent:e});return e.delegate({messenger:t,actions:["TokensController:getState","NetworkController:getState"],events:["TokensController:stateChange","NetworkController:stateChange"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/assets/token-rates-controller-messenger.ts"}],[8,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.PHISHING_WARNING_PAGE=n.PHISHING_STREAM=n.PHISHING_SAFELIST=n.METAMASK_INPAGE=n.METAMASK_EIP_1193_PROVIDER=n.METAMASK_COOKIE_HANDLER=n.METAMASK_CAIP_MULTICHAIN_PROVIDER=n.LEGACY_PUBLIC_CONFIG=n.LEGACY_PROVIDER=n.LEGACY_INPAGE=n.LEGACY_CONTENT_SCRIPT=n.CONTENT_SCRIPT=void 0;n.CONTENT_SCRIPT="metamask-contentscript",n.METAMASK_INPAGE="metamask-inpage",n.PHISHING_WARNING_PAGE="metamask-phishing-warning-page",n.METAMASK_COOKIE_HANDLER="metamask-cookie-handler",n.METAMASK_EIP_1193_PROVIDER="metamask-provider",n.METAMASK_CAIP_MULTICHAIN_PROVIDER="metamask-multichain-provider",n.PHISHING_SAFELIST="metamask-phishing-safelist",n.PHISHING_STREAM="phishing",n.LEGACY_CONTENT_SCRIPT="contentscript",n.LEGACY_INPAGE="inpage",n.LEGACY_PROVIDER="provider",n.LEGACY_PUBLIC_CONFIG="publicConfig"}}},{package:"$root$",file:"app/scripts/constants/stream.ts"}],[80,{"@metamask/messenger":2365},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getBridgeControllerInitMessenger=function(e){const t=new r.Messenger({namespace:"BridgeControllerInit",parent:e});return e.delegate({messenger:t,actions:["MetaMetricsController:trackEvent"]}),t},n.getBridgeControllerMessenger=function(e){const t=new r.Messenger({namespace:"BridgeController",parent:e});return e.delegate({messenger:t,actions:["AccountsController:getAccountByAddress","SnapController:handleRequest","NetworkController:getNetworkClientById","NetworkController:findNetworkClientIdByChainId","TokenRatesController:getState","MultichainAssetsRatesController:getState","RemoteFeatureFlagController:getState","CurrencyRateController:getState"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/bridge-controller-messenger.ts"}],[81,{"@metamask/messenger":2365},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getBridgeStatusControllerMessenger=function(e){const t=new r.Messenger({namespace:"BridgeStatusController",parent:e});return e.delegate({messenger:t,actions:["AccountsController:getAccountByAddress","NetworkController:getNetworkClientById","NetworkController:findNetworkClientIdByChainId","NetworkController:getState","BridgeController:trackUnifiedSwapBridgeEvent","BridgeController:stopPollingForQuotes","GasFeeController:getState","SnapController:handleRequest","TransactionController:getState","RemoteFeatureFlagController:getState"],events:["MultichainTransactionsController:transactionConfirmed","TransactionController:transactionFailed","TransactionController:transactionConfirmed"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/bridge-status-controller-messenger.ts"}],[82,{"@metamask/messenger":2365},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getClaimsControllerInitMessenger=function(e){const t=new r.Messenger({namespace:"ClaimsControllerInit",parent:e});return e.delegate({messenger:t,events:[],actions:[]}),t},n.getClaimsControllerMessenger=function(e){const t=new r.Messenger({namespace:"ClaimsController",parent:e});return e.delegate({messenger:t,actions:["ClaimsService:fetchClaimsConfigurations","ClaimsService:getClaimsApiUrl","ClaimsService:getRequestHeaders","ClaimsService:generateMessageForClaimSignature","ClaimsService:getClaims","KeyringController:signPersonalMessage"],events:[]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/claims/claims-controller-messenger.ts"}],[83,{"@metamask/messenger":2365},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getClaimsServiceInitMessenger=function(e){return new r.Messenger({namespace:"ClaimsServiceInit",parent:e})},n.getClaimsServiceMessenger=function(e){const t=new r.Messenger({namespace:"ClaimsService",parent:e});return e.delegate({messenger:t,actions:["AuthenticationController:getBearerToken"],events:[]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/claims/claims-service-messenger.ts"}],[84,{"@metamask/messenger":2365},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getConnectivityControllerMessenger=function(e){return new r.Messenger({namespace:"ConnectivityController",parent:e})};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/connectivity/connectivity-controller-messenger.ts"}],[85,{"./connectivity-controller-messenger":84},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getConnectivityControllerMessenger",{enumerable:!0,get:function(){return r.getConnectivityControllerMessenger}});var r=e("./connectivity-controller-messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/connectivity/index.ts"}],[86,{"@metamask/messenger":2365},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getAccountActivityServiceMessenger=function(e){const t=new r.Messenger({namespace:"AccountActivityService",parent:e});return e.delegate({messenger:t,actions:["AccountsController:getSelectedAccount","BackendWebSocketService:connect","BackendWebSocketService:forceReconnection","BackendWebSocketService:subscribe","BackendWebSocketService:getConnectionInfo","BackendWebSocketService:channelHasSubscription","BackendWebSocketService:getSubscriptionsByChannel","BackendWebSocketService:findSubscriptionsByChannelPrefix","BackendWebSocketService:addChannelCallback","BackendWebSocketService:removeChannelCallback"],events:["AccountsController:selectedAccountChange","BackendWebSocketService:connectionStateChanged"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/core-backend/account-activity-service-messenger.ts"}],[861,{"@firebase/component":862,"@firebase/logger":864,"@firebase/util":867,idb:4710},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"FirebaseError",{enumerable:!0,get:function(){return i.FirebaseError}}),n._DEFAULT_ENTRY_NAME=n.SDK_VERSION=void 0,n._addComponent=H,n._addOrOverwriteComponent=function(e,t){e.container.addOrOverwriteComponent(t)},n._apps=void 0,n._clearComponents=function(){F.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,n._components=void 0,n._getProvider=K,n._isFirebaseApp=G,n._isFirebaseServerApp=function(e){return e.settings!==undefined},n._registerComponent=V,n._removeServiceInstance=function(e,t,n=$){K(e,t).clearInstance(n)},n._serverApps=void 0,n.deleteApp=X,n.getApp=function(e=$){const t=L.get(e);if(!t&&e===$&&(0,i.getDefaultAppConfig)())return Y();if(!t)throw q.create("no-app",{appName:e});return t},n.getApps=function(){return Array.from(L.values())},n.initializeApp=Y,n.initializeServerApp=function(e,t){if((0,i.isBrowser)()&&!(0,i.isWebWorker)())throw q.create("invalid-server-app-environment");t.automaticDataCollectionEnabled===undefined&&(t.automaticDataCollectionEnabled=!1);let n;n=G(e)?e.options:e;const o=Object.assign(Object.assign({},t),n);o.releaseOnDeref!==undefined&&delete o.releaseOnDeref;if(t.releaseOnDeref!==undefined&&"undefined"==typeof FinalizationRegistry)throw q.create("finalization-registry-not-supported",{});const s=""+(c=JSON.stringify(o),[...c].reduce((e,t)=>Math.imul(31,e)+t.charCodeAt(0)|0,0)),a=U.get(s);var c;if(a)return a.incRefCount(t.releaseOnDeref),a;const l=new r.ComponentContainer(s);for(const e of F.values())l.addComponent(e);const u=new J(n,t,s,l);return U.set(s,u),u},n.onLog=function(e,t){if(null!==e&&"function"!=typeof e)throw q.create("invalid-log-argument");(0,o.setUserLogHandler)(e,t)},n.registerVersion=Z,n.setLogLevel=function(e){(0,o.setLogLevel)(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */;var r=e("@firebase/component"),o=e("@firebase/logger"),i=e("@firebase/util"),s=e("idb");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const c="@firebase/app",l="0.10.18",u=new o.Logger("@firebase/app"),d="@firebase/app-compat",f="@firebase/analytics-compat",h="@firebase/analytics",p="@firebase/app-check-compat",g="@firebase/app-check",m="@firebase/auth",b="@firebase/auth-compat",w="@firebase/database",y="@firebase/data-connect",v="@firebase/database-compat",k="@firebase/functions",C="@firebase/functions-compat",E="@firebase/installations",_="@firebase/installations-compat",T="@firebase/messaging",S="@firebase/messaging-compat",A="@firebase/performance",I="@firebase/performance-compat",M="@firebase/remote-config",O="@firebase/remote-config-compat",P="@firebase/storage",N="@firebase/storage-compat",j="@firebase/firestore",R="@firebase/vertexai",D="@firebase/firestore-compat",x="firebase",$=n._DEFAULT_ENTRY_NAME="[DEFAULT]",B={[c]:"fire-core",[d]:"fire-core-compat",[h]:"fire-analytics",[f]:"fire-analytics-compat",[g]:"fire-app-check",[p]:"fire-app-check-compat",[m]:"fire-auth",[b]:"fire-auth-compat",[w]:"fire-rtdb",[y]:"fire-data-connect",[v]:"fire-rtdb-compat",[k]:"fire-fn",[C]:"fire-fn-compat",[E]:"fire-iid",[_]:"fire-iid-compat",[T]:"fire-fcm",[S]:"fire-fcm-compat",[A]:"fire-perf",[I]:"fire-perf-compat",[M]:"fire-rc",[O]:"fire-rc-compat",[P]:"fire-gcs",[N]:"fire-gcs-compat",[j]:"fire-fst",[D]:"fire-fst-compat",[R]:"fire-vertex","fire-js":"fire-js",[x]:"fire-js-all"},L=n._apps=new Map,U=n._serverApps=new Map,F=n._components=new Map;function H(e,t){try{e.container.addComponent(t)}catch(n){u.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function V(e){const t=e.name;if(F.has(t))return u.debug(`There were multiple attempts to register component ${t}.`),!1;F.set(t,e);for(const t of L.values())H(t,e);for(const t of U.values())H(t,e);return!0}function K(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function G(e){return e.options!==undefined}const W={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},q=new i.ErrorFactory("app","Firebase",W);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class z{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.Component("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw q.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J extends z{constructor(e,t,n,r){const o=t.automaticDataCollectionEnabled!==undefined&&t.automaticDataCollectionEnabled,i={name:n,automaticDataCollectionEnabled:o};if(e.apiKey!==undefined)super(e,i,r);else{super(e.options,i,r)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:o},t),this._finalizationRegistry=null,"undefined"!=typeof FinalizationRegistry&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=undefined,t.releaseOnDeref=undefined,Z(c,l,"serverapp")}toJSON(){return undefined}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==undefined&&null!==this._finalizationRegistry&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){X(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw q.create("server-app-deleted")}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */n.SDK_VERSION="11.2.0";function Y(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const o=Object.assign({name:$,automaticDataCollectionEnabled:!1},t),s=o.name;if("string"!=typeof s||!s)throw q.create("bad-app-name",{appName:String(s)});if(n||(n=(0,i.getDefaultAppConfig)()),!n)throw q.create("no-options");const a=L.get(s);if(a){if((0,i.deepEqual)(n,a.options)&&(0,i.deepEqual)(o,a.config))return a;throw q.create("duplicate-app",{appName:s})}const c=new r.ComponentContainer(s);for(const e of F.values())c.addComponent(e);const l=new z(n,o,c);return L.set(s,l),l}async function X(e){let t=!1;const n=e.name;if(L.has(n))t=!0,L.delete(n);else if(U.has(n)){e.decRefCount()<=0&&(U.delete(n),t=!0)}t&&(await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function Z(e,t,n){var o;let i=null!==(o=B[e])&&void 0!==o?o:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void u.warn(e.join(" "))}V(new r.Component(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}const Q="firebase-heartbeat-store";let ee=null;function te(){return ee||(ee=(0,s.openDB)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(Q)}catch(e){console.warn(e)}}}).catch(e=>{throw q.create("idb-open",{originalErrorMessage:e.message})})),ee}async function ne(e,t){try{const n=(await te()).transaction(Q,"readwrite"),r=n.objectStore(Q);await r.put(t,re(e)),await n.done}catch(e){if(e instanceof i.FirebaseError)u.warn(e.message);else{const t=q.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});u.warn(t.message)}}}function re(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new se(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ie();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))return;return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}catch(e){u.warn(e)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=ie(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){const n=[];let r=e.slice();for(const o of e){const e=n.find(e=>e.agent===o.agent);if(e){if(e.dates.push(o.date),ae(n)>t){e.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),ae(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),o=(0,i.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return u.warn(e),""}}}function ie(){return(new Date).toISOString().substring(0,10)}class se{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.isIndexedDBAvailable)()&&(0,i.validateIndexedDBOpenable)().then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await te()).transaction(Q),n=await t.objectStore(Q).get(re(e));return await t.done,n}catch(e){if(e instanceof i.FirebaseError)u.warn(e.message);else{const t=q.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});u.warn(t.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ne(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ne(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ae(e){return(0,i.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;ce="",V(new r.Component("platform-logger",e=>new a(e),"PRIVATE")),V(new r.Component("heartbeat",e=>new oe(e),"PRIVATE")),Z(c,l,ce),Z(c,l,"esm2017"),Z("fire-js","")}}},{package:"@metamask/notification-services-controller>firebase>@firebase/app",file:"node_modules/@firebase/app/dist/esm/index.esm2017.js"}],[862,{"@firebase/util":867},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.Provider=n.ComponentContainer=n.Component=void 0;var r=e("@firebase/util");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n.Component=class{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.Deferred;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),o=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;o.add(e),this.onInitCallbacks.set(r,o);const i=this.instances.get(r);return i&&e(i,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===o?undefined:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}n.Provider=i;n.ComponentContainer=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new i(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}}}},{package:"@metamask/notification-services-controller>firebase>@firebase/app>@firebase/component",file:"node_modules/@firebase/component/dist/esm/index.esm2017.js"}],[863,{"@firebase/app":861,"@firebase/component":862,"@firebase/util":867,idb:4710},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.deleteInstallations=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e){const{appConfig:t}=e,n=await F(t,e=>e&&0===e.registrationStatus?undefined:e);if(n){if(1===n.registrationStatus)throw g.create("delete-pending-registration");if(2===n.registrationStatus){if(!navigator.onLine)throw g.create("app-offline");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
await async function(e,t){const n=function(e,{fid:t}){return`${b(e)}/${t}`}(e,t),r=k(e,t),o={method:"DELETE",headers:r},i=await C(()=>fetch(n,o));if(!i.ok)throw await y("Delete Installation",i)}(t,n),await U(t)}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,n.getId=Y,n.getInstallations=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e=(0,r.getApp)()){return(0,r._getProvider)(e,"installations").getImmediate()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,n.getToken=X,n.onIdChange=function(e,t){const{appConfig:n}=e;return function(e,t){N();const n=A(e);let r=I.get(n);r||(r=new Set,I.set(n,r));r.add(t)}(n,t),()=>{!function(e,t){const n=A(e),r=I.get(n);if(!r)return;r.delete(t),0===r.size&&I.delete(n);j()}(n,t)}};var r=e("@firebase/app"),o=e("@firebase/component"),i=e("@firebase/util"),s=e("idb");const a="@firebase/installations",c="0.6.12",l=1e4,u=`w:${c}`,d="FIS_v2",f="https://firebaseinstallations.googleapis.com/v1",h=36e5,p={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},g=new i.ErrorFactory("installations","Installations",p);function m(e){return e instanceof i.FirebaseError&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b({projectId:e}){return`${f}/projects/${e}/installations`}function w(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function y(e,t){const n=(await t.json()).error;return g.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function v({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function k(e,{refreshToken:t}){const n=v(e);return n.append("Authorization",function(e){return`${d} ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),n}async function C(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function E(e){return new Promise(t=>{setTimeout(t,e)})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _=/^[cdef][\w-]{21}$/,T="";function S(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){const t=(n=e,btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_"));var n;return t.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);return _.test(t)?t:T}catch(e){return T}}function A(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=new Map;function M(e,t){const n=A(e);O(n,t),function(e,t){const n=N();n&&n.postMessage({key:e,fid:t});j()}(n,t)}function O(e,t){const n=I.get(e);if(n)for(const e of n)e(t)}let P=null;function N(){return!P&&"BroadcastChannel"in self&&(P=new BroadcastChannel("[Firebase] FID Change"),P.onmessage=e=>{O(e.data.key,e.data.fid)}),P}function j(){0===I.size&&P&&(P.close(),P=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R="firebase-installations-database",D=1,x="firebase-installations-store";let $=null;function B(){return $||($=(0,s.openDB)(R,D,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(x)}})),$}async function L(e,t){const n=A(e),r=(await B()).transaction(x,"readwrite"),o=r.objectStore(x),i=await o.get(n);return await o.put(t,n),await r.done,i&&i.fid===t.fid||M(e,t.fid),t}async function U(e){const t=A(e),n=(await B()).transaction(x,"readwrite");await n.objectStore(x).delete(t),await n.done}async function F(e,t){const n=A(e),r=(await B()).transaction(x,"readwrite"),o=r.objectStore(x),i=await o.get(n),s=t(i);return s===undefined?await o.delete(n):await o.put(s,n),await r.done,!s||i&&i.fid===s.fid||M(e,s.fid),s}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e){let t;const n=await F(e.appConfig,n=>{const r=function(e){const t=e||{fid:S(),registrationStatus:0};return G(t)}(n),o=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(g.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=b(e),o=v(e),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&o.append("x-firebase-client",e)}const s={fid:n,authVersion:d,appId:e.appId,sdkVersion:u},a={method:"POST",headers:o,body:JSON.stringify(s)},c=await C(()=>fetch(r,a));if(c.ok){const e=await c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:w(e.authToken)}}throw await y("Create Installation",c)}(e,t);return L(e.appConfig,n)}catch(n){throw m(n)&&409===n.customData.serverCode?await U(e.appConfig):await L(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:V(e)}:{installationEntry:t}}(e,r);return t=o.registrationPromise,o.installationEntry});return n.fid===T?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function V(e){let t=await K(e.appConfig);for(;1===t.registrationStatus;)await E(100),t=await K(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await H(e);return n||t}return t}function K(e){return F(e,e=>{if(!e)throw g.create("installation-not-found");return G(e)})}function G(e){return 1===(t=e).registrationStatus&&t.registrationTime+l<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}async function W({appConfig:e,heartbeatServiceProvider:t},n){const r=function(e,{fid:t}){return`${b(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,n),o=k(e,n),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&o.append("x-firebase-client",e)}const s={installation:{sdkVersion:u,appId:e.appId}},a={method:"POST",headers:o,body:JSON.stringify(s)},c=await C(()=>fetch(r,a));if(c.ok){return w(await c.json())}throw await y("Generate Auth Token",c)}async function q(e,t=!1){let n;const r=await F(e.appConfig,r=>{if(!J(r))throw g.create("not-registered");const o=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+h}(e)}(o))return r;if(1===o.requestStatus)return n=async function(e,t){let n=await z(e.appConfig);for(;1===n.authToken.requestStatus;)await E(100),n=await z(e.appConfig);const r=n.authToken;return 0===r.requestStatus?q(e,t):r}(e,t),r;{if(!navigator.onLine)throw g.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await W(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await L(e.appConfig,r),n}catch(n){if(!m(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await L(e.appConfig,n)}else await U(e.appConfig);throw n}}(e,t),t}});return n?await n:r.authToken}function z(e){return F(e,e=>{if(!J(e))throw g.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+l<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */})}function J(e){return e!==undefined&&2===e.registrationStatus}async function Y(e){const t=e,{installationEntry:n,registrationPromise:r}=await H(t);return r?r.catch(console.error):q(t).catch(console.error),n.fid}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await H(e);t&&await t}(n);return(await q(n,t)).token}function Z(e){return g.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q="installations",ee=e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw Z("App Configuration");if(!e.name)throw Z("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Z(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:(0,r._getProvider)(t,"heartbeat"),_delete:()=>Promise.resolve()}},te=e=>{const t=e.getProvider("app").getImmediate(),n=(0,r._getProvider)(t,Q).getImmediate();return{getId:()=>Y(n),getToken:e=>X(n,e)}};(0,r._registerComponent)(new o.Component(Q,ee,"PUBLIC")),(0,r._registerComponent)(new o.Component("installations-internal",te,"PRIVATE")),(0,r.registerVersion)(a,c),(0,r.registerVersion)(a,c,"esm2017")}}},{package:"@metamask/notification-services-controller>firebase>@firebase/installations",file:"node_modules/@firebase/installations/dist/esm/index.esm2017.js"}],[864,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var o;n.LogLevel=void 0,(o=n.LogLevel||(n.LogLevel={}))[o.DEBUG=0]="DEBUG",o[o.VERBOSE=1]="VERBOSE",o[o.INFO=2]="INFO",o[o.WARN=3]="WARN",o[o.ERROR=4]="ERROR",o[o.SILENT=5]="SILENT";const i={debug:n.LogLevel.DEBUG,verbose:n.LogLevel.VERBOSE,info:n.LogLevel.INFO,warn:n.LogLevel.WARN,error:n.LogLevel.ERROR,silent:n.LogLevel.SILENT},s=n.LogLevel.INFO,a={[n.LogLevel.DEBUG]:"log",[n.LogLevel.VERBOSE]:"log",[n.LogLevel.INFO]:"info",[n.LogLevel.WARN]:"warn",[n.LogLevel.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),o=a[t];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[o](`[${r}]  ${e.name}:`,...n)};n.Logger=class{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in n.LogLevel))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?i[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,n.LogLevel.DEBUG,...e),this._logHandler(this,n.LogLevel.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,n.LogLevel.VERBOSE,...e),this._logHandler(this,n.LogLevel.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,n.LogLevel.INFO,...e),this._logHandler(this,n.LogLevel.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,n.LogLevel.WARN,...e),this._logHandler(this,n.LogLevel.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,n.LogLevel.ERROR,...e),this._logHandler(this,n.LogLevel.ERROR,...e)}},n.setLogLevel=function(e){r.forEach(t=>{t.setLogLevel(e)})},n.setUserLogHandler=function(e,t){for(const o of r){let r=null;t&&t.level&&(r=i[t.level]),o.userLogHandler=null===e?null:(t,o,...i)=>{const s=i.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");o>=(null!=r?r:t.logLevel)&&e({level:n.LogLevel[o].toLowerCase(),message:s,args:i,type:t.name})}}}}}},{package:"@metamask/notification-services-controller>firebase>@firebase/app>@firebase/logger",file:"node_modules/@firebase/logger/dist/index.cjs.js"}],[865,{"@firebase/app":861,"@firebase/component":862,"@firebase/installations":863,"@firebase/util":867,idb:4710},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.deleteToken=function(e){
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e){if(!navigator)throw M.create("only-available-in-window");e.swRegistration||await U(e);return async function(e){const t=await T(e.firebaseDependencies);t&&(await O(e.firebaseDependencies,t.token),await async function(e){const t=A(e),n=(await _()).transaction(C,"readwrite");await n.objectStore(C).delete(t),await n.done}(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();if(n)return n.unsubscribe();return!0}(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e=(0,i.getModularInstance)(e))},n.getMessaging=
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e=(0,s.getApp)()){return z().then(e=>{if(!e)throw M.create("unsupported-browser")},e=>{throw M.create("indexed-db-unsupported")}),(0,s._getProvider)((0,i.getModularInstance)(e),"messaging").getImmediate()},n.getToken=async function(e,t){return F(e=(0,i.getModularInstance)(e),t)},n.isSupported=z,n.onMessage=function(e,t){return function(e,t){if(!navigator)throw M.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}(e=(0,i.getModularInstance)(e),t)},e("@firebase/installations");var r=e("@firebase/component"),o=e("idb"),i=e("@firebase/util"),s=e("@firebase/app");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a="/firebase-messaging-sw.js",c="/firebase-cloud-messaging-push-scope",l="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",u="https://fcmregistrations.googleapis.com/v1",d="google.c.a.c_id",f=1e4;var h,p;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function m(e){const t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),r=new Uint8Array(n.length);for(let e=0;e<n.length;++e)r[e]=n.charCodeAt(e);return r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"}(h||(h={})),function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"}(p||(p={}));const b="fcm_token_details_db",w=5,y="fcm_token_object_Store";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const v="firebase-messaging-database",k=1,C="firebase-messaging-store";let E=null;function _(){return E||(E=(0,o.openDB)(v,k,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(C)}})),E}async function T(e){const t=A(e),n=await _(),r=await n.transaction(C).objectStore(C).get(t);if(r)return r;{const t=await async function(e){if("databases"in indexedDB){const e=(await indexedDB.databases()).map(e=>e.name);if(!e.includes(b))return null}let t=null;return(await(0,o.openDB)(b,w,{upgrade:async(n,r,o,i)=>{var s;if(r<2)return;if(!n.objectStoreNames.contains(y))return;const a=i.objectStore(y),c=await a.index("fcmSenderId").get(e);if(await a.clear(),c)if(2===r){const e=c;if(!e.auth||!e.p256dh||!e.endpoint)return;t={token:e.fcmToken,createTime:null!==(s=e.createTime)&&void 0!==s?s:Date.now(),subscriptionOptions:{auth:e.auth,p256dh:e.p256dh,endpoint:e.endpoint,swScope:e.swScope,vapidKey:"string"==typeof e.vapidKey?e.vapidKey:g(e.vapidKey)}}}else if(3===r){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:g(e.auth),p256dh:g(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:g(e.vapidKey)}}}else if(4===r){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:g(e.auth),p256dh:g(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:g(e.vapidKey)}}}}})).close(),await(0,o.deleteDB)(b),await(0,o.deleteDB)("fcm_vapid_details_db"),await(0,o.deleteDB)("undefined"),function(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}(t)?t:null}(e.appConfig.senderId);if(t)return await S(e,t),t}}async function S(e,t){const n=A(e),r=(await _()).transaction(C,"readwrite");return await r.objectStore(C).put(t,n),await r.done,t}function A({appConfig:e}){return e.appId}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},M=new i.ErrorFactory("messaging","Messaging",I);async function O(e,t){const n={method:"DELETE",headers:await N(e)};try{const r=await fetch(`${P(e.appConfig)}/${t}`,n),o=await r.json();if(o.error){const e=o.error.message;throw M.create("token-unsubscribe-failed",{errorInfo:e})}}catch(e){throw M.create("token-unsubscribe-failed",{errorInfo:null==e?void 0:e.toString()})}}function P({projectId:e}){return`${u}/projects/${e}/registrations`}async function N({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function j({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const o={web:{endpoint:n,auth:t,p256dh:e}};return r!==l&&(o.web.applicationPubKey=r),o}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=6048e5;async function D(e){const t=await async function(e,t){const n=await e.pushManager.getSubscription();if(n)return n;return e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:m(t)})}(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:g(t.getKey("auth")),p256dh:g(t.getKey("p256dh"))},r=await T(e.firebaseDependencies);if(r){if(function(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,o=t.auth===e.auth,i=t.p256dh===e.p256dh;return n&&r&&o&&i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r.subscriptionOptions,n))return Date.now()>=r.createTime+R?async function(e,t){try{const n=await async function(e,t){const n=await N(e),r=j(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{const n=await fetch(`${P(e.appConfig)}/${t.token}`,o);i=await n.json()}catch(e){throw M.create("token-update-failed",{errorInfo:null==e?void 0:e.toString()})}if(i.error){const e=i.error.message;throw M.create("token-update-failed",{errorInfo:e})}if(!i.token)throw M.create("token-update-no-token");return i.token}(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await S(e.firebaseDependencies,r),n}catch(e){throw e}}(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await O(e.firebaseDependencies,r.token)}catch(e){console.warn(e)}return x(e.firebaseDependencies,n)}return x(e.firebaseDependencies,n)}async function x(e,t){const n=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */await async function(e,t){const n=await N(e),r=j(t),o={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{const t=await fetch(P(e.appConfig),o);i=await t.json()}catch(e){throw M.create("token-subscribe-failed",{errorInfo:null==e?void 0:e.toString()})}if(i.error){const e=i.error.message;throw M.create("token-subscribe-failed",{errorInfo:e})}if(!i.token)throw M.create("token-subscribe-no-token");return i.token}(e,t),r={token:n,createTime:Date.now(),subscriptionOptions:t};return await S(e,r),r.token}function $(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return function(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const o=t.notification.image;o&&(e.notification.image=o);const i=t.notification.icon;i&&(e.notification.icon=i)}(t,e),function(e,t){if(!t.data)return;e.data=t.data}(t,e),function(e,t){var n,r,o,i,s;if(!t.fcmOptions&&!(null===(n=t.notification)||void 0===n?void 0:n.click_action))return;e.fcmOptions={};const a=null!==(o=null===(r=t.fcmOptions)||void 0===r?void 0:r.link)&&void 0!==o?o:null===(i=t.notification)||void 0===i?void 0:i.click_action;a&&(e.fcmOptions.link=a);const c=null===(s=t.fcmOptions)||void 0===s?void 0:s.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,e),t}function B(e){return M.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!function(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));n.join("")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class L{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const r=function(e){if(!e||!e.options)throw B("App Configuration Object");if(!e.name)throw B("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const e of t)if(!n[e])throw B(e);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}(e);this.firebaseDependencies={app:e,appConfig:r,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(e){try{e.swRegistration=await navigator.serviceWorker.register(a,{scope:c}),e.swRegistration.update().catch(()=>{}),await async function(e){return new Promise((t,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${f} ms`)),f),o=e.installing||e.waiting;e.active?(clearTimeout(r),t()):o?o.onstatechange=e=>{var n;"activated"===(null===(n=e.target)||void 0===n?void 0:n.state)&&(o.onstatechange=null,clearTimeout(r),t())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.swRegistration)}catch(e){throw M.create("failed-service-worker-registration",{browserErrorMessage:null==e?void 0:e.message})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function F(e,t){if(!navigator)throw M.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw M.create("permission-blocked");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return await async function(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=l)}(e,null==t?void 0:t.vapidKey),await async function(e,t){if(t||e.swRegistration||await U(e),t||!e.swRegistration){if(!(t instanceof ServiceWorkerRegistration))throw M.create("invalid-sw-registration");e.swRegistration=t}}(e,null==t?void 0:t.serviceWorkerRegistration),D(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e,t,n){const r=function(e){switch(e){case p.NOTIFICATION_CLICKED:return"notification_open";case p.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[d],message_name:n["google.c.a.c_l"],message_time:n["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)})}async function V(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===p.PUSH_RECEIVED&&("function"==typeof e.onMessageHandler?e.onMessageHandler($(n)):e.onMessageHandler.next($(n)));const r=n.data;var o;"object"==typeof(o=r)&&o&&d in o&&"1"===r["google.c.a.e"]&&await H(e,n.messageType,r)}const K="@firebase/messaging",G="0.12.16",W=e=>{const t=new L(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",e=>V(t,e)),t},q=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:e=>F(t,e)}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function z(){try{await(0,i.validateIndexedDBOpenable)()}catch(e){return!1}return"undefined"!=typeof window&&(0,i.isIndexedDBAvailable)()&&(0,i.areCookiesEnabled)()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}(0,s._registerComponent)(new r.Component("messaging",W,"PUBLIC")),(0,s._registerComponent)(new r.Component("messaging-internal",q,"PRIVATE")),(0,s.registerVersion)(K,G),(0,s.registerVersion)(K,G,"esm2017")}}},{package:"@metamask/notification-services-controller>firebase>@firebase/messaging",file:"node_modules/@firebase/messaging/dist/esm/index.esm2017.js"}],[866,{"@firebase/app":861,"@firebase/component":862,"@firebase/installations":863,"@firebase/util":867,idb:4710},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),e("@firebase/installations");var r=e("@firebase/component"),o=e("idb"),i=e("@firebase/util"),s=e("@firebase/app");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",c="FCM_MSG";var l,u;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function f(e){const t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),r=new Uint8Array(n.length);for(let e=0;e<n.length;++e)r[e]=n.charCodeAt(e);return r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"}(l||(l={})),function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"}(u||(u={}));const h="fcm_token_details_db",p="fcm_token_object_Store";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const g="firebase-messaging-store";let m=null;function b(){return m||(m=o.openDB("firebase-messaging-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(g)}})),m}async function w(e){const t=v(e),n=await b(),r=await n.transaction(g).objectStore(g).get(t);if(r)return r;{const t=await async function(e){if("databases"in indexedDB){const e=(await indexedDB.databases()).map(e=>e.name);if(!e.includes(h))return null}let t=null;return(await o.openDB(h,5,{upgrade:async(n,r,o,i)=>{var s;if(r<2)return;if(!n.objectStoreNames.contains(p))return;const a=i.objectStore(p),c=await a.index("fcmSenderId").get(e);if(await a.clear(),c)if(2===r){const e=c;if(!e.auth||!e.p256dh||!e.endpoint)return;t={token:e.fcmToken,createTime:null!==(s=e.createTime)&&void 0!==s?s:Date.now(),subscriptionOptions:{auth:e.auth,p256dh:e.p256dh,endpoint:e.endpoint,swScope:e.swScope,vapidKey:"string"==typeof e.vapidKey?e.vapidKey:d(e.vapidKey)}}}else if(3===r){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:d(e.auth),p256dh:d(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:d(e.vapidKey)}}}else if(4===r){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:d(e.auth),p256dh:d(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:d(e.vapidKey)}}}}})).close(),await o.deleteDB(h),await o.deleteDB("fcm_vapid_details_db"),await o.deleteDB("undefined"),function(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}(t)?t:null}(e.appConfig.senderId);if(t)return await y(e,t),t}}async function y(e,t){const n=v(e),r=(await b()).transaction(g,"readwrite");return await r.objectStore(g).put(t,n),await r.done,t}function v({appConfig:e}){return e.appId}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},C=new i.ErrorFactory("messaging","Messaging",k);async function E(e,t){const n={method:"DELETE",headers:await T(e)};try{const r=await fetch(`${_(e.appConfig)}/${t}`,n),o=await r.json();if(o.error){const e=o.error.message;throw C.create("token-unsubscribe-failed",{errorInfo:e})}}catch(e){throw C.create("token-unsubscribe-failed",{errorInfo:null==e?void 0:e.toString()})}}function _({projectId:e}){return`https://fcmregistrations.googleapis.com/v1/projects/${e}/registrations`}async function T({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function S({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const o={web:{endpoint:n,auth:t,p256dh:e}};return r!==a&&(o.web.applicationPubKey=r),o}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A(e){const t=await async function(e,t){const n=await e.pushManager.getSubscription();if(n)return n;return e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:f(t)})}(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:d(t.getKey("auth")),p256dh:d(t.getKey("p256dh"))},r=await w(e.firebaseDependencies);if(r){if(function(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,o=t.auth===e.auth,i=t.p256dh===e.p256dh;return n&&r&&o&&i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r.subscriptionOptions,n))return Date.now()>=r.createTime+6048e5?async function(e,t){try{const n=await async function(e,t){const n=await T(e),r=S(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{const n=await fetch(`${_(e.appConfig)}/${t.token}`,o);i=await n.json()}catch(e){throw C.create("token-update-failed",{errorInfo:null==e?void 0:e.toString()})}if(i.error){const e=i.error.message;throw C.create("token-update-failed",{errorInfo:e})}if(!i.token)throw C.create("token-update-no-token");return i.token}(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await y(e.firebaseDependencies,r),n}catch(e){throw e}}(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await E(e.firebaseDependencies,r.token)}catch(e){console.warn(e)}return M(e.firebaseDependencies,n)}return M(e.firebaseDependencies,n)}async function I(e){const t=await w(e.firebaseDependencies);t&&(await E(e.firebaseDependencies,t.token),await async function(e){const t=v(e),n=(await b()).transaction(g,"readwrite");await n.objectStore(g).delete(t),await n.done}(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function M(e,t){const n=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */await async function(e,t){const n=await T(e),r=S(t),o={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{const t=await fetch(_(e.appConfig),o);i=await t.json()}catch(e){throw C.create("token-subscribe-failed",{errorInfo:null==e?void 0:e.toString()})}if(i.error){const e=i.error.message;throw C.create("token-subscribe-failed",{errorInfo:e})}if(!i.token)throw C.create("token-subscribe-no-token");return i.token}(e,t),r={token:n,createTime:Date.now(),subscriptionOptions:t};return await y(e,r),r.token}async function O(e,t){const n=function(e,t){var n,r;const o={};e.from&&(o.project_number=e.from);e.fcmMessageId&&(o.message_id=e.fcmMessageId);o.instance_id=t,e.notification?o.message_type=l.DISPLAY_NOTIFICATION.toString():o.message_type=l.DATA_MESSAGE.toString();o.sdk_platform=3..toString(),o.package_name=self.origin.replace(/(^\w+:|^)\/\//,""),!e.collapse_key||(o.collapse_key=e.collapse_key);o.event=1..toString(),!(null===(n=e.fcmOptions)||void 0===n?void 0:n.analytics_label)||(o.analytics_label=null===(r=e.fcmOptions)||void 0===r?void 0:r.analytics_label);return o}(t,await e.firebaseDependencies.installations.getId());!function(e,t,n){const r={};r.event_time_ms=Math.floor(Date.now()).toString(),r.source_extension_json_proto3=JSON.stringify({messaging_client_event:t}),!n||(r.compliance_data=function(e){const t={privacy_context:{prequest:{origin_associated_product_id:e}}};return t}(n));e.logEvents.push(r)}(e,n,t.productId)}async function P(e,t){const n=function({data:e}){if(!e)return null;try{return e.json()}catch(e){return null}}(e);if(!n)return;t.deliveryMetricsExportedToBigQueryEnabled&&await O(t,n);const r=await j();if(function(e){return e.some(e=>"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://"))}(r))return function(e,t){t.isFirebaseMessaging=!0,t.messageType=u.PUSH_RECEIVED;for(const n of e)n.postMessage(t)}(r,n);if(n.notification&&await function(e){var t;const{actions:n}=e,{maxActions:r}=Notification;n&&r&&n.length>r&&console.warn(`This browser only supports ${r} actions. The remaining actions will not be displayed.`);return self.registration.showNotification(null!==(t=e.title)&&void 0!==t?t:"",e)}(function(e){const t=Object.assign({},e.notification);return t.data={[c]:e},t}(n)),t&&t.onBackgroundMessageHandler){const e=function(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return function(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const o=t.notification.image;o&&(e.notification.image=o);const i=t.notification.icon;i&&(e.notification.icon=i)}(t,e),function(e,t){t.data&&(e.data=t.data)}(t,e),function(e,t){var n,r,o,i,s;if(!t.fcmOptions&&!(null===(n=t.notification)||void 0===n?void 0:n.click_action))return;e.fcmOptions={};const a=null!==(o=null===(r=t.fcmOptions)||void 0===r?void 0:r.link)&&void 0!==o?o:null===(i=t.notification)||void 0===i?void 0:i.click_action;a&&(e.fcmOptions.link=a);const c=null===(s=t.fcmOptions)||void 0===s?void 0:s.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,e),t}(n);"function"==typeof t.onBackgroundMessageHandler?await t.onBackgroundMessageHandler(e):t.onBackgroundMessageHandler.next(e)}}async function N(e){var t,n;const r=null===(n=null===(t=e.notification)||void 0===t?void 0:t.data)||void 0===n?void 0:n[c];if(!r)return;if(e.action)return;e.stopImmediatePropagation(),e.notification.close();const o=function(e){var t,n,r;const o=null!==(n=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==n?n:null===(r=e.notification)||void 0===r?void 0:r.click_action;if(o)return o;return i=e.data,"object"==typeof i&&i&&"google.c.a.c_id"in i?self.location.origin:null;var i;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);if(!o)return;const i=new URL(o,self.location.href),s=new URL(self.location.origin);if(i.host!==s.host)return;let a=await async function(e){const t=await j();for(const n of t){const t=new URL(n.url,self.location.href);if(e.host===t.host)return n}return null}(i);var l;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return a?a=await a.focus():(a=await self.clients.openWindow(o),await(l=3e3,new Promise(e=>{setTimeout(e,l)}))),a?(r.messageType=u.NOTIFICATION_CLICKED,r.isFirebaseMessaging=!0,a.postMessage(r)):void 0}function j(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function R(e){return C.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));n.join("")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class D{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const r=function(e){if(!e||!e.options)throw R("App Configuration Object");if(!e.name)throw R("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const e of t)if(!n[e])throw R(e);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}(e);this.firebaseDependencies={app:e,appConfig:r,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=e=>{const t=new D(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return self.addEventListener("push",e=>{e.waitUntil(P(e,t))}),self.addEventListener("pushsubscriptionchange",e=>{e.waitUntil(async function(e,t){var n,r;const{newSubscription:o}=e;if(!o)return void await I(t);const i=await w(t.firebaseDependencies);await I(t),t.vapidKey=null!==(r=null===(n=null==i?void 0:i.subscriptionOptions)||void 0===n?void 0:n.vapidKey)&&void 0!==r?r:a,await A(t)}(e,t))}),self.addEventListener("notificationclick",e=>{e.waitUntil(N(e))}),t};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function $(){return i.isIndexedDBAvailable()&&await i.validateIndexedDBOpenable()&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */s._registerComponent(new r.Component("messaging-sw",x,"PUBLIC")),n.experimentalSetDeliveryMetricsExportedToBigQueryEnabled=function(e,t){
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(e,t){e.deliveryMetricsExportedToBigQueryEnabled=t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e=i.getModularInstance(e),t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,n.getMessaging=function(e=s.getApp()){return $().then(e=>{if(!e)throw C.create("unsupported-browser")},e=>{throw C.create("indexed-db-unsupported")}),s._getProvider(i.getModularInstance(e),"messaging-sw").getImmediate()},n.isSupported=$,n.onBackgroundMessage=function(e,t){return function(e,t){if(self.document!==undefined)throw C.create("only-available-in-sw");return e.onBackgroundMessageHandler=t,()=>{e.onBackgroundMessageHandler=null}}(e=i.getModularInstance(e),t)}}}},{package:"@metamask/notification-services-controller>firebase>@firebase/messaging",file:"node_modules/@firebase/messaging/dist/index.sw.cjs"}],[867,{_process:5191},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){(function(e){(function(){Object.defineProperty(n,"__esModule",{value:!0}),n.Sha1=n.RANDOM_FACTOR=n.MAX_VALUE_MILLIS=n.FirebaseError=n.ErrorFactory=n.Deferred=n.DecodeBase64StringError=n.CONSTANTS=void 0,n.areCookiesEnabled=function(){if("undefined"==typeof navigator||!navigator.cookieEnabled)return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,n.assertionError=n.assert=void 0,n.async=function(e,t){return(...n)=>{Promise.resolve(!0).then(()=>{e(...n)}).catch(e=>{t&&t(e)})}},n.base64urlEncodeWithoutPadding=n.base64Encode=n.base64Decode=n.base64=void 0,n.calculateBackoffMillis=function(e,t=M,n=O){const r=t*Math.pow(n,e),o=Math.round(N*r*(Math.random()-.5)*2);return Math.min(P,r+o)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,n.contains=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.createMockUserToken=function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e);return[l(JSON.stringify({alg:"none",type:"JWT"})),l(JSON.stringify(i)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,n.createSubscribe=function(e,t){const n=new S(e,t);return n.subscribe.bind(n)},n.decode=void 0,n.deepCopy=function(e){return d(undefined,e)},n.deepEqual=function e(t,n){if(t===n)return!0;const r=Object.keys(t),o=Object.keys(n);for(const i of r){if(!o.includes(i))return!1;const r=t[i],s=n[i];if(T(r)&&T(s)){if(!e(r,s))return!1}else if(r!==s)return!1}for(const e of o)if(!r.includes(e))return!1;return!0},n.deepExtend=d,n.errorPrefix=I,n.extractQuerystring=function(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:undefined)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,n.getExperimentalSetting=n.getDefaults=n.getDefaultEmulatorHostnameAndPort=n.getDefaultEmulatorHost=n.getDefaultAppConfig=void 0,n.getGlobal=h,n.getModularInstance=
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){return e&&e._delegate?e._delegate:e},n.getUA=b,n.isAdmin=void 0,n.isBrowser=function(){return"undefined"!=typeof window||y()},n.isBrowserExtension=function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:undefined;return"object"==typeof e&&e.id!==undefined},n.isCloudflareWorker=function(){return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent},n.isElectron=function(){return b().indexOf("Electron/")>=0},n.isEmpty=function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0},n.isIE=function(){const e=b();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0},n.isIndexedDBAvailable=function(){try{return"object"==typeof indexedDB}catch(e){return!1}},n.isMobileCordova=function(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(b())},n.isNode=w,n.isNodeSdk=function(){return!0===t.NODE_CLIENT||!0===t.NODE_ADMIN},n.isReactNative=function(){return"object"==typeof navigator&&"ReactNative"===navigator.product},n.isSafari=function(){return!w()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")},n.isUWP=function(){return b().indexOf("MSAppHost/")>=0},n.isValidTimestamp=n.isValidFormat=void 0,n.isWebWorker=y,n.issuedAtTime=void 0,n.jsonEval=E,n.map=function(e,t,n){const r={};for(const o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=t.call(n,e[o],o,e));return r},n.ordinal=function(e){if(!Number.isFinite(e))return`${e}`;return e+function(e){e=Math.abs(e);const t=e%100;if(t>=10&&t<=20)return"th";const n=e%10;if(1===n)return"st";if(2===n)return"nd";if(3===n)return"rd";return"th"}(e)},n.promiseWithTimeout=
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t=2e3){const n=new m;return setTimeout(()=>n.reject("timeout!"),t),e.then(n.resolve,n.reject),n.promise}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,n.querystring=function(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""},n.querystringDecode=function(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t},n.safeGet=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:undefined},n.stringToByteArray=n.stringLength=void 0,n.stringify=function(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,n.validateArgCount=void 0,n.validateCallback=function(e,t,n,r){if(r&&!n)return;if("function"!=typeof n)throw new Error(I(e,t)+"must be a valid function.")},n.validateContextObject=function(e,t,n,r){if(r&&!n)return;if("object"!=typeof n||null===n)throw new Error(I(e,t)+"must be a valid context object.")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */,n.validateIndexedDBOpenable=function(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})},n.validateNamespace=function(e,t,n){if(n&&!t)return;if("string"!=typeof t)throw new Error(I(e,"namespace")+"must be a valid firebase namespace.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const t=n.CONSTANTS={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},r=function(e,t){if(!e)throw o(t)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */n.assert=r;const o=function(e){return new Error("Firebase Database ("+t.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */n.assertionError=o;const i=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):55296==(64512&o)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++r)),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},s=n.base64={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const o=e[t],i=t+1<e.length,s=i?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=o>>2,u=(3&o)<<4|s>>4;let d=(15&s)<<2|c>>6,f=63&c;a||(f=64,i||(d=64)),r.push(n[l],n[u],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const i=e[n++];t[r++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){const i=((7&o)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(i>>10)),t[r++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const o=n[e.charAt(t++)],i=t<e.length?n[e.charAt(t)]:0;++t;const s=t<e.length?n[e.charAt(t)]:64;++t;const c=t<e.length?n[e.charAt(t)]:64;if(++t,null==o||null==i||null==s||null==c)throw new a;const l=o<<2|i>>4;if(r.push(l),64!==s){const e=i<<4&240|s>>2;if(r.push(e),64!==c){const e=s<<6&192|c;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}n.DecodeBase64StringError=a;const c=function(e){const t=i(e);return s.encodeByteArray(t,!0)};n.base64Encode=c;const l=function(e){return c(e).replace(/\./g,"")};n.base64urlEncodeWithoutPadding=l;const u=function(e){try{return s.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:e===undefined&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&f(n)&&(e[n]=d(e[n],t[n]));return e}function f(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */n.base64Decode=u;const p=()=>{try{return h().__FIREBASE_DEFAULTS__||(()=>{if(void 0===e||void 0===e.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&u(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}};n.getDefaults=p;const g=e=>{var t,n;return null===(n=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]};n.getDefaultEmulatorHost=g;n.getDefaultEmulatorHostnameAndPort=e=>{const t=g(e);if(!t)return undefined;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]};n.getDefaultAppConfig=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n.getExperimentalSetting=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};class m{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function w(){var e;const t=null===(e=p())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(e){return!1}}function y(){return"undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof self&&self instanceof WorkerGlobalScope}n.Deferred=m;class v extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,v.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,k.prototype.create)}}n.FirebaseError=v;class k{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],i=o?function(e,t){return e.replace(C,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}(o,n):"Error",s=`${this.serviceName}: ${i} (${r}).`;return new v(r,s,n)}}n.ErrorFactory=k;const C=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e){return JSON.parse(e)}const _=function(e){let t={},n={},r={},o="";try{const i=e.split(".");t=E(u(i[0])||""),n=E(u(i[1])||""),o=i[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:o}};n.decode=_;n.isValidTimestamp=function(e){const t=_(e).claims,n=Math.floor((new Date).getTime()/1e3);let r=0,o=0;return"object"==typeof t&&(t.hasOwnProperty("nbf")?r=t.nbf:t.hasOwnProperty("iat")&&(r=t.iat),o=t.hasOwnProperty("exp")?t.exp:r+86400),!!n&&!!r&&!!o&&n>=r&&n<=o};n.issuedAtTime=function(e){const t=_(e).claims;return"object"==typeof t&&t.hasOwnProperty("iat")?t.iat:null};n.isValidFormat=function(e){const t=_(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")};function T(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n.isAdmin=function(e){const t=_(e).claims;return"object"==typeof t&&!0===t.admin};n.Sha1=class{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let r,o,i=this.chain_[0],s=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(r=c^s&(a^c),o=1518500249):(r=s^a^c,o=1859775393):e<60?(r=s&a|c&(s|a),o=2400959708):(r=s^a^c,o=3395469782);const t=(i<<5|i>>>27)+r+l+o+n[e]&4294967295;l=c,c=a,a=4294967295&(s<<30|s>>>2),s=i,i=t}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;t===undefined&&(t=e.length);const n=t-this.blockSize;let r=0;const o=this.buf_;let i=this.inbuf_;for(;r<t;){if(0===i)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(o[i]=e.charCodeAt(r),++i,++r,i===this.blockSize){this.compress_(o),i=0;break}}else for(;r<t;)if(o[i]=e[r],++i,++r,i===this.blockSize){this.compress_(o),i=0;break}}this.inbuf_=i,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let r=24;r>=0;r-=8)e[n]=this.chain_[t]>>r&255,++n;return e}};class S{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(e===undefined&&t===undefined&&n===undefined)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},r.next===undefined&&(r.next=A),r.error===undefined&&(r.error=A),r.complete===undefined&&(r.complete=A);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),o}unsubscribeOne(e){this.observers!==undefined&&this.observers[e]!==undefined&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&this.onNoObservers!==undefined&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==undefined&&this.observers[e]!==undefined)try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,e!==undefined&&(this.finalError=e),this.task.then(()=>{this.observers=undefined,this.onNoObservers=undefined}))}}function A(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e,t){return`${e} failed: ${t} argument `}n.validateArgCount=function(e,t,n,r){let o;if(r<t?o="at least "+t:r>n&&(o=0===n?"none":"no more than "+n),o){throw new Error(e+" failed: Was called with "+r+(1===r?" argument.":" arguments.")+" Expects "+o+".")}};n.stringToByteArray=function(e){const t=[];let n=0;for(let o=0;o<e.length;o++){let i=e.charCodeAt(o);if(i>=55296&&i<=56319){const t=i-55296;o++,r(o<e.length,"Surrogate pair missing trail surrogate.");i=65536+(t<<10)+(e.charCodeAt(o)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
n.stringLength=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};const M=1e3,O=2,P=n.MAX_VALUE_MILLIS=144e5,N=n.RANDOM_FACTOR=.5}).call(this)}).call(this,e("_process"))}}},{package:"@metamask/notification-services-controller>firebase>@firebase/util",file:"node_modules/@firebase/util/dist/index.esm2017.js"}],[868,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});class r{static parse(e){if(""===e)return new r([]);if(!e.startsWith("/"))throw new o(e);const[,...t]=e.split("/");return new r(t.map(e=>e.replace(/~1/g,"/").replace(/~0/g,"~")))}constructor(e){this.tokens=e}toString(){if(0===this.tokens.length)return"";return`/${this.tokens.map(e=>e.replace(/~/g,"~0").replace(/\//g,"~1")).join("/")}`}shmeval(e){for(const t of this.tokens){if(!e.hasOwnProperty(t))throw new i(e,t);e=e[t]}return e}}n.default=r;class o extends Error{constructor(e){super(`Invalid JSON Pointer: ${e}`),this.ptr=e}}n.InvalidPtrError=o;class i extends Error{constructor(e,t){super(`Error evaluating JSON Pointer: no attribute ${t} on ${e}`),this.instance=e,this.token=t}}n.EvalError=i}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/reference-resolver>@json-schema-spec/json-pointer",file:"node_modules/@json-schema-spec/json-pointer/lib/index.js"}],[869,{"@json-schema-tools/reference-resolver":874,"@json-schema-tools/traverse":877,"fast-safe-stringify":4492},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,a)}c((r=r.apply(e,t||[])).next())})},i=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.NonStringRefError=void 0;var a=s(e("@json-schema-tools/traverse")),c=s(e("@json-schema-tools/reference-resolver")),l=s(e("fast-safe-stringify")),u=function(e){this.name="NonStringRefError",this.message=["NonStringRefError","Found an improperly formatted $ref in schema. $ref must be a string","schema in question: ".concat((0,l.default)(e))].join("\n")};n.NonStringRefError=u;var d=function(e,t){if(e.$ref!==undefined&&Object.keys(e).length>1&&!0!==t&&!1!==t){var n=r(r({},t),e);return delete n.$ref,n}return t},f=function(){function e(e,t){var n;if(void 0===t&&(t={}),this.options=t,this.refCache={},n=!0===this.options.mutate||!0===e||!1===e?e:r({},e),this.options.recursive===undefined&&(this.options.recursive=!0),this.options.rootSchema===undefined&&(this.options.rootSchema=n),!0!==e&&!1!==e&&e.$id&&(this.options.rootSchema=n),this.options.refCache&&(this.refCache=this.options.refCache),this.options.protocolHandlerMap)for(var o=0,i=Object.keys(this.options.protocolHandlerMap);o<i.length;o++){var s=i[o];c.default.protocolHandlerMap[s]=this.options.protocolHandlerMap[s]}this.schema=n,this.refs=this.collectRefs()}return e.prototype.resolve=function(){return o(this,void 0,void 0,function(){return i(this,function(e){switch(e.label){case 0:return[4,this._resolve()];case 1:return e.sent(),delete this.schema.definitions,delete this.schema.components,[2,this.schema]}})})},e.prototype._resolve=function(){return o(this,void 0,void 0,function(){var t,n,o,s,l,u,f,h,p,g,m,b=this;return i(this,function(i){switch(i.label){case 0:if(!0===this.schema||!1===this.schema)return[2,Promise.resolve(this.schema)];if(0===this.refs.length)return[2,Promise.resolve(this.schema)];t=this.refs.filter(function(e){return b.refCache[e]===undefined}),n=[],o=0,s=t,i.label=1;case 1:return o<s.length?(l=s[o],u=void 0,this.refCache[l]===undefined?[3,2]:(u=this.refCache[l],[3,5])):[3,11];case 2:if("#"!==l)return[3,3];if(this.options.rootSchema===undefined)throw new Error("options.rootSchema was not provided, but one of the schemas references '#'");return u=this.options.rootSchema,[3,5];case 3:return f=c.default.resolve(l,this.options.rootSchema),n.push(f),[4,f];case 4:u=i.sent(),i.label=5;case 5:return!0!==this.options.recursive||!0===u||!1===u||"#"===l?[3,9]:(h=r(r({},this.options),{refCache:this.refCache}),0===(p=new e(u,h)).refs.length?[3,7]:(g=p._resolve(),n.push(g),[4,g]));case 6:return m=i.sent(),this.refCache[l]=d(u,m),[3,8];case 7:this.refCache[l]=u,i.label=8;case 8:return[3,10];case 9:this.refCache[l]=u,i.label=10;case 10:return o++,[3,1];case 11:return this.schema.$ref!==undefined?this.schema=d(this.schema,this.refCache[this.schema.$ref]):(0,a.default)(this.schema,function(e){if(!0===e||!1===e)return e;if(e.$ref!==undefined){var t=b.refCache[e.$ref];return d(e,t)}return e},{mutable:!0}),[4,Promise.all(n)];case 12:return i.sent(),[2,this.schema]}})})},e.prototype.collectRefs=function(){var e=[];return(0,a.default)(this.schema,function(t){if(!0===t||!1===t)return t;if(t.$ref&&-1===e.indexOf(t.$ref)){if("string"!=typeof t.$ref)throw new u(t);e.push(t.$ref)}return t}),e},e}();n.default=f}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/dereferencer",file:"node_modules/@json-schema-tools/dereferencer/build/dereferencer.js"}],[87,{"@metamask/messenger":2365},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getBackendWebSocketServiceInitMessenger=function(e){const t=new r.Messenger({namespace:"BackendWebSocketServiceInit",parent:e});return e.delegate({messenger:t,actions:["RemoteFeatureFlagController:getState","AuthenticationController:getBearerToken"]}),t},n.getBackendWebSocketServiceMessenger=function(e){const t=new r.Messenger({namespace:"BackendWebSocketService",parent:e});return e.delegate({messenger:t,actions:["AuthenticationController:getBearerToken"],events:["AuthenticationController:stateChange","KeyringController:lock","KeyringController:unlock"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/core-backend/backend-websocket-service-messenger.ts"}],[870,{"./dereferencer":869},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.NonStringRefError=void 0;var o=r(e("./dereferencer")),i=e("./dereferencer");Object.defineProperty(n,"NonStringRefError",{enumerable:!0,get:function(){return i.NonStringRefError}}),n.default=o.default}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/dereferencer",file:"node_modules/@json-schema-tools/dereferencer/build/index.js"}],[871,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.jsonSchema=void 0,n.jsonSchema={$schema:"https://meta.json-schema.tools/",$id:"https://meta.json-schema.tools/",title:"JSONSchema",default:{},oneOf:[{$ref:"#/definitions/JSONSchemaObject"},{$ref:"#/definitions/JSONSchemaBoolean"}],definitions:{JSONSchemaBoolean:{title:"JSONSchemaBoolean",description:"Always valid if true. Never valid if false. Is constant.",type:"boolean"},JSONSchemaObject:{title:"JSONSchemaObject",type:"object",properties:{$id:{title:"$id",type:"string",format:"uri-reference"},$schema:{title:"$schema",type:"string",format:"uri"},$ref:{title:"$ref",type:"string",format:"uri-reference"},$comment:{title:"$comment",type:"string"},title:{title:"title",type:"string"},description:{title:"description",type:"string"},default:!0,readOnly:{title:"readOnly",type:"boolean",default:!1},examples:{title:"examples",type:"array",items:!0},multipleOf:{title:"multipleOf",type:"number",exclusiveMinimum:0},maximum:{title:"maximum",type:"number"},exclusiveMaximum:{title:"exclusiveMaximum",type:"number"},minimum:{title:"minimum",type:"number"},exclusiveMinimum:{title:"exclusiveMinimum",type:"number"},maxLength:{$ref:"#/definitions/nonNegativeInteger"},minLength:{$ref:"#/definitions/nonNegativeIntegerDefault0"},pattern:{title:"pattern",type:"string",format:"regex"},additionalItems:{$ref:"#"},items:{title:"items",anyOf:[{$ref:"#"},{$ref:"#/definitions/schemaArray"}],default:!0},maxItems:{$ref:"#/definitions/nonNegativeInteger"},minItems:{$ref:"#/definitions/nonNegativeIntegerDefault0"},uniqueItems:{title:"uniqueItems",type:"boolean",default:!1},contains:{$ref:"#"},maxProperties:{$ref:"#/definitions/nonNegativeInteger"},minProperties:{$ref:"#/definitions/nonNegativeIntegerDefault0"},required:{$ref:"#/definitions/stringArray"},additionalProperties:{$ref:"#"},definitions:{title:"definitions",type:"object",additionalProperties:{$ref:"#"},default:{}},properties:{title:"properties",type:"object",additionalProperties:{$ref:"#"},default:{}},patternProperties:{title:"patternProperties",type:"object",additionalProperties:{$ref:"#"},propertyNames:{title:"propertyNames",format:"regex"},default:{}},dependencies:{title:"dependencies",type:"object",additionalProperties:{title:"dependenciesSet",anyOf:[{$ref:"#"},{$ref:"#/definitions/stringArray"}]}},propertyNames:{$ref:"#"},const:!0,enum:{title:"enum",type:"array",items:!0,minItems:1,uniqueItems:!0},type:{title:"type",anyOf:[{$ref:"#/definitions/simpleTypes"},{title:"arrayOfSimpleTypes",type:"array",items:{$ref:"#/definitions/simpleTypes"},minItems:1,uniqueItems:!0}]},format:{title:"format",type:"string"},contentMediaType:{title:"contentMediaType",type:"string"},contentEncoding:{title:"contentEncoding",type:"string"},if:{$ref:"#"},then:{$ref:"#"},else:{$ref:"#"},allOf:{$ref:"#/definitions/schemaArray"},anyOf:{$ref:"#/definitions/schemaArray"},oneOf:{$ref:"#/definitions/schemaArray"},not:{$ref:"#"}}},schemaArray:{title:"schemaArray",type:"array",minItems:1,items:{$ref:"#"}},nonNegativeInteger:{title:"nonNegativeInteger",type:"integer",minimum:0},nonNegativeIntegerDefault0:{title:"nonNegativeIntegerDefaultZero",type:"integer",minimum:0,default:0},simpleTypes:{title:"simpleTypes",type:"string",enum:["array","boolean","integer","null","number","object","string"]},stringArray:{title:"stringArray",type:"array",items:{type:"string"},uniqueItems:!0,default:[]}}},n.default=n.jsonSchema}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/meta-schema",file:"node_modules/@json-schema-tools/meta-schema/index.js"}],[872,{"./errors":873,"isomorphic-fetch":4750},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,a)}c((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var s=e("./errors"),a=i(e("isomorphic-fetch")),c=function(e){return r(void 0,void 0,void 0,function(){var t,n;return o(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,(0,a.default)(e)];case 1:return t=r.sent(),[3,3];case 2:throw r.sent(),new s.InvalidRemoteURLError(e);case 3:return r.trys.push([3,5,,6]),[4,t.json()];case 4:return[2,r.sent()];case 5:throw n=r.sent(),new s.NonJsonRefError({$ref:e},n.message);case 6:return[2]}})})};n.default={https:c,http:c}}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/reference-resolver",file:"node_modules/@json-schema-tools/reference-resolver/build/default-protocol-handler-map.js"}],[873,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.InvalidFileSystemPathError=n.InvalidRemoteURLError=n.NotResolvableError=n.NonJsonRefError=void 0;var r=function(e,t){this.name="NonJsonRefError",this.message=["NonJsonRefError","The resolved value at the reference: ".concat(e.$ref," was not JSON.parse 'able"),"The non-json content in question: ".concat(t)].join("\n")};n.NonJsonRefError=r;var o=function(e){this.name="NotResolvableError",this.message=["NotResolvableError","Could not resolve the reference: ".concat(e),"No protocol handler was found, and it was not found to be an internal reference"].join("\n")};n.NotResolvableError=o;var i=function(e){this.name="InvalidRemoteURLError",this.message=["InvalidRemoteURLError","The url was not resolvable: ".concat(e)].join("\n")};n.InvalidRemoteURLError=i;var s=function(e){this.name="InvalidFileSystemPathError",this.message=["InvalidFileSystemPathError","The path was not resolvable: ".concat(e)].join("\n")};n.InvalidFileSystemPathError=s}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/reference-resolver",file:"node_modules/@json-schema-tools/reference-resolver/build/errors.js"}],[874,{"./default-protocol-handler-map":872,"./reference-resolver":875},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,a)}c((r=r.apply(e,t||[])).next())})},i=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var a=s(e("./default-protocol-handler-map")),c=s(e("./reference-resolver")),l=r(r({},a.default),{file:function(){return o(void 0,void 0,void 0,function(){return i(this,function(e){return[2,undefined]})})}});n.default=new c.default(l)}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/reference-resolver",file:"node_modules/@json-schema-tools/reference-resolver/build/index-web.js"}],[875,{"./errors":873,"./resolve-pointer":876},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,a)}c((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var s=e("./errors"),a=i(e("./resolve-pointer")),c=function(){function e(e){this.protocolHandlerMap=e}return e.prototype.resolve=function(e){return r(this,arguments,void 0,function(e,t){var n,r,i,c,l,u,d,f,h,p;return void 0===t&&(t={}),o(this,function(o){switch(o.label){case 0:if("#"===e[0])return[2,Promise.resolve((0,a.default)(e,t))];(n=e.split("#")).length>1&&(r=n[n.length-1]),i=n[0],o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this.protocolHandlerMap.file(i,t)];case 2:return c=o.sent(),[3,4];case 3:throw l=o.sent(),new s.NonJsonRefError({$ref:e},l.message);case 4:if(c!==undefined)return p=c,r&&(p=(0,a.default)(r,p)),[2,p];if(!1===e.includes("://"))throw new s.InvalidFileSystemPathError(e);u=0,d=Object.keys(this.protocolHandlerMap),o.label=5;case 5:return u<d.length?(f=d[u],i.startsWith(f)?[4,this.protocolHandlerMap[f](i,t)]:[3,7]):[3,8];case 6:if((h=o.sent())!==undefined)return p=h,r&&(p=(0,a.default)(r,p)),[2,p];o.label=7;case 7:return u++,[3,5];case 8:throw new s.NotResolvableError(e)}})})},e}();n.default=c}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/reference-resolver",file:"node_modules/@json-schema-tools/reference-resolver/build/reference-resolver.js"}],[876,{"@json-schema-spec/json-pointer":868},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.InvalidJsonPointerRefError=void 0;var o=r(e("@json-schema-spec/json-pointer")),i=function(e,t){this.name="InvalidJsonPointerRefError",this.message=["InvalidJsonPointerRefError","The provided RFC6901 JSON Pointer is invalid: ".concat(e),"","addition info: ",t].join("\n")};n.InvalidJsonPointerRefError=i,n.default=function(e,t){try{var n=e.replace("#","");return o.default.parse(n).shmeval(t)}catch(t){throw new i(e,t.message)}}}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/reference-resolver",file:"node_modules/@json-schema-tools/reference-resolver/build/resolve-pointer.js"}],[877,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(n,"__esModule",{value:!0}),n.defaultOptions=void 0,n.defaultOptions={skipFirstMutation:!1,mutable:!1,bfs:!1};var i=function(e){return e.map(function(e){return""===e?"$":".".concat(e)}).join("")},s=function(e,t){var n=t.find(function(t){return t===e});return n||!1},a=function(e,t){return void 0===t&&(t=1),e[e.length-t]};n.default=function e(t,c,l,u,d,f,h,p,g){void 0===l&&(l=n.defaultOptions),void 0===u&&(u=0),void 0===d&&(d=[]),void 0===f&&(f=[]),void 0===h&&(h=[]),void 0===p&&(p=[]),void 0===g&&(g=[]);var m=r(r({},n.defaultOptions),l);if(0===u&&(h=[""]),"boolean"==typeof t||t instanceof Boolean)return!0===m.skipFirstMutation&&0===u?t:c(t,!1,i(h),a(f));var b=t;!1===m.mutable&&(b=r({},t)),f.push(b),!0===m.bfs&&(!1!==m.skipFirstMutation&&0===u||(b=c(b,!1,i(h),a(f,2)))),d.push(t),p.push([t,b]);var w=function(t,n){var r=s(t,d);return r?(g.push(r),!0===m.skipFirstMutation&&r===d[0]?c(t,!0,i(n),a(f)):p.find(function(e){var t=e[0];return r===t})[1]):e(t,c,l,u+1,d,f,n,p,g)};if(t.anyOf)b.anyOf=t.anyOf.map(function(e,t){return w(e,o(o([],h,!0),["anyOf[".concat(t,"]")],!1))});else if(t.allOf)b.allOf=t.allOf.map(function(e,t){return w(e,o(o([],h,!0),["allOf[".concat(t,"]")],!1))});else if(t.oneOf)b.oneOf=t.oneOf.map(function(e,t){return w(e,o(o([],h,!0),["oneOf[".concat(t,"]")],!1))});else{if(t.items)if(t.items instanceof Array)b.items=t.items.map(function(e,t){return w(e,o(o([],h,!0),["items[".concat(t,"]")],!1))});else{var y=s(t.items,d);if(y)if(g.push(y),!0===m.skipFirstMutation&&y===d[0])b.items=c(t.items,!0,i(h),a(f));else{var v=p.find(function(e){var t=e[0];return y===t})[1];b.items=v}else b.items=e(t.items,c,l,u+1,d,f,o(o([],h,!0),["items"],!1),p,g)}if(t.additionalItems!==undefined&&(b.additionalItems=w(t.additionalItems,o(o([],h,!0),["additionalItems"],!1))),t.properties!==undefined){var k=t.properties,C={};Object.keys(t.properties).forEach(function(e){C[e]=w(k[e],o(o([],h,!0),["properties",e.toString()],!1))}),b.properties=C}if(t.patternProperties!==undefined){var E=t.patternProperties,_={};Object.keys(t.patternProperties).forEach(function(e){_[e]=w(E[e],o(o([],h,!0),["patternProperties",e.toString()],!1))}),b.patternProperties=_}t.additionalProperties!==undefined&&!0==!!t.additionalProperties&&(b.additionalProperties=w(t.additionalProperties,o(o([],h,!0),["additionalProperties"],!1)))}if(!0===m.skipFirstMutation&&0===u)return b;if(!0===m.bfs)return f.pop(),b;var T=-1!==g.indexOf(t);return f.pop(),c(b,T,i(h),a(f))}}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/dereferencer>@json-schema-tools/traverse",file:"node_modules/@json-schema-tools/traverse/build/index.js"}],[88,{"./account-activity-service-messenger":86,"./backend-websocket-service-messenger":87},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getAccountActivityServiceMessenger",{enumerable:!0,get:function(){return o.getAccountActivityServiceMessenger}}),Object.defineProperty(n,"getBackendWebSocketServiceInitMessenger",{enumerable:!0,get:function(){return r.getBackendWebSocketServiceInitMessenger}}),Object.defineProperty(n,"getBackendWebSocketServiceMessenger",{enumerable:!0,get:function(){return r.getBackendWebSocketServiceMessenger}});var r=e("./backend-websocket-service-messenger"),o=e("./account-activity-service-messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/core-backend/index.ts"}],[89,{"@metamask/messenger":2365},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getCurrencyRateControllerInitMessenger=function(e){const t=new r.Messenger({namespace:"CurrencyRateControllerInit",parent:e});return e.delegate({messenger:t,actions:["PreferencesController:getState"]}),t},n.getCurrencyRateControllerMessenger=function(e){const t=new r.Messenger({namespace:"CurrencyRateController",parent:e});return e.delegate({messenger:t,actions:["NetworkController:getNetworkClientById","NetworkController:getState"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/currency-rate-controller-messenger.ts"}],[9,{"../controllers/account-order":217},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.AccountOrderControllerInit=void 0;var r=e("../controllers/account-order");n.AccountOrderControllerInit=({controllerMessenger:e,persistedState:t})=>({controller:new r.AccountOrderController({messenger:e,state:t.AccountOrderController})})}}},{package:"$root$",file:"app/scripts/controller-init/account-order-controller-init.ts"}],[90,{"@metamask/messenger":2365},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getDecryptMessageControllerInitMessenger=function(e){const t=new r.Messenger({namespace:"DecryptMessageControllerInit",parent:e});return e.delegate({messenger:t,actions:["MetaMetricsController:trackEvent"]}),t},n.getDecryptMessageControllerMessenger=function(e){const t=new r.Messenger({namespace:"DecryptMessageController",parent:e});return e.delegate({messenger:t,actions:["ApprovalController:addRequest","ApprovalController:acceptRequest","ApprovalController:rejectRequest","KeyringController:decryptMessage"],events:["DecryptMessageManager:stateChange","DecryptMessageManager:unapprovedMessage"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/decrypt-message-controller-messenger.ts"}],[91,{"@metamask/messenger":2365},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getDecryptMessageManagerMessenger=function(e){return new r.Messenger({namespace:"DecryptMessageManager",parent:e})};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/decrypt-message-manager-messenger.ts"}],[910,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){t.exports='"68f08e330f8180377038a7c3623c9dd0"'}}},{package:"@metamask/eth-ledger-bridge-keyring>@ledgerhq/hw-app-eth>@ledgerhq/cryptoassets-evm-signatures",file:"node_modules/@ledgerhq/cryptoassets-evm-signatures/lib/data/eip712-hash.json"}]],[],{});