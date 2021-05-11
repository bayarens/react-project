import React from 'react';
import './App.css';
import { lambo, dodge, ferrari, boat1, boat2, boat3 } from './imageData';
import Header from './Header';
import Card from './Card';



class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selected: 'cars',
      cars: [lambo, dodge, ferrari],
      boats: [boat1, boat2, boat3]
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
        <h1>My Photo-bucket App!</h1>
        <Header handleClick = {this.handleClick}/>
        <section className="photos-container">
          {this.createCards()}
        </section>
      </div>
    );
  }
}

export default App;
