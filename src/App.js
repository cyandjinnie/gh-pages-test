import React from 'react';
import './App.css';
import APIClient from './APIClient.js'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.changeCharacterHandler = this.changeCharacterHandler.bind(this)
    this.changeMoodHandler = this.changeMoodHandler.bind(this)
    this.presetEventHandler = this.presetEventHandler.bind(this)
    this.textInputHandler = this.textInputHandler.bind(this)
    this.triggerCustomEvent = this.triggerCustomEvent.bind(this)
    this.triggerEventHandler = this.triggerEventHandler.bind(this)
    this.sendHandler = this.sendHandler.bind(this)

    this.setTrevor = this.setTrevor.bind(this)
    this.setCourtney = this.setCourtney.bind(this)
    this.setLanda = this.setLanda.bind(this)

    this.state = this.getInitialState()

    this.api_lock = false
  }

  getInitialState() {
    return {
      CharDesc: "",
      CharName: "",
      CharStartLine: "",
      PlayerName: "You",
      PlayerDesc: "",
      ChatInput: "",
      EventDescInput: "Describe event here",
      EventReaction: "none",
      ChatHistory: []
    }
  }

  setChar(name, desc, line) {
    this.setState({
      CharDesc: desc,
      CharName: name,
      CharStartLine: line,
      ChatChrono: desc + "\n" + name + ": \"" +  line + "\""
    })
  }

  setCourtney(event) {
    let desc = "Courtney is a hot bitchy girl. She has huge tits and round ass. She likes money and sex. Here is her direct messages with You"
    let name = "Courtney"
    let line = "Hi! Nice to see you, sweetie."

    this.setChar(name, desc, line)
  }

  setLanda(event) {
    let desc = "Hans Landa is a Colonel in the SS tasked with locating Jews in hiding in Occupied France. He’s fluent in multiple languages, but beneath the educated, polite and even charming veneer is a cruel and sadistic man. While he takes great pride in his work, he acts entirely out of self-interest, as the story demonstrates. This time he is interrogating Marcel who is possibly hiding jews inside his house."
    let name = "Landa"
    let line = "Hello, mr. Mercel"

    this.setChar(name, desc, line)
  }

  setTrevor(event) {
    let desc = "Trevor has been described as a difficult person to deal with: extreme, impetuous, vengeful, psychopathic, unhinged, unpredictable, untamed, infamous, homicidal, and prone to violent outbursts and destructive rampages. He does everything in a sociopathic and relentless manner."
    let line = "This piece of shit that was the cause of my misery, a completely worthless individual"
    let name = "Trevor"

    this.setChar(name, desc, line)
  }

  setBlankCharacter(event) {
    this.setState(this.getInitialState())
  }

  masterHandler() {
    // ... todo
  }

  changeCharacterHandler = event => {
    event.preventDefault()
    var x = event.target.id
    switch (x) {
      case 'TrevorButton':
        this.setTrevor()
        break
      case 'LandaButton':
        this.setLanda()
        break
      case 'CourtneyButton':
        this.setCourtney()
        break
      case 'CustomButton':
        this.setBlankCharacter()
        break
      default: 
        console.error("Error in changeCharacterHandler")
    }
  }

  changeMood(new_mood) {
    this.setState((prevState) => {
      const new_history = prevState.ChatHistory.concat([{
        text: prevState.CharName + "'s mood changed to " + new_mood,
        type: "notification"
      }])

      return { ChatHistory: new_history }
    })
  }

  changeMoodHandler = event => {
    event.preventDefault()
    var x = event.target.id
    console.log(x);
    switch (x) {
      case 'NeutralMoodButton':
        this.changeMood("neutral")
        break
      case 'JoyMoodButton':
        this.changeMood("joy")
        break
      case 'EnvyMoodButton':
        this.changeMood("envy")
        break
      case 'FearMoodButton':
        this.changeMood("fear")
        break
      default: 
        console.error("Error in changeMoodHandler")
    }
  }

  presetEventHandler = event => {
    event.preventDefault()
    var x = event.target.id
    switch (x) {
      case 'FlowersEvent':
      case 'CarCrashEvent':
      case 'DisrespectEvent':
        console.log(x);
        break
      default: 
        console.error("Error in presetEventHandler")
    }
  }

  textInputHandler = event => {
    event.preventDefault()
    var x = event.target.id
    var v = event.target.value
    switch (x) {
      case 'ChatInput':
      case 'CharName':
      case 'CharStartLine':
      case 'CharDesc':
      case 'PlayerName':
      case 'PlayerDesc':
      case 'EventDescInput':
        console.log(x, v)
        break
      default:
        console.error("Error in textInputHandler")
    }

    this.setState({[x]: v})
  }

  changeEventReaction = e => {
    e.preventDefault()
    var v = e.target.value
    console.log(v)
    this.setState({EventReaction: v})
  }

  triggerCustomEvent(event) {
    event.preventDefault()
    console.log("custom event")

    this.triggerEvent(this.state.EventDescInput, this.state.EventReaction)

    this.setState({
      EventDescInput: "Describe event here",
      EventReaction: "none",
    })
  }

  displayWithNewlines(text) {
    return text.split("\n").map((i,key) => {
      return <div key={key}>{i}</div>;
    })
  }

  clearChatInput(reply) {
    this.setState((state, props) => ({
      ChatChrono: reply,
      ChatInput: ""
    }));
  }

  renderChatEntry(entry) {
    var result = ""

    if (entry.type === "notification") {
      result = entry.text + "\n"
    } else if (entry.type === "message") {
      var from = ""
      if (entry.from === "user") {
        from = this.state.PlayerName
      } else if (entry.from === "char") {
        from = this.state.CharName
      } else {
        console.error("Couldn't resolve line source")
      }
      result = from + ": \"" + entry.text + "\".\n"
    } else {
      console.error("Wrong entry type")
    }

    return result
  }

  parseReply(reply) {
    this.setState((prevState) => {
      const new_history = prevState.ChatHistory.concat([{
        text: reply,
        type: "message"
      }])

      return { ChatHistory: new_history }
    })
  }

  async triggerEventHandler(event) {
    event.preventDefault()
    // This is very very very very bad
    if (this.api_lock) {
      return
    }
    this.api_lock = true

    const reply = await this.triggerEvent(this.state.EventDescInput, this.state.EventReaction)
    this.parseReply(reply)

    this.api_lock = false
  }

  async triggerEvent(desc, attitude) {
    console.log("Triggering event")

    let character_reply = await APIClient.TriggerEvent(this.state.id, desc, attitude)

    this.setState((state, props) => ({
      ChatChrono: character_reply,
      ChatInput: ""
    }));

    this.api_lock = false
  }

  async sendHandler(event) {
    event.preventDefault()

    // This is very very very very bad
    if (this.api_lock) {
      return
    }
    this.api_lock = true

    console.log("Sent")

    let text = event.target.value
    let reply = await APIClient.GetReplyFromCharacter(this.state.id, text, this.state.PlayerName)

    this.parseReply(reply)
    this.clearChatInput()

    this.api_lock = false
  }

  chatHistory() {
    return this.state.CharDesc + "\n" + this.state.PlayerDesc + "\n" + this.state.CharName + ": " + this.state.CharStartLine + ".\n" + this.state.ChatHistory.map(elem => { return this.renderChatEntry(elem) }).join("\n")
  }

  renderChatHistory() {
    if (this.state.CharDesc) {
      return this.displayWithNewlines(this.chatHistory())
    }
    return ""
  }

  render() {
    return (
      <table id="demo-window"><tbody>
        {/* Character selections */}
        <tr>
          <td colSpan="3">
            Select NPC character
            <div>
              <button id="TrevorButton" onClick={this.changeCharacterHandler}>Trevor</button>
              <button id="LandaButton" onClick={this.changeCharacterHandler}>Hans Landa</button>
              <button id="CourtneyButton" onClick={this.changeCharacterHandler}>Courtney Williams</button>
              <button id="CustomButton" onClick={this.changeCharacterHandler}>Custom...</button>
            </div>
          </td>
        </tr>

        {/* Events & mood */}
        <tr>
          <td>
            <div className="menu-widget">
              Chat
              <table className="chat-window"><tbody>
                {/* Chat window */}
                <tr>
                  <td colSpan="3"><div className="dialogue-window">
                    {this.renderChatHistory()}
                  </div></td>
                </tr>
                <tr>
                  <td colSpan="2"><input id="ChatInput" onChange={this.textInputHandler} placeholder="Type here"></input></td>
                  <td><button onClick={this.sendHandler}>Reply</button></td>
                </tr>
              </tbody></table>
            </div>
          </td>
          <td>
            Moods
            <table><tbody>
              <tr><td><button id="NeutralMoodButton" onClick={this.changeMoodHandler}>Neutral</button></td></tr>
              <tr><td><button id="JoyMoodButton" onClick={this.changeMoodHandler}>Joy</button></td></tr>
              <tr><td><button id="EnvyMoodButton" onClick={this.changeMoodHandler}>Envy</button></td></tr>
              <tr><td><button id="FearMoodButton" onClick={this.changeMoodHandler}>Fear</button></td></tr>
            </tbody></table>
          </td>
          <td>
            <div><table><tbody>
              <tr>
                <td colSpan="3">Trigger game event</td>
              </tr>
              <tr>
                <td colSpan="2" rowSpan="2"><textarea id="EventDescInput" onChange={this.textInputHandler} value={this.state.EventDescInput}></textarea></td>
                <td><select onChange={this.changeEventReaction} value={this.state.EventReaction}>
                  <option value="none">It made them:</option>
                  <option value="angry">Angry</option>
                  <option value="pleased">Pleased</option>
                  <option value="scared">Scared</option>
                  <option value="neutral">Neutral</option>
                </select></td>
              </tr>
              <tr>
                <td><button onClick={this.triggerCustomEvent}>Go</button></td>
              </tr>
              <tr>
                <td colSpan="3">Preset events</td>
              </tr>
              <tr>
                <td><button id="FlowersEvent" onClick={this.presetEventHandler}>Receives flowers</button></td>
                <td><button id="DisrespectEvent" onClick={this.presetEventHandler}>Show disrespect</button></td>
                <td><button id="CarCrashEvent" onClick={this.presetEventHandler}>The car crashes nearby</button></td>
              </tr>
            </tbody></table></div>
          </td>
        </tr>

        {/* Describe character | description */}
        <tr>
          <td colSpan="3">
            Describe character
            <table><tbody>
              <tr>
                <td>
                  <div>Name</div>
                  <input id="CharName" onChange={this.textInputHandler} value={this.state['CharName']} placeholder="Name..."></input>
                </td>
                <td rowSpan="2">
                  <div>Description</div>
                  <textarea id="CharDesc" onChange={this.textInputHandler} value={this.state.CharDesc}></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <div>Starting line</div>
                  <textarea id="CharStartLine" onChange={this.textInputHandler} value={this.state.CharStartLine} placeholder="Type starting line here..."></textarea>
                </td>
              </tr>
            </tbody></table>
          </td>
        </tr>

        {/* Player */}
        <tr>
          <td colSpan="3">
            Player's description

            Name
            <div className="menu-input">
              <div><input id="PlayerName" onChange={this.textInputHandler} value={this.state.PlayerName} placeholder="Your name..."></input></div>
            </div>

            Description (optional)
            <div className="menu-input">
              <div><textarea id="PlayerDesc" onChange={this.textInputHandler} value={this.state.PlayerDesc}></textarea></div>
            </div>
          </td>
        </tr>
      </tbody></table>
    );
  }
}

export default App;
