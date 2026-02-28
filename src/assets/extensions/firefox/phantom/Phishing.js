import{a as C}from"./chunk-D4DUYDHW.js";import{a as N}from"./chunk-T7X4B47W.js";import"./chunk-5A2BEHTQ.js";import{a as P}from"./chunk-W2JNY544.js";import"./chunk-IFSDFPZB.js";import{a as U}from"./chunk-6ZHT5UCA.js";import"./chunk-WDCHYE5S.js";import{d as T,ib as l,m as v,p as a,t as I}from"./chunk-GEV5XQQD.js";import{a as z}from"./chunk-NIKSJXJN.js";import{c as L}from"./chunk-NESLF4F6.js";import{U as w,X as y}from"./chunk-ORUYTCTV.js";import"./chunk-T7JNUXFM.js";import"./chunk-KDJQAYSI.js";import"./chunk-QW27DYRA.js";import"./chunk-CQKN4YWV.js";import"./chunk-K3JNOO2M.js";import"./chunk-F4IQK4JV.js";import"./chunk-NCHS4J52.js";import"./chunk-NDCLJSYC.js";import{a as B}from"./chunk-WNIGPWPI.js";import{a as W}from"./chunk-JSNRVN5B.js";import"./chunk-MR3IPRFB.js";import"./chunk-OIVEKBUC.js";import"./chunk-EHX5ZB7Z.js";import"./chunk-TCQHUZGC.js";import"./chunk-H52KJDU6.js";import"./chunk-RV6OM76W.js";import{j as x,s as p}from"./chunk-56MPBIEL.js";import"./chunk-OWVMO73E.js";import{A as S}from"./chunk-SHY2LMMT.js";import"./chunk-SEWPLVP7.js";import{a as k}from"./chunk-CNVMLXTH.js";import"./chunk-4QXPQWJO.js";import"./chunk-FOF7ARFP.js";import"./chunk-RHRF26FB.js";import"./chunk-7TSTJFQS.js";import"./chunk-FFQ56KY4.js";import{f as c,h as n,n as s}from"./chunk-JORLGFWZ.js";n();s();var O=c(k());var J=c(z());n();s();var e=c(k());n();s();var r=c(k());var m=p.colors.legacy.accentAlert,A=a.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${p.colors.brand.white};
  padding: clamp(24px, 16vh, 256px) 24px;
  box-sizing: border-box;
`,K=a.div`
  margin-bottom: 24px;
  padding-bottom: 8vh;
`,G=a.div`
  max-width: 100ch;
  margin: auto;

  * {
    text-align: left;
  }
`,F=a.a`
  text-decoration: underline;
  color: ${m};
`,d=new B,_=({origin:o,subdomain:t})=>{let{t:g}=x(),u=o?y(o):"",M=o??"",f=new URL(M).hostname,h=t==="true"?f:u,$=async()=>{if(t==="true"){let b=await d.get("userWhitelistedSubdomains"),i=JSON.parse(`${b}`);i?i.push(f):i=[f],i=[...new Set(i)],d.set("userWhitelistedSubdomains",JSON.stringify(i))}else{let b=await d.get("userWhitelistedOrigins"),i=JSON.parse(`${b}`);i?i.push(u):i=[u],i=[...new Set(i)],d.set("userWhitelistedOrigins",JSON.stringify(i))}self.location.href=o};return r.default.createElement(A,null,r.default.createElement(G,null,r.default.createElement(K,null,r.default.createElement(I,{width:128,fill:p.colors.brand.white})),r.default.createElement(l,{size:30,color:m,weight:"600"},g("blocklistOriginDomainIsBlocked",{domainName:h||g("blocklistOriginThisDomain")})),r.default.createElement(l,{color:m},g("blocklistOriginSiteIsMalicious")),r.default.createElement(l,{color:m},r.default.createElement(C,{i18nKey:"blocklistOriginCommunityDatabaseInterpolated"},"This site has been flagged as part of a",r.default.createElement(F,{href:w,rel:"noopener",target:"_blank"},"community-maintained database"),"of known phishing websites and scams. If you believe the site has been flagged in error,",r.default.createElement(F,{href:w,rel:"noopener",target:"_blank"},"please file an issue"),".")),h?r.default.createElement(l,{color:m,onClick:$,hoverUnderline:!0},g("blocklistOriginIgnoreWarning",{domainName:o})):r.default.createElement(r.default.Fragment,null)))};var H=()=>{let o;try{o=new URLSearchParams(self.location.search).get("origin")||"",new URL(o)}catch{o=""}return o},j=()=>new URLSearchParams(self.location.search).get("subdomain")||"",E=()=>{let o=(0,e.useMemo)(H,[]),t=(0,e.useMemo)(j,[]);return e.default.createElement(T,{future:{v7_startTransition:!0}},e.default.createElement(P,null,e.default.createElement(_,{origin:o,subdomain:t})))};W();S.init({provider:N});L();var q=document.getElementById("root"),Q=(0,J.createRoot)(q);Q.render(O.default.createElement(v,{theme:U},O.default.createElement(E,null)));
//# sourceMappingURL=Phishing.js.map
