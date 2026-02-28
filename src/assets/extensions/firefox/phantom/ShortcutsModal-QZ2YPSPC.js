import{a as V,c as A}from"./chunk-QX3C2NCH.js";import{a as O}from"./chunk-DIJN7ZGQ.js";import{c as F}from"./chunk-WDCHYE5S.js";import{Da as I,Ea as g,Fa as p,Ga as S,Ha as f,Ia as x,Ja as k,Ka as y,La as w,Ma as L,Na as T,Oa as v,Pa as C,Qa as P,Ra as M,Sa as b,Ta as D,Ua as a,Va as W,ib as G,p as o}from"./chunk-GEV5XQQD.js";import{c as d}from"./chunk-WNIGPWPI.js";import"./chunk-JSNRVN5B.js";import"./chunk-EHX5ZB7Z.js";import"./chunk-TCQHUZGC.js";import"./chunk-H52KJDU6.js";import"./chunk-RV6OM76W.js";import{e as l,s as u}from"./chunk-56MPBIEL.js";import"./chunk-OWVMO73E.js";import"./chunk-SHY2LMMT.js";import"./chunk-SEWPLVP7.js";import{a as h}from"./chunk-CNVMLXTH.js";import"./chunk-4QXPQWJO.js";import"./chunk-FOF7ARFP.js";import"./chunk-7TSTJFQS.js";import"./chunk-FFQ56KY4.js";import{f as m,h as i,n as c}from"./chunk-JORLGFWZ.js";i();c();var t=m(h());i();c();var B=m(h());var E={[O]:a,vote:w,"vote-2":L,stake:T,"stake-2":v,view:C,chat:P,tip:M,mint:b,"mint-2":D,"generic-link":a,"generic-add":W,discord:I,twitter:g,"twitter-2":p,x:p,instagram:S,telegram:f,leaderboard:y,gaming:x,"gaming-2":k};function N({icon:s,...n}){let r=E[s];return B.default.createElement(r,{...n})}var H=o.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: -16px; // compensate for generic screen margins
`,Y=o.footer`
  margin-top: auto;
  flex-shrink: 0;
  min-height: 16px;
`,_=o.div`
  overflow: scroll;
`,j=o.ul`
  flex: 1;
  max-height: 350px;
  padding-top: 16px; // compensate for the override of the generic screen margins
`,q=o.li``,J=o.div`
  display: flex;
  align-items: center;
  padding: 6px 12px;
`,U=o(G)`
  text-align: left;
`;U.defaultProps={margin:"12px 0px"};function K({shortcuts:s,...n}){let r=(0,t.useMemo)(()=>n.hostname.includes("//")?new URL(n.hostname).hostname:n.hostname,[n.hostname]);return t.default.createElement(H,null,t.default.createElement(_,null,t.default.createElement(j,null,s.map(e=>t.default.createElement(q,{key:e.uri},t.default.createElement(F,{type:"button",onClick:()=>{d.capture("walletShortcutsLinkOpenClick",V(n,e)),self.open(e.uri)},theme:"text",paddingY:6},t.default.createElement(J,null,t.default.createElement(N,{icon:A(e.uri,e.icon)})),e.label))))),t.default.createElement(Y,null,r&&t.default.createElement(U,{color:u.colors.legacy.textSecondary,size:14,lineHeight:17},l("shortcutsWarningDescription",{url:r}))))}var pt=K;export{K as ShortcutsModal,pt as default};
//# sourceMappingURL=ShortcutsModal-QZ2YPSPC.js.map
