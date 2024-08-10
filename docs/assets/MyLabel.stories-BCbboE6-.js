import{j as z}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const g=({label:s,size:x="normal",allCaps:h=!1,color:b,fontColor:v})=>z.jsx("span",{className:`${x} ${b} ${s}`,style:{color:v},children:h?s.toUpperCase():s});g.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Text to display"},size:{required:!1,tsType:{name:"union",raw:"'normal' | 'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"Size of the label",defaultValue:{value:"'normal'",computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"Whether to display the text in all caps",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'text-primary' | 'text-secondary' | 'text-tertiary'",elements:[{name:"literal",value:"'text-primary'"},{name:"literal",value:"'text-secondary'"},{name:"literal",value:"'text-tertiary'"}]},description:"Color of the text"},fontColor:{required:!1,tsType:{name:"string"},description:"Font color"}}};const q={title:"UI/MyLabel",component:g,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:{type:"inline-radio"},fontColor:{type:"color"}}}},e={args:{label:"Hello, World!"}},a={args:{label:"All Caps",size:"normal",allCaps:!0}},r={args:{label:"Secondary",size:"normal",color:"text-secondary"}},o={args:{label:"Custom Colors",size:"normal",fontColor:"#912626"}};var l,t,n;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Hello, World!'
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var c,i,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'All Caps',
    size: 'normal',
    allCaps: true
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,d,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Secondary',
    size: 'normal',
    color: 'text-secondary'
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var y,C,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Custom Colors',
    size: 'normal',
    fontColor: '#912626'
  }
}`,...(f=(C=o.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};const A=["Basic","AllCaps","Secondary","CustomColors"];export{a as AllCaps,e as Basic,o as CustomColors,r as Secondary,A as __namedExportsOrder,q as default};
