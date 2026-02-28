import{a as N,c as F,d as G,g as I}from"./chunk-KRKWWWJ7.js";import{a as x}from"./chunk-5K662LVN.js";import"./chunk-55JJWESI.js";import{a as D}from"./chunk-FJH4AF2C.js";import"./chunk-IQPJ7S4P.js";import"./chunk-ONUSXHBV.js";import"./chunk-JTNITLAW.js";import"./chunk-6J6ODJTY.js";import"./chunk-YTLZ2SGV.js";import"./chunk-IRPDX252.js";import"./chunk-U5BHRVQL.js";import"./chunk-5S2LR6TU.js";import"./chunk-UN5DVVHZ.js";import"./chunk-K3AOJOH2.js";import"./chunk-QNVGN5HE.js";import"./chunk-KYC3TN2Q.js";import"./chunk-KECH4XEC.js";import"./chunk-RKISZW47.js";import"./chunk-OP3E2FEL.js";import{a as L}from"./chunk-D6ZWMAKN.js";import"./chunk-OHN4H3IY.js";import"./chunk-YEWLBR7H.js";import"./chunk-HAR363KY.js";import"./chunk-YE5I2OIJ.js";import"./chunk-XCWTSWVJ.js";import"./chunk-OEKZJ4Z7.js";import"./chunk-IAL2BZAA.js";import{a as C}from"./chunk-M6UNEOVM.js";import"./chunk-Y7HDHZJX.js";import"./chunk-AB2ZEUFU.js";import"./chunk-DQLUBVF4.js";import"./chunk-RHCYAVA3.js";import"./chunk-3ZRYSYYB.js";import"./chunk-IP6N33CZ.js";import"./chunk-S2IXR5HZ.js";import"./chunk-3VSBLIGZ.js";import"./chunk-TWE3NBCC.js";import"./chunk-GA7OWDUC.js";import"./chunk-EOII3ZM4.js";import"./chunk-4AQPJCXC.js";import"./chunk-NFWY65KR.js";import"./chunk-KUVQSLSD.js";import"./chunk-IEGIKGVV.js";import"./chunk-H3HVEJML.js";import{q as _}from"./chunk-NDIBTKLE.js";import{c as s}from"./chunk-6JMEWALM.js";import{a as y}from"./chunk-QQJPKFTO.js";import"./chunk-5NEPC5CX.js";import"./chunk-JQE54VLJ.js";import"./chunk-KWNEQJE2.js";import"./chunk-HGG2EQ5O.js";import"./chunk-PQUTVVRL.js";import"./chunk-IOXJCRJI.js";import"./chunk-XGLSOW44.js";import"./chunk-56GZZQJU.js";import"./chunk-QLEUWUCH.js";import"./chunk-ZGQB4B3Z.js";import"./chunk-OJPBMZQC.js";import"./chunk-FLYQWZR6.js";import"./chunk-UPPQC44E.js";import"./chunk-CYENH7PC.js";import{Bb as O,ub as $}from"./chunk-F236ETGH.js";import"./chunk-QF7OLC35.js";import{Le as P,ue as E}from"./chunk-LPV5DSV2.js";import"./chunk-NEE4FZIK.js";import"./chunk-BYU664DD.js";import{$a as T,Ba as e,L as z,M as u,Xa as R}from"./chunk-JYKVQ4NC.js";import"./chunk-U7OZEJ4F.js";import"./chunk-ZRGHR2IN.js";import{a as g,g as l,i as n,n as i}from"./chunk-TSHWMJEM.js";n();i();var f=l(z(),1);n();i();n();i();var M=s(C)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  transition: background-color 200ms ease;
  background-color: ${t=>t.$isExpanded?e.colors.legacy.black:e.colors.legacy.elementAccent} !important;
  :hover {
    background-color: ${e.colors.legacy.gray};
    svg {
      fill: white;
    }
  }
  svg {
    fill: ${t=>t.$isExpanded?"white":e.colors.legacy.textDiminished};
    transition: fill 200ms ease;
    position: relative;
    ${t=>t.top?`top: ${t.top}px;`:""}
    ${t=>t.right?`right: ${t.right}px;`:""}
  }
`;var o=l(u(),1),K=s(L).attrs({justify:"space-between"})`
  background-color: ${e.colors.legacy.areaBase};
  padding: 10px 16px;
  border-bottom: 1px solid ${e.colors.legacy.borderDiminished};
  height: 46px;
  opacity: ${t=>t.opacity??"1"};
`,Q=s.div`
  display: flex;
  margin-left: 10px;
  > * {
    margin-right: 10px;
  }
`,W=s.div`
  width: 24px;
  height: 24px;
`,X=g(({onBackClick:t,totalSteps:c,currentStepIndex:d,isHidden:m,showBackButtonOnFirstStep:r,showBackButton:S=!0})=>(0,o.jsxs)(K,{opacity:m?0:1,children:[S&&(r||d!==0)?(0,o.jsx)(M,{right:1,onClick:t,children:(0,o.jsx)(_,{})}):(0,o.jsx)(W,{}),(0,o.jsx)(Q,{children:E(c).map(p=>{let h=p<=d?e.colors.legacy.spotBase:e.colors.legacy.elementAccent;return(0,o.jsx)(C,{diameter:12,color:h},p)})}),(0,o.jsx)(W,{})]}),"StepHeader");n();i();var a=l(u(),1),Z=g(()=>{let{mutateAsync:t}=O(),{hardwareStepStack:c,pushStep:d,popStep:m,currentStep:r,setOnConnectHardwareAccounts:S,setOnConnectHardwareDone:b,setExistingAccounts:p}=N(),{data:h=[],isFetched:H,isError:v}=$(),w=P(c,(k,q)=>k?.length===q.length),J=c.length>(w??[]).length,B=w?.length===0,U={initial:{x:B?0:J?150:-150,opacity:B?1:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.2}},V=(0,f.useCallback)(()=>{r()?.props.preventBack||(r()?.props.onBackCallback&&r()?.props.onBackCallback?.(),m())},[r,m]);return D(()=>{S(async k=>{await t(k),await y.set(x,!await y.get(x))}),b(()=>self.close()),d((0,a.jsx)(I,{}))},c.length===0),(0,f.useEffect)(()=>{p({data:h,isFetched:H,isError:v})},[h,H,v,p]),(0,a.jsxs)(F,{children:[(0,a.jsx)(X,{totalSteps:3,onBackClick:V,showBackButton:!r()?.props.preventBack,currentStepIndex:c.length-1}),(0,a.jsx)(R,{mode:"wait",children:(0,a.jsx)(T.div,{style:{display:"flex",flexGrow:1},...U,children:(0,a.jsx)(G,{children:r()})},`${c.length}_${w?.length}`)})]})},"SettingsConnectHardware"),Tt=Z;export{Tt as default};
//# sourceMappingURL=SettingsConnectHardware-GAQRMGBE.js.map
