(function(e){function o(o){for(var t,l,u=o[0],s=o[1],i=o[2],m=0,d=[];m<u.length;m++)l=u[m],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&d.push(a[l][0]),a[l]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t]);c&&c(o);while(d.length)d.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var e,o=0;o<r.length;o++){for(var n=r[o],t=!0,u=1;u<n.length;u++){var s=n[u];0!==a[s]&&(t=!1)}t&&(r.splice(o--,1),e=l(l.s=n[0]))}return e}var t={},a={app:0},r=[];function l(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=t,l.d=function(e,o,n){l.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,o){if(1&o&&(e=l(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var t in e)l.d(n,t,function(o){return e[o]}.bind(null,t));return n},l.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(o,"a",o),o},l.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},l.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=o,u=u.slice();for(var i=0;i<u.length;i++)o(u[i]);var c=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,o,n){e.exports=n("56d7")},"034f":function(e,o,n){"use strict";var t=n("85ec"),a=n.n(t);a.a},"25bb":function(e,o,n){"use strict";var t=n("ba69"),a=n.n(t);a.a},4365:function(e,o,n){"use strict";var t=n("dfa1"),a=n.n(t);a.a},"56d7":function(e,o,n){"use strict";n.r(o);n("e260"),n("e6cf"),n("cca6"),n("a79d");var t=n("2b0e"),a=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{attrs:{id:"app"}},[n("Header"),n("b-container",[n("router-view")],1)],1)},r=[],l=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"header"},[n("b-navbar",{attrs:{toggleable:"sm",type:"dark",variant:"dark"}},[n("b-navbar-brand",{attrs:{href:"#"}},[e._v("Projeto de Bloco")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:"/"}},[e._v("Home")]),n("b-nav-item",{attrs:{to:"/professores"}},[e._v("Professores")]),n("b-nav-item",{attrs:{to:"/alunos"}},[e._v("Alunos")]),n("b-nav-item",{attrs:{to:"/nucleos"}},[e._v("Núcleos")])],1)],1)],1)],1)},u=[],s={name:"Header"},i=s,c=n("2877"),m=Object(c["a"])(i,l,u,!1,null,"6d1af28a",null),d=m.exports,p={name:"App",components:{Header:d},data:function(){return{}}},f=p,v=(n("034f"),Object(c["a"])(f,a,r,!1,null,null,null)),b=v.exports,_=n("8c4f"),h=function(){var e=this,o=e.$createElement;e._self._c;return e._m(0)},g=[function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"home"},[n("h1",[e._v("HOME")])])}],x={name:"Home"},y=x,A=Object(c["a"])(y,h,g,!1,null,"f55d2b28",null),k=A.exports,$=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"alunos"},[n("h1",[e._v("ALUNOS")]),n("div",[n("AdicionarAluno")],1),n("b-list-group",{attrs:{flush:""}},e._l(e.allAlunos,(function(o){return n("b-list-group-item",{key:o.id,class:{naoPaga:!o.mensalidadePaga}},[n("b-link",{attrs:{to:{name:"detalharAlunos",params:{id:o.id}}}},[e._v(" "+e._s(o.id)+" - "+e._s(o.nome)+" ")]),n("b-button",{staticClass:"fas fa-trash-alt",attrs:{pill:"",size:"sm",variant:"danger"},on:{click:function(n){return e.deleteAluno(o.id)}}},[e._v("Deletar")])],1)})),1)],1)},O=[],P=n("5530"),j=n("2f62"),C=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",[n("b-button",{attrs:{type:"button"},on:{click:e.mostrarFormulario}},[e._v("Adicionar Aluno")]),e.esconderFormulario?n("div",[n("h1",[e._v("Adicionar Novo Aluno")]),n("b-form",{on:{submit:function(o){return o.preventDefault(),e.onSubmit(o)}}},[n("b-form-group",{attrs:{label:"Nome do(a) aluno(a)"}},[n("b-form-input",{attrs:{type:"text",required:"",placeholder:"Entre com o nome do(a) aluno(a)"},model:{value:e.aluno_novo.nome,callback:function(o){e.$set(e.aluno_novo,"nome",o)},expression:"aluno_novo.nome"}})],1),n("b-form-group",{attrs:{label:"Nome do(a) responsável"}},[n("b-form-input",{attrs:{type:"text",required:"",placeholder:"Entre com o nome do(a) responsável"},model:{value:e.aluno_novo.responsavel,callback:function(o){e.$set(e.aluno_novo,"responsavel",o)},expression:"aluno_novo.responsavel"}})],1),n("b-form-group",{attrs:{label:"Rua"}},[n("b-form-input",{attrs:{type:"text",required:"",placeholder:"Entre com a rua da residência"},model:{value:e.aluno_novo.endereco.rua,callback:function(o){e.$set(e.aluno_novo.endereco,"rua",o)},expression:"aluno_novo.endereco.rua"}})],1),n("b-form-group",{attrs:{label:"Número"}},[n("b-form-input",{attrs:{type:"text",required:"",placeholder:"Entre com o número da residência"},model:{value:e.aluno_novo.endereco.numero,callback:function(o){e.$set(e.aluno_novo.endereco,"numero",o)},expression:"aluno_novo.endereco.numero"}})],1),n("b-form-group",{attrs:{label:"Complemento"}},[n("b-form-input",{attrs:{type:"text",placeholder:"Entre com o complemento da residência"},model:{value:e.aluno_novo.endereco.complemento,callback:function(o){e.$set(e.aluno_novo.endereco,"complemento",o)},expression:"aluno_novo.endereco.complemento"}})],1),n("b-form-group",{attrs:{label:"Email"}},[n("b-form-input",{attrs:{type:"email",required:"",placeholder:"Entre com o e-mail"},model:{value:e.aluno_novo.email,callback:function(o){e.$set(e.aluno_novo,"email",o)},expression:"aluno_novo.email"}})],1),n("b-form-group",{attrs:{label:"Telefone"}},[n("b-form-input",{attrs:{type:"text",required:"",placeholder:"Entre com o telefone"},model:{value:e.aluno_novo.telefone.numero,callback:function(o){e.$set(e.aluno_novo.telefone,"numero",o)},expression:"aluno_novo.telefone.numero"}})],1),n("b-form-group",{attrs:{required:"",label:"Tipo do telefone:"}},[n("b-form-radio",{attrs:{value:"Celular"},model:{value:e.aluno_novo.telefone.tipo,callback:function(o){e.$set(e.aluno_novo.telefone,"tipo",o)},expression:"aluno_novo.telefone.tipo"}},[n("strong",[e._v("Celular")])]),n("b-form-radio",{attrs:{value:"Residencial"},model:{value:e.aluno_novo.telefone.tipo,callback:function(o){e.$set(e.aluno_novo.telefone,"tipo",o)},expression:"aluno_novo.telefone.tipo"}},[n("strong",[e._v("Residencial")])]),n("b-form-radio",{attrs:{value:"Comercial"},model:{value:e.aluno_novo.telefone.tipo,callback:function(o){e.$set(e.aluno_novo.telefone,"tipo",o)},expression:"aluno_novo.telefone.tipo"}},[n("strong",[e._v("Comercial")])])],1),n("b-form-checkbox",{model:{value:e.aluno_novo.mensalidadePaga,callback:function(o){e.$set(e.aluno_novo,"mensalidadePaga",o)},expression:"aluno_novo.mensalidadePaga"}},[n("strong",[e._v("Mensalidade Paga")])]),n("b-row",{staticClass:"mt-2"},[n("b-col",{attrs:{sm:"2"}},[n("label",{attrs:{for:"textarea"}},[n("strong",[e._v("Comentários:")])])]),n("b-col",{attrs:{sm:"10"}},[n("b-form-textarea",{attrs:{id:"textarea",placeholder:"Informações adicionais"},model:{value:e.aluno_novo.comentarios,callback:function(o){e.$set(e.aluno_novo,"comentarios",o)},expression:"aluno_novo.comentarios"}})],1)],1),n("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")])],1)],1):e._e()],1)},E=[],I={name:"AdicionarAluno",data:function(){return{esconderFormulario:!1,aluno_novo:{nome:"",responsavel:"",endereco:{rua:"",numero:"",complemento:""},email:"",telefone:{numero:"",tipo:""},mensalidadePaga:""}}},methods:Object(P["a"])({},Object(j["b"])(["adicionarAluno"]),{onSubmit:function(){this.adicionarAluno(this.aluno_novo)},mostrarFormulario:function(){this.esconderFormulario=!this.esconderFormulario}})},R=I,S=(n("4365"),Object(c["a"])(R,C,E,!1,null,null,null)),w=S.exports,B={name:"Alunos",components:{AdicionarAluno:w},methods:Object(P["a"])({},Object(j["b"])(["deleteAluno","getAlunos"])),computed:Object(j["c"])(["allAlunos"]),created:function(){this.getAlunos()}},N=B,q=(n("25bb"),Object(c["a"])(N,$,O,!1,null,"43d4ae4c",null)),D=q.exports,H=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"professores"},[n("h1",[e._v("Professores")]),n("b-list-group",{attrs:{flush:""}},e._l(e.professoresOrdenados,(function(o){return n("b-list-group-item",{key:o.id,attrs:{button:""}},[e._v(" "+e._s(o.id)+" - "+e._s(o.nome)+" ")])})),1)],1)},M=[],T={name:"Professores",data:function(){return{professores:[{id:1,nome:"Leanne Graham",email:"Sincere@april.biz",telefone:"2199999991",endereco:{rua:"Rua Star",numero:"123",complemento:"Apto 112",cep:"20220021"}},{id:2,nome:"Ervin Howell",email:"Shanna@melissa.tv",telefone:"2199999992",endereco:{rua:"Rua Bourne",numero:"213",complemento:"Apto 204",cep:"20220022"}},{id:3,nome:"Clementine Bauch",email:"Nathan@yesenia.net",telefone:"2199999993",endereco:{rua:"Rua Ice",numero:"312",complemento:"Apto 303",cep:"20220023"}},{id:4,nome:"Patricia Lebsack",email:"Julianne.OConner@kory.org",telefone:"2199999994",endereco:{rua:"Rua Lalaland",numero:"404",complemento:"Casa 4",cep:"20220024"}},{id:5,nome:"Chelsey Dietrich",email:"Lucio_Hettinger@annie.ca",telefone:"2199999995",endereco:{rua:"Rua Lalaland",numero:"501",complemento:"Sobrado 5",cep:"20220020"}},{id:6,nome:"Dennis Schulist",email:"Karley_Dach@jasper.info",telefone:"2199999996",endereco:{rua:"Rua Plate",numero:"605",complemento:"Subsolo 6",cep:"20220026"}},{id:7,nome:"Kurtis Weissnat",email:"Telly.Hoeger@billy.biz",telefone:"2199999997",endereco:{rua:"Rua Porche",numero:"702",complemento:"Apto 1",cep:"20220027"}},{id:8,nome:"Nicholas Runolfsdottir V",email:"Sherwood@rosamond.me",telefone:"2199999998",endereco:{rua:"Rua Ferrari",numero:"817",complemento:"Apto 802",cep:"20220028"}},{id:9,nome:"Glenna Reichert",email:"Chaim_McDermott@dana.io",telefone:"2199999999",endereco:{rua:"Rua Musk",numero:"911",complemento:"Apto 904",cep:"20220029"}},{id:10,nome:"Clementina DuBuque",email:"Rey.Padberg@karina.biz",telefone:"2199999910",endereco:{rua:"Rua Hub",numero:"1011",complemento:"Casa 10",cep:"20220030"}}]}},computed:{professoresOrdenados:function(){var e=this.professores;return e.sort((function(e,o){return e.nome>o.nome?1:e.nome<o.nome?-1:0})),this.professores}}},F=T,L=Object(c["a"])(F,H,M,!1,null,"7dd492ee",null),z=L.exports,J=function(){var e=this,o=e.$createElement;e._self._c;return e._m(0)},G=[function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"nucleos"},[n("h1",[e._v("Núcleos")])])}],K={name:"Nucleos"},U=K,V=Object(c["a"])(U,J,G,!1,null,"45ca66ab",null),W=V.exports,Q=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",[e._m(0),n("b-card",[n("b-card-text",[n("strong",[e._v("ID")]),e._v(" "+e._s(e.alunoById(e.id).id))]),n("b-card-text",[n("strong",[e._v("Nome:")]),e._v(" "+e._s(e.alunoById(e.id).nome))]),n("b-card-text",[n("strong",[e._v("Responsável:")]),e._v(" "+e._s(e.alunoById(e.id).responsavel))]),n("b-card-text",[n("strong",[e._v("Endereço:")])]),n("b-card-text",[n("strong",[e._v("Rua:")]),e._v(" "+e._s(e.alunoById(e.id).endereco.rua))]),n("b-card-text",[n("strong",[e._v("Número:")]),e._v(" "+e._s(e.alunoById(e.id).endereco.numero))]),n("b-card-text",[n("strong",[e._v("Complemento:")]),e._v(" "+e._s(e.alunoById(e.id).endereco.complemento))]),n("b-card-text",[n("strong",[e._v("Email:")]),e._v(" "+e._s(e.alunoById(e.id).email))]),n("b-card-text",[n("strong",[e._v("Telefone:")])]),n("b-card-text",[n("strong",[e._v("Número:")]),e._v(" "+e._s(e.alunoById(e.id).telefone.numero))]),n("b-card-text",[n("strong",[e._v("Tipo:")]),e._v(" "+e._s(e.alunoById(e.id).telefone.tipo))]),n("b-card-text",[n("strong",[e._v("Mensalidade:")]),e._v(" "+e._s(e.alunoById(e.id).mensalidadePaga?"Paga":"Não Paga"))]),n("b-card-text",[n("strong",[e._v("Comentários:")]),e._v(" "+e._s(e.alunoById(e.id).comentarios))]),n("b-button",{on:{click:e.editar}},[e._v("Editar Informações")])],1),n("router-view")],1)},X=[function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",[n("h1",[e._v("Detalhar Aluno")])])}],Y={name:"DetalharAlunos",data:function(){return{id:this.$route.params.id}},computed:Object(j["c"])(["alunoById"]),methods:{editar:function(){this.$router.push({name:"edit-aluno",params:{id:this.id}})}}},Z=Y,ee=Object(c["a"])(Z,Q,X,!1,null,null,null),oe=ee.exports,ne=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",[n("h1",[e._v("Editar Aluno")]),n("b-form",{on:{submit:function(o){return o.preventDefault(),e.onSubmit(o)}}},[n("b-form-group",{attrs:{label:"Nome do(a) aluno(a)"}},[n("b-form-input",{attrs:{type:"text",required:""},model:{value:e.aluno_novo.nome,callback:function(o){e.$set(e.aluno_novo,"nome",o)},expression:"aluno_novo.nome"}})],1),n("b-form-group",{attrs:{label:"Nome do(a) responsável"}},[n("b-form-input",{attrs:{type:"text",required:""},model:{value:e.aluno_novo.responsavel,callback:function(o){e.$set(e.aluno_novo,"responsavel",o)},expression:"aluno_novo.responsavel"}})],1),n("b-form-group",{attrs:{label:"Rua"}},[n("b-form-input",{attrs:{type:"text",required:""},model:{value:e.aluno_novo.endereco.rua,callback:function(o){e.$set(e.aluno_novo.endereco,"rua",o)},expression:"aluno_novo.endereco.rua"}})],1),n("b-form-group",{attrs:{label:"Número"}},[n("b-form-input",{attrs:{type:"text",required:""},model:{value:e.aluno_novo.endereco.numero,callback:function(o){e.$set(e.aluno_novo.endereco,"numero",o)},expression:"aluno_novo.endereco.numero"}})],1),n("b-form-group",{attrs:{label:"Complemento"}},[n("b-form-input",{attrs:{type:"text"},model:{value:e.aluno_novo.endereco.complemento,callback:function(o){e.$set(e.aluno_novo.endereco,"complemento",o)},expression:"aluno_novo.endereco.complemento"}})],1),n("b-form-group",{attrs:{label:"Email"}},[n("b-form-input",{attrs:{type:"email",required:""},model:{value:e.aluno_novo.email,callback:function(o){e.$set(e.aluno_novo,"email",o)},expression:"aluno_novo.email"}})],1),n("b-form-group",{attrs:{label:"Telefone"}},[n("b-form-input",{attrs:{type:"text",required:""},model:{value:e.aluno_novo.telefone.numero,callback:function(o){e.$set(e.aluno_novo.telefone,"numero",o)},expression:"aluno_novo.telefone.numero"}})],1),n("b-form-group",{attrs:{required:"",label:"Tipo do telefone:"}},[n("b-form-radio",{attrs:{value:"Celular"},model:{value:e.aluno_novo.telefone.tipo,callback:function(o){e.$set(e.aluno_novo.telefone,"tipo",o)},expression:"aluno_novo.telefone.tipo"}},[n("strong",[e._v("Celular")])]),n("b-form-radio",{attrs:{value:"Residencial"},model:{value:e.aluno_novo.telefone.tipo,callback:function(o){e.$set(e.aluno_novo.telefone,"tipo",o)},expression:"aluno_novo.telefone.tipo"}},[n("strong",[e._v("Residencial")])]),n("b-form-radio",{attrs:{value:"Comercial"},model:{value:e.aluno_novo.telefone.tipo,callback:function(o){e.$set(e.aluno_novo.telefone,"tipo",o)},expression:"aluno_novo.telefone.tipo"}},[n("strong",[e._v("Comercial")])])],1),n("b-form-checkbox",{model:{value:e.aluno_novo.mensalidadePaga,callback:function(o){e.$set(e.aluno_novo,"mensalidadePaga",o)},expression:"aluno_novo.mensalidadePaga"}},[n("strong",[e._v("Mensalidade Paga")])]),n("b-row",{staticClass:"mt-2"},[n("b-col",{attrs:{sm:"2"}},[n("label",{attrs:{for:"textarea"}},[n("strong",[e._v("Comentários:")])])]),n("b-col",{attrs:{sm:"10"}},[n("b-form-textarea",{attrs:{id:"textarea",placeholder:"Informações adicionais"},model:{value:e.aluno_novo.comentarios,callback:function(o){e.$set(e.aluno_novo,"comentarios",o)},expression:"aluno_novo.comentarios"}})],1)],1),n("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")])],1)],1)},te=[],ae={name:"EditarAluno",data:function(){return{id:this.$route.params.id,aluno_novo:{nome:"",responsavel:"",endereco:{rua:"",numero:"",complemento:""},email:"",telefone:{numero:"",tipo:""},mensalidadePaga:""}}},computed:Object(j["c"])(["alunoById"]),created:function(){this.aluno_novo=this.alunoById(this.id)},methods:Object(P["a"])({},Object(j["b"])(["editarAluno"]),{onSubmit:function(){this.editarAluno(this.aluno_novo),alert("Dados editados!!")}})},re=ae,le=Object(c["a"])(re,ne,te,!1,null,null,null),ue=le.exports;t["default"].use(_["a"]);var se=new _["a"]({mode:"history",routes:[{path:"/",name:"home",component:k},{path:"/alunos",name:"alunos",component:D},{path:"/professores",name:"professores",component:z},{path:"/nucleos",name:"nucleos",component:W},{path:"/alunos/:id",name:"detalharAlunos",component:oe,children:[{path:"edit",name:"edit-aluno",component:ue}]}]}),ie=(n("4de4"),n("c740"),n("a434"),n("bc3a")),ce=n.n(ie),me={alunos:[]},de={allAlunos:function(e){return e.alunos},alunoById:function(e){return function(o){return e.alunos.filter((function(e){return e.id==o}))[0]}}},pe={deleteAluno:function(e,o){var n=e.commit;n("removeAluno",o)},getAlunos:function(e){var o=e.commit;ce.a.get("json/alunos.json").then((function(e){o("getAlunos",e.data.alunos)}))},adicionarAluno:function(e,o){var n=e.commit,t=0,a=1;0!==me.alunos.length&&(t=me.alunos[me.alunos.length-1],a=parseInt(t.id)+1);var r={id:a,nome:o.nome,responsavel:o.responsavel,endereco:{rua:o.endereco.rua,numero:o.endereco.numero,complemento:o.endereco.complemento},email:o.email,telefone:{numero:o.telefone.numero,tipo:o.telefone.tipo},mensalidadePaga:o.mensalidadePaga,comentarios:o.comentarios};n("novoAluno",r)},editarAluno:function(e,o){var n=e.commit;n("editarAluno",o)}},fe={getAlunos:function(e,o){return e.alunos=o},removeAluno:function(e,o){return e.alunos=e.alunos.filter((function(e){return e.id!==o}))},novoAluno:function(e,o){return e.alunos.push(o)},editarAluno:function(e,o){var n=e.alunos.findIndex((function(e){return e.id===o.id}));-1!==n&&e.alunos.splice(n,1,o)}},ve={state:me,actions:pe,getters:de,mutations:fe};t["default"].use(j["a"]);var be=new j["a"].Store({modules:{alunos:ve}}),_e=n("5f5b"),he=n("b1e0");n("f9e3"),n("2dd8");t["default"].config.productionTip=!1,t["default"].use(_e["a"]),t["default"].use(he["a"]),new t["default"]({store:be,router:se,render:function(e){return e(b)}}).$mount("#app")},"85ec":function(e,o,n){},ba69:function(e,o,n){},dfa1:function(e,o,n){}});
//# sourceMappingURL=app.1690e99d.js.map