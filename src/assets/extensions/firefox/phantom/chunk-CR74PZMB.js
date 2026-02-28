import{l as e,p as c}from"./chunk-GEV5XQQD.js";import{s as r}from"./chunk-56MPBIEL.js";import{h as n,n as t}from"./chunk-JORLGFWZ.js";n();t();var i=5,a=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    svg {
      fill: white;
    }
  }
  svg {
    fill: ${r.colors.legacy.textSecondary};
    transition: fill 200ms ease;
  }
  padding: ${i}px;
  margin: -${i}px;
  ${o=>o.isActive&&e`
      svg {
        fill: white;
      }
    `}
`,s=c(a)`
  height: ${o=>o.diameter}px;
  min-width: ${o=>o.diameter}px;
  transition: background-color 200ms ease;
  border-radius: 50%;
  background-color: ${o=>o.backgroundColor||""};

  :hover {
    background-color: ${r.colors.legacy.bgArea};
  }
  ${o=>o.isActive&&e`
      background-color: ${r.colors.legacy.bgArea};
    `}
`;s.defaultProps={diameter:28};export{i as a,a as b,s as c};
//# sourceMappingURL=chunk-CR74PZMB.js.map
