import{d as l,g as c,c as u}from"./authenticator-775dc4b9.js";import{T as m}from"./TheDashboardPageHeader-1fe7cf33.js";import{f as n,o as d,c as p,b as _,a as o,d as s,C as i,F as f}from"./index-af7942e8.js";import"./notificator-4d76e68d.js";const h={style:{"margin-bottom":"15px"}},v=["aria-busy"],y=["aria-busy"],E={__name:"MyInfo",setup(g){const a=n(""),e=n(""),r=n(!0);return a.value="",e.value="",l.get("https://evbkzynoncxd.neptune.trulywired.link/api/user",{headers:{Authorization:"Bearer "+c()}}).then(t=>{a.value=t.data.name,e.value=t.data.email}).catch(t=>{a.value="Error",e.value="Error",u(!0)}).finally(()=>{r.value=!1}),(t,b)=>(d(),p(f,null,[_(m,{title:"My information",content:"This below is information regarding your account."}),o("p",h,[s("Name: "),o("code",{"aria-busy":r.value},i(a.value),9,v)]),o("p",null,[s("Email: "),o("code",{"aria-busy":r.value},i(e.value),9,y)])],64))}};export{E as default};
