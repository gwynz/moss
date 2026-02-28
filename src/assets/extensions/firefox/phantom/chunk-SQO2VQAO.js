import{a as v}from"./chunk-ZWZ3CTXU.js";import{h as C}from"./chunk-3HVMCTN3.js";import{c as h}from"./chunk-WDCHYE5S.js";import{ib as i,la as y,p as e}from"./chunk-GEV5XQQD.js";import{B as b}from"./chunk-K3JNOO2M.js";import{j as u,q as x,s as n,v as f}from"./chunk-56MPBIEL.js";import{a as c}from"./chunk-CNVMLXTH.js";import{f as p,h as l,n as d}from"./chunk-JORLGFWZ.js";l();d();var r=p(c());var D=e.div`
  position: relative;
  width: 100%;
`,A=e.div`
  position: absolute;
  right: 12px;
  top: calc(50% - 27px / 2);
  display: flex;
  align-items: center;
`,U=e(i)`
  margin-right: ${t=>`calc(120px - (${t.textLength}px * 5))`};
`,z=e(i)`
  margin-right: 10px;
`,L=e(h)`
  height: 27px;
`,W=e.div`
  position: relative;
  width: 100%;
  padding: 0px 8px;
  overflow: hidden;
  text-overflow: ellipsis;
`,J=({symbol:t,alignSymbol:s,buttonText:m,width:a,borderRadius:T,onSetTarget:k,targetButtonDisabled:w,placeholder:S,...g})=>{let{t:I}=u(),V=g.value.toString().length;return r.default.createElement(D,null,r.default.createElement(C,{placeholder:S??I("maxInputAmount"),borderRadius:T,...g}),r.default.createElement(A,null,s==="left"?r.default.createElement(U,{size:16,textLength:V,color:n.colors.legacy.textSecondary},t):r.default.createElement(z,{size:16,color:n.colors.legacy.textSecondary},t),r.default.createElement(L,{disabled:w,fontSize:13,width:`${a}px`,borderRadius:"100px",paddingY:4,onClick:k},r.default.createElement(W,null,m))))};l();d();var o=p(c());var nt=t=>{let{data:s}=b(t.keybaseUsername),m=t.name??t.keybaseUsername??t.identifier;return o.default.createElement($,null,o.default.createElement(P,null,o.default.createElement(j,{width:28,iconUrl:t.iconUrl??s}),o.default.createElement(i,{textAlign:"left",weight:600,size:16,noWrap:!0},m),t.website&&o.default.createElement(H,{href:t.website},o.default.createElement(y,null)),t.onInfoClick&&o.default.createElement("div",{className:N.infoContainer,onClick:t.onInfoClick},o.default.createElement(f.InfoCircle,{size:16,color:"textTertiary"}))),o.default.createElement(F,null,t.data.map(a=>o.default.createElement(K,{key:a.label},o.default.createElement(i,{textAlign:"left",color:n.colors.legacy.textSecondary,size:14,lineHeight:17,noWrap:!0},a.label),a.value))))},N={infoContainer:x({cursor:"pointer"})},$=e.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 47px auto;
  align-items: center;
  justify-content: flex-start;
  background: ${n.colors.legacy.bgRow};
  width: 100%;
  border-radius: 6px;
  margin-top: 12px;
`,P=e.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 33px 1fr auto;
  align-items: center;
  padding: 9px 14px;
  border-bottom: 0.5px solid ${n.colors.legacy.borderPrimary};
`,H=e.a.attrs({target:"_blank",rel:"noopener noreferrer"})`
  margin-left: auto;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
`,j=e(v)``,F=e.section`
  padding: 14px;
`,K=e.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 36px;
`;export{J as a,nt as b};
//# sourceMappingURL=chunk-SQO2VQAO.js.map
