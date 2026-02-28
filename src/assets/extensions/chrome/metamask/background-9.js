LavaPack.loadBundle([[880,{"@firebase/app":876,"@firebase/component":877,"@firebase/installations":878,"@firebase/util":882,idb:5008},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.deleteToken=function(e){
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
return async function(e){if(!navigator)throw A.create("only-available-in-window");e.swRegistration||await F(e);return async function(e){const t=await M(e.firebaseDependencies);t&&(await I(e.firebaseDependencies,t.token),await async function(e){const t=C(e),n=(await k()).transaction(_,"readwrite");await n.objectStore(_).delete(t),await n.done}(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();if(n)return n.unsubscribe();return!0}(e)}
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
function(e=(0,s.getApp)()){return J().then(e=>{if(!e)throw A.create("unsupported-browser")},e=>{throw A.create("indexed-db-unsupported")}),(0,s._getProvider)((0,i.getModularInstance)(e),"messaging").getImmediate()},n.getToken=async function(e,t){return U(e=(0,i.getModularInstance)(e),t)},n.isSupported=J,n.onMessage=function(e,t){return function(e,t){if(!navigator)throw A.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}(e=(0,i.getModularInstance)(e),t)},e("@firebase/installations");var r=e("@firebase/component"),o=e("idb"),i=e("@firebase/util"),s=e("@firebase/app");
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
const a="/firebase-messaging-sw.js",c="/firebase-cloud-messaging-push-scope",l="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",u="https://fcmregistrations.googleapis.com/v1",d="google.c.a.c_id",f=1e4;var p,h;
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
 */!function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"}(p||(p={})),function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"}(h||(h={}));const b="fcm_token_details_db",v=5,y="fcm_token_object_Store";
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
const w="firebase-messaging-database",S=1,_="firebase-messaging-store";let E=null;function k(){return E||(E=(0,o.openDB)(w,S,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(_)}})),E}async function M(e){const t=C(e),n=await k(),r=await n.transaction(_).objectStore(_).get(t);if(r)return r;{const t=await async function(e){if("databases"in indexedDB){const e=(await indexedDB.databases()).map(e=>e.name);if(!e.includes(b))return null}let t=null;return(await(0,o.openDB)(b,v,{upgrade:async(n,r,o,i)=>{var s;if(r<2)return;if(!n.objectStoreNames.contains(y))return;const a=i.objectStore(y),c=await a.index("fcmSenderId").get(e);if(await a.clear(),c)if(2===r){const e=c;if(!e.auth||!e.p256dh||!e.endpoint)return;t={token:e.fcmToken,createTime:null!==(s=e.createTime)&&void 0!==s?s:Date.now(),subscriptionOptions:{auth:e.auth,p256dh:e.p256dh,endpoint:e.endpoint,swScope:e.swScope,vapidKey:"string"==typeof e.vapidKey?e.vapidKey:g(e.vapidKey)}}}else if(3===r){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:g(e.auth),p256dh:g(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:g(e.vapidKey)}}}else if(4===r){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:g(e.auth),p256dh:g(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:g(e.vapidKey)}}}}})).close(),await(0,o.deleteDB)(b),await(0,o.deleteDB)("fcm_vapid_details_db"),await(0,o.deleteDB)("undefined"),function(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}(t)?t:null}(e.appConfig.senderId);if(t)return await T(e,t),t}}async function T(e,t){const n=C(e),r=(await k()).transaction(_,"readwrite");return await r.objectStore(_).put(t,n),await r.done,t}function C({appConfig:e}){return e.appId}
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
 */const O={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},A=new i.ErrorFactory("messaging","Messaging",O);async function I(e,t){const n={method:"DELETE",headers:await j(e)};try{const r=await fetch(`${P(e.appConfig)}/${t}`,n),o=await r.json();if(o.error){const e=o.error.message;throw A.create("token-unsubscribe-failed",{errorInfo:e})}}catch(e){throw A.create("token-unsubscribe-failed",{errorInfo:null==e?void 0:e.toString()})}}function P({projectId:e}){return`${u}/projects/${e}/registrations`}async function j({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function N({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const o={web:{endpoint:n,auth:t,p256dh:e}};return r!==l&&(o.web.applicationPubKey=r),o}
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
 */const D=6048e5;async function R(e){const t=await async function(e,t){const n=await e.pushManager.getSubscription();if(n)return n;return e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:m(t)})}(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:g(t.getKey("auth")),p256dh:g(t.getKey("p256dh"))},r=await M(e.firebaseDependencies);if(r){if(function(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,o=t.auth===e.auth,i=t.p256dh===e.p256dh;return n&&r&&o&&i}
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
 */(r.subscriptionOptions,n))return Date.now()>=r.createTime+D?async function(e,t){try{const n=await async function(e,t){const n=await j(e),r=N(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{const n=await fetch(`${P(e.appConfig)}/${t.token}`,o);i=await n.json()}catch(e){throw A.create("token-update-failed",{errorInfo:null==e?void 0:e.toString()})}if(i.error){const e=i.error.message;throw A.create("token-update-failed",{errorInfo:e})}if(!i.token)throw A.create("token-update-no-token");return i.token}(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await T(e.firebaseDependencies,r),n}catch(e){throw e}}(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await I(e.firebaseDependencies,r.token)}catch(e){console.warn(e)}return x(e.firebaseDependencies,n)}return x(e.firebaseDependencies,n)}async function x(e,t){const n=
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
 */await async function(e,t){const n=await j(e),r=N(t),o={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{const t=await fetch(P(e.appConfig),o);i=await t.json()}catch(e){throw A.create("token-subscribe-failed",{errorInfo:null==e?void 0:e.toString()})}if(i.error){const e=i.error.message;throw A.create("token-subscribe-failed",{errorInfo:e})}if(!i.token)throw A.create("token-subscribe-no-token");return i.token}(e,t),r={token:n,createTime:Date.now(),subscriptionOptions:t};return await T(e,r),r.token}function L(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return function(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const o=t.notification.image;o&&(e.notification.image=o);const i=t.notification.icon;i&&(e.notification.icon=i)}(t,e),function(e,t){if(!t.data)return;e.data=t.data}(t,e),function(e,t){var n,r,o,i,s;if(!t.fcmOptions&&!(null===(n=t.notification)||void 0===n?void 0:n.click_action))return;e.fcmOptions={};const a=null!==(o=null===(r=t.fcmOptions)||void 0===r?void 0:r.link)&&void 0!==o?o:null===(i=t.notification)||void 0===i?void 0:i.click_action;a&&(e.fcmOptions.link=a);const c=null===(s=t.fcmOptions)||void 0===s?void 0:s.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}
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
 */(t,e),t}function $(e){return A.create("missing-app-config-values",{valueName:e})}
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
 */("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class B{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const r=function(e){if(!e||!e.options)throw $("App Configuration Object");if(!e.name)throw $("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const e of t)if(!n[e])throw $(e);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}(e);this.firebaseDependencies={app:e,appConfig:r,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}
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
 */async function F(e){try{e.swRegistration=await navigator.serviceWorker.register(a,{scope:c}),e.swRegistration.update().catch(()=>{}),await async function(e){return new Promise((t,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${f} ms`)),f),o=e.installing||e.waiting;e.active?(clearTimeout(r),t()):o?o.onstatechange=e=>{var n;"activated"===(null===(n=e.target)||void 0===n?void 0:n.state)&&(o.onstatechange=null,clearTimeout(r),t())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}
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
 */(e.swRegistration)}catch(e){throw A.create("failed-service-worker-registration",{browserErrorMessage:null==e?void 0:e.message})}}
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
async function U(e,t){if(!navigator)throw A.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw A.create("permission-blocked");
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
return await async function(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=l)}(e,null==t?void 0:t.vapidKey),await async function(e,t){if(t||e.swRegistration||await F(e),t||!e.swRegistration){if(!(t instanceof ServiceWorkerRegistration))throw A.create("invalid-sw-registration");e.swRegistration=t}}(e,null==t?void 0:t.serviceWorkerRegistration),R(e)}
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
 */async function K(e,t,n){const r=function(e){switch(e){case h.NOTIFICATION_CLICKED:return"notification_open";case h.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}
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
 */(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[d],message_name:n["google.c.a.c_l"],message_time:n["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)})}async function V(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===h.PUSH_RECEIVED&&("function"==typeof e.onMessageHandler?e.onMessageHandler(L(n)):e.onMessageHandler.next(L(n)));const r=n.data;var o;"object"==typeof(o=r)&&o&&d in o&&"1"===r["google.c.a.e"]&&await K(e,n.messageType,r)}const W="@firebase/messaging",H="0.12.16",G=e=>{const t=new B(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",e=>V(t,e)),t},z=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:e=>U(t,e)}};
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
async function J(){try{await(0,i.validateIndexedDBOpenable)()}catch(e){return!1}return"undefined"!=typeof window&&(0,i.isIndexedDBAvailable)()&&(0,i.areCookiesEnabled)()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}(0,s._registerComponent)(new r.Component("messaging",G,"PUBLIC")),(0,s._registerComponent)(new r.Component("messaging-internal",z,"PRIVATE")),(0,s.registerVersion)(W,H),(0,s.registerVersion)(W,H,"esm2017")}}},{package:"@metamask/notification-services-controller>firebase>@firebase/messaging",file:"node_modules/@firebase/messaging/dist/esm/index.esm2017.js"}],[881,{"@firebase/app":876,"@firebase/component":877,"@firebase/installations":878,"@firebase/util":882,idb:5008},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),e("@firebase/installations");var r=e("@firebase/component"),o=e("idb"),i=e("@firebase/util"),s=e("@firebase/app");
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
 */!function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"}(l||(l={})),function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"}(u||(u={}));const p="fcm_token_details_db",h="fcm_token_object_Store";
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
const g="firebase-messaging-store";let m=null;function b(){return m||(m=o.openDB("firebase-messaging-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(g)}})),m}async function v(e){const t=w(e),n=await b(),r=await n.transaction(g).objectStore(g).get(t);if(r)return r;{const t=await async function(e){if("databases"in indexedDB){const e=(await indexedDB.databases()).map(e=>e.name);if(!e.includes(p))return null}let t=null;return(await o.openDB(p,5,{upgrade:async(n,r,o,i)=>{var s;if(r<2)return;if(!n.objectStoreNames.contains(h))return;const a=i.objectStore(h),c=await a.index("fcmSenderId").get(e);if(await a.clear(),c)if(2===r){const e=c;if(!e.auth||!e.p256dh||!e.endpoint)return;t={token:e.fcmToken,createTime:null!==(s=e.createTime)&&void 0!==s?s:Date.now(),subscriptionOptions:{auth:e.auth,p256dh:e.p256dh,endpoint:e.endpoint,swScope:e.swScope,vapidKey:"string"==typeof e.vapidKey?e.vapidKey:d(e.vapidKey)}}}else if(3===r){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:d(e.auth),p256dh:d(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:d(e.vapidKey)}}}else if(4===r){const e=c;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:d(e.auth),p256dh:d(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:d(e.vapidKey)}}}}})).close(),await o.deleteDB(p),await o.deleteDB("fcm_vapid_details_db"),await o.deleteDB("undefined"),function(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}(t)?t:null}(e.appConfig.senderId);if(t)return await y(e,t),t}}async function y(e,t){const n=w(e),r=(await b()).transaction(g,"readwrite");return await r.objectStore(g).put(t,n),await r.done,t}function w({appConfig:e}){return e.appId}
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
 */const S={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},_=new i.ErrorFactory("messaging","Messaging",S);async function E(e,t){const n={method:"DELETE",headers:await M(e)};try{const r=await fetch(`${k(e.appConfig)}/${t}`,n),o=await r.json();if(o.error){const e=o.error.message;throw _.create("token-unsubscribe-failed",{errorInfo:e})}}catch(e){throw _.create("token-unsubscribe-failed",{errorInfo:null==e?void 0:e.toString()})}}function k({projectId:e}){return`https://fcmregistrations.googleapis.com/v1/projects/${e}/registrations`}async function M({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function T({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const o={web:{endpoint:n,auth:t,p256dh:e}};return r!==a&&(o.web.applicationPubKey=r),o}
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
 */async function C(e){const t=await async function(e,t){const n=await e.pushManager.getSubscription();if(n)return n;return e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:f(t)})}(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:d(t.getKey("auth")),p256dh:d(t.getKey("p256dh"))},r=await v(e.firebaseDependencies);if(r){if(function(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,o=t.auth===e.auth,i=t.p256dh===e.p256dh;return n&&r&&o&&i}
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
 */(r.subscriptionOptions,n))return Date.now()>=r.createTime+6048e5?async function(e,t){try{const n=await async function(e,t){const n=await M(e),r=T(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{const n=await fetch(`${k(e.appConfig)}/${t.token}`,o);i=await n.json()}catch(e){throw _.create("token-update-failed",{errorInfo:null==e?void 0:e.toString()})}if(i.error){const e=i.error.message;throw _.create("token-update-failed",{errorInfo:e})}if(!i.token)throw _.create("token-update-no-token");return i.token}(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await y(e.firebaseDependencies,r),n}catch(e){throw e}}(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await E(e.firebaseDependencies,r.token)}catch(e){console.warn(e)}return A(e.firebaseDependencies,n)}return A(e.firebaseDependencies,n)}async function O(e){const t=await v(e.firebaseDependencies);t&&(await E(e.firebaseDependencies,t.token),await async function(e){const t=w(e),n=(await b()).transaction(g,"readwrite");await n.objectStore(g).delete(t),await n.done}(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function A(e,t){const n=
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
 */await async function(e,t){const n=await M(e),r=T(t),o={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{const t=await fetch(k(e.appConfig),o);i=await t.json()}catch(e){throw _.create("token-subscribe-failed",{errorInfo:null==e?void 0:e.toString()})}if(i.error){const e=i.error.message;throw _.create("token-subscribe-failed",{errorInfo:e})}if(!i.token)throw _.create("token-subscribe-no-token");return i.token}(e,t),r={token:n,createTime:Date.now(),subscriptionOptions:t};return await y(e,r),r.token}async function I(e,t){const n=function(e,t){var n,r;const o={};e.from&&(o.project_number=e.from);e.fcmMessageId&&(o.message_id=e.fcmMessageId);o.instance_id=t,e.notification?o.message_type=l.DISPLAY_NOTIFICATION.toString():o.message_type=l.DATA_MESSAGE.toString();o.sdk_platform=3..toString(),o.package_name=self.origin.replace(/(^\w+:|^)\/\//,""),!e.collapse_key||(o.collapse_key=e.collapse_key);o.event=1..toString(),!(null===(n=e.fcmOptions)||void 0===n?void 0:n.analytics_label)||(o.analytics_label=null===(r=e.fcmOptions)||void 0===r?void 0:r.analytics_label);return o}(t,await e.firebaseDependencies.installations.getId());!function(e,t,n){const r={};r.event_time_ms=Math.floor(Date.now()).toString(),r.source_extension_json_proto3=JSON.stringify({messaging_client_event:t}),!n||(r.compliance_data=function(e){const t={privacy_context:{prequest:{origin_associated_product_id:e}}};return t}(n));e.logEvents.push(r)}(e,n,t.productId)}async function P(e,t){const n=function({data:e}){if(!e)return null;try{return e.json()}catch(e){return null}}(e);if(!n)return;t.deliveryMetricsExportedToBigQueryEnabled&&await I(t,n);const r=await N();if(function(e){return e.some(e=>"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://"))}(r))return function(e,t){t.isFirebaseMessaging=!0,t.messageType=u.PUSH_RECEIVED;for(const n of e)n.postMessage(t)}(r,n);if(n.notification&&await function(e){var t;const{actions:n}=e,{maxActions:r}=Notification;n&&r&&n.length>r&&console.warn(`This browser only supports ${r} actions. The remaining actions will not be displayed.`);return self.registration.showNotification(null!==(t=e.title)&&void 0!==t?t:"",e)}(function(e){const t=Object.assign({},e.notification);return t.data={[c]:e},t}(n)),t&&t.onBackgroundMessageHandler){const e=function(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return function(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const o=t.notification.image;o&&(e.notification.image=o);const i=t.notification.icon;i&&(e.notification.icon=i)}(t,e),function(e,t){t.data&&(e.data=t.data)}(t,e),function(e,t){var n,r,o,i,s;if(!t.fcmOptions&&!(null===(n=t.notification)||void 0===n?void 0:n.click_action))return;e.fcmOptions={};const a=null!==(o=null===(r=t.fcmOptions)||void 0===r?void 0:r.link)&&void 0!==o?o:null===(i=t.notification)||void 0===i?void 0:i.click_action;a&&(e.fcmOptions.link=a);const c=null===(s=t.fcmOptions)||void 0===s?void 0:s.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}
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
 */(t,e),t}(n);"function"==typeof t.onBackgroundMessageHandler?await t.onBackgroundMessageHandler(e):t.onBackgroundMessageHandler.next(e)}}async function j(e){var t,n;const r=null===(n=null===(t=e.notification)||void 0===t?void 0:t.data)||void 0===n?void 0:n[c];if(!r)return;if(e.action)return;e.stopImmediatePropagation(),e.notification.close();const o=function(e){var t,n,r;const o=null!==(n=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==n?n:null===(r=e.notification)||void 0===r?void 0:r.click_action;if(o)return o;return i=e.data,"object"==typeof i&&i&&"google.c.a.c_id"in i?self.location.origin:null;var i;
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
 */(r);if(!o)return;const i=new URL(o,self.location.href),s=new URL(self.location.origin);if(i.host!==s.host)return;let a=await async function(e){const t=await N();for(const n of t){const t=new URL(n.url,self.location.href);if(e.host===t.host)return n}return null}(i);var l;
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
 */return a?a=await a.focus():(a=await self.clients.openWindow(o),await(l=3e3,new Promise(e=>{setTimeout(e,l)}))),a?(r.messageType=u.NOTIFICATION_CLICKED,r.isFirebaseMessaging=!0,a.postMessage(r)):void 0}function N(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function D(e){return _.create("missing-app-config-values",{valueName:e})}
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
 */("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class R{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const r=function(e){if(!e||!e.options)throw D("App Configuration Object");if(!e.name)throw D("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const e of t)if(!n[e])throw D(e);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}(e);this.firebaseDependencies={app:e,appConfig:r,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}
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
 */const x=e=>{const t=new R(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return self.addEventListener("push",e=>{e.waitUntil(P(e,t))}),self.addEventListener("pushsubscriptionchange",e=>{e.waitUntil(async function(e,t){var n,r;const{newSubscription:o}=e;if(!o)return void await O(t);const i=await v(t.firebaseDependencies);await O(t),t.vapidKey=null!==(r=null===(n=null==i?void 0:i.subscriptionOptions)||void 0===n?void 0:n.vapidKey)&&void 0!==r?r:a,await C(t)}(e,t))}),self.addEventListener("notificationclick",e=>{e.waitUntil(j(e))}),t};
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
async function L(){return i.isIndexedDBAvailable()&&await i.validateIndexedDBOpenable()&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}
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
 */,n.getMessaging=function(e=s.getApp()){return L().then(e=>{if(!e)throw _.create("unsupported-browser")},e=>{throw _.create("indexed-db-unsupported")}),s._getProvider(i.getModularInstance(e),"messaging-sw").getImmediate()},n.isSupported=L,n.onBackgroundMessage=function(e,t){return function(e,t){if(self.document!==undefined)throw _.create("only-available-in-sw");return e.onBackgroundMessageHandler=t,()=>{e.onBackgroundMessageHandler=null}}(e=i.getModularInstance(e),t)}}}},{package:"@metamask/notification-services-controller>firebase>@firebase/messaging",file:"node_modules/@firebase/messaging/dist/index.sw.cjs"}],[882,{_process:5490},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){(function(e){(function(){Object.defineProperty(n,"__esModule",{value:!0}),n.Sha1=n.RANDOM_FACTOR=n.MAX_VALUE_MILLIS=n.FirebaseError=n.ErrorFactory=n.Deferred=n.DecodeBase64StringError=n.CONSTANTS=void 0,n.areCookiesEnabled=function(){if("undefined"==typeof navigator||!navigator.cookieEnabled)return!1;return!0}
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
 */,n.assertionError=n.assert=void 0,n.async=function(e,t){return(...n)=>{Promise.resolve(!0).then(()=>{e(...n)}).catch(e=>{t&&t(e)})}},n.base64urlEncodeWithoutPadding=n.base64Encode=n.base64Decode=n.base64=void 0,n.calculateBackoffMillis=function(e,t=A,n=I){const r=t*Math.pow(n,e),o=Math.round(j*r*(Math.random()-.5)*2);return Math.min(P,r+o)}
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
 */,n.createSubscribe=function(e,t){const n=new T(e,t);return n.subscribe.bind(n)},n.decode=void 0,n.deepCopy=function(e){return d(undefined,e)},n.deepEqual=function e(t,n){if(t===n)return!0;const r=Object.keys(t),o=Object.keys(n);for(const i of r){if(!o.includes(i))return!1;const r=t[i],s=n[i];if(M(r)&&M(s)){if(!e(r,s))return!1}else if(r!==s)return!1}for(const e of o)if(!r.includes(e))return!1;return!0},n.deepExtend=d,n.errorPrefix=O,n.extractQuerystring=function(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:undefined)}
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
 */,n.getExperimentalSetting=n.getDefaults=n.getDefaultEmulatorHostnameAndPort=n.getDefaultEmulatorHost=n.getDefaultAppConfig=void 0,n.getGlobal=p,n.getModularInstance=
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
function(e){return e&&e._delegate?e._delegate:e},n.getUA=b,n.isAdmin=void 0,n.isBrowser=function(){return"undefined"!=typeof window||y()},n.isBrowserExtension=function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:undefined;return"object"==typeof e&&e.id!==undefined},n.isCloudflareWorker=function(){return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent},n.isElectron=function(){return b().indexOf("Electron/")>=0},n.isEmpty=function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0},n.isIE=function(){const e=b();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0},n.isIndexedDBAvailable=function(){try{return"object"==typeof indexedDB}catch(e){return!1}},n.isMobileCordova=function(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(b())},n.isNode=v,n.isNodeSdk=function(){return!0===t.NODE_CLIENT||!0===t.NODE_ADMIN},n.isReactNative=function(){return"object"==typeof navigator&&"ReactNative"===navigator.product},n.isSafari=function(){return!v()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")},n.isUWP=function(){return b().indexOf("MSAppHost/")>=0},n.isValidTimestamp=n.isValidFormat=void 0,n.isWebWorker=y,n.issuedAtTime=void 0,n.jsonEval=E,n.map=function(e,t,n){const r={};for(const o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=t.call(n,e[o],o,e));return r},n.ordinal=function(e){if(!Number.isFinite(e))return`${e}`;return e+function(e){e=Math.abs(e);const t=e%100;if(t>=10&&t<=20)return"th";const n=e%10;if(1===n)return"st";if(2===n)return"nd";if(3===n)return"rd";return"th"}(e)},n.promiseWithTimeout=
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
 */,n.validateArgCount=void 0,n.validateCallback=function(e,t,n,r){if(r&&!n)return;if("function"!=typeof n)throw new Error(O(e,t)+"must be a valid function.")},n.validateContextObject=function(e,t,n,r){if(r&&!n)return;if("object"!=typeof n||null===n)throw new Error(O(e,t)+"must be a valid context object.")}
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
 */,n.validateIndexedDBOpenable=function(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})},n.validateNamespace=function(e,t,n){if(n&&!t)return;if("string"!=typeof t)throw new Error(O(e,"namespace")+"must be a valid firebase namespace.")};
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
 */function p(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}
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
 */n.base64Decode=u;const h=()=>{try{return p().__FIREBASE_DEFAULTS__||(()=>{if(void 0===e||void 0===e.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&u(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}};n.getDefaults=h;const g=e=>{var t,n;return null===(n=null===(t=h())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]};n.getDefaultEmulatorHost=g;n.getDefaultEmulatorHostnameAndPort=e=>{const t=g(e);if(!t)return undefined;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]};n.getDefaultAppConfig=()=>{var e;return null===(e=h())||void 0===e?void 0:e.config};
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
n.getExperimentalSetting=e=>{var t;return null===(t=h())||void 0===t?void 0:t[`_${e}`]};class m{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
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
 */function b(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function v(){var e;const t=null===(e=h())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(e){return!1}}function y(){return"undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof self&&self instanceof WorkerGlobalScope}n.Deferred=m;class w extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,w.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,S.prototype.create)}}n.FirebaseError=w;class S{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],i=o?function(e,t){return e.replace(_,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}(o,n):"Error",s=`${this.serviceName}: ${i} (${r}).`;return new w(r,s,n)}}n.ErrorFactory=S;const _=/\{\$([^}]+)}/g;
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
 */function E(e){return JSON.parse(e)}const k=function(e){let t={},n={},r={},o="";try{const i=e.split(".");t=E(u(i[0])||""),n=E(u(i[1])||""),o=i[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:o}};n.decode=k;n.isValidTimestamp=function(e){const t=k(e).claims,n=Math.floor((new Date).getTime()/1e3);let r=0,o=0;return"object"==typeof t&&(t.hasOwnProperty("nbf")?r=t.nbf:t.hasOwnProperty("iat")&&(r=t.iat),o=t.hasOwnProperty("exp")?t.exp:r+86400),!!n&&!!r&&!!o&&n>=r&&n<=o};n.issuedAtTime=function(e){const t=k(e).claims;return"object"==typeof t&&t.hasOwnProperty("iat")?t.iat:null};n.isValidFormat=function(e){const t=k(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")};function M(e){return null!==e&&"object"==typeof e}
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
n.isAdmin=function(e){const t=k(e).claims;return"object"==typeof t&&!0===t.admin};n.Sha1=class{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let r,o,i=this.chain_[0],s=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(r=c^s&(a^c),o=1518500249):(r=s^a^c,o=1859775393):e<60?(r=s&a|c&(s|a),o=2400959708):(r=s^a^c,o=3395469782);const t=(i<<5|i>>>27)+r+l+o+n[e]&4294967295;l=c,c=a,a=4294967295&(s<<30|s>>>2),s=i,i=t}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;t===undefined&&(t=e.length);const n=t-this.blockSize;let r=0;const o=this.buf_;let i=this.inbuf_;for(;r<t;){if(0===i)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(o[i]=e.charCodeAt(r),++i,++r,i===this.blockSize){this.compress_(o),i=0;break}}else for(;r<t;)if(o[i]=e[r],++i,++r,i===this.blockSize){this.compress_(o),i=0;break}}this.inbuf_=i,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let r=24;r>=0;r-=8)e[n]=this.chain_[t]>>r&255,++n;return e}};class T{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(e===undefined&&t===undefined&&n===undefined)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},r.next===undefined&&(r.next=C),r.error===undefined&&(r.error=C),r.complete===undefined&&(r.complete=C);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),o}unsubscribeOne(e){this.observers!==undefined&&this.observers[e]!==undefined&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&this.onNoObservers!==undefined&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==undefined&&this.observers[e]!==undefined)try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,e!==undefined&&(this.finalError=e),this.task.then(()=>{this.observers=undefined,this.onNoObservers=undefined}))}}function C(){}
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
 */function O(e,t){return`${e} failed: ${t} argument `}n.validateArgCount=function(e,t,n,r){let o;if(r<t?o="at least "+t:r>n&&(o=0===n?"none":"no more than "+n),o){throw new Error(e+" failed: Was called with "+r+(1===r?" argument.":" arguments.")+" Expects "+o+".")}};n.stringToByteArray=function(e){const t=[];let n=0;for(let o=0;o<e.length;o++){let i=e.charCodeAt(o);if(i>=55296&&i<=56319){const t=i-55296;o++,r(o<e.length,"Surrogate pair missing trail surrogate.");i=65536+(t<<10)+(e.charCodeAt(o)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t};
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
n.stringLength=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};const A=1e3,I=2,P=n.MAX_VALUE_MILLIS=144e5,j=n.RANDOM_FACTOR=.5}).call(this)}).call(this,e("_process"))}}},{package:"@metamask/notification-services-controller>firebase>@firebase/util",file:"node_modules/@firebase/util/dist/index.esm2017.js"}],[883,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});class r{static parse(e){if(""===e)return new r([]);if(!e.startsWith("/"))throw new o(e);const[,...t]=e.split("/");return new r(t.map(e=>e.replace(/~1/g,"/").replace(/~0/g,"~")))}constructor(e){this.tokens=e}toString(){if(0===this.tokens.length)return"";return`/${this.tokens.map(e=>e.replace(/~/g,"~0").replace(/\//g,"~1")).join("/")}`}shmeval(e){for(const t of this.tokens){if(!e.hasOwnProperty(t))throw new i(e,t);e=e[t]}return e}}n.default=r;class o extends Error{constructor(e){super(`Invalid JSON Pointer: ${e}`),this.ptr=e}}n.InvalidPtrError=o;class i extends Error{constructor(e,t){super(`Error evaluating JSON Pointer: no attribute ${t} on ${e}`),this.instance=e,this.token=t}}n.EvalError=i}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/reference-resolver>@json-schema-spec/json-pointer",file:"node_modules/@json-schema-spec/json-pointer/lib/index.js"}],[884,{"@json-schema-tools/reference-resolver":889,"@json-schema-tools/traverse":892,"fast-safe-stringify":4790},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,a)}c((r=r.apply(e,t||[])).next())})},i=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.NonStringRefError=void 0;var a=s(e("@json-schema-tools/traverse")),c=s(e("@json-schema-tools/reference-resolver")),l=s(e("fast-safe-stringify")),u=function(e){this.name="NonStringRefError",this.message=["NonStringRefError","Found an improperly formatted $ref in schema. $ref must be a string","schema in question: ".concat((0,l.default)(e))].join("\n")};n.NonStringRefError=u;var d=function(e,t){if(e.$ref!==undefined&&Object.keys(e).length>1&&!0!==t&&!1!==t){var n=r(r({},t),e);return delete n.$ref,n}return t},f=function(){function e(e,t){var n;if(void 0===t&&(t={}),this.options=t,this.refCache={},n=!0===this.options.mutate||!0===e||!1===e?e:r({},e),this.options.recursive===undefined&&(this.options.recursive=!0),this.options.rootSchema===undefined&&(this.options.rootSchema=n),!0!==e&&!1!==e&&e.$id&&(this.options.rootSchema=n),this.options.refCache&&(this.refCache=this.options.refCache),this.options.protocolHandlerMap)for(var o=0,i=Object.keys(this.options.protocolHandlerMap);o<i.length;o++){var s=i[o];c.default.protocolHandlerMap[s]=this.options.protocolHandlerMap[s]}this.schema=n,this.refs=this.collectRefs()}return e.prototype.resolve=function(){return o(this,void 0,void 0,function(){return i(this,function(e){switch(e.label){case 0:return[4,this._resolve()];case 1:return e.sent(),delete this.schema.definitions,delete this.schema.components,[2,this.schema]}})})},e.prototype._resolve=function(){return o(this,void 0,void 0,function(){var t,n,o,s,l,u,f,p,h,g,m,b=this;return i(this,function(i){switch(i.label){case 0:if(!0===this.schema||!1===this.schema)return[2,Promise.resolve(this.schema)];if(0===this.refs.length)return[2,Promise.resolve(this.schema)];t=this.refs.filter(function(e){return b.refCache[e]===undefined}),n=[],o=0,s=t,i.label=1;case 1:return o<s.length?(l=s[o],u=void 0,this.refCache[l]===undefined?[3,2]:(u=this.refCache[l],[3,5])):[3,11];case 2:if("#"!==l)return[3,3];if(this.options.rootSchema===undefined)throw new Error("options.rootSchema was not provided, but one of the schemas references '#'");return u=this.options.rootSchema,[3,5];case 3:return f=c.default.resolve(l,this.options.rootSchema),n.push(f),[4,f];case 4:u=i.sent(),i.label=5;case 5:return!0!==this.options.recursive||!0===u||!1===u||"#"===l?[3,9]:(p=r(r({},this.options),{refCache:this.refCache}),0===(h=new e(u,p)).refs.length?[3,7]:(g=h._resolve(),n.push(g),[4,g]));case 6:return m=i.sent(),this.refCache[l]=d(u,m),[3,8];case 7:this.refCache[l]=u,i.label=8;case 8:return[3,10];case 9:this.refCache[l]=u,i.label=10;case 10:return o++,[3,1];case 11:return this.schema.$ref!==undefined?this.schema=d(this.schema,this.refCache[this.schema.$ref]):(0,a.default)(this.schema,function(e){if(!0===e||!1===e)return e;if(e.$ref!==undefined){var t=b.refCache[e.$ref];return d(e,t)}return e},{mutable:!0}),[4,Promise.all(n)];case 12:return i.sent(),[2,this.schema]}})})},e.prototype.collectRefs=function(){var e=[];return(0,a.default)(this.schema,function(t){if(!0===t||!1===t)return t;if(t.$ref&&-1===e.indexOf(t.$ref)){if("string"!=typeof t.$ref)throw new u(t);e.push(t.$ref)}return t}),e},e}();n.default=f}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/dereferencer",file:"node_modules/@json-schema-tools/dereferencer/build/dereferencer.js"}],[885,{"./dereferencer":884},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.NonStringRefError=void 0;var o=r(e("./dereferencer")),i=e("./dereferencer");Object.defineProperty(n,"NonStringRefError",{enumerable:!0,get:function(){return i.NonStringRefError}}),n.default=o.default}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/dereferencer",file:"node_modules/@json-schema-tools/dereferencer/build/index.js"}],[886,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.jsonSchema=void 0,n.jsonSchema={$schema:"https://meta.json-schema.tools/",$id:"https://meta.json-schema.tools/",title:"JSONSchema",default:{},oneOf:[{$ref:"#/definitions/JSONSchemaObject"},{$ref:"#/definitions/JSONSchemaBoolean"}],definitions:{JSONSchemaBoolean:{title:"JSONSchemaBoolean",description:"Always valid if true. Never valid if false. Is constant.",type:"boolean"},JSONSchemaObject:{title:"JSONSchemaObject",type:"object",properties:{$id:{title:"$id",type:"string",format:"uri-reference"},$schema:{title:"$schema",type:"string",format:"uri"},$ref:{title:"$ref",type:"string",format:"uri-reference"},$comment:{title:"$comment",type:"string"},title:{title:"title",type:"string"},description:{title:"description",type:"string"},default:!0,readOnly:{title:"readOnly",type:"boolean",default:!1},examples:{title:"examples",type:"array",items:!0},multipleOf:{title:"multipleOf",type:"number",exclusiveMinimum:0},maximum:{title:"maximum",type:"number"},exclusiveMaximum:{title:"exclusiveMaximum",type:"number"},minimum:{title:"minimum",type:"number"},exclusiveMinimum:{title:"exclusiveMinimum",type:"number"},maxLength:{$ref:"#/definitions/nonNegativeInteger"},minLength:{$ref:"#/definitions/nonNegativeIntegerDefault0"},pattern:{title:"pattern",type:"string",format:"regex"},additionalItems:{$ref:"#"},items:{title:"items",anyOf:[{$ref:"#"},{$ref:"#/definitions/schemaArray"}],default:!0},maxItems:{$ref:"#/definitions/nonNegativeInteger"},minItems:{$ref:"#/definitions/nonNegativeIntegerDefault0"},uniqueItems:{title:"uniqueItems",type:"boolean",default:!1},contains:{$ref:"#"},maxProperties:{$ref:"#/definitions/nonNegativeInteger"},minProperties:{$ref:"#/definitions/nonNegativeIntegerDefault0"},required:{$ref:"#/definitions/stringArray"},additionalProperties:{$ref:"#"},definitions:{title:"definitions",type:"object",additionalProperties:{$ref:"#"},default:{}},properties:{title:"properties",type:"object",additionalProperties:{$ref:"#"},default:{}},patternProperties:{title:"patternProperties",type:"object",additionalProperties:{$ref:"#"},propertyNames:{title:"propertyNames",format:"regex"},default:{}},dependencies:{title:"dependencies",type:"object",additionalProperties:{title:"dependenciesSet",anyOf:[{$ref:"#"},{$ref:"#/definitions/stringArray"}]}},propertyNames:{$ref:"#"},const:!0,enum:{title:"enum",type:"array",items:!0,minItems:1,uniqueItems:!0},type:{title:"type",anyOf:[{$ref:"#/definitions/simpleTypes"},{title:"arrayOfSimpleTypes",type:"array",items:{$ref:"#/definitions/simpleTypes"},minItems:1,uniqueItems:!0}]},format:{title:"format",type:"string"},contentMediaType:{title:"contentMediaType",type:"string"},contentEncoding:{title:"contentEncoding",type:"string"},if:{$ref:"#"},then:{$ref:"#"},else:{$ref:"#"},allOf:{$ref:"#/definitions/schemaArray"},anyOf:{$ref:"#/definitions/schemaArray"},oneOf:{$ref:"#/definitions/schemaArray"},not:{$ref:"#"}}},schemaArray:{title:"schemaArray",type:"array",minItems:1,items:{$ref:"#"}},nonNegativeInteger:{title:"nonNegativeInteger",type:"integer",minimum:0},nonNegativeIntegerDefault0:{title:"nonNegativeIntegerDefaultZero",type:"integer",minimum:0,default:0},simpleTypes:{title:"simpleTypes",type:"string",enum:["array","boolean","integer","null","number","object","string"]},stringArray:{title:"stringArray",type:"array",items:{type:"string"},uniqueItems:!0,default:[]}}},n.default=n.jsonSchema}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/meta-schema",file:"node_modules/@json-schema-tools/meta-schema/index.js"}],[887,{"./errors":888,"isomorphic-fetch":5049},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,a)}c((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var s=e("./errors"),a=i(e("isomorphic-fetch")),c=function(e){return r(void 0,void 0,void 0,function(){var t,n;return o(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,(0,a.default)(e)];case 1:return t=r.sent(),[3,3];case 2:throw r.sent(),new s.InvalidRemoteURLError(e);case 3:return r.trys.push([3,5,,6]),[4,t.json()];case 4:return[2,r.sent()];case 5:throw n=r.sent(),new s.NonJsonRefError({$ref:e},n.message);case 6:return[2]}})})};n.default={https:c,http:c}}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/reference-resolver",file:"node_modules/@json-schema-tools/reference-resolver/build/default-protocol-handler-map.js"}],[888,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.InvalidFileSystemPathError=n.InvalidRemoteURLError=n.NotResolvableError=n.NonJsonRefError=void 0;var r=function(e,t){this.name="NonJsonRefError",this.message=["NonJsonRefError","The resolved value at the reference: ".concat(e.$ref," was not JSON.parse 'able"),"The non-json content in question: ".concat(t)].join("\n")};n.NonJsonRefError=r;var o=function(e){this.name="NotResolvableError",this.message=["NotResolvableError","Could not resolve the reference: ".concat(e),"No protocol handler was found, and it was not found to be an internal reference"].join("\n")};n.NotResolvableError=o;var i=function(e){this.name="InvalidRemoteURLError",this.message=["InvalidRemoteURLError","The url was not resolvable: ".concat(e)].join("\n")};n.InvalidRemoteURLError=i;var s=function(e){this.name="InvalidFileSystemPathError",this.message=["InvalidFileSystemPathError","The path was not resolvable: ".concat(e)].join("\n")};n.InvalidFileSystemPathError=s}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/reference-resolver",file:"node_modules/@json-schema-tools/reference-resolver/build/errors.js"}],[889,{"./default-protocol-handler-map":887,"./reference-resolver":890},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,a)}c((r=r.apply(e,t||[])).next())})},i=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var a=s(e("./default-protocol-handler-map")),c=s(e("./reference-resolver")),l=r(r({},a.default),{file:function(){return o(void 0,void 0,void 0,function(){return i(this,function(e){return[2,undefined]})})}});n.default=new c.default(l)}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/reference-resolver",file:"node_modules/@json-schema-tools/reference-resolver/build/index-web.js"}],[89,{"@metamask/messenger":2592},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getConnectivityControllerMessenger=function(e){return new r.Messenger({namespace:"ConnectivityController",parent:e})};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/connectivity/connectivity-controller-messenger.ts"}],[890,{"./errors":888,"./resolve-pointer":891},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(s,a)}c((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var s=e("./errors"),a=i(e("./resolve-pointer")),c=function(){function e(e){this.protocolHandlerMap=e}return e.prototype.resolve=function(e){return r(this,arguments,void 0,function(e,t){var n,r,i,c,l,u,d,f,p,h;return void 0===t&&(t={}),o(this,function(o){switch(o.label){case 0:if("#"===e[0])return[2,Promise.resolve((0,a.default)(e,t))];(n=e.split("#")).length>1&&(r=n[n.length-1]),i=n[0],o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this.protocolHandlerMap.file(i,t)];case 2:return c=o.sent(),[3,4];case 3:throw l=o.sent(),new s.NonJsonRefError({$ref:e},l.message);case 4:if(c!==undefined)return h=c,r&&(h=(0,a.default)(r,h)),[2,h];if(!1===e.includes("://"))throw new s.InvalidFileSystemPathError(e);u=0,d=Object.keys(this.protocolHandlerMap),o.label=5;case 5:return u<d.length?(f=d[u],i.startsWith(f)?[4,this.protocolHandlerMap[f](i,t)]:[3,7]):[3,8];case 6:if((p=o.sent())!==undefined)return h=p,r&&(h=(0,a.default)(r,h)),[2,h];o.label=7;case 7:return u++,[3,5];case 8:throw new s.NotResolvableError(e)}})})},e}();n.default=c}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/reference-resolver",file:"node_modules/@json-schema-tools/reference-resolver/build/reference-resolver.js"}],[891,{"@json-schema-spec/json-pointer":883},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.InvalidJsonPointerRefError=void 0;var o=r(e("@json-schema-spec/json-pointer")),i=function(e,t){this.name="InvalidJsonPointerRefError",this.message=["InvalidJsonPointerRefError","The provided RFC6901 JSON Pointer is invalid: ".concat(e),"","addition info: ",t].join("\n")};n.InvalidJsonPointerRefError=i,n.default=function(e,t){try{var n=e.replace("#","");return o.default.parse(n).shmeval(t)}catch(t){throw new i(e,t.message)}}}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/reference-resolver",file:"node_modules/@json-schema-tools/reference-resolver/build/resolve-pointer.js"}],[892,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(n,"__esModule",{value:!0}),n.defaultOptions=void 0,n.defaultOptions={skipFirstMutation:!1,mutable:!1,bfs:!1};var i=function(e){return e.map(function(e){return""===e?"$":".".concat(e)}).join("")},s=function(e,t){var n=t.find(function(t){return t===e});return n||!1},a=function(e,t){return void 0===t&&(t=1),e[e.length-t]};n.default=function e(t,c,l,u,d,f,p,h,g){void 0===l&&(l=n.defaultOptions),void 0===u&&(u=0),void 0===d&&(d=[]),void 0===f&&(f=[]),void 0===p&&(p=[]),void 0===h&&(h=[]),void 0===g&&(g=[]);var m=r(r({},n.defaultOptions),l);if(0===u&&(p=[""]),"boolean"==typeof t||t instanceof Boolean)return!0===m.skipFirstMutation&&0===u?t:c(t,!1,i(p),a(f));var b=t;!1===m.mutable&&(b=r({},t)),f.push(b),!0===m.bfs&&(!1!==m.skipFirstMutation&&0===u||(b=c(b,!1,i(p),a(f,2)))),d.push(t),h.push([t,b]);var v=function(t,n){var r=s(t,d);return r?(g.push(r),!0===m.skipFirstMutation&&r===d[0]?c(t,!0,i(n),a(f)):h.find(function(e){var t=e[0];return r===t})[1]):e(t,c,l,u+1,d,f,n,h,g)};if(t.anyOf)b.anyOf=t.anyOf.map(function(e,t){return v(e,o(o([],p,!0),["anyOf[".concat(t,"]")],!1))});else if(t.allOf)b.allOf=t.allOf.map(function(e,t){return v(e,o(o([],p,!0),["allOf[".concat(t,"]")],!1))});else if(t.oneOf)b.oneOf=t.oneOf.map(function(e,t){return v(e,o(o([],p,!0),["oneOf[".concat(t,"]")],!1))});else{if(t.items)if(t.items instanceof Array)b.items=t.items.map(function(e,t){return v(e,o(o([],p,!0),["items[".concat(t,"]")],!1))});else{var y=s(t.items,d);if(y)if(g.push(y),!0===m.skipFirstMutation&&y===d[0])b.items=c(t.items,!0,i(p),a(f));else{var w=h.find(function(e){var t=e[0];return y===t})[1];b.items=w}else b.items=e(t.items,c,l,u+1,d,f,o(o([],p,!0),["items"],!1),h,g)}if(t.additionalItems!==undefined&&(b.additionalItems=v(t.additionalItems,o(o([],p,!0),["additionalItems"],!1))),t.properties!==undefined){var S=t.properties,_={};Object.keys(t.properties).forEach(function(e){_[e]=v(S[e],o(o([],p,!0),["properties",e.toString()],!1))}),b.properties=_}if(t.patternProperties!==undefined){var E=t.patternProperties,k={};Object.keys(t.patternProperties).forEach(function(e){k[e]=v(E[e],o(o([],p,!0),["patternProperties",e.toString()],!1))}),b.patternProperties=k}t.additionalProperties!==undefined&&!0==!!t.additionalProperties&&(b.additionalProperties=v(t.additionalProperties,o(o([],p,!0),["additionalProperties"],!1)))}if(!0===m.skipFirstMutation&&0===u)return b;if(!0===m.bfs)return f.pop(),b;var M=-1!==g.indexOf(t);return f.pop(),c(b,M,i(p),a(f))}}}},{package:"@open-rpc/schema-utils-js>@json-schema-tools/dereferencer>@json-schema-tools/traverse",file:"node_modules/@json-schema-tools/traverse/build/index.js"}],[90,{"./connectivity-controller-messenger":89},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getConnectivityControllerMessenger",{enumerable:!0,get:function(){return r.getConnectivityControllerMessenger}});var r=e("./connectivity-controller-messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/connectivity/index.ts"}],[91,{"@metamask/messenger":2592},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getAccountActivityServiceMessenger=function(e){const t=new r.Messenger({namespace:"AccountActivityService",parent:e});return e.delegate({messenger:t,actions:["AccountsController:getSelectedAccount","BackendWebSocketService:connect","BackendWebSocketService:forceReconnection","BackendWebSocketService:subscribe","BackendWebSocketService:getConnectionInfo","BackendWebSocketService:channelHasSubscription","BackendWebSocketService:getSubscriptionsByChannel","BackendWebSocketService:findSubscriptionsByChannelPrefix","BackendWebSocketService:addChannelCallback","BackendWebSocketService:removeChannelCallback"],events:["AccountsController:selectedAccountChange","BackendWebSocketService:connectionStateChanged"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/core-backend/account-activity-service-messenger.ts"}],[92,{"@metamask/messenger":2592},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getBackendWebSocketServiceInitMessenger=function(e){const t=new r.Messenger({namespace:"BackendWebSocketServiceInit",parent:e});return e.delegate({messenger:t,actions:["RemoteFeatureFlagController:getState","AuthenticationController:getBearerToken"]}),t},n.getBackendWebSocketServiceMessenger=function(e){const t=new r.Messenger({namespace:"BackendWebSocketService",parent:e});return e.delegate({messenger:t,actions:["AuthenticationController:getBearerToken"],events:["AuthenticationController:stateChange","KeyringController:lock","KeyringController:unlock"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/core-backend/backend-websocket-service-messenger.ts"}],[93,{"./account-activity-service-messenger":91,"./backend-websocket-service-messenger":92},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getAccountActivityServiceMessenger",{enumerable:!0,get:function(){return o.getAccountActivityServiceMessenger}}),Object.defineProperty(n,"getBackendWebSocketServiceInitMessenger",{enumerable:!0,get:function(){return r.getBackendWebSocketServiceInitMessenger}}),Object.defineProperty(n,"getBackendWebSocketServiceMessenger",{enumerable:!0,get:function(){return r.getBackendWebSocketServiceMessenger}});var r=e("./backend-websocket-service-messenger"),o=e("./account-activity-service-messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/core-backend/index.ts"}],[94,{"@metamask/messenger":2592},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getCurrencyRateControllerInitMessenger=function(e){const t=new r.Messenger({namespace:"CurrencyRateControllerInit",parent:e});return e.delegate({messenger:t,actions:["PreferencesController:getState"]}),t},n.getCurrencyRateControllerMessenger=function(e){const t=new r.Messenger({namespace:"CurrencyRateController",parent:e});return e.delegate({messenger:t,actions:["NetworkController:getNetworkClientById","NetworkController:getState"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/currency-rate-controller-messenger.ts"}],[95,{"@metamask/messenger":2592},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getDecryptMessageControllerInitMessenger=function(e){const t=new r.Messenger({namespace:"DecryptMessageControllerInit",parent:e});return e.delegate({messenger:t,actions:["MetaMetricsController:trackEvent"]}),t},n.getDecryptMessageControllerMessenger=function(e){const t=new r.Messenger({namespace:"DecryptMessageController",parent:e});return e.delegate({messenger:t,actions:["ApprovalController:addRequest","ApprovalController:acceptRequest","ApprovalController:rejectRequest","KeyringController:decryptMessage"],events:["DecryptMessageManager:stateChange","DecryptMessageManager:unapprovedMessage"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/decrypt-message-controller-messenger.ts"}],[96,{"@metamask/messenger":2592},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getDecryptMessageManagerMessenger=function(e){return new r.Messenger({namespace:"DecryptMessageManager",parent:e})};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/decrypt-message-manager-messenger.ts"}],[97,{"@metamask/messenger":2592},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getDeFiPositionsControllerInitMessenger=function(e){const t=new r.Messenger({namespace:"DeFiPositionsControllerInit",parent:e});return e.delegate({messenger:t,actions:["RemoteFeatureFlagController:getState","MetaMetricsController:trackEvent"]}),t},n.getDeFiPositionsControllerMessenger=function(e){const t=new r.Messenger({namespace:"DeFiPositionsController",parent:e});return e.delegate({messenger:t,actions:["AccountTreeController:getAccountsFromSelectedAccountGroup"],events:["KeyringController:lock","TransactionController:transactionConfirmed","AccountTreeController:selectedAccountGroupChange"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/defi-positions/defi-positions-controller-messenger.ts"}],[98,{"./defi-positions-controller-messenger":97},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getDeFiPositionsControllerInitMessenger",{enumerable:!0,get:function(){return r.getDeFiPositionsControllerInitMessenger}}),Object.defineProperty(n,"getDeFiPositionsControllerMessenger",{enumerable:!0,get:function(){return r.getDeFiPositionsControllerMessenger}});var r=e("./defi-positions-controller-messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/defi-positions/index.ts"}],[99,{"@metamask/messenger":2592},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getDelegationControllerInitMessenger=function(e){const t=new r.Messenger({namespace:"DelegationControllerInit",parent:e});return e.delegate({messenger:t,events:["TransactionController:transactionStatusUpdated"]}),t},n.getDelegationControllerMessenger=function(e){const t=new r.Messenger({namespace:"DelegationController",parent:e});return e.delegate({messenger:t,actions:["AccountsController:getSelectedAccount","KeyringController:signTypedMessage"],events:["TransactionController:transactionStatusUpdated"]}),t};var r=e("@metamask/messenger")}}},{package:"$root$",file:"app/scripts/controller-init/messengers/delegation/delegation-controller-messenger.ts"}],[9,{"../../shared/constants/app":6175,"../../shared/constants/defi-referrals":6179,"../../shared/constants/errors":6180,"../../shared/constants/infura-project-id":6185,"../../shared/constants/messages":6189,"../../shared/constants/metametrics":6190,"../../shared/constants/offscreen-communication":6196,"../../shared/constants/onboarding":6197,"../../shared/constants/start-up-errors":6206,"../../shared/constants/ui-initialization":6214,"../../shared/lib/get-first-preferred-lang-code":6278,"../../shared/lib/manifestFlags":6280,"../../shared/lib/promise-with-resolvers":6291,"../../shared/lib/sentry":6292,"../../shared/modules/browser-runtime.utils":6312,"../../shared/modules/caip-stream":6313,"../../shared/modules/fetch-with-timeout":6322,"../../shared/modules/mv3.utils":6327,"../../shared/modules/object.utils":6329,"../../shared/modules/selectors/networks":6335,"./constants/marketing-site-whitelist":10,"./constants/sentry-state":11,"./constants/snaps":12,"./constants/stream":13,"./first-time-state":259,"./lib/CronjobControllerStorageManager":264,"./lib/createDefiReferralMiddleware":271,"./lib/deep-links/deep-link-router":286,"./lib/deep-links/metrics":287,"./lib/ens-ipfs/setup":292,"./lib/extension-lazy-listener/extension-lazy-listener":293,"./lib/getObjStructure":295,"./lib/migrator":301,"./lib/notification-manager":305,"./lib/safe-reload":334,"./lib/setup-initial-state-hooks":338,"./lib/start-up-errors/start-up-errors":349,"./lib/state-corruption/state-corruption-recovery":350,"./lib/stores/extension-store":354,"./lib/stores/fixture-extension-store":355,"./lib/stores/persistence-manager":357,"./lib/stream-utils":359,"./lib/update-remote-feature-flags":378,"./lib/use-split-state-storage":379,"./lib/util":380,"./metamask-controller":381,"./migrations":605,"./offscreen":606,"./on-update":607,"./platforms/extension":608,"@metamask/base-controller":1520,"@metamask/utils":3554,"extension-port-stream":4775,loglevel:5247,"readable-stream":5677,"webextension-polyfill":6163},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.loadStateFromPersistence=We,n.setupController=qe,e("./lib/setup-initial-state-hooks"),e("../../shared/constants/infura-project-id");var r=e("readable-stream"),o=ne(e("loglevel")),i=ne(e("webextension-polyfill")),s=e("@metamask/utils"),a=e("@metamask/base-controller"),c=e("extension-port-stream"),l=e("../../shared/lib/promise-with-resolvers"),u=e("../../shared/constants/onboarding"),d=e("../../shared/constants/app"),f=e("../../shared/constants/messages"),p=e("../../shared/constants/ui-initialization"),h=e("../../shared/constants/metametrics"),g=e("../../shared/modules/browser-runtime.utils"),m=e("../../shared/modules/mv3.utils"),b=e("../../shared/modules/object.utils"),v=(e("../../shared/constants/offscreen-communication"),e("../../shared/lib/sentry")),y=e("../../shared/modules/selectors/networks"),w=e("../../shared/modules/caip-stream"),S=ne(e("../../shared/modules/fetch-with-timeout")),_=e("../../shared/constants/errors"),E=ne(e("../../shared/lib/get-first-preferred-lang-code")),k=(e("../../shared/lib/manifestFlags"),e("../../shared/constants/start-up-errors")),M=e("../../shared/constants/defi-referrals"),T=e("./lib/state-corruption/state-corruption-recovery"),C=e("./lib/stores/persistence-manager"),O=ne(e("./lib/stores/extension-store")),A=(e("./lib/stores/fixture-extension-store"),e("./lib/use-split-state-storage")),I=ne(e("./migrations")),P=ne(e("./lib/migrator")),j=e("./lib/update-remote-feature-flags"),N=ne(e("./platforms/extension")),D=e("./constants/sentry-state"),R=te(e("./lib/notification-manager")),x=te(e("./metamask-controller")),L=ne(e("./lib/getObjStructure")),$=ne(e("./lib/ens-ipfs/setup")),B=e("./lib/util"),F=e("./offscreen"),U=e("./lib/stream-utils"),K=ne(e("./first-time-state")),V=e("./on-update"),W=e("./constants/marketing-site-whitelist"),H=e("./constants/stream"),G=e("./constants/snaps"),z=e("./lib/extension-lazy-listener/extension-lazy-listener"),J=e("./lib/deep-links/deep-link-router"),q=e("./lib/deep-links/metrics"),Y=e("./lib/safe-reload"),Q=e("./lib/start-up-errors/start-up-errors"),X=e("./lib/CronjobControllerStorageManager"),Z=e("./lib/createDefiReferralMiddleware");function ee(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(ee=function(e){return e?n:t})(e)}function te(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=ee(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&{}.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}function ne(e){return e&&e.__esModule?e:{default:e}}const re=globalThis.stateHooks.lazyListener??new z.ExtensionLazyListener(i.default),oe="#0376C9",ie=9,se=new O.default,ae=new C.PersistenceManager({localStore:se}),{safePersist:ce,requestSafeReload:le,evacuate:ue}=(0,Y.getRequestSafeReload)(ae);global.stateHooks.getMostRecentPersistedState=()=>ae.mostRecentRetrievedState,global.stateHooks.getStorageKind=()=>ae.storageKind,global.logEncryptedVault=()=>{ae.logEncryptedVault()};const{sentry:de}=global;let fe={...K.default};const pe={[d.ENVIRONMENT_TYPE_POPUP]:!0,[d.ENVIRONMENT_TYPE_NOTIFICATION]:!0,[d.ENVIRONMENT_TYPE_FULLSCREEN]:!0},he=["trezor-connect"];o.default.setLevel("info",!1);const ge=new N.default,me=new R.default,be=(0,B.getPlatform)()===d.PLATFORM_FIREFOX;function ve(e){var t;const n=e.name,r=null!==(t=e.sender)&&void 0!==t&&t.url?new URL(e.sender.url):null;let o;return o=be?Boolean(pe[n]):(null==r?void 0:r.origin)===`chrome-extension://${i.default.runtime.id}`,{processName:n,senderUrl:r,isMetaMaskUIPort:o}}let ye=0,we=!1,Se=!1,_e=!1;const Ee={},ke={};let Me;const Te={},Ce={};const Oe=new URL("https://metamask.github.io/phishing-warning/v5.1.0/"),Ae=Oe.toString();let Ie,Pe,je;function Ne(){const e=(0,l.withResolvers)();Ie=e.promise,Pe=e.resolve,je=e.reject}re.once("runtime","onInstalled").then(e=>{!async function([e]){if("install"===e.reason)o.default.debug("First install detected"),Qe(),ge.openExtensionInBrowser();else if("update"===e.reason){const{previousVersion:t}=e;if(!t||t===ge.getVersion())return;await Ie,(0,V.onUpdate)(Me,ge,t,le)}}(e)}),Ne();let De,Re,xe,Le;const $e=new T.CorruptionHandler,Be=async e=>{try{e.postMessage({data:{method:p.BACKGROUND_LIVENESS_METHOD},name:"background-liveness"})}catch(e){return void o.default.error("MetaMask - background-liveness check: Failed to message to port",e)}try{await Ie,De(e)}catch(n){if(null==de||de.captureException(n),ve(e).isMetaMaskUIPort)if((0,_.isStateCorruptionError)(n))await $e.handleStateCorruptionError({port:e,error:n,database:ae,repairCallback:async e=>{Ne(),(0,T.hasVault)(e)?(await Xe(e),Me.onboardingController.setFirstTimeFlowType(u.FirstTimeFlowType.restore)):(await ae.reset(),await Xe(null))}});else{var t;const r=(0,s.isObject)(n)?{message:n.message??"Unknown error",name:n.name??"UnknownError",stack:n.stack,...n.sentryTags&&{sentryTags:n.sentryTags}}:{message:String(n),name:"UnknownError",stack:""};(0,Q.tryPostMessage)(e,k.DISPLAY_GENERAL_STARTUP_ERROR,{error:r,currentLocale:null===(t=Me)||void 0===t||null===(t=t.preferencesController)||void 0===t||null===(t=t.state)||void 0===t?void 0:t.currentLocale})}}},Fe=()=>{re.addListener("runtime","onConnect",Be)};function Ue(){const e=(new Date).toISOString();i.default.storage.session.set({timestamp:e})}async function Ke(e){(0,B.initInstallType)();const t=m.isManifestV3?(0,F.createOffscreen)():null;let n=null,r=!1;m.isManifestV3&&(0,F.addOffscreenConnectivityListener)(e=>{if(r&&Me.controllerApi.setConnectivityStatus){const t=e?"online":"offline";Me.controllerApi.setConnectivityStatus(t)}else n=e});const o=await We(e),s=o.data,a=await(0,E.default)();let c;if(m.isManifestV3){var l;if(!1!==(null===(l=s.PreferencesController)||void 0===l?void 0:l.enableMV3TimestampSave)){const e=2e3;Ue(),setInterval(Ue,e)}const e=await i.default.storage.session.get(["isFirstMetaMaskControllerSetup"]);c=(null==e?void 0:e.isFirstMetaMaskControllerSetup)===undefined,await i.default.storage.session.set({isFirstMetaMaskControllerSetup:c})}const u={},d=await async function(){const e=(0,S.default)(),t=G.PREINSTALLED_SNAPS_URLS.map(async t=>{const n=await e(t);if(t.pathname.endsWith(".json.gz")){const e=new DecompressionStream("gzip"),t=n.body.pipeThrough(e);return await new Response(t).json()}return await n.json()});return Promise.all(t)}(),p=new X.CronjobControllerStorageManager;if(await p.init(),qe(s,a,u,c,o.meta,t,d,p),Me.metaMetricsController.updateTraits({[h.MetaMetricsUserTrait.StorageKind]:ae.storageKind}),function(e){async function t(e,t){try{const n=await i.default.tabs.get(e);return!(n.url&&n.url.startsWith("https://www.google.com/search")||(await i.default.tabs.update(e,{url:t}),0))}catch(e){return null==de||de.captureException(e),!1}}const n=!m.isManifestV3;i.default.webRequest.onBeforeRequest.addListener(r=>{var o,s,a;if(r.tabId===i.default.tabs.TAB_ID_NONE)return{};const{completedOnboarding:c}=e.onboardingController.state;if(!c)return{};if(!e.preferencesController.state.usePhishDetect)return{};if(r.initiator&&"null"!==r.initiator&&new URL(r.initiator).host===Oe.host)return{};const{hostname:l,href:u,searchParams:d}=new URL(r.url);e.phishingController.maybeUpdateState();const f=e.phishingController.isBlockedRequest(r.url);let p,g;if("main_frame"!==r.type&&"sub_frame"!==r.type||(p=e.phishingController.test(r.url)),!(null!==(o=p)&&void 0!==o&&o.result||f.result))return{};let m,b=u;null!==(s=p)&&void 0!==s&&s.result&&f.result?g=`${p.type} and ${f.type}`:null!==(a=p)&&void 0!==a&&a.result?g=p.type:(g=f.type,b=r.initiator);try{m=new URL(b).hostname}catch{m=l,b=u}const v=new URLSearchParams({hostname:m,href:b}),y=new URL(Ae);y.hash=v.toString();const w=y.toString(),S=()=>{be||e.metaMetricsController.trackEvent({event:h.MetaMetricsEventName.PhishingPageDisplayed,category:h.MetaMetricsEventCategory.Phishing,properties:{url:b,referrer:{url:b},reason:g,requestDomain:f.result?l:undefined}},{excludeMetaMetricsId:!0})};return n?"main_frame"===r.type?(S(),{redirectUrl:w}):(t(r.tabId,w).then(e=>{e&&S()}),{cancel:!0}):(t(r.tabId,w).then(e=>{e&&S()}),{})},{urls:["http://*/*","https://*/*","ws://*/*","wss://*/*"]},n?["blocking"]:[])}(Me),m.isManifestV3){if(r=!0,null!==n){const e=n?"online":"offline";Me.controllerApi.setConnectivityStatus(e)}}else{const e=e=>{const t=e?"online":"offline";Me.controllerApi.setConnectivityStatus(t)};e(globalThis.navigator.onLine),globalThis.addEventListener("online",()=>e(!0)),globalThis.addEventListener("offline",()=>e(!1))}m.isManifestV3||await async function(){let e;try{const t=new URL(Ae);let n,r;t.hash="#extensionStartup",e=window.document.createElement("iframe"),e.setAttribute("src",t.href),e.setAttribute("sandbox","allow-scripts allow-same-origin");const o=new Promise((e,t)=>{n=e,r=t});e.addEventListener("load",n),window.document.body.appendChild(e),setTimeout(()=>r(new Ve),1e3),await o}catch(e){e instanceof Ve?console.warn("Phishing warning page timeout; page not guaranteed to work offline."):console.error("Failed to initialize phishing warning page",e)}finally{e&&e.remove()}}(),await(async()=>{const e=await i.default.tabs.query({url:"<all_urls>",windowType:"normal"}).then(e=>((0,g.checkForLastErrorAndLog)(),e)).catch(()=>{(0,g.checkForLastErrorAndLog)()});for(const t of e)i.default.tabs.sendMessage(t.id,{name:f.EXTENSION_MESSAGES.READY}).then(()=>{(0,g.checkForLastErrorAndLog)()}).catch(()=>{(0,g.checkForLastErrorAndLog)()})})(),new J.DeepLinkRouter({getExtensionURL:ge.getExtensionURL,getState:Me.getState.bind(Me)}).on("navigate",async({url:e,parsed:t})=>{"redirectTo"in t||await Me.metaMetricsController.trackEvent((0,q.createEvent)({signature:t.signature,url:e}))}).on("error",e=>null==de?void 0:de.captureException(e)).install()}Fe(),i.default.runtime.onConnectExternal.addListener(async(...e)=>{await Ie,Re(...e)});class Ve extends Error{constructor(){super("Timeout failed")}}async function We(e){var t,n;let r;if(e){r={data:{},meta:{}};for(const t of C.backedUpStateKeys)(0,s.hasProperty)(e,t)&&(r.data[t]=e[t]);(0,s.hasProperty)(e,"meta")&&(0,s.isObject)(e.meta)&&(r.meta=e.meta,"split"===e.meta.storageKind||"data"===e.meta.storageKind?ae.storageKind=e.meta.storageKind:ae.storageKind="data"),"number"!=typeof r.meta.version&&(o.default.error("The `backup`'s `meta.version` property was missing during backup restore."),r.meta.version=155)}else{const e=!0;r=await ae.get({validateVault:e})}const i=new P.default({migrations:I.default,defaultVersion:null});i.on("error",e=>{console.warn(e);const t=(0,L.default)(r);null==de||de.captureException(e,{extra:{vaultStructure:t}})});let a=!1;null!==(t=r)&&void 0!==t&&t.data||null!==(n=r)&&void 0!==n&&n.meta||(a=!0,r=i.generateInitialState(fe));const{state:c,changedKeys:l}=await i.migrateData(r),u=async t=>{var n,o,i,s,a,l,u,d;const f=null===(n=r)||void 0===n||null===(n=n.meta)||void 0===n?void 0:n.version,p="number"==typeof f&&f>=157;let h=(null==e||null===(o=e.AppMetadataController)||void 0===o?void 0:o.firstTimeInfo)??(null==c||null===(i=c.data)||void 0===i||null===(i=i.AppMetadataController)||void 0===i?void 0:i.firstTimeInfo)??(null==c||null===(s=c.data)||void 0===s?void 0:s.firstTimeInfo)??(null===(a=r)||void 0===a||null===(a=a.data)||void 0===a||null===(a=a.AppMetadataController)||void 0===a?void 0:a.firstTimeInfo)??(null===(l=r)||void 0===l||null===(l=l.data)||void 0===l?void 0:l.firstTimeInfo);if(!h)try{var g;const e=await ae.getBackup();h=null==e||null===(g=e.AppMetadataController)||void 0===g?void 0:g.firstTimeInfo}catch{}const m=new Error(t);return m.sentryTags={"corruption.preMigrationVersion":String(f??"unknown"),"corruption.backupShouldExist":String(p),"corruption.installVersion":String((null===(u=h)||void 0===u?void 0:u.version)??"unknown"),"corruption.installDate":String((null===(d=h)||void 0===d?void 0:d.date)??"unknown")},m};if(!c)throw await u("MetaMask - migrator returned undefined");if(!(0,s.isObject)(c.meta))throw await u(`MetaMask - migrator metadata has invalid type '${typeof c.meta}'`);if("number"!=typeof c.meta.version)throw await u(`MetaMask - migrator metadata version has invalid type '${typeof c.meta.version}'`);if(!["data","split",undefined].includes(c.meta.storageKind))throw await u(`MetaMask - migrator metadata storageKind has invalid value '${c.meta.storageKind}'`);if(!(0,s.isObject)(c.data))throw await u(`MetaMask - migrator data has invalid type '${typeof c.data}'`);if(ae.setMetadata(c.meta),o.default.debug("[Split State]: Loaded data from persistence with storageKind '%s'",ae.storageKind),"data"===ae.storageKind){const e=!0===c.meta.platformSplitStateGradualRolloutAttempted,t=!e&&await(0,A.useSplitStateStorage)(c.data);o.default.debug("[Split State]: shouldUseSplitStateStorage: %s (alreadyTried: %s)",t,e),t&&(c.meta.platformSplitStateGradualRolloutAttempted=!0,ae.setMetadata(c.meta)),o.default.debug("[Split State]: Writing data to persistence with storageKind 'data'"),await ae.set(c.data),t&&(await ae.migrateToSplitState(c.data),c.meta=ae.getMetaData(),c.meta!==undefined&&(delete c.meta.platformSplitStateGradualRolloutAttempted,ae.setMetadata(c.meta)),await ae.persist())}else{if("split"!==ae.storageKind)throw new Error(`MetaMask - persistenceManager has invalid storageKind '${ae.storageKind}'`);if(a)for(const[e,t]of Object.entries(c.data))ae.update(e,t);else for(const e of l)ae.update(e,c.data[e]);await ae.persist()}return o.default.debug("[Split State]: Load complete."),c}function He(e){const{metaMetricsId:t}=Me.metaMetricsController.state;if(!(0,B.shouldEmitDappViewedEvent)(t))return;const n=Me.getPermittedAccounts(e).length;if(0===n)return;const r=Me.controllerMessenger.call("PreferencesController:getState"),o=Object.keys(r.identities).length;Me.metaMetricsController.trackEvent({event:h.MetaMetricsEventName.DappViewed,category:h.MetaMetricsEventCategory.InpageProvider,referrer:{url:e},properties:{is_first_visit:!1,number_of_accounts:o,number_of_accounts_connected:n}},{excludeMetaMetricsId:!0})}function Ge(e){var t,n,r;if(null===(t=e.sender)||void 0===t||!t.tab||null===(n=e.sender)||void 0===n||!n.url||null===(r=e.sender)||void 0===r||null===(r=r.tab)||void 0===r||!r.url)return;const o=e.sender.tab.id,i=new URL(e.sender.url),{origin:s}=i,a=new URL(e.sender.tab.url),{origin:c}=a;Object.keys(Te).includes(o)||(Te[o]=s),o in Ce||(Ce[o]=c);const l=Me.controllerMessenger.call("PermissionController:hasPermissions",s),u="New Tab"!==e.sender.tab.title;l&&u&&He(s)}function ze(e){const t=[d.ENVIRONMENT_TYPE_POPUP,d.ENVIRONMENT_TYPE_NOTIFICATION,d.ENVIRONMENT_TYPE_FULLSCREEN];!(Object.values(Ee).some(Boolean)||we||ye>0)&&t.includes(e)&&function(){const{metaMetricsId:e,participateInMetaMetrics:t}=Me.metaMetricsController.state;(null!==e||t)&&Me.metaMetricsController.trackEvent({event:h.MetaMetricsEventName.AppOpened,category:h.MetaMetricsEventCategory.App})}()}const Je=async()=>{if(await Ie,Me)try{const e=await i.default.tabs.query({active:!0,currentWindow:!0});if(!e||0===e.length)return;const t=e[0],{id:n,title:r,url:o,favIconUrl:s}=t;if(!o)return void Me.appStateController.clearAppActiveTab();const{origin:a,protocol:c,host:l,href:u}=new URL(o);if(!(0,B.isWebOrigin)(a))return void Me.appStateController.clearAppActiveTab();Me.appStateController.setAppActiveTab({id:n,title:r,origin:a,protocol:c,url:o,host:l,href:u,favIconUrl:s}),Me.subjectMetadataController.addSubjectMetadata({origin:a,name:r||l||a,iconUrl:s||null,subjectType:"website"})}catch(e){console.log("Error refreshing appActiveTab:",e.message)}};function qe(e,t,n,s,l,u,f,p){Me=new x.default({infuraProjectId:globalThis.INFURA_PROJECT_ID,showUserConfirmation:Ye,initState:e,initLangCode:t,platform:ge,notificationManager:me,browser:i.default,getRequestAccountTabIds:()=>ke,getOpenMetamaskTabsIds:()=>Ee,overrides:n,isFirstMetaMaskControllerSetup:s,currentMigrationVersion:l.version,featureFlags:{},offscreenPromise:u,preinstalledSnaps:f,requestSafeReload:le,cronjobControllerStorageManager:p}),ae.setOnSetFailed(()=>{Me.appStateController.setShowStorageErrorToast(!0)});const g=[],S=Me.store.getState();for(const t of Object.keys(S)){const n=e[t]||{},r=S[t];if(null===r||"object"!=typeof r){(0,v.captureException)(new Error(`Invalid controller state for '${t}' of type '${null===r?"null":typeof r}'`));continue}const o=Object.keys(r);if(o.length===Object.keys(n).length){for(const e of o)if(r[e]!==n[e]){g.push(t);break}}else g.push(t)}var _;"split"===ae.storageKind?(g.length>0&&(o.default.info(`MetaMaskController state changed during configuration for controllers: ${g.join(", ")}. Persisting updated state.`),g.forEach(e=>{ae.update(e,S[e])}),ce().catch(e=>{o.default.error("Error persisting updated state:",e),null==de||de.captureException(e)})),Me.store.on("stateChange",async({controllerKey:e,newState:t,_oldState:n,_patches:r})=>{ae.update(e,t),C.backedUpStateKeys.includes(e)&&C.backedUpStateKeys.forEach(t=>{if(t===e)return;const n=Me.store.config[t];if(null==n||!n.metadata)throw new Error(`Cannot backup ${t}: controller metadata is required but not found. All controllers in backedUpStateKeys must extend BaseController and define metadata.`);const r=Me.controllerMessenger.call(`${t}:getState`),o=(0,a.deriveStateFromMetadata)(r,n.metadata,"persist");ae.update(t,o)});try{await ce()}catch(e){o.default.error("Error persisting state change:",e),null==de||de.captureException(e)}})):(g.length>0&&(o.default.info(`MetaMaskController state changed during configuration for controllers: ${g.join(", ")}. Persisting updated state.`),ce(S).catch(e=>{o.default.error("Error persisting updated controller state:",e),null==de||de.captureException(e)})),Me.store.on("update",ce)),Me.store.on("error",e=>{o.default.error("MetaMask controller.store error:",e),null==de||de.captureException(e)}),(0,$.default)({getCurrentChainId:()=>(0,y.getCurrentChainId)({metamask:Me.networkController.state}),getIpfsGateway:Me.preferencesController.getIpfsGateway.bind(Me.preferencesController),getUseAddressBarEnsResolution:()=>Me.preferencesController.state.useAddressBarEnsResolution,provider:Me.provider}),_=Me,global.stateHooks.getSentryAppState=function(){const e=_.memStore.getState();return(0,b.maskObject)(e,D.SENTRY_BACKGROUND_STATE)};const E=()=>ye>0||Boolean(Object.keys(Ee).length)||we||_e||!1,k=(e,t)=>{if(!1===e)Me.onClientClosed();else{if(t===d.ENVIRONMENT_TYPE_FULLSCREEN&&Boolean(Object.keys(Ee).length))return;Me.onEnvironmentTypeClosed(t)}};function M(){const e=T();let t="";const n=oe;var r,o;e&&(t=(r=e)>(o=ie)?`${o}+`:String(r));try{const e={text:t},r={color:n};m.isManifestV3?(i.default.action.setBadgeText(e),i.default.action.setBadgeBackgroundColor(r)):(i.default.browserAction.setBadgeText(e),i.default.browserAction.setBadgeBackgroundColor(r))}catch(e){console.error("Error updating browser badge:",e)}}function T(){try{return Me.appStateController.waitingForUnlock.length+Me.approvalController.getTotalApprovalCount()}catch(e){return console.error("Failed to get pending approval count:",e),0}}De=e=>{if(he.includes(e.name))return;const{processName:t,senderUrl:o,isMetaMaskUIPort:i}=ve(e);if(i){var s;const o=(null==n||null===(s=n.getPortStream)||void 0===s?void 0:s.call(n,e))||new c.ExtensionPortStream(e),i=function({chunkSize:e}){Me.metaMetricsController.trackEvent({event:h.MetaMetricsEventName.PortStreamChunked,category:h.MetaMetricsEventCategory.PortStream,properties:{chunkSize:e}})};if(e.onDisconnect.addListener(()=>o.off("message-too-large",i)),o.on("message-too-large",i),Me.isClientOpen=!0,Me.setupTrustedCommunication(o,e.sender),ze(t),(0,j.updateRemoteFeatureFlags)(Me),t===d.ENVIRONMENT_TYPE_POPUP&&(ye+=1,(0,r.finished)(o,()=>{ye-=1;const e=E();Me.isClientOpen=e,k(e,d.ENVIRONMENT_TYPE_POPUP)})),t===d.ENVIRONMENT_TYPE_SIDEPANEL&&(_e=!0,Je(),(0,r.finished)(o,()=>{_e=!1;const e=E();Me.isClientOpen=e,k(e,d.ENVIRONMENT_TYPE_SIDEPANEL)})),t===d.ENVIRONMENT_TYPE_NOTIFICATION&&(we=!0,(0,r.finished)(o,()=>{we=!1;const e=E();Me.isClientOpen=e,k(e,d.ENVIRONMENT_TYPE_NOTIFICATION)})),t===d.ENVIRONMENT_TYPE_FULLSCREEN){const t=e.sender.tab.id;Ee[t]=!0,(0,r.finished)(o,()=>{delete Ee[t];const e=E();Me.isClientOpen=e,k(e,d.ENVIRONMENT_TYPE_FULLSCREEN)})}}else if(o&&o.origin===Oe.origin&&o.pathname===Oe.pathname){var a;const t=(null==n||null===(a=n.getPortStream)||void 0===a?void 0:a.call(n,e))||new c.ExtensionPortStream(e,{chunkSize:0});Me.setupPhishingCommunication({connectionStream:t})}else{var l;if(e.sender&&e.sender.tab&&e.sender.url){const t=e.sender.tab.id,n=new URL(e.sender.url),{origin:r}=n;Ge(e),e.onMessage.addListener(e=>{e.data&&e.data.method===d.MESSAGE_TYPE.ETH_REQUEST_ACCOUNTS&&(ke[r]=t)})}if(o&&W.COOKIE_ID_MARKETING_WHITELIST_ORIGINS.some(e=>e===o.origin)){var u;const t=(null==n||null===(u=n.getPortStream)||void 0===u?void 0:u.call(n,e))||new c.ExtensionPortStream(e,{chunkSize:0});Me.setUpCookieHandlerCommunication({connectionStream:t})}const t=(null==n||null===(l=n.getPortStream)||void 0===l?void 0:l.call(n,e))||new c.ExtensionPortStream(e,{chunkSize:0});if(xe(t,e.sender),be||!m.isManifestV3){const n=(0,U.setupMultiplex)(t);n.ignoreStream(H.METAMASK_EIP_1193_PROVIDER),Le(n.createStream(H.METAMASK_CAIP_MULTICHAIN_PROVIDER),e.sender)}}},Re=e=>{var t;const r=(null==n||null===(t=n.getPortStream)||void 0===t?void 0:t.call(n,e))||new c.ExtensionPortStream(e,{chunkSize:0});if(!e.sender.id){if(he.includes(e.name))return;Ge(e),Le((0,w.createCaipStream)(r),e.sender)}else xe(r,e.sender)},xe=(e,t)=>{Me.setupUntrustedCommunicationEip1193({connectionStream:e,sender:t})},Le=(e,t)=>{Me.setupUntrustedCommunicationCaip({connectionStream:e,sender:t})},null!=n&&n.registerConnectListeners&&n.registerConnectListeners(De,xe),M(),Me.controllerMessenger.subscribe(x.METAMASK_CONTROLLER_EVENTS.DECRYPT_MESSAGE_MANAGER_UPDATE_BADGE,M),Me.controllerMessenger.subscribe(x.METAMASK_CONTROLLER_EVENTS.ENCRYPTION_PUBLIC_KEY_MANAGER_UPDATE_BADGE,M),Me.signatureController.hub.on(x.METAMASK_CONTROLLER_EVENTS.UPDATE_BADGE,M),Me.controllerMessenger.subscribe(x.METAMASK_CONTROLLER_EVENTS.APP_STATE_UNLOCK_CHANGE,M),Me.controllerMessenger.subscribe(x.METAMASK_CONTROLLER_EVENTS.APPROVAL_STATE_CHANGE,M),Me.controllerMessenger.subscribe(x.METAMASK_CONTROLLER_EVENTS.METAMASK_NOTIFICATIONS_LIST_UPDATED,M),Me.controllerMessenger.subscribe(x.METAMASK_CONTROLLER_EVENTS.METAMASK_NOTIFICATIONS_MARK_AS_READ,M),me.on(R.NOTIFICATION_MANAGER_EVENTS.POPUP_CLOSED,({automaticallyClosed:e})=>{e?T()>0&&Ye():(Me.signatureController.rejectUnapproved(h.REJECT_NOTIFICATION_CLOSE_SIG),Me.decryptMessageController.rejectUnapproved(h.REJECT_NOTIFICATION_CLOSE),Me.encryptionPublicKeyController.rejectUnapproved(h.REJECT_NOTIFICATION_CLOSE),Me.rejectAllPendingApprovals()),M()})}async function Ye(){const e=await ge.getActiveTabs(),t=Boolean(e.find(e=>Ee[e.id])),n=e.length>0&&e[0].extData&&e[0].extData.indexOf("vivaldi_tab")>-1;if(!Se&&(n||0===ye)&&!t&&!_e){Se=!0;try{const e=Me.appStateController.getCurrentPopupId();await me.showPopup(e=>Me.appStateController.setCurrentPopupId(e),e)}finally{Se=!1}}}const Qe=()=>{if(Me)return Me.metaMetricsController.updateTraits({[h.MetaMetricsUserTrait.InstallDateExt]:(new Date).toISOString().split("T")[0]}),void Me.metaMetricsController.addEventBeforeMetricsOptIn({category:h.MetaMetricsEventCategory.App,event:h.MetaMetricsEventName.AppInstalled,properties:{}});setTimeout(()=>{Qe()},500)};i.default.runtime.onUpdateAvailable.addListener(async function(){await Ie,o.default.debug("An update is available"),Me.appStateController.setIsUpdateAvailable(!0)});(async()=>{if(null!==i.default&&void 0!==i.default&&i.default.sidePanel)try{var e,t;await Ie;const n=(null===(e=Me)||void 0===e||null===(e=e.preferencesController)||void 0===e||null===(e=e.state)||void 0===e||null===(e=e.preferences)||void 0===e?void 0:e.useSidePanelAsDefault)??!1;null!==i.default&&void 0!==i.default&&null!==(t=i.default.sidePanel)&&void 0!==t&&t.setPanelBehavior&&await i.default.sidePanel.setPanelBehavior({openPanelOnActionClick:n})}catch(e){console.error("Error setting side panel behavior:",e)}})();(async()=>{if(null!==i.default&&void 0!==i.default&&i.default.sidePanel)try{var e;await Ie,null===(e=Me)||void 0===e||null===(e=e.controllerMessenger)||void 0===e||e.subscribe("PreferencesController:stateChange",e=>{var t,n;const r=(null==e||null===(t=e.preferences)||void 0===t?void 0:t.useSidePanelAsDefault)??!1;null!==i.default&&void 0!==i.default&&null!==(n=i.default.sidePanel)&&void 0!==n&&n.setPanelBehavior&&i.default.sidePanel.setPanelBehavior({openPanelOnActionClick:r}).catch(e=>console.error("Error updating panel behavior:",e))})}catch(e){console.error("Error setting up preference listener:",e)}})();async function Xe(e){i.default.tabs.onActivated.addListener(e=>{if(Me){const{tabId:t}=e,n=Te[t],r=Ce[t];n&&Me.permissionController.state.subjects[n]!==undefined&&He(n);const i=(0,M.getPartnerByOrigin)(r);i&&Me.permissionController.state.subjects[r]!==undefined&&Me.handleDefiReferral(i,t,Z.ReferralTriggerType.OnNavigateConnectedTab).catch(e=>{o.default.error(`Failed to handle ${i.name} referral after navigation to connected tab: `,e)})}});try{await Ke(e),ae.cleanUpMostRecentRetrievedState(),o.default.info("MetaMask initialization complete."),Pe()}catch(e){o.default.error(e),je(e)}}(async()=>{await Je()})(),i.default.tabs.onActivated.addListener(async({tabId:e})=>{if(await Ie,!Me)return{};try{const t=await i.default.tabs.get(e),{id:n,title:r,url:o,favIconUrl:s}=t;if(!o)return Me.appStateController.clearAppActiveTab(),{};const{origin:a,protocol:c,host:l,href:u}=new URL(o);if(!(0,B.isWebOrigin)(a))return Me.appStateController.clearAppActiveTab(),{};Me.appStateController.setAppActiveTab({id:n,title:r,origin:a,protocol:c,url:o,host:l,href:u,favIconUrl:s}),Me.subjectMetadataController.addSubjectMetadata({origin:a,name:r||l||a,iconUrl:s||null,subjectType:"website"})}catch(e){console.log("Error in tabs.onActivated listener:",e.message)}return{}}),i.default.tabs.onUpdated.addListener(async(e,t,n)=>{if(await Ie,!Me)return{};const r=t.url!==undefined,o="complete"===t.status;if(!r&&!o)return{};try{const t=n||await i.default.tabs.get(e),{id:s,title:a,url:c,favIconUrl:l}=t,u=Me.appStateController.state.appActiveTab,d=(null==u?void 0:u.id)===s;if(!c)return d&&Me.appStateController.clearAppActiveTab(),{};const{origin:f,protocol:p,host:h,href:g}=new URL(c);if(!f||"null"===f||f.startsWith("chrome-extension://")||f.startsWith("moz-extension://"))return d&&Me.appStateController.clearAppActiveTab(),{};let m=!1;try{m=(await i.default.tabs.query({active:!0,currentWindow:!0})).some(e=>e.id===s)}catch(e){m=d}(r||o)&&m&&(Me.appStateController.setAppActiveTab({id:s,title:a,origin:f,protocol:p,url:c,host:h,href:g,favIconUrl:l}),Me.subjectMetadataController.addSubjectMetadata({origin:f,name:a||h||f,iconUrl:l||null,subjectType:"website"}))}catch(e){console.log("Error in tabs.onUpdated listener:",e.message)}return{}}),Xe(null)}}},{package:"$root$",file:"app/scripts/background.js"}]],[9],{});