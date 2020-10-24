import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Body from "./components/Body";
import Icons from "./components/Icons";
import Contacts from "./components/Contacts";
import Feedback from "./components/Feedback";
import Model from './components/Model';


class App extends Component {
  state = {
      id:"",
      classactive: false,
      furnitures: {
        livingroom: [
          'https://imgur.com/ogYVAet',
          'https://imgur.com/lTY3V7k',
          'https://imgur.com/CWVNy20'
        ],
        Kitchen: [
          'https://imgur.com/I4cCsXD',
          'https://imgur.com/hl1TT2E',
          'https://imgur.com/ogYVAet'
        ],
        Dinning: [
          'https://imgur.com/E5RJfDX',
          'https://imgur.com/ogYVAet',
          'https://imgur.com/I4cCsXD'
        ],
        office: [
          'https://imgur.com/lTY3V7k',
          'https://imgur.com/lTY3V7k',
          'https://imgur.com/CWVNy20'
        ],
        bedroom: [
          'https://imgur.com/c5LHOX6',
          'https://imgur.com/pxxMmGf',
          'https://imgur.com/7ALELdT',
          'https://imgur.com/KbnywOd',
          'https://imgur.com/YJzeZLX',
          'https://imgur.com/8de5O9B',
          'https://imgur.com/y8drbje',
          'https://imgur.com/jZyiPSb',
          'https://imgur.com/jZyiPSb',
          'https://imgur.com/HsXEkzi',
          'https://imgur.com/74IlNcS',
          'https://imgur.com/Y5RpIgP',
          'https://imgur.com/fjvbLPM',
          'https://imgur.com/7PD2y76',
          'https://imgur.com/E5RJfDX',
          'https://imgur.com/de2cOjf'
        ],
        fitting: {
          livingroom: [
             'https://imgur.com/ogYVAet',
             'https://imgur.com/lTY3V7k',
             'https://imgur.com/CWVNy20'
          ],
          Kitchen: [
             'https://imgur.com/I4cCsXD',
          'https://imgur.com/hl1TT2E',
          'https://imgur.com/ogYVAet'
          ],
          Dinning: [
             'https://imgur.com/E5RJfDX',
          'https://imgur.com/ogYVAet',
          'https://imgur.com/I4cCsXD'
          ],
          office: [
             'https://imgur.com/lTY3V7k',
          'https://imgur.com/lTY3V7k',
          'https://imgur.com/CWVNy20'
          ],
          bedroom: [
             'https://imgur.com/c5LHOX6',
          'https://imgur.com/pxxMmGf',
          'https://imgur.com/7ALELdT',
          'https://imgur.com/KbnywOd',
          'https://imgur.com/YJzeZLX',
          'https://imgur.com/8de5O9B',
          'https://imgur.com/y8drbje',
          'https://imgur.com/jZyiPSb',
          'https://imgur.com/jZyiPSb',
            'https://imgur.com/HsXEkzi',
            'https://imgur.com/74IlNcS',
            'https://imgur.com/Y5RpIgP',
            'https://imgur.com/fjvbLPM',
            'https://imgur.com/7PD2y76',
            'https://imgur.com/E5RJfDX',
            'https://imgur.com/de2cOjf'
          
          ]
  }}}


  openModel = (id) => {
    this.setState({id, classactive: !this.state.classactive})
  
  }
  showModel = (id) => {
    this.setState({id, classactive: !this.state.classactive})
  }
  render(){
    return (
      <div className="App">
        <div className="cover">
          <Navigation />
          <Body showModel = {this.showModel} />
          <Icons />
          <Contacts />
          <Feedback openModel = {this.openModel}/>      
          {/* <div class="copyright">© 2020 Computer Hope</div> */}
        </div>
        <Model furnitures={this.state.furnitures} fitting={this.state.fitting} status={this.state.classactive} openModel={this.openModel} id={this.state.id} />

      </div>
    );
  }
  
}

export default App;
