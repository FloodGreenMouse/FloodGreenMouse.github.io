(function(t){function e(e){for(var n,r,i=e[0],l=e[1],c=e[2],u=0,f=[];u<i.length;u++)r=i[u],o[r]&&f.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var l=a[i];0!==o[l]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},o={app:0},s=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1e90":function(t,e,a){"use strict";var n=a("6821"),o=a.n(n);o.a},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container-fluid"},[a("NavBar"),a("Notes",{attrs:{newNote:t.newNote}}),a("AddNote",{on:{saveNote:t.addNote}})],1)])},s=[],r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"navbar navbar-light bg-light"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[n("img",{attrs:{src:a("cf05"),width:"30",height:"30",alt:"Logo"}}),t._v(" JustNotes\n\t\t\t")])])])}],l={name:"NavBar"},c=l,d=(a("7191"),a("2877")),u=Object(d["a"])(c,r,i,!1,null,null,null);u.options.__file="NavBar.vue";var f=u.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row mt-5"},t._l(t.newNote,function(e,n){return a("div",{staticClass:"card-deck d-block"},[a("div",{staticClass:"card bg-light mb-4 mr-5",staticStyle:{"max-width":"18rem"}},[a("div",{staticClass:"card-header"},[t._v("Заметка #"+t._s(n+1)+": "+t._s(e.cardHeader))]),a("div",{staticClass:"card-body"},[a("p",{staticClass:"card-text"},[t._v(t._s(e.cardText))])])])])}))])},v=[],m={name:"Notes",data:function(){return{}},props:["newNote"]},b=m,h=(a("f5f1"),Object(d["a"])(b,p,v,!1,null,"10d212b0",null));h.options.__file="Notes.vue";var w=h.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-modal",{attrs:{size:"sm","ok-disabled":!t.noteText},on:{ok:function(e){t.saveNote(t.cardTitle,t.noteText)}},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[a("div",{attrs:{slot:"modal-title"},slot:"modal-title"},[a("div",{staticClass:"input-group mb-3"},[a("div",{staticClass:"d-flex"},[t.newCardHeader?a("h4",{staticClass:"mr-4 ml-auto mt-auto mb-auto"},[t._v("\n\t\t\t\t\t\tНовая заметка\n\t\t\t\t\t")]):t._e(),t.newCardHeader?a("button",{staticClass:"btn btn-outline-secondary btn-sm m-0",attrs:{type:"button"},on:{click:function(e){t.newCardHeader=!1}}},[a("i",{staticClass:"fas fa-pencil-alt"})]):t._e()]),t.newCardHeader?t._e():a("input",{directives:[{name:"model",rawName:"v-model",value:t.cardTitle,expression:"cardTitle"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Название","aria-label":"Название","aria-describedby":"basic-addon2"},domProps:{value:t.cardTitle},on:{input:function(e){e.target.composing||(t.cardTitle=e.target.value)}}}),a("div",{staticClass:"input-group-append"},[t.newCardHeader?t._e():a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(e){t.newCardHeader=!0}}},[a("i",{staticClass:"fas fa-times"})])])])]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.noteText,expression:"noteText"}],staticClass:"textarea",attrs:{name:"",id:"",cols:"30",rows:"5"},domProps:{value:t.noteText},on:{input:function(e){e.target.composing||(t.noteText=e.target.value)}}})]),a("div",{staticClass:"row mt-5"},[a("div",{staticClass:"col"}),a("div",{staticClass:"col text-center justify-content-bottom align-self-end"},[a("button",{directives:[{name:"show",rawName:"v-show",value:!t.showModal,expression:"!showModal"}],staticClass:"btn btn-outline-success",attrs:{type:"button",title:"Новая заметка"},on:{click:function(e){t.showModal=!t.showModal,t.noteText="",t.cardTitle="",t.newCardHeader=!0}}},[a("i",{staticClass:"fas fa-plus"})])]),a("div",{staticClass:"col"})])],1)},_=[],g={name:"AddNote",data(){return{showModal:!1,noteText:"",cardTitle:"",newCardHeader:!0,newMassCard:[]}},methods:{saveNote:function(t,e){""===t&&(t="Новая заметка"),this.newMassCard.push({cardHeader:t,cardText:e}),this.$emit("saveNote",{newNote:this.newMassCard})}}},x=g,N=(a("1e90"),Object(d["a"])(x,C,_,!1,null,null,null));N.options.__file="AddNote.vue";var y=N.exports,T={name:"app",data(){return{newNote:[]}},components:{NavBar:f,Notes:w,AddNote:y},methods:{addNote(t){this.newNote=t.newNote,console.log(this.newNote)}}},M=T,j=(a("7c55"),Object(d["a"])(M,o,s,!1,null,null,null));j.options.__file="App.vue";var O=j.exports,k=a("9f7b");a("f9e3"),a("2dd8");n["a"].use(k["a"]),n["a"].config.productionTip=!1,new n["a"]({render:t=>t(O)}).$mount("#app")},6821:function(t,e,a){},7191:function(t,e,a){"use strict";var n=a("a147"),o=a.n(n);o.a},"7c55":function(t,e,a){"use strict";var n=a("d3dd"),o=a.n(n);o.a},a147:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"../img/logo.e3320f68.png"},d069:function(t,e,a){},d3dd:function(t,e,a){},f5f1:function(t,e,a){"use strict";var n=a("d069"),o=a.n(n);o.a}});
//# sourceMappingURL=app.893ed14c.js.map