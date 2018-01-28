import React from "react"

export default class App extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      messages: [{ "name": "misza", "message": "wot wot wot" }, { "name": "wolodya", "message": "trabaho" }],
    }
  }

  render() {
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
        <input type="text"></input>
        <button>Send</button>
      </div>
    )
  }
}
