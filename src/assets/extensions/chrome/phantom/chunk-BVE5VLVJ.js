import{c as O}from"./chunk-4Q7PWTAO.js";import{C as _,K as E,j as b,q as S}from"./chunk-GA7OWDUC.js";import{b as l,d as p}from"./chunk-6JMEWALM.js";import{i as k}from"./chunk-4GL3WODX.js";import{x}from"./chunk-IOXJCRJI.js";import{a as m}from"./chunk-ZGQB4B3Z.js";import{a as R}from"./chunk-OJPBMZQC.js";import{Gc as a,Hc as c,Kc as d,_c as v}from"./chunk-LPV5DSV2.js";import{Ba as u,H as y,I as g}from"./chunk-JYKVQ4NC.js";import{a as i,i as n,j as s,n as o}from"./chunk-TSHWMJEM.js";n();o();var z=new x(O({isWriter:!1}),{fetch(e,t){return v.api().bearer(!0).fetch(e,t)}});n();o();var f,P=new R,L=i(()=>{if(s.ENVIRONMENT!=="e2e")return null;let e=globalThis.__PHANTOM_E2E_SEEDLESS_JUICEBOX_CLIENT__;return e||null},"getE2EJuiceboxClientOverride"),N=i(async()=>{let e=L();return e||f||(f=new S(new E),f)},"juiceboxClient"),j={storage:P,authRepository:k,juiceboxClient:N},$=i(()=>{if(s.ENVIRONMENT!=="e2e")return null;let e=globalThis.__PHANTOM_E2E_SEEDLESS_REPOSITORY_OVERRIDES__;return e||null},"getE2ESeedlessRepositoryOverrides"),w=_(j),h={...w,recover:i(async e=>{let t=$()?.recover;return t?await t(e):await w.recover(e)},"recover")};h.subscribe(b.RotationResult,({type:e,didRotate:t})=>{let r=`Se*dless Bundle Rotation Result: ${e}, didRotate: ${t}`;d.addBreadcrumb(c.Seedless,r,a.Info),m.capture("seedlessBundleRotationResult",{data:{type:e,didRotate:t}})});h.subscribe(b.RecoverResult,({type:e,reason:t})=>{let r=`Se*dless Bundle Recover Result: ${e}`;t&&(r+=`, reason: ${t}`),d.addBreadcrumb(c.Seedless,r,a.Info),m.capture("seedlessBundleRecoverResult",{data:{type:e,reason:t}})});h.subscribe(b.BackupResult,({type:e,didBackup:t})=>{let r=`Se*dless Bundle Backup Result: ${e}, didBackup: ${t}`;d.addBreadcrumb(c.Seedless,r,a.Info),m.capture("seedlessBundleBackupResult",{data:{type:e,didBackup:t}})});n();o();n();o();var T=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},q=l(C||(C=T([`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`],[`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`]))),oe=p(I||(I=T(["",""],["",""])),q),B=q,C,I;var J=l`
  ::-webkit-scrollbar {
    background: ${u.colors.legacy.areaBase};
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${u.colors.legacy.elementBase};
    border-radius: 8px;
  }
`,M=l`
  ::-webkit-scrollbar {
    display: none;
  }
  * {
    scrollbar-width: none; /* Also needed to disable scrollbar Firefox */
  }
`,ue=p`
    ${B}

    body, html, * {
        box-sizing: border-box;
        font-family: 'Inter', 'Roboto', Arial;
        user-select: none;
        color: currentColor;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeSpeed;
        -webkit-font-smoothing: antialiased;
    }
    input, textarea {
        -webkit-user-select: text;
        -khtml-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        user-select: text;
    }
    body {
        color: ${u.colors.legacy.textBase};
        background: ${e=>e.backgroundColor};
        min-height: 100vh;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    *:focus, *:focus-within {
        outline-color: transparent !important;
        outline-style: none !important;
        outline-width: 0px !important;
    }

    ${y||g?M:J}
`;export{z as a,h as b,ue as c};
//# sourceMappingURL=chunk-BVE5VLVJ.js.map
