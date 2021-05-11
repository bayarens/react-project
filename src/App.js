import React from 'react';
import './App.css';
import { ourData } from './fakeApi';
import Header from './Components/Header';
import Card from './Components/Card';
import Greeting from './Components/Greeting';



class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selected: 'cars',
      cars: ourData.cars,
      boats: ourData.boats
    }
  }
  
  handleClick = (text) => {
    this.setState({ selected: text.toLowerCase() });
  }

  createCards(){
    return(
      this.state[this.state.selected].map((info, idx) => (
        <Card 
        imgSrc={info} 
        key={idx} 
        />
      ))
    )
  }

  render(){
    return (
      <div className="App">
        <Greeting />
        <Header handleClick = {this.handleClick}/>
        <section className="photos-container">
          {this.createCards()}
        </section>
      </div>
    );
  }
}

export default App;
