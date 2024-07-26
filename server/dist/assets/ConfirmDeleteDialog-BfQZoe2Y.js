import{z as p,B as g,D as u,F as i,r as x,G as C,H as D,j as n,J as m,K as f,aw as y}from"./index-BHIBRmZv.js";import{d as T,D as j,a as w}from"./DialogTitle-Dg5a1wqG.js";import{T as h}from"./Typography-Bdvv5ExI.js";import{B as v}from"./Button-B9_uIbkM.js";import"./Modal-BzEI-b54.js";import"./Menu-Ds1GxSVW.js";function R(o){return p("MuiDialogActions",o)}g("MuiDialogActions",["root","spacing"]);const M=["className","disableSpacing"],S=o=>{const{classes:t,disableSpacing:s}=o;return f({root:["root",!s&&"spacing"]},R,t)},b=u("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:s}=o;return[t.root,!s.disableSpacing&&t.spacing]}})(({ownerState:o})=>i({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),A=x.forwardRef(function(t,s){const e=C({props:t,name:"MuiDialogActions"}),{className:l,disableSpacing:a=!1}=e,r=D(e,M),c=i({},e,{disableSpacing:a}),d=S(c);return n.jsx(b,i({className:m(d.root,l),ownerState:c,ref:s},r))}),N=A;function $(o){return p("MuiDialogContent",o)}g("MuiDialogContent",["root","dividers"]);const U=["className","dividers"],_=o=>{const{classes:t,dividers:s}=o;return f({root:["root",s&&"dividers"]},$,t)},B=u("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:s}=o;return[t.root,s.dividers&&t.dividers]}})(({theme:o,ownerState:t})=>i({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},t.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${T.root} + &`]:{paddingTop:0}})),P=x.forwardRef(function(t,s){const e=C({props:t,name:"MuiDialogContent"}),{className:l,dividers:a=!1}=e,r=D(e,U),c=i({},e,{dividers:a}),d=_(c);return n.jsx(B,i({className:m(d.root,l),ownerState:c,ref:s},r))}),k=P;function F(o){return p("MuiDialogContentText",o)}g("MuiDialogContentText",["root"]);const E=["children","className"],L=o=>{const{classes:t}=o,e=f({root:["root"]},F,t);return i({},t,e)},W=u(h,{shouldForwardProp:o=>y(o)||o==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(o,t)=>t.root})({}),Y=x.forwardRef(function(t,s){const e=C({props:t,name:"MuiDialogContentText"}),{className:l}=e,a=D(e,E),r=L(a);return n.jsx(W,i({component:"p",variant:"body1",color:"text.secondary",ref:s,ownerState:a,className:m(r.root,l)},e,{classes:r}))}),z=Y,q=({open:o,handleClose:t,deleteHandler:s})=>n.jsxs(j,{open:o,onClose:t,children:[n.jsx(w,{children:"Confirm Delete"}),n.jsx(k,{children:n.jsx(z,{children:"Are you sure you want to delete this group?"})}),n.jsxs(N,{children:[n.jsx(v,{onClick:t,children:"No"}),n.jsx(v,{onClick:s,color:"error",children:"Yes"})]})]});export{q as default};
