import{B as N,z as _,D as G,F as o,r as d,G as w,H as S,j as l,J as I,K as D,av as x}from"./index-BHIBRmZv.js";import{L}from"./Menu-Ds1GxSVW.js";import{c as Z,u as tt,i as E,b as et}from"./Modal-BzEI-b54.js";import{i as st}from"./isMuiElement-CUOuZfUN.js";function ot(t){return _("MuiListItem",t)}const at=N("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),b=at,nt=N("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),it=nt;function rt(t){return _("MuiListItemSecondaryAction",t)}N("MuiListItemSecondaryAction",["root","disableGutters"]);const ct=["className"],lt=t=>{const{disableGutters:e,classes:s}=t;return D({root:["root",e&&"disableGutters"]},rt,s)},dt=G("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.root,s.disableGutters&&e.disableGutters]}})(({ownerState:t})=>o({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),T=d.forwardRef(function(e,s){const a=w({props:e,name:"MuiListItemSecondaryAction"}),{className:n}=a,i=S(a,ct),p=d.useContext(L),u=o({},a,{disableGutters:p.disableGutters}),g=lt(u);return l.jsx(dt,o({className:I(g.root,n),ownerState:u,ref:s},i))});T.muiName="ListItemSecondaryAction";const pt=T,ut=["className"],mt=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],bt=(t,e)=>{const{ownerState:s}=t;return[e.root,s.dense&&e.dense,s.alignItems==="flex-start"&&e.alignItemsFlexStart,s.divider&&e.divider,!s.disableGutters&&e.gutters,!s.disablePadding&&e.padding,s.button&&e.button,s.hasSecondaryAction&&e.secondaryAction]},gt=t=>{const{alignItems:e,button:s,classes:a,dense:n,disabled:i,disableGutters:p,disablePadding:u,divider:g,hasSecondaryAction:f,selected:A}=t;return D({root:["root",n&&"dense",!p&&"gutters",!u&&"padding",g&&"divider",i&&"disabled",s&&"button",e==="flex-start"&&"alignItemsFlexStart",f&&"secondaryAction",A&&"selected"],container:["container"]},ot,a)},ft=G("div",{name:"MuiListItem",slot:"Root",overridesResolver:bt})(({theme:t,ownerState:e})=>o({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!e.disablePadding&&o({paddingTop:8,paddingBottom:8},e.dense&&{paddingTop:4,paddingBottom:4},!e.disableGutters&&{paddingLeft:16,paddingRight:16},!!e.secondaryAction&&{paddingRight:48}),!!e.secondaryAction&&{[`& > .${it.root}`]:{paddingRight:48}},{[`&.${b.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${b.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:x(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${b.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:x(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${b.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.alignItems==="flex-start"&&{alignItems:"flex-start"},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${b.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:x(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:x(t.palette.primary.main,t.palette.action.selectedOpacity)}}},e.hasSecondaryAction&&{paddingRight:48})),vt=G("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),Ct=d.forwardRef(function(e,s){const a=w({props:e,name:"MuiListItem"}),{alignItems:n="center",autoFocus:i=!1,button:p=!1,children:u,className:g,component:f,components:A={},componentsProps:O={},ContainerComponent:M="li",ContainerProps:{className:z}={},dense:j=!1,disabled:h=!1,disableGutters:$=!1,disablePadding:H=!1,divider:J=!1,focusVisibleClassName:K,secondaryAction:k,selected:W=!1,slotProps:Y={},slots:q={}}=a,Q=S(a.ContainerProps,ut),X=S(a,mt),B=d.useContext(L),P=d.useMemo(()=>({dense:j||B.dense||!1,alignItems:n,disableGutters:$}),[n,B.dense,j,$]),R=d.useRef(null);Z(()=>{i&&R.current&&R.current.focus()},[i]);const m=d.Children.toArray(u),F=m.length&&st(m[m.length-1],["ListItemSecondaryAction"]),C=o({},a,{alignItems:n,autoFocus:i,button:p,dense:P.dense,disabled:h,disableGutters:$,disablePadding:H,divider:J,hasSecondaryAction:F,selected:W}),V=gt(C),U=tt(R,s),y=q.root||A.Root||ft,v=Y.root||O.root||{},r=o({className:I(V.root,v.className,g),disabled:h},X);let c=f||"li";return p&&(r.component=f||"div",r.focusVisibleClassName=I(b.focusVisible,K),c=et),F?(c=!r.component&&!f?"div":c,M==="li"&&(c==="li"?c="div":r.component==="li"&&(r.component="div")),l.jsx(L.Provider,{value:P,children:l.jsxs(vt,o({as:M,className:I(V.container,z),ref:U,ownerState:C},Q,{children:[l.jsx(y,o({},v,!E(y)&&{as:c,ownerState:o({},C,v.ownerState)},r,{children:m})),m.pop()]}))})):l.jsx(L.Provider,{value:P,children:l.jsxs(y,o({},v,{as:c,ref:U},!E(y)&&{ownerState:o({},C,v.ownerState)},r,{children:[m,k&&l.jsx(pt,{children:k})]}))})}),At=Ct;export{At as L};
