(this.webpackJsonpnutrition_react=this.webpackJsonpnutrition_react||[]).push([[0],{102:function(e,t,a){e.exports=a(140)},107:function(e,t,a){},117:function(e,t){},118:function(e,t){},140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),o=a.n(i),l=(a(107),a(108),a(57),a(15)),c=(a(67),a(193)),u=a(196),s=a(178),m=a(56),d=a(174),p=a(177);function f(e){var t=e.file_name,a=h();return r.a.createElement(d.a,{position:"static"},r.a.createElement(p.a,null,r.a.createElement(m.a,{variant:"h6",className:a.title},t)))}var h=Object(s.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,textAlign:"left"}}}));function g(e){e.file_name;var t=b();return r.a.createElement(u.a,{component:"span",className:t.boxParentSize},r.a.createElement(f,{file_name:"Meal Calculator"}))}var b=Object(s.a)({root:{background:"linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:100},boxParentSize:{height:100,width:"80%",padding:"0 30px"}}),_=a(37),v=a(44),E=a.n(v),x=a(62),O=a(55),j=a(61),y=a.n(j);function S(e){var t=e.stateMutator,a=e.spreadSheetMutator,i=e.spreadSheetCompoMutator,o=e.setAlimentPortionMutator,l=e.setLoadingMutator,c=e.setFileName,u=e.setAlimentOptions,s=w();Object(n.useEffect)((function(){l(!0),d(window.location.href+"/"+encodeURIComponent("meal_calculator.xlsx"))}),[]);var d=function(){var e=Object(x.a)(E.a.mark((function e(a){var n,r,i,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a,{responseType:"blob"});case 2:return n=e.sent,e.next=5,n.blob();case 5:return r=e.sent,i=new File([r],"source_file.xlsx",{type:n.headers.get("content-type")}),(o=new FileReader).onload=function(){var e=Object(x.a)(E.a.mark((function e(a){var n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.target.result,r=O.read(n,{type:"binary"}),e.next=4,p(r);case 4:return e.next=6,f(r);case 6:return e.next=8,l(!1);case 8:return e.next=10,t(!0);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c(i.name),console.log(i),e.next=13,o.readAsBinaryString(i);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.SheetNames[0],n=e.Sheets[t],r=O.utils.sheet_to_json(n,{header:1}),i={},l=0;i.aliments=[],r.forEach((function(e){1!==++l&&null!=e[0]&&0!==e.length&&i.aliments.push({aliment:e[2],sous_groupe_alimentaire:e[1],groupe_alimentaire:e[0],portion:e[3]})})),a(i);var c={};i.aliments.forEach((function(e){c[e.aliment]=e.portion})),o(c)},f=function(e){var t=e.SheetNames[1],a=e.Sheets[t],n=O.utils.sheet_to_json(a,{header:1}),r=h(n);i(r);var o={};n.map((function(e,t){0!=t&&(o.hasOwnProperty(e[0])||(o[e[0]]=[]),o[e[0]].push(e[2]))})),u(o)},h=function(e){var t={aliments_data_nutrient_ref:[],nutrient_headers:[]};return e.forEach((function(e,a){0!==a?t.aliments_data_nutrient_ref.push(Object(_.a)({},e[2],{alim_nom_fr:e[2],alim_grp_nom_fr:e[0],alim_ssgrp_nom_fr:e[1],les_nutrients:[{id:++a,nutrient:t.nutrient_headers[0],value:e[3].toString().replace(",",".")},{id:++a,nutrient:t.nutrient_headers[1],value:e[4].toString().replace(",",".")},{id:++a,nutrient:t.nutrient_headers[2],value:e[5].toString().replace(",",".")},{id:++a,nutrient:t.nutrient_headers[3],value:e[6].toString().replace(",",".")},{id:++a,nutrient:t.nutrient_headers[4],value:e[7].toString().replace(",",".")},{id:++a,nutrient:t.nutrient_headers[5],value:e[8].toString().replace(",",".")},{id:++a,nutrient:t.nutrient_headers[6],value:e[9].toString().replace(",",".")},{id:++a,nutrient:t.nutrient_headers[7],value:e[10].toString().replace(",",".")},{id:++a,nutrient:t.nutrient_headers[1]+" "+t.nutrient_headers[3],value:parseFloat(e[4].toString().replace(",","."))+parseFloat(e[6].toString().replace(",","."))}]})):t.nutrient_headers=g(e)})),t},g=function(e){return e.push("Eau + Alcool (g/100g)"),e.slice(3)};return r.a.createElement("div",{className:s.root},r.a.createElement(m.a,{variant:"h5",gutterBottom:!0,color:"primary"},"Loading ..."))}var w=Object(s.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},input:{display:"none"}}})),C=a(194),k=a(90),N=a(179),F=a(183),A=a(45),D=a(54),I=a(180),L=a(199),M=a(181),B=a(182),R=a(184),T=a(195),P=a(186),z=a(187),G=a(188),W=a(189),U=a(190),J=a(191),$=a(197);function q(e){var t=e.id,a=e.aliment,i=e.sous_groupe,o=e.groupe_alimentaire,c=e.portion,u=e.spreadsheetData,s=e.setSpreadsheetData,d=e.nutrientCompo,p=e.setAlimentPortion,f=e.aliment_portion,h=e.aliment_options,g=V(),b=Object(n.useState)(!1),v=Object(l.a)(b,2),E=v[0],x=v[1],O=Object(n.useState)(""),j=Object(l.a)(O,2),S=j[0],w=j[1],C=Object(n.useState)(c),D=Object(l.a)(C,2),q=D[0],H=D[1],K=Object(n.useState)(""),Q=Object(l.a)(K,2),X=Q[0],Y=Q[1];return Object(n.useEffect)((function(){var e=d.aliments_data_nutrient_ref[d.aliments_data_nutrient_ref.findIndex((function(e){return a===Object.keys(e)[0]}))][a].alim_grp_nom_fr;Y(e),y()({method:"get",url:"https://api.allorigins.win/get?url=".concat(encodeURIComponent("https://yandex.com/images/search?text="+a+"&isize=medium"))}).then((function(e){var t=e.data.contents,a=t.indexOf('"freshness":"normal","preview"'),n=t.indexOf("https",a),r=t.indexOf("fileSizeInBytes",n),i=t.substring(n,r-3);w(i),x(!0)})).catch((function(e){console.warn(e)}))}),[a,h]),r.a.createElement(N.a,{className:g.card},r.a.createElement(I.a,{avatar:r.a.createElement(L.a,{"aria-label":"recipe",className:g.avatar},null!=a?a[0]:""),title:r.a.createElement(m.a,{variant:"h5",color:"primary",component:"p"},a),subheader:"Sous-Groupe Alimentaire ".concat(i)}),E?r.a.createElement(M.a,{className:g.media,image:S,title:a}):r.a.createElement(B.a,null),r.a.createElement(F.a,null,r.a.createElement(m.a,{variant:"subtitle1",color:"primary",component:"p"},"Groupe Alimentaire: ",o)),r.a.createElement(R.a,{disableSpacing:!0}),r.a.createElement(F.a,null,r.a.createElement(m.a,{paragraph:!0},"Les Aliments"),r.a.createElement(T.a,{required:!0,InputLabelProps:{shrink:!0},type:"number",min:0,id:a,label:"PORTION",variant:"filled",value:q,onChange:function(e){""!==e.target.value?(H(Number.parseFloat(e.target.value)),p(Object(A.a)(Object(A.a)({},f),{},Object(_.a)({},a,Number.parseFloat(e.target.value)))),Number.parseFloat(e.target.value)<0&&H(0)):H(e.target.value)}}),r.a.createElement($.a,{onChange:function(e,a){return function(e){var a=d.aliments_data_nutrient_ref[d.aliments_data_nutrient_ref.findIndex((function(t){return e===Object.keys(t)[0]}))][e].alim_grp_nom_fr,n=d.aliments_data_nutrient_ref[d.aliments_data_nutrient_ref.findIndex((function(t){return e===Object.keys(t)[0]}))][e].alim_ssgrp_nom_fr;u.aliments.splice(t,1,{aliment:e,sous_groupe_alimentaire:n,groupe_alimentaire:a,portion:q}),x(!1),s(Object(A.a)(Object(A.a)({},u),{},{aliments:u.aliments}))}(a)},options:h[X]||[],getOptionLabel:function(e){return e},renderInput:function(e){return r.a.createElement(T.a,Object.assign({},e,{label:"Change Aliment",margin:"normal"}))}}),r.a.createElement(P.a,{component:k.a,style:{display:"none"}},r.a.createElement(z.a,{className:g.table,"aria-label":"simple table"},r.a.createElement(G.a,null,r.a.createElement(W.a,null,r.a.createElement(U.a,null,r.a.createElement("strong",null,"Le Nutriment")),r.a.createElement(U.a,{align:"right"},r.a.createElement("strong",null,"Value")))),r.a.createElement(J.a,null,d.aliments_data_nutrient_ref[d.aliments_data_nutrient_ref.findIndex((function(e){return a===Object.keys(e)[0]}))][a].les_nutrients.map((function(e){return r.a.createElement(W.a,{key:e.id},r.a.createElement(U.a,{component:"th",scope:"row"},e.nutrient),r.a.createElement(U.a,{align:"right"},(Number.parseFloat(e.value)*Number.parseFloat(q)).toFixed(2)))})))))))}var V=Object(s.a)((function(e){return{card:{width:window.innerWidth-30,margin:1,marginTop:10,marginBottom:50},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:D.a[500]},table:{width:250}}})),H=a(5),K=a(201),Q=a(200),X=a(192),Y=a(83),Z=a.n(Y);function ee(e){var t=e.aliment_portion,a=e.nutrientCompo,n=Object(H.a)((function(e){return{root:{height:8},disabled:{color:e.palette.primary.main},thumb:{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor",marginTop:-8,marginLeft:-12,"&:focus, &:hover, &$active":{boxShadow:"inherit"}},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{height:8,borderRadius:4},rail:{height:8,borderRadius:4}}}))(K.a),i=te(),o=[{icon:"done",backgroundColor:"#70AB1A",textColor:"white"},{icon:"error_outline",backgroundColor:"#D8AD26",textColor:"white"},{icon:"close",backgroundColor:"#D14600",textColor:"white"},{icon:"",backgroundColor:"#ffffff",textColor:"black"}],l=[{color:"#72DC00"},{color:"#D29D23"},{color:"#A93226"}],c=[{mid:2250,high:3e3},{mid:0,high:0},{mid:69,high:92},{mid:0,high:0},{mid:600,high:800},{mid:1875,high:2500},{mid:1500,high:2e3},{mid:0,high:0},{mid:0,high:1200}];return r.a.createElement("div",{className:i.root},a.nutrient_headers.map((function(e,u){var s,d=0;if(e){var p=Object.keys(t).reduce((function(e,n){var r=a.aliments_data_nutrient_ref[a.aliments_data_nutrient_ref.findIndex((function(e){return n===Object.keys(e)[0]}))][n].les_nutrients[u].value;return e+t[n]*Number.parseFloat(r)}),0);d=p>=c[u].high?2:p>c[u].mid?1:0,0===c[u].high&&(d=3);var f=(p/c[u].high*100).toFixed(0);return s=f>=75?2:f>=50?1:0,r.a.createElement("div",{key:u,style:{marginBottom:20,width:"95%",paddingTop:10}},"Eau (g/100g)"!=e&&"Alcool (g/100g)"!=e&&"Glucides (g/100g)"!=e?r.a.createElement("div",null,r.a.createElement(n,{valueLabelFormat:function(e){return e+"%"},"aria-label":"pretto slider",value:f,valueLabelDisplay:"on",step:1,style:{color:l[s].color}}),r.a.createElement(m.a,{gutterBottom:!0},e,": ",r.a.createElement("b",null,p.toFixed(2)," "))):r.a.createElement(Q.a,{key:u,style:{margin:"0.5%",backgroundColor:o[d].backgroundColor,color:o[d].textColor},icon:r.a.createElement(Z.a,{style:{color:o[d].textColor}}),variant:"outlined",label:r.a.createElement(m.a,{className:i.nutrientText},e,": ",r.a.createElement("b",null,p.toFixed(2)," ")),onDelete:function(e){},deleteIcon:r.a.createElement(X.a,null,o[d].icon)}))}})))}var te=Object(s.a)((function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap",listStyle:"none",padding:e.spacing(.5),margin:5},title:{fontSize:24,justifyContent:"center"},nutrientText:{fontSize:12},chipColor:{borderColor:"green"}}})),ae=a(89);function ne(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],i=t[1],o=Object(n.useState)("No File Uploaded"),s=Object(l.a)(o,2),d=s[0],p=s[1],f=Object(n.useState)({}),h=Object(l.a)(f,2),b=h[0],_=h[1],v=Object(n.useState)({}),E=Object(l.a)(v,2),x=E[0],O=E[1],j=Object(n.useState)({}),y=Object(l.a)(j,2),w=y[0],A=y[1],D=Object(n.useState)(!1),I=Object(l.a)(D,2),L=I[0],M=I[1],B=Object(n.useState)([]),R=Object(l.a)(B,2),T=R[0],P=R[1],z=re();return Object(n.useEffect)((function(){if("undefined"!=typeof x.aliments){var e={};x.aliments.forEach((function(t){e[t.aliment]=t.portion})),_(e)}}),[x,T]),r.a.createElement(c.a,null,r.a.createElement(g,{file_name:d}),!a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{stateMutator:i,spreadSheetMutator:O,spreadSheetCompoMutator:A,setAlimentPortionMutator:_,setLoadingMutator:M,setFileName:p,setAlimentOptions:P})),L&&r.a.createElement(C.a,{style:{marginTop:10}}),a&&r.a.createElement(k.a,{elevation:3,className:z.root},r.a.createElement(N.a,{className:z.summary_root},r.a.createElement(F.a,null,r.a.createElement(m.a,{className:z.title},"Summaries"),r.a.createElement(ee,{aliment_portion:b,nutrientCompo:w}))),r.a.createElement(ae.a,{itemsToShow:1},x.aliments.map((function(e,t){return r.a.createElement(q,{id:t,key:t,aliment:null!=e?e.aliment:"",sous_groupe:null!=e?e.sous_groupe_alimentaire:"",groupe_alimentaire:null!=e?e.groupe_alimentaire:"",portion:null!=e?e.portion:"",spreadsheetData:x,setSpreadsheetData:O,nutrientCompo:w,setAlimentPortion:_,aliment_portion:b,aliment_options:T})}))),r.a.createElement(u.a,{component:"span",m:1})))}var re=Object(s.a)({root:{background:"linear-gradient(45deg, rgba(255,255,255,0.9) 30%, #rgba(225,225,255,0.4) 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(10, 10, 0, .1)",color:"white"},food_card:{flexGrow:1},summary_root:{width:"100%",flex:1},myCardRow:{flexDirection:"row"},myCardColumn:{flexDirection:"column"},title:{fontSize:24,justifyContent:"center"}});var ie=function(){return r.a.createElement(ne,null)};var oe=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(ie,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},57:function(e,t,a){},67:function(e,t,a){},69:function(e,t){}},[[102,1,2]]]);
//# sourceMappingURL=main.319aaf15.chunk.js.map