import React from 'react';
import './App.css';
import { ourData } from './fakeApi';
import Header from './Components/Header';
import Card from './Components/Card';
import Greeting from './Components/Greeting';
import { randomPhoto, carList, boatList } from './unsplashRequests';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 'cars',
      info: null,
      randomImg: null,
      cars: ourData.cars,
      boats: ourData.boats
    }
  }

  handleClick = (text) => {
    this.setState({ selected: text.toLowerCase() });
  }

  createCards() {
    return (
      this.state[this.state.selected].map((info, idx) => (
        <Card
          imgSrc={info}
          key={idx}
        />
      ))
    )
  }

  makeRequest= async () => {
  const response = await randomPhoto();
  this.setState({ 
      info: response.description || response.alt_description,
      randomImg: response.urls.small
    });
  }

  getCars = async () => {
    const response = await carList();
    const carArray = response.map(car => car.urls.small);
    this.setState({
      cars: carArray,
      selected: 'cars'
    });
  }

  getBoats = async () => {
    const response = await boatList();
    const boatArray = response.map(boat => boat.urls.small);
    console.log(boatArray)
    this.setState({
      boats: boatArray,
      selected: 'boats'
    });
  }


  render() {
    return (
      <div className="App">
        <Greeting />
        <div>
          <h3>random photo description</h3>
          <div>
            {this.state.info}
            <img src={this.state.randomImg} />
          </div>
        </div>
        <Header getCars={this.getCars} getBoats={this.getBoats} />
        <section className="photos-container">
          {this.createCards()}
        </section>
      </div>
    );
  }
}

export default App;
