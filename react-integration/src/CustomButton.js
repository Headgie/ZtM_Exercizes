class CustomButton extends React.Component {

  handleClick(e) {
    const {user, handleClick} = this.props;
		handleClick(user);
	}

  render() {
    const {user} = this.props;
    return <button value={user.id} onClick={this.handleClick.bind(this)}>{user.name}</button>;
  }
}
