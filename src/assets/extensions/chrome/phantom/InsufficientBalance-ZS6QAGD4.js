import{a as f,c as m}from"./chunk-DBX43DCB.js";import{a as k}from"./chunk-55JJWESI.js";import"./chunk-62SZ2XSE.js";import{B as w,U as F}from"./chunk-YTLZ2SGV.js";import"./chunk-IRPDX252.js";import"./chunk-U5BHRVQL.js";import"./chunk-5S2LR6TU.js";import"./chunk-UN5DVVHZ.js";import"./chunk-K3AOJOH2.js";import"./chunk-QNVGN5HE.js";import"./chunk-KYC3TN2Q.js";import"./chunk-KECH4XEC.js";import"./chunk-RKISZW47.js";import"./chunk-OP3E2FEL.js";import"./chunk-D6ZWMAKN.js";import"./chunk-OHN4H3IY.js";import"./chunk-YEWLBR7H.js";import"./chunk-HAR363KY.js";import"./chunk-YE5I2OIJ.js";import"./chunk-XCWTSWVJ.js";import"./chunk-OEKZJ4Z7.js";import"./chunk-IAL2BZAA.js";import"./chunk-M6UNEOVM.js";import"./chunk-Y7HDHZJX.js";import"./chunk-DQLUBVF4.js";import"./chunk-RHCYAVA3.js";import"./chunk-3ZRYSYYB.js";import"./chunk-IP6N33CZ.js";import"./chunk-S2IXR5HZ.js";import"./chunk-GA7OWDUC.js";import"./chunk-EOII3ZM4.js";import"./chunk-4AQPJCXC.js";import"./chunk-NFWY65KR.js";import"./chunk-KUVQSLSD.js";import"./chunk-IEGIKGVV.js";import{c as T,d as b}from"./chunk-H3HVEJML.js";import{_a as s}from"./chunk-NDIBTKLE.js";import{c as o}from"./chunk-6JMEWALM.js";import"./chunk-5NEPC5CX.js";import"./chunk-JQE54VLJ.js";import"./chunk-KWNEQJE2.js";import"./chunk-HGG2EQ5O.js";import"./chunk-PQUTVVRL.js";import"./chunk-IOXJCRJI.js";import"./chunk-XGLSOW44.js";import"./chunk-56GZZQJU.js";import"./chunk-QLEUWUCH.js";import"./chunk-ZGQB4B3Z.js";import"./chunk-OJPBMZQC.js";import"./chunk-FLYQWZR6.js";import"./chunk-UPPQC44E.js";import"./chunk-CYENH7PC.js";import"./chunk-F236ETGH.js";import"./chunk-QF7OLC35.js";import{Kb as l,Rb as x,ec as B}from"./chunk-LPV5DSV2.js";import"./chunk-NEE4FZIK.js";import"./chunk-BYU664DD.js";import{Ba as a,L as P,La as I,M as h,Y as C}from"./chunk-JYKVQ4NC.js";import"./chunk-U7OZEJ4F.js";import"./chunk-ZRGHR2IN.js";import{a as d,g as r,i as y,n as g}from"./chunk-TSHWMJEM.js";y();g();var v=r(P(),1);var e=r(h(),1),N=o.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
`,S=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
`,V=o(s).attrs({size:28,weight:500,color:a.colors.legacy.textBase})`
  margin: 16px;
`,$=o(s).attrs({size:14,weight:400,lineHeight:17,color:a.colors.legacy.textDiminished})`
  max-width: 275px;

  span {
    color: white;
  }
`,q=d(({networkId:t,token:c})=>{let{t:n}=C(),{handleHideModalVisibility:p}=F(),u=(0,v.useCallback)(()=>{p("insufficientBalance")},[p]),R=t&&x(B(l.getChainID(t))),{canBuy:D,openBuy:M}=w({caip19:R||"",context:"modal",analyticsEvent:"fiatOnrampFromInsufficientBalance"}),i=t?l.getTokenSymbol(t):n("tokens");return(0,e.jsxs)(N,{children:[(0,e.jsx)("div",{children:(0,e.jsxs)(S,{children:[(0,e.jsx)(k,{type:"failure",backgroundWidth:75}),(0,e.jsx)(V,{children:n("insufficientBalancePrimaryText",{tokenSymbol:i})}),(0,e.jsx)($,{children:n("insufficientBalanceSecondaryText",{tokenSymbol:i})}),c?(0,e.jsxs)(I,{borderRadius:8,gap:1,marginTop:32,width:"100%",children:[(0,e.jsx)(f,{label:n("insufficientBalanceRemaining"),children:(0,e.jsx)(m,{color:a.colors.legacy.spotNegative,children:`${c.balance} ${i}`})}),(0,e.jsx)(f,{label:n("insufficientBalanceRequired"),children:(0,e.jsx)(m,{children:`${c.required} ${i}`})})]}):null]})}),D?(0,e.jsx)(b,{primaryText:n("buyAssetInterpolated",{tokenSymbol:i}),onPrimaryClicked:M,secondaryText:n("commandCancel"),onSecondaryClicked:u}):(0,e.jsx)(T,{onClick:u,children:n("commandCancel")})]})},"InsufficientBalance"),X=q;export{q as InsufficientBalance,X as default};
//# sourceMappingURL=InsufficientBalance-ZS6QAGD4.js.map
