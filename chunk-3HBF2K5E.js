import{a as V,b as A,c as I,d as B,e as G,f as H,g as y,h as U,i as Y,j as q,k as z,l as T}from"./chunk-WHJJZOTX.js";import{$ as N,B as l,F as E,G as c,I as r,J as s,K as _,L as j,M as a,N as O,O as d,Q as k,S as u,T as C,U as L,V as $,Y as b,Z as D,a as S,b as P,ba as f,f as x,h as w,ha as g,i as F,p as h,r as p,w as M,x as v}from"./chunk-ZVKKEQ3A.js";var Z=o=>({"active-btn":o}),J=(()=>{class o{constructor(){this.ts=h(T),this.addTodoForm=new H({title:new y("",I.required),description:new y("")})}onSubmit(){let t={title:this.addTodoForm.value.title,description:this.addTodoForm.value.description,done:!1,userEmail:localStorage.getItem("email")};this.ts.newTodo(t).subscribe({next:e=>{console.log("Todo ajout\xE9 avec succ\xE8s:",t);let n=P(S({},t),{id:e.todoId});console.log("Id newtodo : ",n.id),this.ts.addLocal(n),this.ts.todos$.subscribe({next:i=>console.log("addlocal : ",n)}),this.addTodoForm.reset()},error:e=>console.error("Erreur lors de l'ajout du todo:",e)})}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275cmp=p({type:o,selectors:[["app-add-todo"]],standalone:!0,features:[u],decls:5,vars:5,consts:[[1,"form-container",3,"formGroup"],["type","text","placeholder","Titre","formControlName","title"],["type","text","placeholder","Description","formControlName","description"],[1,"auth-btn",3,"click","ngClass","disabled"]],template:function(e,n){e&1&&(r(0,"form",0),_(1,"input",1)(2,"input",2),r(3,"button",3),a("click",function(){return n.onSubmit()}),d(4," Ajouter "),s()()),e&2&&(c("formGroup",n.addTodoForm),l(3),c("ngClass",C(3,Z,!n.addTodoForm.invalid))("disabled",n.addTodoForm.invalid))},dependencies:[f,b,z,U,A,B,G,Y,q,g],styles:[".form-container[_ngcontent-%COMP%]{width:max-content;border-radius:8px;margin:2rem auto;display:flex;padding:0;border:none;box-shadow:0 0 #0000001a}.form-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0 .5rem}input[type=text][_ngcontent-%COMP%]{width:auto;// min-width: 20ch;// max-width: 100%}.auth-btn[_ngcontent-%COMP%]{width:100%;padding:14px 20px;border-radius:8px}"]})}}return o})();var tt=o=>({done:o});function et(o,Q){if(o&1){let t=j();r(0,"div",3)(1,"div",4)(2,"input",5),a("click",function(){let n=M(t).$implicit,i=O();return v(i.updateTodo(n))}),s(),r(3,"div",6)(4,"h4",7),d(5),s(),r(6,"h5",8),d(7),s()()(),r(8,"button",9),a("click",function(){let n=M(t).$implicit,i=O();return v(i.deleteTodo(n))}),d(9," Supprimer "),s()()}if(o&2){let t=Q.$implicit;l(2),c("checked",t.done),l(),c("ngClass",C(4,tt,t.done)),l(2),k(" ",t.title," "),l(2),k(" ",t.description," ")}}var K=(()=>{class o{constructor(){this.ts=h(T),this.users$=this.ts.getUsers(),this.email=null,this.todos$=this.ts.todos$,this.filterSubject=new x("all"),this.sortSubject=new x(!1),this.filteredTodos$=F([this.todos$,this.filterSubject,this.sortSubject]).pipe(w(([t,e,n])=>{let i=t;return e==="done"?i=t.filter(m=>m.done):e==="notDone"&&(i=t.filter(m=>!m.done)),n&&(i=[...i].sort((m,W)=>m.done===W.done?0:m.done?1:-1)),i})),this.deleteTodo=t=>this.ts.deleteTodo(t).subscribe({next:()=>{console.log("Todo deleted successfully:",t),this.ts.removeLocal(t)},error:e=>console.error("Error delete todo:",e)}),this.getTodosByUser=t=>this.ts.getTodosByUser(t)}ngOnInit(){typeof localStorage<"u"?(this.email=localStorage.getItem("email"),console.log("test email : ",this.email)):console.log("localStorage n'est pas disponible"),this.email&&(console.log("test email2 : ",this.email),this.ts.loadTodos(this.email),this.todos$=this.ts.todos$,this.todos$.subscribe({next:t=>console.log("test todos : ",t),error:t=>console.error("Erreur lors de la r\xE9cup\xE9ration des todos :",t)}))}updateTodo(t){t.done=!t.done,this.ts.updateTodo(t).subscribe({next:()=>console.log("Todo updated successfully:",t),error:e=>console.error("Error updating todo:",e)})}sortTasks(){this.sortSubject.next(!this.sortSubject.value)}filterTasks(t){this.filterSubject.next(t)}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275cmp=p({type:o,selectors:[["app-todo-list"]],standalone:!0,features:[u],decls:11,vars:3,consts:[[1,"actions-container"],[3,"click"],["class","todo-card-container",4,"ngFor","ngForOf"],[1,"todo-card-container"],[1,"todo-content"],["type","checkbox","name","done",3,"click","checked"],[1,"title-desc",3,"ngClass"],[1,"title"],[1,"description"],[1,"delete-btn",3,"click"]],template:function(e,n){e&1&&(r(0,"div",0)(1,"button",1),a("click",function(){return n.filterTasks("all")}),d(2,"Toutes les t\xE2ches"),s(),r(3,"button",1),a("click",function(){return n.filterTasks("done")}),d(4,"T\xE2ches faites"),s(),r(5,"button",1),a("click",function(){return n.filterTasks("notDone")}),d(6,"T\xE2ches non faites"),s(),r(7,"button",1),a("click",function(){return n.sortTasks()}),d(8,"Trier par ordre croissant (non faites -> faites)"),s()(),E(9,et,10,6,"div",2),L(10,"async")),e&2&&(l(9),c("ngForOf",$(10,1,n.filteredTodos$)))},dependencies:[f,b,D,N,g],styles:[".todo-card-container[_ngcontent-%COMP%]{width:clamp(80%,5vw,90%);max-width:1200px;margin:1rem auto;display:flex;justify-content:space-between;align-items:center;border-radius:8px;border:1px #2828281a solid;padding:1rem;background-color:var(--bg-task)}.todo-content[_ngcontent-%COMP%]{display:flex}.title-desc[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:.2rem;font-weight:400}.done[_ngcontent-%COMP%]{text-decoration:line-through}input[_ngcontent-%COMP%]{width:20px;margin-right:1rem}.delete-btn[_ngcontent-%COMP%]{padding:.5rem;border-radius:8px;color:#fff;background:red;border:none}.delete-btn[_ngcontent-%COMP%]:hover{cursor:pointer}//[_ngcontent-%COMP%]   Style[_ngcontent-%COMP%]   des[_ngcontent-%COMP%]   nouveaux[_ngcontent-%COMP%]   boutons[_ngcontent-%COMP%]   .actions-container[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:1rem;margin:1.5rem 0}.actions-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:.75rem 1.5rem;border:none;border-radius:8px;font-size:1rem;font-weight:700;cursor:pointer;transition:background-color .3s ease,transform .2s ease;box-shadow:0 4px 6px #0000001a}.actions-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#007bff;color:#fff;transform:translateY(-3px)}.actions-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active{transform:translateY(1px);box-shadow:0 2px 4px #0003}.actions-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1){background-color:#f8f9fa;color:#212529}.actions-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2){background-color:#28a745;color:#fff}.actions-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(3){background-color:#dc3545;color:#fff}.actions-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(4){background-color:#ffc107;color:#212529}"]})}}return o})();var Ot=(()=>{class o{static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275cmp=p({type:o,selectors:[["app-todo"]],standalone:!0,features:[u],decls:3,vars:1,consts:[[3,"isLogoutBtnShown"]],template:function(e,n){e&1&&_(0,"app-toolbar",0)(1,"app-add-todo")(2,"app-todo-list"),e&2&&c("isLogoutBtnShown",!0)},dependencies:[f,V,J,K,g]})}}return o})();export{Ot as default};
