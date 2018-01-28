import React from "react"
import axios from 'axios'

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
      messages: [],
      messageToSend: "foobar",
      timestamp: 0
    }

    let responseHandler = function (response) {
      console.log("axios GET response: " + response)
      //const newMessages = [Helper.createMessage("pitr", "am sendink"), Helper.createMessage("pablo", "plata o plomo")]
      const newMessages = response.data
      console.log('found new messages: ' + newMessages)
      const updatedMessages = this.state.messages.concat(newMessages)
      const updatedTimestamp = updatedMessages.length === 0 ? 0 : updatedMessages[updatedMessages.length - 1].timestamp
      this.setState({ messages: updatedMessages, timestamp: updatedTimestamp })
    }
    responseHandler = responseHandler.bind(this)
    setInterval(() => {
      console.log('checking for new messages after timestamp: ' + this.state.timestamp)
      var axiosInstance = axios.create({
        baseURL: 'http://jitchatapp.azurewebsites.net/',
        timeout: 2000
      });
      axiosInstance.get('/', {
        params: { timestamp: this.state.timestamp }
      })
        .then(responseHandler)
        .catch(function (error) {
          console.log("axios error: " + error)
        });
    }, 2000)
  }

  sendMessage() {
    console.log('sending message: ' + this.state.messageToSend)
    const messageObjectToSend = Helper.createMessage("Michał Dettlaff", this.state.messageToSend)

    let responseHandler = function (response) {
      this.setState({ messageToSend: "" })
    }
    responseHandler = responseHandler.bind(this)
    var axiosInstance = axios.create({
      baseURL: 'http://jitchatapp.azurewebsites.net/',
      timeout: 2000
    });
    axiosInstance.post('/', messageObjectToSend)
      .then(responseHandler)
      .catch(function (error) {
        console.log("axios error: " + error)
      });
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
