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

    setInterval(() => {
      console.log('checking for new messages')
      //const newMessages = [{ "name": "pitr", "message": "am sendink" }, { "name": "pablo", "message": "plata o plomo" }]
      const newMessages = []
      console.log('found new messages: ' + newMessages)
      this.setState({messages: this.state.messages.concat(newMessages)})
    }, 2000)
  }

  sendMessage() {
    console.log('sending message: ' + this.state.messageToSend)
    const messageObjectToSend = {name: "Michał Dettlaff", message: this.state.messageToSend}
    this.setState({messages: this.state.messages.concat([messageObjectToSend])})
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
              return <li key={index}>{message.name}: {message.message}</li>
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
