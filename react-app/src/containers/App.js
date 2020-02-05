import React, { Component } from "react";
import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainContents from "../components/MainContents";
import NavBar from "../components/NavBar";

class App extends Component {
  constructor(){
    super();
    this.state = {
      pageCaption: `Служба качества`,
      navBarVisible: false,
      demoUsers: [],
      data: [],
      types: []
    };
  }
  componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => {return response.json(); })
			.then(users => {this.setState({ demoUsers: users });});

    fetch("/qm/product/list")
      .then(response => response.json())
      .then(items => this.setState({ data: items }));

    fetch("/qm/assembly-dept/notice/types")
      .then(response => response.json())
      .then(items => this.setState({ types: items }));

  }

  // Обработчик синтетического эвента кнопки отображения сайдбара
  handleNavBarToggle = () => {
    this.setState({navBarVisible: !this.state.navBarVisible});
  }


  render() {
	return (
    <div className="App">
      <Header 
        text={this.state.pageCaption} 
        navBarVisible = {this.state.navBarVisible}
        handleNavBarToggle={this.handleNavBarToggle}>
      </Header>
      <div className="container">
      <NavBar visible={this.state.navBarVisible}></NavBar>
      <MainContents 
        data={this.state.data} 
        demoUsers={this.state.demoUsers}>
      </MainContents>
      </div>
      <Footer text={"© 2016-2020, ФГУ ФНЦ НИИСИ РАН"}></Footer>
     {/*
      <h2>Inside React App</h2>
      {this.state.data.map(item => 
        (<p>{JSON.stringify(item)}</p>)
      )}
     */}
  
		</div>
	);
}
}

export default App;

