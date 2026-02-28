import{a as U}from"./chunk-QOCAIKBU.js";import{c as k,g as b,l as P,n as H,o as W}from"./chunk-B2GYAJTC.js";import"./chunk-SQO2VQAO.js";import"./chunk-W77K3WQV.js";import"./chunk-5JHWCQWA.js";import{a as V,b as F}from"./chunk-ZWZ3CTXU.js";import{a as p,b as f,e as z}from"./chunk-M7OC3ILU.js";import"./chunk-JEI6X2RN.js";import"./chunk-HBG63354.js";import{g as L}from"./chunk-3HVMCTN3.js";import"./chunk-MW77T3XA.js";import{g as S}from"./chunk-SH3HHM7U.js";import"./chunk-TH3FTOYH.js";import{a as I}from"./chunk-6CWVZ3BT.js";import"./chunk-WPJSEL3Z.js";import"./chunk-CR74PZMB.js";import"./chunk-D4DUYDHW.js";import"./chunk-W2JNY544.js";import"./chunk-IFSDFPZB.js";import{c as T}from"./chunk-WDCHYE5S.js";import{ib as l,p as i}from"./chunk-GEV5XQQD.js";import"./chunk-QW27DYRA.js";import{B as x,z as w}from"./chunk-K3JNOO2M.js";import"./chunk-F4IQK4JV.js";import"./chunk-NDCLJSYC.js";import"./chunk-WNIGPWPI.js";import"./chunk-JSNRVN5B.js";import"./chunk-MR3IPRFB.js";import"./chunk-OIVEKBUC.js";import"./chunk-EHX5ZB7Z.js";import{$b as A}from"./chunk-TCQHUZGC.js";import"./chunk-H52KJDU6.js";import"./chunk-RV6OM76W.js";import{j as s,pa as v,s as d,w as C}from"./chunk-56MPBIEL.js";import"./chunk-OWVMO73E.js";import"./chunk-SHY2LMMT.js";import{Y as y,v as h}from"./chunk-SEWPLVP7.js";import{a as O}from"./chunk-CNVMLXTH.js";import"./chunk-4QXPQWJO.js";import"./chunk-FOF7ARFP.js";import"./chunk-7TSTJFQS.js";import"./chunk-FFQ56KY4.js";import{f as j,h as u,n as g}from"./chunk-JORLGFWZ.js";u();g();var t=j(O());var G=o=>{let{t:e}=s(),{searchResults:r,isLoading:n,hasError:a,isSuccess:m,showApy:D,onRefetch:B,setSearchTerm:M}=w(),c=(0,t.useRef)();return(0,t.useEffect)(()=>{setTimeout(()=>c.current?.focus(),200)},[]),t.default.createElement(W,{isLoading:n},a?t.default.createElement(k,{title:e("errorAndOfflineSomethingWentWrong"),description:e("validatorListErrorFetching"),refetch:B}):t.default.createElement(Q,null,t.default.createElement(X,null,t.default.createElement(L,{ref:c,tabIndex:0,placeholder:e("commandSearch"),onChange:_=>M(_.currentTarget.value),maxLength:50})),m&&r.length?t.default.createElement(q,{data:r,showApy:D}):t.default.createElement(K,null)),t.default.createElement(I,null,t.default.createElement(T,{onClick:o.onClose},e("commandCancel"))))},Lt=G,K=()=>{let{t:o}=s();return t.default.createElement(C,{padding:"screen"},t.default.createElement(l,{size:16,color:d.colors.legacy.textSecondary},o("validatorListNoResults")))},N=84,q=o=>{let{data:e,showApy:r}=o;return t.default.createElement(t.default.Fragment,null,t.default.createElement(Z,{showApy:r}),t.default.createElement(P,null,t.default.createElement(v,null,({height:n,width:a})=>t.default.createElement(b,{height:n,itemCount:e.length,itemData:e,itemSize:N,width:a},J))))},J=({index:o,style:e,data:r})=>{let n=r[o];return t.default.createElement("div",{key:n.identityPubkey,style:e},t.default.createElement($,{voteAccountPubkey:n.voteAccountPubkey,formattedPercentValue:n.totalApy?y(n.totalApy/100,{format:"0.00%"}):"",activatedStake:n.activatedStake,name:n.info?.name,keybaseUsername:n.info?.keybaseUsername,iconUrl:n.info?.iconUrl}))},Q=i.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`,X=i.div`
  position: relative;
`,Y=i.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`,E=i(z).attrs(()=>({iconSize:12,lineHeight:19,fontWeight:500,fontSize:16}))``,Z=({showApy:o})=>{let{t:e}=s();return t.default.createElement(Y,null,t.default.createElement(E,{tooltipAlignment:"bottomLeft",info:t.default.createElement(f,null,t.default.createElement(p,null,e("validatorInfoDescription")))},e("validatorInfoTooltip")),o?t.default.createElement(E,{tooltipAlignment:"bottomRight",info:t.default.createElement(f,null,t.default.createElement(p,null,e("validatorApyInfoDescription")))},e("validatorApyInfoTooltip")):null)},$=o=>{let{pushDetailView:e,popDetailView:r}=S(),n=(0,t.useRef)(null),{data:a}=x(o.keybaseUsername),m=o.name??o.keybaseUsername??A(o.voteAccountPubkey);return t.default.createElement(R,{ref:n,onClick:()=>{e(t.default.createElement(U,{voteAccountPubkey:o.voteAccountPubkey,onClose:r}))}},t.default.createElement(tt,{iconUrl:o.iconUrl??a}),t.default.createElement(ot,null,t.default.createElement(et,null,t.default.createElement(l,{size:16,weight:600,lineHeight:19,textAlign:"left",noWrap:!0},h(m,20)),t.default.createElement(l,{size:14,color:d.colors.legacy.textSecondary,lineHeight:19,textAlign:"left",noWrap:!0},t.default.createElement(F,{format:"0,0"},o.activatedStake))),t.default.createElement(l,{size:14,weight:400,lineHeight:19,textAlign:"left",noWrap:!0},o.formattedPercentValue)))},R=i(H)`
  display: grid;
  grid-template-columns: 44px auto;
  column-gap: 10px;
`,tt=i(V).attrs({width:44})``,ot=i.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: space-between;
`,et=i.div`
  display: flex;
  flex-direction: column;
`;export{G as ValidatorListPage,Lt as default};
//# sourceMappingURL=ValidatorListPage-PAYWGMR4.js.map
