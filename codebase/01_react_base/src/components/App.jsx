import React from "react"

class Helper {
  static createMessage(name, message) {
    return { name: name, message: message, timestamp: Date.now() }
  }

  static formatTime(timestamp) {
    return new Date(timestamp).toISOString()
  }
}

export default class App extends React.PureComponent {

  constructor(props) {
    super(props)

    this.sendMessage = this.sendMessage.bind(this)
    this.onInputChange = this.onInputChange.bind(this)

    this.state = {
      messages: [Helper.createMessage("misza", "wot wot wot"), Helper.createMessage("wolodya", "trabaho")],
      messageToSend: "foo"
    }

    setInterval(() => {
      console.log('checking for new messages')
      //const newMessages = [Helper.createMessage("pitr", "am sendink"), Helper.createMessage("pablo", "plata o plomo")]
      const newMessages = []
      console.log('found new messages: ' + newMessages)
      this.setState({ messages: this.state.messages.concat(newMessages) })
    }, 2000)
  }

  sendMessage() {
    console.log('sending message: ' + this.state.messageToSend)
    const messageObjectToSend = Helper.createMessage("Michał Dettlaff", this.state.messageToSend)
    this.setState({ messages: this.state.messages.concat([messageObjectToSend]) })
  }

  onInputChange(event) {
    this.setState({ messageToSend: event.target.value })
  }

  render() {
    const sendMessage = this.sendMessage
    return (
      <div>
        <h1>Dżit Czat</h1>
        <ul>
          {
            this.state.messages.map((message, index) => {
              return <li key={index}>{Helper.formatTime(message.timestamp)} &lt;<b>{message.name}</b>&gt; {message.message}</li>
            })
          }
        </ul>
        Message content:
        <input type="text" value={this.state.messageToSend} onChange={this.onInputChange} />
        <button onClick={sendMessage}>Send</button>
      </div>
    )
  }
}
