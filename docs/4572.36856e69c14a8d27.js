"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[4572],{4572:(R,d,t)=>{t.r(d),t.d(d,{ViewProductModule:()=>H});var m=t(6814),h=t(95),p=t(9252),v=t(1122),g=t(9552),l=t(707),f=t(1913),y=t(74),s=t(2129),P=t(5861),e=t(9467),C=t(981),T=t(2434),V=t(9862),S=t(5219),u=t(6340),c=t(1451);const A=["filter"];function F(r,N){1&r&&(e.TgZ(0,"div",7)(1,"h5"),e._uU(2,"Products"),e.qZA()())}function Z(r,N){1&r&&e._UZ(0,"button",8)}let J=(()=>{class r{constructor(i,o,a,n){this.productService=i,this.dbservice=o,this.http=a,this.route=n,this.products=[],this.loading=!0,this.options=[{field:"code",header:"Product Code",isSortable:!0,hasFilter:!0,hasTableValue:!0},{field:"name",header:"Name",isSortable:!0,hasFilter:!0,hasTableValue:!0,dataClass:"text-primary font-semibold"},{field:"category",header:"Category",isSortable:!0,hasFilter:!0,hasTableValue:!0},{field:"price",header:"Price",isSortable:!0,hasFilter:!0,hasTableValue:!0},{field:"quantity",header:"Quantity",isSortable:!0,hasFilter:!0,hasTableValue:!0},{field:"",header:"User Action",hasTableValue:!1}]}ngOnInit(){this.fetchCustomers(),this.productService.getProductsWithOrdersSmall().then(i=>this.products=i)}fetchCustomers(){return(0,P.Z)(function*(){})()}addCustomer(){}navigateUrl(i){console.log(i),this.route.navigateByUrl(`/product/CustomProduct/${i}`)}onPreviewEvent(i){this.navigateUrl(i.id)}static#t=this.\u0275fac=function(o){return new(o||r)(e.Y36(C.M),e.Y36(T.A),e.Y36(V.eN),e.Y36(s.F0))};static#e=this.\u0275cmp=e.Xpm({type:r,selectors:[["ng-component"]],viewQuery:function(o,a){if(1&o&&e.Gf(A,5),2&o){let n;e.iGM(n=e.CRH())&&(a.filter=n.first)}},decls:7,vars:9,consts:[[1,"grid"],[1,"col-12"],[1,"card"],["styleClass","mb-4"],["pTemplate","left"],["pTemplate","right"],[3,"title","listOfItems","gridColumnOptions","totalRecords","dataKey","canEdit","canPreview","hasLazyLoading","hasGlobalSearch","Preview"],[1,"my-2"],["pButton","","label","Add","icon","pi pi-plus","routerLink","/product/AddProduct",1,"p-button-outlined-left","mb-2"]],template:function(o,a){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"p-toolbar",3),e.YNc(4,F,3,0,"ng-template",4)(5,Z,1,0,"ng-template",5),e.qZA(),e.TgZ(6,"app-grid",6),e.NdJ("Preview",function(Q){return a.onPreviewEvent(Q)}),e.qZA()()()()),2&o&&(e.xp6(6),e.Q6J("title","CustomerDetails")("listOfItems",a.products)("gridColumnOptions",a.options)("totalRecords",100)("dataKey","id")("canEdit",!1)("canPreview",!0)("hasLazyLoading",!1)("hasGlobalSearch",!0))},dependencies:[s.rH,S.jx,l.Hq,u.o,c.M],encapsulation:2})}return r})(),M=(()=>{class r{static#t=this.\u0275fac=function(o){return new(o||r)};static#e=this.\u0275mod=e.oAB({type:r});static#r=this.\u0275inj=e.cJS({imports:[s.Bz.forChild([{path:"",component:J}]),s.Bz]})}return r})();var U=t(6022),B=t(7902),O=t(3714),z=t(6804),E=t(4480),G=t(4055),L=t(3965),Y=t(6651),j=t(4104);let H=(()=>{class r{static#t=this.\u0275fac=function(o){return new(o||r)};static#e=this.\u0275mod=e.oAB({type:r});static#r=this.\u0275inj=e.cJS({imports:[m.ez,h.u5,p.S,v.$9,g.U$,f.l,y.ml,l.hJ,M,U.Xt,l.hJ,B.JH,O.j,z.KZ,E.T,G.q4,L.kW,Y.q,j.EV,u.V,c.M]})}return r})()}}]);