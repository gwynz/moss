import{a as N,c as D,d as F,g as G}from"./chunk-E6BRB5JE.js";import{a as f}from"./chunk-YJFETYQ5.js";import"./chunk-YBJT5I3W.js";import"./chunk-O62UD754.js";import"./chunk-5TPKSTZM.js";import"./chunk-RCSZHRTY.js";import{a as T}from"./chunk-JRIDFHIL.js";import"./chunk-TIP7QPIY.js";import"./chunk-LXU7PQBU.js";import"./chunk-B2GYAJTC.js";import"./chunk-SQO2VQAO.js";import"./chunk-TD2D2QPX.js";import"./chunk-W77K3WQV.js";import"./chunk-CNFJLKHQ.js";import{a as L}from"./chunk-5JHWCQWA.js";import"./chunk-ZWZ3CTXU.js";import"./chunk-M7OC3ILU.js";import"./chunk-JEI6X2RN.js";import"./chunk-7RBDLHGP.js";import"./chunk-GANXJ43B.js";import"./chunk-LKQVYUBB.js";import"./chunk-HBG63354.js";import"./chunk-35NHIGOT.js";import"./chunk-3HVMCTN3.js";import"./chunk-Y6OEKQLS.js";import"./chunk-MW77T3XA.js";import{d as _}from"./chunk-SH3HHM7U.js";import{a as u}from"./chunk-TH3FTOYH.js";import"./chunk-6CWVZ3BT.js";import"./chunk-KSMJOJJ2.js";import{a as S}from"./chunk-HZJULBCJ.js";import"./chunk-GHN74NOR.js";import"./chunk-WPJSEL3Z.js";import"./chunk-CR74PZMB.js";import"./chunk-Y2NDFGZZ.js";import"./chunk-KPWXSG5E.js";import"./chunk-D4DUYDHW.js";import"./chunk-5A2BEHTQ.js";import"./chunk-W2JNY544.js";import"./chunk-IFSDFPZB.js";import"./chunk-6ZHT5UCA.js";import"./chunk-WDCHYE5S.js";import{p as s,w as O}from"./chunk-GEV5XQQD.js";import"./chunk-ORUYTCTV.js";import"./chunk-T7JNUXFM.js";import"./chunk-KDJQAYSI.js";import"./chunk-QW27DYRA.js";import"./chunk-CQKN4YWV.js";import"./chunk-K3JNOO2M.js";import"./chunk-F4IQK4JV.js";import"./chunk-NCHS4J52.js";import"./chunk-NDCLJSYC.js";import"./chunk-WNIGPWPI.js";import"./chunk-JSNRVN5B.js";import"./chunk-MR3IPRFB.js";import"./chunk-OIVEKBUC.js";import"./chunk-EHX5ZB7Z.js";import{Dd as E,wd as B}from"./chunk-TCQHUZGC.js";import"./chunk-H52KJDU6.js";import"./chunk-RV6OM76W.js";import{C as P,D as $,s as e}from"./chunk-56MPBIEL.js";import"./chunk-OWVMO73E.js";import"./chunk-SHY2LMMT.js";import{f as v}from"./chunk-SEWPLVP7.js";import{a as H}from"./chunk-CNVMLXTH.js";import"./chunk-4QXPQWJO.js";import"./chunk-FOF7ARFP.js";import"./chunk-RHRF26FB.js";import"./chunk-7TSTJFQS.js";import"./chunk-FFQ56KY4.js";import{f as A,h as n,n as i}from"./chunk-JORLGFWZ.js";n();i();var t=A(H());n();i();var a=A(H());n();i();var I=s(u)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  transition: background-color 200ms ease;
  background-color: ${o=>o.$isExpanded?e.colors.legacy.black:e.colors.legacy.bgButton} !important;
  :hover {
    background-color: ${e.colors.legacy.gray};
    svg {
      fill: white;
    }
  }
  svg {
    fill: ${o=>o.$isExpanded?"white":e.colors.legacy.textSecondary};
    transition: fill 200ms ease;
    position: relative;
    ${o=>o.top?`top: ${o.top}px;`:""}
    ${o=>o.right?`right: ${o.right}px;`:""}
  }
`;var V=s(L).attrs({justify:"space-between"})`
  background-color: ${e.colors.legacy.bgWallet};
  padding: 10px 16px;
  border-bottom: 1px solid ${e.colors.legacy.borderSecondary};
  height: 46px;
  opacity: ${o=>o.opacity??"1"};
`,q=s.div`
  display: flex;
  margin-left: 10px;
  > * {
    margin-right: 10px;
  }
`,M=s.div`
  width: 24px;
  height: 24px;
`,W=({onBackClick:o,totalSteps:c,currentStepIndex:l,isHidden:d,showBackButtonOnFirstStep:r,showBackButton:g=!0})=>a.default.createElement(V,{opacity:d?0:1},g&&(r||l!==0)?a.default.createElement(I,{right:1,onClick:o},a.default.createElement(O,null)):a.default.createElement(M,null),a.default.createElement(q,null,v(c).map(p=>{let m=p<=l?e.colors.legacy.accentPrimary:e.colors.legacy.bgButton;return a.default.createElement(u,{key:p,diameter:12,color:m})})),a.default.createElement(M,null));n();i();var K=()=>{let{mutateAsync:o}=E(),{hardwareStepStack:c,pushStep:l,popStep:d,currentStep:r,setOnConnectHardwareAccounts:g,setOnConnectHardwareDone:y,setExistingAccounts:p}=N(),{data:m=[],isFetched:x,isError:k}=B(),C=_(c,(h,U)=>h?.length===U.length),X=c.length>(C??[]).length,b=C?.length===0,j={initial:{x:b?0:X?150:-150,opacity:b?1:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.2}},J=(0,t.useCallback)(()=>{r()?.props.preventBack||(r()?.props.onBackCallback&&r()?.props.onBackCallback?.(),d())},[r,d]);return T(()=>{g(async h=>{await o(h),await S.set(f,!await S.get(f))}),y(()=>self.close()),l(t.default.createElement(G,null))},c.length===0),(0,t.useEffect)(()=>{p({data:m,isFetched:x,isError:k})},[m,x,k,p]),t.default.createElement(D,null,t.default.createElement(W,{totalSteps:3,onBackClick:J,showBackButton:!r()?.props.preventBack,currentStepIndex:c.length-1}),t.default.createElement($,{mode:"wait"},t.default.createElement(P.div,{style:{display:"flex",flexGrow:1},key:`${c.length}_${C?.length}`,...j},t.default.createElement(F,null,r()))))},Po=K;export{Po as default};
//# sourceMappingURL=SettingsConnectHardware-DE6OEBQQ.js.map
