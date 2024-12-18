import{a as A,b as B,c as G,d as H,e as R,f as U,g as F,h as q,i as z,j as J,k as K,l as C,m as S}from"./chunk-CVZX3XJG.js";import{$ as l,A as u,F as y,G as M,M as c,R as P,S as d,U as b,V as r,W as s,X as T,Y as $,Z as a,_ as w,a as O,b as E,ba as k,da as f,ea as v,fa as D,ga as I,h as x,j,ja as _,k as L,ka as N,ma as V,oa as h,va as g,y as m}from"./chunk-H52FMC3H.js";var te=i=>({"active-btn":i}),W=(()=>{class i{constructor(){this.ts=m(C),this.responsiveService=m(S),this.addTodoForm=new U({title:new F("",G.required),description:new F("")})}get layoutClass(){return this.responsiveService.isMobile?(console.log("Is Mobile: ",this.responsiveService.isMobile),"mobile-layout"):this.responsiveService.isTablet?(console.log("Is Tablet: ",this.responsiveService.isTablet),"tablet-layout"):"form-container2"}onSubmit(){let e={title:this.addTodoForm.value.title,description:this.addTodoForm.value.description,done:!1,userEmail:localStorage.getItem("email")};this.ts.newTodo(e).subscribe({next:t=>{console.log("Todo ajout\xE9 avec succ\xE8s:",e);let o=E(O({},e),{id:t.todoId});console.log("Id newtodo : ",o.id),this.ts.addLocal(o),this.ts.todos$.subscribe({next:n=>console.log("addlocal : ",o)}),this.addTodoForm.reset()},error:t=>console.error("Erreur lors de l'ajout du todo:",t)})}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=u({type:i,selectors:[["app-add-todo"]],standalone:!0,features:[f],decls:5,vars:7,consts:[[1,"form-container2",3,"formGroup"],["type","text","placeholder","Titre","formControlName","title"],["type","text","placeholder","Description","formControlName","description"],[1,"auth-btn",3,"click","ngClass","disabled"]],template:function(t,o){t&1&&(r(0,"form",0),T(1,"input",1)(2,"input",2),r(3,"button",3),a("click",function(){return o.onSubmit()}),l(4," Ajouter "),s()()),t&2&&(b(o.layoutClass),d("formGroup",o.addTodoForm),c(3),d("ngClass",v(5,te,!o.addTodoForm.invalid))("disabled",o.addTodoForm.invalid))},dependencies:[h,_,K,q,B,H,R,z,J,g],styles:[".form-container2[_ngcontent-%COMP%]{width:max-content;justify-content:center;border-radius:8px;margin:2rem auto;display:flex;padding:0;border:none;box-shadow:0 0 #0000001a}.form-container2.mobile-layout[_ngcontent-%COMP%]{max-width:300px;padding:1rem;font-size:1.2em;margin:50px auto;border:1px grey solid}.form-container2[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0 .5rem}input[type=text][_ngcontent-%COMP%]{width:auto;// min-width: 20ch;// max-width: 100%}.auth-btn[_ngcontent-%COMP%]{width:100%;padding:14px 20px;border-radius:8px}"]})}}return i})();var oe=i=>({done:i});function ie(i,Y){if(i&1){let e=$();r(0,"div",3)(1,"div",4)(2,"input",5),a("click",function(){let o=y(e).$implicit,n=w();return M(n.updateTodo(o))}),s(),r(3,"div",6)(4,"h4",7),l(5),s(),r(6,"h5",8),l(7),s()()(),r(8,"button",9),a("click",function(){let o=y(e).$implicit,n=w();return M(n.deleteTodo(o))}),l(9," Supprimer "),s()()}if(i&2){let e=Y.$implicit;c(2),d("checked",e.done),c(),d("ngClass",v(4,oe,e.done)),c(2),k(" ",e.title," "),c(2),k(" ",e.description," ")}}var X=(()=>{class i{constructor(){this.ts=m(C),this.users$=this.ts.getUsers(),this.email=null,this.todos$=this.ts.todos$,this.filterSubject=new x("all"),this.sortSubject=new x(!1),this.responsiveService=m(S),this.filteredTodos$=L([this.todos$,this.filterSubject,this.sortSubject]).pipe(j(([e,t,o])=>{let n=e;return t==="done"?n=e.filter(p=>p.done):t==="notDone"&&(n=e.filter(p=>!p.done)),o&&(n=[...n].sort((p,Z)=>p.done===Z.done?0:p.done?1:-1)),n})),this.deleteTodo=e=>this.ts.deleteTodo(e).subscribe({next:()=>{console.log("Todo deleted successfully:",e),this.ts.removeLocal(e)},error:t=>console.error("Error delete todo:",t)}),this.getTodosByUser=e=>this.ts.getTodosByUser(e)}get layoutClass(){return this.responsiveService.isMobile?(console.log("Is Mobile: ",this.responsiveService.isMobile),"mobile-layout"):this.responsiveService.isTablet?(console.log("Is Tablet: ",this.responsiveService.isTablet),"tablet-layout"):"action-container"}ngOnInit(){typeof localStorage<"u"?(this.email=localStorage.getItem("email"),console.log("test email : ",this.email)):console.log("localStorage n'est pas disponible"),this.email&&(console.log("test email2 : ",this.email),this.ts.loadTodos(this.email),this.todos$=this.ts.todos$,this.todos$.subscribe({next:e=>console.log("test todos : ",e),error:e=>console.error("Erreur lors de la r\xE9cup\xE9ration des todos :",e)}))}updateTodo(e){e.done=!e.done,this.ts.updateTodo(e).subscribe({next:()=>console.log("Todo updated successfully:",e),error:t=>console.error("Error updating todo:",t)})}sortTasks(){this.sortSubject.next(!this.sortSubject.value)}filterTasks(e){this.filterSubject.next(e)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=u({type:i,selectors:[["app-todo-list"]],standalone:!0,features:[f],decls:11,vars:5,consts:[[1,"actions-container"],[3,"click"],["class","todo-card-container",4,"ngFor","ngForOf"],[1,"todo-card-container"],[1,"todo-content"],["type","checkbox","name","done",3,"click","checked"],[1,"title-desc",3,"ngClass"],[1,"title"],[1,"description"],[1,"delete-btn",3,"click"]],template:function(t,o){t&1&&(r(0,"div",0)(1,"button",1),a("click",function(){return o.filterTasks("all")}),l(2,"Toutes les t\xE2ches"),s(),r(3,"button",1),a("click",function(){return o.filterTasks("done")}),l(4,"T\xE2ches faites"),s(),r(5,"button",1),a("click",function(){return o.filterTasks("notDone")}),l(6,"T\xE2ches non faites"),s(),r(7,"button",1),a("click",function(){return o.sortTasks()}),l(8,"Trier par ordre croissant (non faites -> faites)"),s()(),P(9,ie,10,6,"div",2),D(10,"async")),t&2&&(b(o.layoutClass),c(9),d("ngForOf",I(10,3,o.filteredTodos$)))},dependencies:[h,_,N,V,g],styles:[".todo-card-container[_ngcontent-%COMP%]{width:clamp(80%,5vw,90%);max-width:1200px;margin:1rem auto;display:flex;justify-content:space-between;align-items:center;border-radius:8px;border:1px #2828281a solid;padding:1rem;background-color:var(--bg-task)}.todo-content[_ngcontent-%COMP%]{display:flex}.title-desc[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:.2rem;font-weight:400}.done[_ngcontent-%COMP%]{text-decoration:line-through}input[_ngcontent-%COMP%]{width:20px;margin-right:1rem}.delete-btn[_ngcontent-%COMP%]{padding:.5rem;border-radius:8px;color:#fff;background:red;border:none}.delete-btn[_ngcontent-%COMP%]:hover{cursor:pointer}"]})}}return i})();var Fe=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=u({type:i,selectors:[["app-todo"]],standalone:!0,features:[f],decls:3,vars:1,consts:[[3,"isLogoutBtnShown"]],template:function(t,o){t&1&&T(0,"app-toolbar",0)(1,"app-add-todo")(2,"app-todo-list"),t&2&&d("isLogoutBtnShown",!0)},dependencies:[h,A,W,X,g]})}}return i})();export{Fe as default};