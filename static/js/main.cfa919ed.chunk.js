(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),s=(n(13),n(14),n(1)),l=n(2),i=n(4),u=n(3),h=n(5),m=function(e){var t=e.id,n=e.name,a=e.username,o=e.email;return r.a.createElement("div",{className:"bg-light-green br3 grow pa3 ma2 dib shadow-2"},r.a.createElement("img",{className:"img-size",src:"https://robohash.org/test ".concat(t,"?200x200"),alt:"robo"}),r.a.createElement("div",null,r.a.createElement("h3",null,"Name: ",n),r.a.createElement("p",null,"Username: ",a),r.a.createElement("p",null,"Email: ",o)))},d=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,n){return r.a.createElement(m,{key:n,id:t[n].id,name:t[n].name,username:t[n].username,email:t[n].email})})))},f=function(e){e.searchfield;var t=e.searchItem;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},b=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"4px solid #fff",height:"800px"}},e.children)},p=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={hasError:!1},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"ooppppsss there is an error there"):this.props.children}}]),t}(a.Component),E=(n(15),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(f,{searchItem:this.onSearchChange}),r.a.createElement(b,null,r.a.createElement(p,null,r.a.createElement(d,{robots:a})))):r.a.createElement("h1",null,"Loading ...")}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.cfa919ed.chunk.js.map