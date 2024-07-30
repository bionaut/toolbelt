import{j as t,a as u,F as _}from"./jsx-runtime-c3d7f245.js";import{R as O,r as o}from"./index-c6dae603.js";const k=O.createContext([]),P=()=>null,M=({children:n})=>{const[e,r]=o.useState({}),{active:a}=e,s={renderModal:i=>{r(m=>m.active===i?m:{active:i})},removeModal:()=>{r(i=>i.active===void 0?i:{active:void 0})}},c=a||t(P,{});return t(k.Provider,{value:[e,s],children:u(_,{children:[n,c]})})},g=(n,e)=>{const[r,a]=o.useState({}),[d,b]=o.useState(!1),[s,c]=o.useState((e==null?void 0:e.currentStep)||0),[,{removeModal:i,renderModal:m}]=o.useContext(k),v=n,S=o.useCallback(()=>{b(!1),c(0),a({})},[]);o.useEffect(()=>{d?m(t(v,{...e,...r,onClose:S,currentStep:s,nextStep:()=>c(l=>l+1),prevStep:()=>c(l=>Math.max(l-1,0))})):i()},[v,S,s,d,r]);const x=o.useCallback(()=>{c((e==null?void 0:e.currentStep)||0),a({}),b(!0)},[e==null?void 0:e.currentStep]),H=o.useCallback(l=>{a(l),c((l==null?void 0:l.currentStep)||(e==null?void 0:e.currentStep)||0),b(!0)},[e==null?void 0:e.currentStep]);return{isOpen:d,close:S,open:x,openWithProps:H,currentStep:s}};try{M.displayName="ModalHubProvider",M.__docgenInfo={description:"",displayName:"ModalHubProvider",props:{}}}catch{}const F={title:"ModalHub",component:M},h={name:"ModalHub",render:()=>t(M,{children:t(E,{})})};function E(){const n=g(j,{title:"Default title"});return u("div",{children:[t("button",{style:{display:"block"},onClick:n.open,children:"open()"}),t("button",{style:{display:"block"},onClick:()=>n.openWithProps({title:"Overriden title",currentStep:1}),children:"openWithProps({ title: 'Overriden title', initialStep: 1})"}),t("button",{style:{display:"block"},disabled:!n.isOpen,onClick:()=>n.close(),children:"Close from outside"})]})}function j({title:n,onClose:e,currentStep:r,nextStep:a,prevStep:d}){return u("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",border:"1px solid black",padding:"1rem",backgroundColor:"white"},children:[t("h1",{children:n}),u("p",{children:["Step ",r]}),u("div",{children:[t("button",{onClick:d,disabled:r===0,children:"Previous"}),t("button",{onClick:a,children:"Next"})]}),t("button",{onClick:e,children:"Close"})]})}var C,f,y;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'ModalHub',
  render: () => {
    return <ModalHubProvider>
        <Controls />
      </ModalHubProvider>;
  }
}`,...(y=(f=h.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const R=["ModalHubStory"];export{h as ModalHubStory,R as __namedExportsOrder,F as default};
//# sourceMappingURL=modal-hub.stories-1d69f749.js.map