(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{40:function(e,t,a){e.exports=a.p+"static/media/datastax.3cce230e.jpg"},41:function(e,t,a){e.exports=a(72)},69:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(36),o=a(11),c=a(6),i=a(13),s=a(14),m=a(17),u=a(16),d=a(73),h=a(76),f=a(77),p=a(15),E=a.n(p),x=a(37),b=a(12),C=a.n(b),g=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={fileList:[],file:void 0,url:"",timer:!1},n}return Object(s.a)(a,[{key:"onChangeHandler",value:function(e){this.setState({file:e.target.value,timer:!1})}},{key:"onClickHandler",value:function(e){var t=this;e.preventDefault();var a=new FormData;a.append("file",this.state.file),C.a.put("/put-url",a,{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){t.setState({url:e.data,timer:!0})})).catch((function(e){return console.log(e)}))}},{key:"componentDidMount",value:function(){var e=this;C.a.get("/get-list").then((function(t){e.setState({fileList:t.data.items,file:t.data.items[0]})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement(E.a,{animateIn:"fadeInUp"},l.a.createElement(d.a,{className:"my-3"},l.a.createElement("h4",{className:"text-white",style:y.borders},"Download File from S3 Bucket"),l.a.createElement(h.a,null,l.a.createElement(h.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(h.a.Control,{as:"select",onChange:this.onChangeHandler.bind(this),value:this.state.file},this.state.fileList.map((function(e,t){return l.a.createElement("option",{key:t},e)})))),l.a.createElement(f.a,{className:"text-white",style:y.secondaryBGColor,disabled:void 0===this.state.file,onClick:this.onClickHandler.bind(this)},"Create Link")),l.a.createElement("h4",{className:"text-white pt-5",style:y.borders},"Downloadable Link"),!1===this.state.timer?l.a.createElement("p",{className:"text-white"},'Select a file then press "Create Link" Button'):l.a.createElement("div",null,l.a.createElement("a",{className:"text-white",href:this.state.url},this.state.url),l.a.createElement("h5",{className:"text-white pt-3",style:y.borders},"Link will expire in ",l.a.createElement(x.a,{date:Date.now()+59e3,renderer:function(e){return l.a.createElement("span",null,e.seconds," seconds")}})))))}}]),a}(l.a.Component),y={borders:{textShadow:"2px 2px #1F2438"},secondaryBGColor:{backgroundColor:"#1F2438"},secondaryColor:{color:"#1F2438"}},v=g,w=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={path:"Choose File",file:null},n}return Object(s.a)(a,[{key:"onChangeHandler",value:function(e){e.target.files[0]&&this.setState({path:e.target.files[0].name,file:e.target.files[0]})}},{key:"onClickHandler",value:function(e){e.preventDefault();var t=new FormData;t.append("file",this.state.file),C.a.post("/post-file",t,{headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"*"}}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),this.setState({path:"Choose File",file:null})}},{key:"render",value:function(){return l.a.createElement(E.a,{animateIn:"fadeInUp"},l.a.createElement(d.a,{className:"my-3"},l.a.createElement("h4",{className:"text-white",style:k.textBorder},"Upload File to S3 Bucket"),l.a.createElement(h.a,null,l.a.createElement(h.a.File,{onChange:this.onChangeHandler.bind(this),label:this.state.path,custom:!0}),l.a.createElement(f.a,{className:"mt-3 text-white",style:k.secondaryBGColor,disabled:null===this.state.file,onClick:this.onClickHandler.bind(this)},"Upload File"))))}}]),a}(l.a.Component),k={textBorder:{textShadow:"2px 2px #1F2438"},secondaryBGColor:{backgroundColor:"#1F2438"}},N=w;function F(){return l.a.createElement("div",null,l.a.createElement(c.a,{exact:!0,path:"/",component:N}),l.a.createElement(c.a,{exact:!0,path:"/get",component:v}))}var B=a(74),S=a(38),j=a(75),O=a(22),D=a(40),H=a.n(D);a(69);function L(){return l.a.createElement(d.a,{fluid:!0,className:"bg-white pb-2",style:G.containerBorder},l.a.createElement(B.a,{className:"justify-content-center"},l.a.createElement(S.a,{className:"pr-0 mt-1"},l.a.createElement(j.a,{fluid:!0,className:"float-right mt-1",src:H.a,alt:"datastax logo"})),l.a.createElement(S.a,{style:{marginTop:"1.7rem",letterSpacing:"3px"}},l.a.createElement("h4",{className:"text-uppercase font-weight-bold"},"Assignment"))),l.a.createElement(B.a,{className:"justify-content-center"},l.a.createElement(S.a,null,l.a.createElement(o.b,{activeClassName:"secondary-color",className:"primary-color float-right text-decoration-none",exact:!0,to:"/",title:"Send File"},"upload ",l.a.createElement(O.b,null))),l.a.createElement(S.a,null,l.a.createElement(o.b,{activeClassName:"secondary-color",className:"primary-color text-decoration-none",exact:!0,to:"/get",title:"Get File"},l.a.createElement(O.a,null)," download"))))}var G={textBorder:{color:"#1F2438",textShadow:"2px 2px #055992"},containerBorder:{borderBottom:"15px solid",borderColor:"#1F2438",width:"100%"}},I=(a(70),a(71),function(){return l.a.createElement("div",null,l.a.createElement(o.a,null,l.a.createElement(L,null),l.a.createElement(F,null)))});Object(r.render)(l.a.createElement(I,null),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.64bd1d2c.chunk.js.map