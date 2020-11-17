import React, { Component } from "react";
import "./App.css";
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import Navigation from "./components/Navigation";
import Body from "./components/Body";
import Icons from "./components/Icons";
import Contacts from "./components/Contacts";
import Feedback from "./components/Feedback";
import Model from './components/Model';
import Upload from './components/Upload';




import store from './store.js'


class App extends Component {
  state = {
      id:"",
      classactive: false,
    }

  


  openModel = (id) => {
    this.setState({id, classactive: !this.state.classactive})
  
  }
  showModel = (id) => {
    this.setState({id, classactive: !this.state.classactive})
  }
  render(){
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <div className="cover">
            <Route exact path="/"> <Navigation /> </Route>
            <Route exact path="/"> <Body showModel = {this.showModel} /></Route>
            <Route exact path="/"> <Icons /></Route>
            <Route exact path="/"> <Contacts /></Route>
            <Route exact path="/"> <Feedback openModel = {this.openModel}/> </Route>     
              {/* <div class="copyright">© 2020 Computer Hope</div> */}
            <Route exact path="/upload" component={Upload} />

            </div>
            <Route path="/"> <Model status={this.state.classactive} openModel={this.openModel} id={this.state.id} /></Route>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
  
}

export default App;
