import{a as s,c as f}from"./chunk-2SFQEQZ5.js";import{a as T}from"./chunk-YBJT5I3W.js";import{Ka as b,Z as I}from"./chunk-LXU7PQBU.js";import"./chunk-B2GYAJTC.js";import"./chunk-SQO2VQAO.js";import"./chunk-TD2D2QPX.js";import"./chunk-W77K3WQV.js";import"./chunk-CNFJLKHQ.js";import"./chunk-5JHWCQWA.js";import"./chunk-ZWZ3CTXU.js";import"./chunk-M7OC3ILU.js";import"./chunk-JEI6X2RN.js";import"./chunk-7RBDLHGP.js";import"./chunk-GANXJ43B.js";import"./chunk-LKQVYUBB.js";import"./chunk-HBG63354.js";import"./chunk-35NHIGOT.js";import"./chunk-3HVMCTN3.js";import"./chunk-Y6OEKQLS.js";import"./chunk-MW77T3XA.js";import"./chunk-SH3HHM7U.js";import"./chunk-TH3FTOYH.js";import"./chunk-6CWVZ3BT.js";import"./chunk-GHN74NOR.js";import"./chunk-WPJSEL3Z.js";import"./chunk-CR74PZMB.js";import"./chunk-KPWXSG5E.js";import"./chunk-D4DUYDHW.js";import"./chunk-5A2BEHTQ.js";import"./chunk-W2JNY544.js";import"./chunk-IFSDFPZB.js";import"./chunk-6ZHT5UCA.js";import{c as C,d as h}from"./chunk-WDCHYE5S.js";import{ib as l,p as o}from"./chunk-GEV5XQQD.js";import"./chunk-ORUYTCTV.js";import"./chunk-T7JNUXFM.js";import"./chunk-KDJQAYSI.js";import"./chunk-QW27DYRA.js";import"./chunk-CQKN4YWV.js";import"./chunk-K3JNOO2M.js";import"./chunk-F4IQK4JV.js";import"./chunk-NCHS4J52.js";import"./chunk-NDCLJSYC.js";import"./chunk-WNIGPWPI.js";import"./chunk-JSNRVN5B.js";import"./chunk-MR3IPRFB.js";import"./chunk-OIVEKBUC.js";import"./chunk-EHX5ZB7Z.js";import{Ya as c,eb as y,tb as x}from"./chunk-TCQHUZGC.js";import"./chunk-H52KJDU6.js";import"./chunk-RV6OM76W.js";import{j as g,s as a,w as B}from"./chunk-56MPBIEL.js";import"./chunk-OWVMO73E.js";import"./chunk-SHY2LMMT.js";import"./chunk-SEWPLVP7.js";import{a as M}from"./chunk-CNVMLXTH.js";import"./chunk-4QXPQWJO.js";import"./chunk-FOF7ARFP.js";import"./chunk-RHRF26FB.js";import"./chunk-7TSTJFQS.js";import"./chunk-FFQ56KY4.js";import{f as v,h as u,n as d}from"./chunk-JORLGFWZ.js";u();d();var n=v(M());var P=o.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
`,D=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
`,S=o(l).attrs({size:28,weight:500,color:a.colors.legacy.textPrimary})`
  margin: 16px;
`,V=o(l).attrs({size:14,weight:400,lineHeight:17,color:a.colors.legacy.textSecondary})`
  max-width: 275px;

  span {
    color: white;
  }
`,$=({networkId:t,token:r})=>{let{t:i}=g(),{handleHideModalVisibility:m}=b(),p=(0,n.useCallback)(()=>{m("insufficientBalance")},[m]),w=t&&y(x(c.getChainID(t))),{canBuy:k,openBuy:F}=I({caip19:w||"",context:"modal",analyticsEvent:"fiatOnrampFromInsufficientBalance"}),e=t?c.getTokenSymbol(t):i("tokens");return n.default.createElement(P,null,n.default.createElement("div",null,n.default.createElement(D,null,n.default.createElement(T,{type:"failure",backgroundWidth:75}),n.default.createElement(S,null,i("insufficientBalancePrimaryText",{tokenSymbol:e})),n.default.createElement(V,null,i("insufficientBalanceSecondaryText",{tokenSymbol:e})),r?n.default.createElement(B,{borderRadius:8,gap:1,marginTop:32,width:"100%"},n.default.createElement(s,{label:i("insufficientBalanceRemaining")},n.default.createElement(f,{color:a.colors.legacy.accentAlert},`${r.balance} ${e}`)),n.default.createElement(s,{label:i("insufficientBalanceRequired")},n.default.createElement(f,null,`${r.required} ${e}`))):null)),k?n.default.createElement(h,{primaryText:i("buyAssetInterpolated",{tokenSymbol:e}),onPrimaryClicked:F,secondaryText:i("commandCancel"),onSecondaryClicked:p}):n.default.createElement(C,{onClick:p},i("commandCancel")))},L=$;export{$ as InsufficientBalance,L as default};
//# sourceMappingURL=InsufficientBalance-R25G4XQK.js.map
