import{r as d,U as m,j as e,v as n,S as p,s as c}from"./index-BHIBRmZv.js";import{c as f}from"./index-Cbtc9NX2.js";import{A as b}from"./AdminLayout-DsRL__Ml.js";import{A as i}from"./AvatarCard-C9D_v89o.js";import{T as v}from"./Table-BEBaCY7q.js";import{a as N}from"./Menu-CDNscjgY.js";import{A as w}from"./Avatar-DkrhanKt.js";import"./IconButton-BIBvvjtX.js";import"./Modal-BzEI-b54.js";import"./Typography-Bdvv5ExI.js";import"./ExitToApp-Z_oLhUZN.js";import"./Menu-Ds1GxSVW.js";import"./Container-Ds5XN1Pe.js";import"./TextField-CFAYcWtJ.js";import"./isMuiElement-CUOuZfUN.js";import"./Tooltip-DzEe2dRz.js";import"./Toolbar-DmCHlYUP.js";import"./MenuItem-CmoFn72l.js";import"./Button-B9_uIbkM.js";import"./InputAdornment-BJ-CCmNr.js";import"./CircularProgress-CH_ueZ7s.js";const C=[{field:"id",headerName:"ID",headerClassName:"table-header",width:200},{field:"avatar",headerName:"Avatar",headerClassName:"table-header",width:150,renderCell:a=>e.jsx(i,{avatar:a.row.avatar})},{field:"name",headerName:"Name",headerClassName:"table-header",width:300},{field:"groupChat",headerName:"Group",headerClassName:"table-header",width:100},{field:"totalMembers",headerName:"Total Members",headerClassName:"table-header",width:120},{field:"members",headerName:"Members",headerClassName:"table-header",width:400,renderCell:a=>e.jsx(i,{max:100,avatar:a.row.members})},{field:"totalMessages",headerName:"Total Messages",headerClassName:"table-header",width:120},{field:"creator",headerName:"Created By",headerClassName:"table-header",width:250,renderCell:a=>e.jsxs(p,{direction:"row",alignItems:"center",spacing:"1rem",children:[e.jsx(w,{alt:a.row.creator.name,src:a.row.creator.avatar}),e.jsx("span",{children:a.row.creator.name})]})}],q=()=>{const{loading:a,data:t,error:o}=f(`${c}/api/v1/admin/chats`,"dashboard-chats");N([{isError:o,error:o}]);const[h,l]=d.useState([]);return d.useEffect(()=>{t&&l(t.chats.map(r=>({...r,id:r._id,avatar:r.avatar.map(s=>m(s,50)),members:r.members.map(s=>m(s.avatar,50)),creator:{name:r.creator.name,avatar:m(r.creator.avatar,50)}})))},[t]),e.jsx(b,{children:a?e.jsx(n,{height:"100vh"}):e.jsx(v,{heading:"All Chats",columns:C,rows:h})})};export{q as default};