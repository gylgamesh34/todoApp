import{K as d,R as f,S as h,da as v,ea as c,fa as g,ga as A,ha as n,ia as C,ja as T,ka as S,la as p,na as R,p as r,pa as k,qa as F,r as l,ra as a,u}from"./chunk-ZVKKEQ3A.js";var I=(t,i)=>{let e=r(a),o=r(p);return e.isAuthenticated()?!0:(o.navigate(["/login"]),!1)};var s=(t,i)=>{let e=r(a),o=r(p);return e.isAuthenticated()?(o.navigate(["/todos"]),!1):!0};var w=[{path:"login",title:"Login | TodoApp",canActivate:[s],loadComponent:()=>import("./chunk-SO4SXCQG.js")},{path:"register",title:"Register | TodoApp",canActivate:[s],loadComponent:()=>import("./chunk-SEIXRF3E.js")},{path:"todos",title:"Todos | TodoApp",canActivate:[I],loadComponent:()=>import("./chunk-3HBF2K5E.js")},{path:"",redirectTo:"login",pathMatch:"full"},{path:"**",redirectTo:"todos",pathMatch:"full"}];var m=(t,i)=>{let e=localStorage.getItem("token");if(e){let o=t.clone({setHeaders:{Authorization:`Bearer ${e}`}});return i(o)}return i(t)};function H(){return{tokenGetter:()=>localStorage.getItem("token"),allowedDomains:["localhost:4200","https://backend.osc-fr1.scalingo.io/","localhost:4000"],disallowedRoutes:["localhost:4200/login","localhost:4200/register"]}}var x={providers:[R(w),T(),c(g([m])),c(A()),F,{provide:k,useFactory:H},u(n)]};var y=(()=>{class t{static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=l({type:t,selectors:[["app-root"]],standalone:!0,features:[f([{provide:v,useFactory:m,multi:!0}]),h],decls:1,vars:0,template:function(o,M){o&1&&d(0,"router-outlet")},dependencies:[S,n],encapsulation:2})}}return t})();C(y,x).catch(t=>console.error(t));
