(this["webpackJsonpcoolstory-ai"]=this["webpackJsonpcoolstory-ai"]||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n.n(r),s=n(8),c=n.n(s),i=(n(17),n(2)),o=n.n(i),h=n(4),l=n(5),d=n(9),u=n(10),j=n(1),b=n(12),p=n(11),v=(n(19),n(7)),x=function(e,t){var n;return n=t&&t.headers?t.headers:{},console.log(t),console.log(n),fetch("".concat("https://1snssxy5t8.execute-api.eu-west-2.amazonaws.com/default/processMVPEvent").concat(e),Object(v.a)(Object(v.a)({},t),{},{headers:n}))},O=function(){var e=Object(h.a)(o.a.mark((function e(t){var n,r,a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.method,e.next=3,x("",{method:"POST",headers:{"Content-Type":"Application/json"},body:t});case 3:if((r=e.sent).ok){e.next=6;break}throw"Couldn't get '"+n+"' response";case 6:return e.next=8,r.json();case 8:if((a=e.sent).ok){e.next=11;break}throw"Error while parsing '"+n+"' response";case 11:return s=a.result,"OK"!==a.status&&console.error("Reponse status != OK, query "+n),e.abrupt("return",s);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g={NewCharacter:function(e,t){var n=[e,t];return O(JSON.stringify({method:"new_character",params:n}))},ChangeMood:function(e,t){var n=[e,t];return O(JSON.stringify({method:"change_mood",params:n}))},TriggerEvent:function(e,t,n){var r=[e,t,n];return O(JSON.stringify({method:"trigger_event",params:r}))},GetReplyFromCharacter:function(e,t,n){var r=[e,t,n];return O(JSON.stringify({method:"request_reply",params:r}))},CreateUserSession:function(){return O(JSON.stringify({method:"create_user_session",params:[]}))}},y=n(0),C=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).changeCharacterHandler=function(e){switch(e.preventDefault(),e.target.id){case"TrevorButton":r.setTrevor();break;case"LandaButton":r.setLanda();break;case"CourtneyButton":r.setCourtney();break;case"CustomButton":r.setBlankCharacter();break;default:console.error("Error in changeCharacterHandler")}},r.changeMoodHandler=function(e){e.preventDefault();var t=e.target.id;switch(console.log(t),t){case"NeutralMoodButton":r.changeMood("neutral");break;case"JoyMoodButton":r.changeMood("joy");break;case"EnvyMoodButton":r.changeMood("envy");break;case"FearMoodButton":r.changeMood("fear");break;default:console.error("Error in changeMoodHandler")}},r.presetEventHandler=function(e){e.preventDefault();var t=e.target.id;switch(t){case"FlowersEvent":case"CarCrashEvent":case"DisrespectEvent":console.log(t);break;default:console.error("Error in presetEventHandler")}},r.textInputHandler=function(e){e.preventDefault();var t=e.target.id,n=e.target.value;switch(t){case"ChatInput":case"CharName":case"CharStartLine":case"CharDesc":case"PlayerName":case"PlayerDesc":case"EventDescInput":console.log(t,n);break;default:console.error("Error in textInputHandler")}r.setState(Object(l.a)({},t,n))},r.changeEventReaction=function(e){e.preventDefault();var t=e.target.value;console.log(t),r.setState({EventReaction:t})},r.changeCharacterHandler=r.changeCharacterHandler.bind(Object(j.a)(r)),r.changeMoodHandler=r.changeMoodHandler.bind(Object(j.a)(r)),r.presetEventHandler=r.presetEventHandler.bind(Object(j.a)(r)),r.textInputHandler=r.textInputHandler.bind(Object(j.a)(r)),r.triggerCustomEvent=r.triggerCustomEvent.bind(Object(j.a)(r)),r.triggerEventHandler=r.triggerEventHandler.bind(Object(j.a)(r)),r.sendHandler=r.sendHandler.bind(Object(j.a)(r)),r.setTrevor=r.setTrevor.bind(Object(j.a)(r)),r.setCourtney=r.setCourtney.bind(Object(j.a)(r)),r.setLanda=r.setLanda.bind(Object(j.a)(r)),r.state=r.getInitialState(),r.api_lock=!1,r}return Object(u.a)(n,[{key:"getInitialState",value:function(){return{CharDesc:"",CharName:"",CharStartLine:"",PlayerName:"You",PlayerDesc:"",ChatInput:"",EventDescInput:"Describe event here",EventReaction:"none",ChatHistory:[]}}},{key:"setChar",value:function(e,t,n){this.setState({CharDesc:t,CharName:e,CharStartLine:n,ChatChrono:t+"\n"+e+': "'+n+'"'})}},{key:"setCourtney",value:function(e){this.setChar("Courtney","Courtney is a hot bitchy girl. She has huge tits and round ass. She likes money and sex. Here is her direct messages with You","Hi! Nice to see you, sweetie.")}},{key:"setLanda",value:function(e){this.setChar("Landa","Hans Landa is a Colonel in the SS tasked with locating Jews in hiding in Occupied France. He\u2019s fluent in multiple languages, but beneath the educated, polite and even charming veneer is a cruel and sadistic man. While he takes great pride in his work, he acts entirely out of self-interest, as the story demonstrates. This time he is interrogating Marcel who is possibly hiding jews inside his house.","Hello, mr. Mercel")}},{key:"setTrevor",value:function(e){this.setChar("Trevor","Trevor has been described as a difficult person to deal with: extreme, impetuous, vengeful, psychopathic, unhinged, unpredictable, untamed, infamous, homicidal, and prone to violent outbursts and destructive rampages. He does everything in a sociopathic and relentless manner.","This piece of shit that was the cause of my misery, a completely worthless individual")}},{key:"setBlankCharacter",value:function(e){this.setState(this.getInitialState())}},{key:"masterHandler",value:function(){}},{key:"changeMood",value:function(e){this.setState((function(t){return{ChatHistory:t.ChatHistory.concat([{text:t.CharName+"'s mood changed to "+e,type:"notification"}])}}))}},{key:"triggerCustomEvent",value:function(e){e.preventDefault(),console.log("custom event"),this.triggerEvent(this.state.EventDescInput,this.state.EventReaction),this.setState({EventDescInput:"Describe event here",EventReaction:"none"})}},{key:"displayWithNewlines",value:function(e){return e.split("\n").map((function(e,t){return Object(y.jsx)("div",{children:e},t)}))}},{key:"clearChatInput",value:function(e){this.setState((function(t,n){return{ChatChrono:e,ChatInput:""}}))}},{key:"renderChatEntry",value:function(e){var t="";if("notification"===e.type)t=e.text+"\n";else if("message"===e.type){var n="";"user"===e.from?n=this.state.PlayerName:"char"===e.from?n=this.state.CharName:console.error("Couldn't resolve line source"),t=n+': "'+e.text+'".\n'}else console.error("Wrong entry type");return t}},{key:"parseReply",value:function(e){this.setState((function(t){return{ChatHistory:t.ChatHistory.concat([{text:e,type:"message"}])}}))}},{key:"triggerEventHandler",value:function(){var e=Object(h.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!this.api_lock){e.next=3;break}return e.abrupt("return");case 3:return this.api_lock=!0,e.next=6,this.triggerEvent(this.state.EventDescInput,this.state.EventReaction);case 6:n=e.sent,this.parseReply(n),this.api_lock=!1;case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"triggerEvent",value:function(){var e=Object(h.a)(o.a.mark((function e(t,n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Triggering event"),e.next=3,g.TriggerEvent(this.state.id,t,n);case 3:r=e.sent,this.setState((function(e,t){return{ChatChrono:r,ChatInput:""}})),this.api_lock=!1;case 6:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"sendHandler",value:function(){var e=Object(h.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!this.api_lock){e.next=3;break}return e.abrupt("return");case 3:return this.api_lock=!0,console.log("Sent"),n=t.target.value,e.next=8,g.GetReplyFromCharacter(this.state.id,n,this.state.PlayerName);case 8:r=e.sent,this.parseReply(r),this.clearChatInput(),this.api_lock=!1;case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"chatHistory",value:function(){var e=this;return this.state.CharDesc+"\n"+this.state.PlayerDesc+"\n"+this.state.CharName+": "+this.state.CharStartLine+".\n"+this.state.ChatHistory.map((function(t){return e.renderChatEntry(t)})).join("\n")}},{key:"renderChatHistory",value:function(){return this.state.CharDesc?this.displayWithNewlines(this.chatHistory()):""}},{key:"render",value:function(){return Object(y.jsx)("table",{id:"demo-window",children:Object(y.jsxs)("tbody",{children:[Object(y.jsx)("tr",{children:Object(y.jsxs)("td",{colSpan:"3",children:["Select NPC character",Object(y.jsxs)("div",{children:[Object(y.jsx)("button",{id:"TrevorButton",onClick:this.changeCharacterHandler,children:"Trevor"}),Object(y.jsx)("button",{id:"LandaButton",onClick:this.changeCharacterHandler,children:"Hans Landa"}),Object(y.jsx)("button",{id:"CourtneyButton",onClick:this.changeCharacterHandler,children:"Courtney Williams"}),Object(y.jsx)("button",{id:"CustomButton",onClick:this.changeCharacterHandler,children:"Custom..."})]})]})}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:Object(y.jsxs)("div",{className:"menu-widget",children:["Chat",Object(y.jsx)("table",{className:"chat-window",children:Object(y.jsxs)("tbody",{children:[Object(y.jsx)("tr",{children:Object(y.jsx)("td",{colSpan:"3",children:Object(y.jsx)("div",{className:"dialogue-window",children:this.renderChatHistory()})})}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{colSpan:"2",children:Object(y.jsx)("input",{id:"ChatInput",onChange:this.textInputHandler,placeholder:"Type here"})}),Object(y.jsx)("td",{children:Object(y.jsx)("button",{onClick:this.sendHandler,children:"Reply"})})]})]})})]})}),Object(y.jsxs)("td",{children:["Moods",Object(y.jsx)("table",{children:Object(y.jsxs)("tbody",{children:[Object(y.jsx)("tr",{children:Object(y.jsx)("td",{children:Object(y.jsx)("button",{id:"NeutralMoodButton",onClick:this.changeMoodHandler,children:"Neutral"})})}),Object(y.jsx)("tr",{children:Object(y.jsx)("td",{children:Object(y.jsx)("button",{id:"JoyMoodButton",onClick:this.changeMoodHandler,children:"Joy"})})}),Object(y.jsx)("tr",{children:Object(y.jsx)("td",{children:Object(y.jsx)("button",{id:"EnvyMoodButton",onClick:this.changeMoodHandler,children:"Envy"})})}),Object(y.jsx)("tr",{children:Object(y.jsx)("td",{children:Object(y.jsx)("button",{id:"FearMoodButton",onClick:this.changeMoodHandler,children:"Fear"})})})]})})]}),Object(y.jsx)("td",{children:Object(y.jsx)("div",{children:Object(y.jsx)("table",{children:Object(y.jsxs)("tbody",{children:[Object(y.jsx)("tr",{children:Object(y.jsx)("td",{colSpan:"3",children:"Trigger game event"})}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{colSpan:"2",rowSpan:"2",children:Object(y.jsx)("textarea",{id:"EventDescInput",onChange:this.textInputHandler,value:this.state.EventDescInput})}),Object(y.jsx)("td",{children:Object(y.jsxs)("select",{onChange:this.changeEventReaction,value:this.state.EventReaction,children:[Object(y.jsx)("option",{value:"none",children:"It made them:"}),Object(y.jsx)("option",{value:"angry",children:"Angry"}),Object(y.jsx)("option",{value:"pleased",children:"Pleased"}),Object(y.jsx)("option",{value:"scared",children:"Scared"}),Object(y.jsx)("option",{value:"neutral",children:"Neutral"})]})})]}),Object(y.jsx)("tr",{children:Object(y.jsx)("td",{children:Object(y.jsx)("button",{onClick:this.triggerCustomEvent,children:"Go"})})}),Object(y.jsx)("tr",{children:Object(y.jsx)("td",{colSpan:"3",children:"Preset events"})}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:Object(y.jsx)("button",{id:"FlowersEvent",onClick:this.presetEventHandler,children:"Receives flowers"})}),Object(y.jsx)("td",{children:Object(y.jsx)("button",{id:"DisrespectEvent",onClick:this.presetEventHandler,children:"Show disrespect"})}),Object(y.jsx)("td",{children:Object(y.jsx)("button",{id:"CarCrashEvent",onClick:this.presetEventHandler,children:"The car crashes nearby"})})]})]})})})})]}),Object(y.jsx)("tr",{children:Object(y.jsxs)("td",{colSpan:"3",children:["Describe character",Object(y.jsx)("table",{children:Object(y.jsxs)("tbody",{children:[Object(y.jsxs)("tr",{children:[Object(y.jsxs)("td",{children:[Object(y.jsx)("div",{children:"Name"}),Object(y.jsx)("input",{id:"CharName",onChange:this.textInputHandler,value:this.state.CharName,placeholder:"Name..."})]}),Object(y.jsxs)("td",{rowSpan:"2",children:[Object(y.jsx)("div",{children:"Description"}),Object(y.jsx)("textarea",{id:"CharDesc",onChange:this.textInputHandler,value:this.state.CharDesc})]})]}),Object(y.jsx)("tr",{children:Object(y.jsxs)("td",{children:[Object(y.jsx)("div",{children:"Starting line"}),Object(y.jsx)("textarea",{id:"CharStartLine",onChange:this.textInputHandler,value:this.state.CharStartLine,placeholder:"Type starting line here..."})]})})]})})]})}),Object(y.jsx)("tr",{children:Object(y.jsxs)("td",{colSpan:"3",children:["Player's description Name",Object(y.jsx)("div",{className:"menu-input",children:Object(y.jsx)("div",{children:Object(y.jsx)("input",{id:"PlayerName",onChange:this.textInputHandler,value:this.state.PlayerName,placeholder:"Your name..."})})}),"Description (optional)",Object(y.jsx)("div",{className:"menu-input",children:Object(y.jsx)("div",{children:Object(y.jsx)("textarea",{id:"PlayerDesc",onChange:this.textInputHandler,value:this.state.PlayerDesc})})})]})})]})})}}]),n}(a.a.Component);c.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(C,{})}),document.getElementById("body-container"))}},[[21,1,2]]]);
//# sourceMappingURL=main.f6a89427.chunk.js.map