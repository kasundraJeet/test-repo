import{x as w,b as m,d as v,I as g,O as b,e as P,_ as B,a as V}from"./createLucideIcon-DplB_D6S.js";import{l as _,o as c,h as f,w as i,r as q,m as y,u as e,i as C,e as x,b as r,a as p,c as k,n as I,F as S,j as $,d as j}from"./index-BUE5i0sM.js";import{L as N}from"./loader-circle-BSW4l_wG.js";const L={__name:"PinInput",props:{modelValue:{type:Array,required:!1,default:()=>[]},defaultValue:{type:Array,required:!1},placeholder:{type:String,required:!1},mask:{type:Boolean,required:!1},otp:{type:Boolean,required:!1},type:{type:String,required:!1},dir:{type:String,required:!1},name:{type:String,required:!1},disabled:{type:Boolean,required:!1},required:{type:Boolean,required:!1},id:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},emits:["update:modelValue","complete"],setup(d,{emit:t}){const l=d,o=t,n=_(()=>{const{class:a,...u}=l;return u}),s=w(n,o);return(a,u)=>(c(),f(e(v),y(e(s),{class:e(m)("flex gap-2 items-center",l.class)}),{default:i(()=>[q(a.$slots,"default")]),_:3},16,["class"]))}},O={__name:"PinInputGroup",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(d){const t=d,l=_(()=>{const{class:n,...s}=t;return s}),o=g(l);return(n,s)=>(c(),f(e(b),y(e(o),{class:e(m)("flex items-center",t.class)}),{default:i(()=>[q(n.$slots,"default")]),_:3},16,["class"]))}},T={__name:"PinInputInput",props:{index:{type:Number,required:!0},disabled:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(d){const t=d,l=_(()=>{const{class:n,...s}=t;return s}),o=g(l);return(n,s)=>(c(),f(e(P),y(e(o),{class:e(m)("relative text-center focus:outline-none focus:ring-2 focus:ring-ring focus:relative focus:z-10 flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",t.class)}),null,16,["class"]))}},A={class:"flex items-center w-full h-dvh justify-center"},E={class:"lg:p-8"},F={class:"mx-auto flex w-full flex-col justify-center space-y-8 sm:w-[350px]"},z={class:"w-full"},G={class:"flex flex-col items-center w-full gap-4"},H=C({__name:"OTPView",setup(d){const t=x(!1),l=x(["1","2","3"]),o=s=>alert(s.join(""));async function n(s){console.log(s)}return(s,a)=>(c(),f(e(V),{as:"main"},{default:i(()=>[r("div",A,[r("div",E,[r("div",F,[a[2]||(a[2]=r("div",{class:"flex flex-col space-y-2 text-center"},[r("h1",{class:"text-2xl font-semibold tracking-tight"}," Verify Your Email Id "),r("p",{class:"text-sm text-muted-foreground"}," Please enter the OTP sent to your phone to continue. ")],-1)),r("div",z,[r("form",{class:"w-full",onSubmit:n},[r("div",G,[p(e(L),{id:"pin-input",modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=u=>l.value=u),placeholder:"○",onComplete:o},{default:i(()=>[p(e(O),null,{default:i(()=>[(c(),k(S,null,I(6,(u,h)=>p(e(T),{key:u,index:h},null,8,["index"])),64))]),_:1})]),_:1},8,["modelValue"]),p(e(B),{class:"w-full",disabled:t.value},{default:i(()=>[t.value?(c(),f(e(N),{key:0,class:"mr-2 h-4 w-4 animate-spin"})):$("",!0),a[1]||(a[1]=j(" Confirm OTP "))]),_:1},8,["disabled"])])],32)])])])])]),_:1}))}});export{H as default};
