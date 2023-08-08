import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    person: {
      fullName: "John Doe",
      bio: "Un développeur passionné",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg",
      profession: "Développeur Web",
    },
    shows: false,
    mountTime: new Date(),
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        mountTime: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { person, shows, mountTime } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>Basculer le profil</button>
        <p>
          Temps depuis le montage: {Math.floor((new Date() - mountTime) / 1000)}{" "}
          secondes
        </p>
        {shows && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Profil" />
            <p>Profession: {person.profession}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
