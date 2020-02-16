"use strict";

//import CustomButton from "./CustomButton";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ users: users }));
  }

  handleClick = user => {
    alert(JSON.stringify(user));
  };

  render() {
    const { users } = this.state;
    if (users.length === 0) {
      return <h2>loading</h2>;
    } else {
      return (
        <div id="users" className="toolbar toolbar150">
          {users.map((user, i) => {
            return (
              <CustomButton
                key={user.id}
                user={user}
                handleClick={this.handleClick}
              ></CustomButton>
            );
          })}
        </div>
      );
    }
  }
}

const domContainer = document.querySelector("#app");
ReactDOM.render(<App />, domContainer);
