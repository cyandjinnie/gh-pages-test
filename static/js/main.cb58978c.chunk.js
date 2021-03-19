(this["webpackJsonpcoolstory-ai"]=this["webpackJsonpcoolstory-ai"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),s=n(11),c=n.n(s),i=(n(16),n(4)),o=n(5),h=n(8),l=n(7),u=n(1),d=n.n(u),j=n(3),p=n(10);var b=function(e,t){var n;return n=t&&t.headers?t.headers:{},fetch("".concat("https://r4xp4nhmja.execute-api.eu-west-2.amazonaws.com/default").concat(e),Object(p.a)(Object(p.a)({},t),{},{headers:n}))},v=function(){var e=Object(j.a)(d.a.mark((function e(t,n,r){var a,s,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=5,b("",{method:"POST",headers:{"Content-Type":"Application/json"},body:JSON.stringify({method:t,id:n,params:r})});case 5:if((a=e.sent).ok){e.next=8;break}throw Error("APIRequest: Couldn't get '"+t+"' response");case 8:return e.next=10,a.json();case 10:if(s=e.sent,c=s.result,"ok"===s.status){e.next=15;break}throw Error("APIRequest: '"+t+"' request failed");case 15:return e.abrupt("return",c);case 16:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),x=function(){var e=void 0;return{NewCharacter:function(e,t){return v("new_character",e,{desc:t})},ChangeMood:function(e,t){return v("change_mood",e,{mood:t})},TriggerEvent:function(e,t,n){return v("trigger_event",e,{event_desc:t,attitude:n})},GetReplyFromCharacter:function(e,t,n){return v("request_reply",e,{user_message:t,user_name:n})},CreateUserSession:function(){var t=Object(j.a)(d.a.mark((function t(){var n,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={},t.next=3,v("create_user_session",n);case 3:if(r=t.sent){t.next=6;break}throw Error("Loading session failed!");case 6:e=r;case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),GetUserSession:function(){var t=e;if(!t)throw Error("Has no session");return t}}}(),f=function(){var e=!1;var t=null,n=null;function r(){if(!e)throw Error("Not loaded!")}return{LoadData:function(){if(!e)return fetch("npcs.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(r){t=r.list,n=r.npcs,e=!0}))},NPCList:function(){r();var e=t;if(!e)throw Error("Couldn't load character list");return e},GetNPC:function(e){r();var t=n[e];if(!t)throw Error("Couldn't find character '"+e+"'");return t}}}(),C=(n(18),n(6)),y=(n(19),n(0)),O=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).changeCharacterHandler=function(e){switch(e.preventDefault(),e.target.id){case"TrevorButton":r.setCharByName("trevor");break;case"LandaButton":r.setCharByName("landa");break;case"CourtneyButton":r.setCharByName("courtney");break;case"CustomButton":r.setBlankCharacter();break;default:console.error("Error in changeCharacterHandler")}},r.changeMoodHandler=function(e){e.preventDefault();var t=e.target.id;switch(console.log(t),t){case"NeutralMoodButton":r.changeMood("neutral");break;case"JoyMoodButton":r.changeMood("joy");break;case"EnvyMoodButton":r.changeMood("envy");break;case"FearMoodButton":r.changeMood("fear");break;default:console.error("Error in changeMoodHandler")}},r.presetEventHandler=function(e){e.preventDefault();var t=e.target.id;switch(t){case"FlowersEvent":case"CarCrashEvent":case"DisrespectEvent":console.log(t);break;default:console.error("Error in presetEventHandler")}},r.textInputHandler=function(e){e.preventDefault();var t=e.target.id,n=e.target.value;switch(t){case"CharName":case"CharStartLine":case"CharDesc":case"PlayerName":case"PlayerDesc":if(r.descriptionLock)return;break;case"EventDescInput":case"ChatInput":break;default:console.error("Error in textInputHandler")}r.setState(Object(C.a)({},t,n))},r.changeEventReaction=function(e){e.preventDefault();var t=e.target.value;console.log(t),r.setState({EventReaction:t})},r.bindHandlers(),r.state=r.getInitialState(),r.api_lock=!1,r.descriptionLock=!1,r}return Object(o.a)(n,[{key:"bindHandlers",value:function(){this.changeCharacterHandler=this.changeCharacterHandler.bind(this),this.changeMoodHandler=this.changeMoodHandler.bind(this),this.presetEventHandler=this.presetEventHandler.bind(this),this.textInputHandler=this.textInputHandler.bind(this),this.triggerCustomEvent=this.triggerCustomEvent.bind(this),this.triggerEventHandler=this.triggerEventHandler.bind(this),this.sendHandler=this.sendHandler.bind(this)}},{key:"getInitialState",value:function(){return{id:x.GetUserSession(),CharDesc:"",CharName:"",CharStartLine:"",CharMood:"",PlayerName:"You",PlayerDesc:"",ChatInput:"",EventDescInput:"Describe event here",EventReaction:"none",ChatHistory:[]}}},{key:"setCharByName",value:function(e){this.descriptionLock=!1;var t=f.GetNPC(e);this.setChar(t.name,t.description,t.line)}},{key:"setChar",value:function(e,t,n){this.setState({CharDesc:t,CharName:e,CharStartLine:n,ChatChrono:t+"\n"+e+': "'+n+'"'})}},{key:"setBlankCharacter",value:function(e){this.setState(this.getInitialState())}},{key:"triggerCustomEvent",value:function(e){e.preventDefault(),console.log("custom event"),this.triggerEvent(this.state.EventDescInput,this.state.EventReaction),this.setState({EventDescInput:"Describe event here",EventReaction:"none"})}},{key:"displayWithNewlines",value:function(e){return e.split("\n").map((function(e,t){return Object(y.jsx)("div",{children:e},t)}))}},{key:"clearChatInput",value:function(){this.setState({ChatInput:""})}},{key:"renderChatEntry",value:function(e){var t="";if("notification"===e.type)t=e.text+"\n";else if("message"===e.type){var n="";"user"===e.from?n=this.state.PlayerName:"char"===e.from?n=this.state.CharName:(console.error("Couldn't resolve line source: "),console.error(e),console.error("-----------------------------")),t=n+': "'+e.text+'".\n'}else console.error("Wrong entry type");return t}},{key:"createChatEntry",value:function(e,t,n){this.setState((function(r){return{ChatHistory:r.ChatHistory.concat([{text:e,type:t,from:n}])}}))}},{key:"parseReply",value:function(e,t){this.createChatEntry(e,"message",t)}},{key:"parseEvent",value:function(e){this.createChatEntry(e,"notification","char")}},{key:"triggerEventHandler",value:function(){var e=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!this.api_lock){e.next=3;break}return e.abrupt("return");case 3:return this.api_lock=!0,e.next=6,this.triggerEvent(this.state.EventDescInput,this.state.EventReaction);case 6:n=e.sent,this.parseReply(n),this.api_lock=!1;case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"triggerEvent",value:function(){var e=Object(j.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Triggering event"),"Something",this.parseEvent("Something"),this.api_lock=!1;case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"GetReplyFromCharacter",value:function(){var e=Object(j.a)(d.a.mark((function e(t,n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.GetReplyFromCharacter(this.state.id,t,n);case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:return e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getPlayerMessage",value:function(){return this.state.ChatInput}},{key:"notifyNewMood",value:function(e){this.setState((function(t){var n=t.ChatHistory.concat([{text:t.CharName+"'s mood changed to "+e,type:"notification"}]);return{CharMood:e,ChatHistory:n}}))}},{key:"changeMood",value:function(){var e=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.prev=1,e.next=4,x.ChangeMood(this.state.id,t);case 4:n=e.sent,e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.error("changeMood: error in APIClient.ChangeMood: ",e.t0),n=null;case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e,this,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"sendHandler",value:function(){var e=Object(j.a)(d.a.mark((function e(t){var n,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!this.api_lock){e.next=3;break}return e.abrupt("return");case 3:return this.api_lock=!0,n=this.getPlayerMessage(),e.next=7,this.GetReplyFromCharacter(n,this.state.PlayerName);case 7:if(r=e.sent){e.next=11;break}return console.error("Failed to get reply"),e.abrupt("return");case 11:a=n,this.clearChatInput(),this.parseReply(a,"user"),this.parseReply(r,"char"),this.api_lock=!1,this.descriptionLock=!0;case 17:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"chatHistory",value:function(){var e=this;return this.state.CharDesc+"\n"+this.state.PlayerDesc+"\n"+this.state.CharName+": "+this.state.CharStartLine+".\n"+this.state.ChatHistory.map((function(t){return e.renderChatEntry(t)})).join("\n")}},{key:"renderChatHistory",value:function(){return this.state.CharDesc?this.displayWithNewlines(this.chatHistory()):""}},{key:"render",value:function(){return Object(y.jsx)("table",{id:"demo-window",children:Object(y.jsxs)("tbody",{children:[Object(y.jsx)("tr",{children:Object(y.jsxs)("td",{colSpan:"3",children:["Select NPC character",Object(y.jsxs)("div",{children:[Object(y.jsx)("button",{id:"TrevorButton",onClick:this.changeCharacterHandler,children:"Trevor"}),Object(y.jsx)("button",{id:"LandaButton",onClick:this.changeCharacterHandler,children:"Hans Landa"}),Object(y.jsx)("button",{id:"CourtneyButton",onClick:this.changeCharacterHandler,children:"Courtney Williams"}),Object(y.jsx)("button",{id:"CustomButton",onClick:this.changeCharacterHandler,children:"Custom..."})]})]})}),Object(y.jsxs)("tr",{children:[Object(y.jsxs)("td",{children:["Moods",Object(y.jsx)("table",{children:Object(y.jsxs)("tbody",{children:[Object(y.jsx)("tr",{children:Object(y.jsx)("td",{children:Object(y.jsx)("button",{id:"NeutralMoodButton",onClick:this.changeMoodHandler,children:"Neutral"})})}),Object(y.jsx)("tr",{children:Object(y.jsx)("td",{children:Object(y.jsx)("button",{id:"JoyMoodButton",onClick:this.changeMoodHandler,children:"Joy"})})}),Object(y.jsx)("tr",{children:Object(y.jsx)("td",{children:Object(y.jsx)("button",{id:"EnvyMoodButton",onClick:this.changeMoodHandler,children:"Envy"})})}),Object(y.jsx)("tr",{children:Object(y.jsx)("td",{children:Object(y.jsx)("button",{id:"FearMoodButton",onClick:this.changeMoodHandler,children:"Fear"})})})]})})]}),Object(y.jsx)("td",{children:Object(y.jsxs)("div",{className:"menu-widget",children:["Chat",Object(y.jsx)("table",{className:"chat-window",children:Object(y.jsxs)("tbody",{children:[Object(y.jsx)("tr",{children:Object(y.jsx)("td",{colSpan:"3",children:Object(y.jsx)("div",{className:"dialogue-window",children:this.renderChatHistory()})})}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{colSpan:"2",children:Object(y.jsx)("input",{id:"ChatInput",onChange:this.textInputHandler,value:this.state.ChatInput,placeholder:"Type here"})}),Object(y.jsx)("td",{children:Object(y.jsx)("button",{onClick:this.sendHandler,children:"Reply"})})]})]})})]})}),Object(y.jsx)("td",{children:Object(y.jsx)("div",{children:Object(y.jsx)("table",{children:Object(y.jsxs)("tbody",{children:[Object(y.jsx)("tr",{children:Object(y.jsx)("td",{colSpan:"3",children:"Trigger game event"})}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{colSpan:"2",rowSpan:"2",children:Object(y.jsx)("textarea",{id:"EventDescInput",onChange:this.textInputHandler,value:this.state.EventDescInput})}),Object(y.jsx)("td",{children:Object(y.jsxs)("select",{onChange:this.changeEventReaction,value:this.state.EventReaction,children:[Object(y.jsx)("option",{value:"none",children:"It made them:"}),Object(y.jsx)("option",{value:"angry",children:"Angry"}),Object(y.jsx)("option",{value:"pleased",children:"Pleased"}),Object(y.jsx)("option",{value:"scared",children:"Scared"}),Object(y.jsx)("option",{value:"neutral",children:"Neutral"})]})})]}),Object(y.jsx)("tr",{children:Object(y.jsx)("td",{children:Object(y.jsx)("button",{onClick:this.triggerCustomEvent,children:"Go"})})}),Object(y.jsx)("tr",{children:Object(y.jsx)("td",{colSpan:"3",children:"Preset events"})}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:Object(y.jsx)("button",{id:"FlowersEvent",onClick:this.presetEventHandler,children:"Receives flowers"})}),Object(y.jsx)("td",{children:Object(y.jsx)("button",{id:"DisrespectEvent",onClick:this.presetEventHandler,children:"Show disrespect"})}),Object(y.jsx)("td",{children:Object(y.jsx)("button",{id:"CarCrashEvent",onClick:this.presetEventHandler,children:"The car crashes nearby"})})]})]})})})})]}),Object(y.jsx)("tr",{children:Object(y.jsxs)("td",{colSpan:"3",children:["Describe character",Object(y.jsx)("table",{children:Object(y.jsxs)("tbody",{children:[Object(y.jsxs)("tr",{children:[Object(y.jsxs)("td",{children:[Object(y.jsx)("div",{children:"Name"}),Object(y.jsx)("input",{id:"CharName",onChange:this.textInputHandler,value:this.state.CharName,placeholder:"Name..."})]}),Object(y.jsxs)("td",{rowSpan:"2",children:[Object(y.jsx)("div",{children:"Description"}),Object(y.jsx)("textarea",{id:"CharDesc",onChange:this.textInputHandler,value:this.state.CharDesc})]})]}),Object(y.jsx)("tr",{children:Object(y.jsxs)("td",{children:[Object(y.jsx)("div",{children:"Starting line"}),Object(y.jsx)("textarea",{id:"CharStartLine",onChange:this.textInputHandler,value:this.state.CharStartLine,placeholder:"Type starting line here..."})]})})]})})]})}),Object(y.jsx)("tr",{children:Object(y.jsxs)("td",{colSpan:"3",children:["Player's description Name",Object(y.jsx)("div",{className:"menu-input",children:Object(y.jsx)("div",{children:Object(y.jsx)("input",{id:"PlayerName",onChange:this.textInputHandler,value:this.state.PlayerName,placeholder:"Your name..."})})}),"Description (optional)",Object(y.jsx)("div",{className:"menu-input",children:Object(y.jsx)("div",{children:Object(y.jsx)("textarea",{id:"PlayerDesc",onChange:this.textInputHandler,value:this.state.PlayerDesc})})})]})})]})})}}]),n}(a.a.Component);n(21);var g=function(){return Object(y.jsxs)("div",{className:"loading-container",children:[Object(y.jsx)("span",{}),Object(y.jsx)("span",{}),Object(y.jsx)("span",{})]})},k=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state=r.initState(),r}return Object(o.a)(n,[{key:"initState",value:function(){return{loaded:!1}}},{key:"componentDidMount",value:function(){this.initFetch()}},{key:"initFetch",value:function(){var e=this,t=f.LoadData(),n=x.CreateUserSession();Promise.all([t,n]).then((function(t){e.setState({loaded:!0})}))}},{key:"loaded",value:function(){return this.state.loaded}},{key:"render",value:function(){return this.loaded()?Object(y.jsx)(O,{}):Object(y.jsx)(g,{})}}]),n}(a.a.Component);c.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(k,{})}),document.getElementById("body-container"))}},[[22,1,2]]]);
//# sourceMappingURL=main.cb58978c.chunk.js.map