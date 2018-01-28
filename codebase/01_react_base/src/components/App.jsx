import React from "react"

export default class App extends React.PureComponent {

  constructor(props) {
    super(props)

    this.sendMessage = this.sendMessage.bind(this)
    this.onInputChange = this.onInputChange.bind(this)

    this.state = {
      messages: [{ "name": "misza", "message": "wot wot wot" }, { "name": "wolodya", "message": "trabaho" }],
      messageToSend: "foo"
    }
  }

  sendMessage() {
    console.log('sending message: ' + this.state.messageToSend)
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
            this.state.messages.map((message) => {
              return <li key={message.message}>{message.name}: {message.message}</li>
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
