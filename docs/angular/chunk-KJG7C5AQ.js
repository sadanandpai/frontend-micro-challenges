import{a as f,b as g,e as _,h as b,i as y,l as v}from"./chunk-3IH2IKVQ.js";import{Ba as e,Ca as n,Da as d,Ia as c,Ka as i,Ma as h,Qa as C,T as m,qa as u,xa as p}from"./chunk-T4VCYVGG.js";var M=(()=>{let t=class t{constructor(){this.step=1,this.counter=0,this.inputControl=new _(this.step),this.onValueChange=o=>{!o||o<1?this.step=1:this.step=o,this.inputControl.value!==this.step&&this.inputControl.setValue(this.step)}}ngOnInit(){this.inputControl.valueChanges.subscribe(this.onValueChange)}increment(){this.counter+=this.step}decrement(){this.counter-=this.step}reset(){this.counter=0}};t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=m({type:t,selectors:[["app-counter"]],standalone:!0,features:[C],decls:14,vars:2,consts:[[1,"text-center"],[1,"actions"],[3,"click"],["type","number","type","number",3,"formControl"]],template:function(s,r){s&1&&(e(0,"div",0)(1,"h2"),i(2),n(),e(3,"section")(4,"div",1)(5,"button",2),c("click",function(){return r.decrement()}),i(6,"-"),n(),e(7,"button",2),c("click",function(){return r.increment()}),i(8,"+"),n()(),e(9,"p"),i(10," Increment / Decrement by "),d(11,"input",3),n(),e(12,"button",2),c("click",function(){return r.reset()}),i(13,"Reset"),n()()()),s&2&&(u(2),h(" ",r.counter," "),u(9),p("formControl",r.inputControl))},dependencies:[v,f,b,g,y],styles:["button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{padding:.25rem .5rem}.actions[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:1rem;margin-bottom:2rem}"],changeDetection:0});let l=t;return l})();export{M as CounterComponent};