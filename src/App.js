import './App.css';
import React from 'react';

const tonesList = [
  ['50hz', 'https://dl.dropbox.com/s/ll1och6sxbqbcwj/50.mp3?dl=0'],
  ['100hz', "https://dl.dropbox.com/s/sg4lgrcgbujdl4s/100.mp3?dl=0"],
  ['200hz', "https://dl.dropbox.com/s/gwevky1s0x08l2o/200.mp3?dl=0"],
  ['400hz', "https://dl.dropbox.com/s/23f599vgxvgqkc5/400.mp3?dl=0"],
  ['800hz', "https://dl.dropbox.com/s/02z99w9sg867wzy/800.mp3?dl=0"],
  ['1khz', "https://dl.dropbox.com/s/h4yfpizlqx178p6/1000.mp3?dl=0"],
  ['2khz', "https://dl.dropbox.com/s/s70tzbwdab0a3pi/2000.mp3?dl=0"],
  ['4khz', "https://dl.dropbox.com/s/px7vxm2lpcrqyuz/4000.mp3?dl=0"],
  ['8khz', "https://dl.dropbox.com/s/9cgcd5ozkq57eex/8000.mp3?dl=0"],
  ['10khz', "https://dl.dropbox.com/s/leb7zhmwx1mo4ik/10000.mp3?dl=0"],
]


class App extends React.Component {
  constructor(props) {
    super(props);
    let winner = getRandom(0, tonesList.length)
    this.state = {
      quantity: tonesList.length,
      winner: winner,
      buttons: Array(tonesList.length).fill(0),
      gameComplete: false,
      play: false,
      source: tonesList[winner][1],
    }
    this.audio = new Audio(this.state.source)

  }
  componentDidMount() {
    console.log("MOUNTED");
    this.audio.addEventListener('ended', () => this.setState({ play: false }));
  }

  componentWillUnmount() {
    this.audio.removeEventListener('ended', () => this.setState({ play: false }));
  }

  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.load();
    });
  }
  handleClick(i) {
    if (!this.state.gameComplete) {
      let newButtons = this.state.buttons.concat();
      let endGame = false;
      if (i !== this.state.winner) { newButtons[i] = 1 }
      else { newButtons[i] = 2; endGame = true; };
      this.setState({
        buttons: newButtons,
        gameComplete: endGame,
      })
      console.log(newButtons);
    }
  }

  handleReset() {
    this.audio.pause();
    let winner = getRandom(0, tonesList.length)
    this.setState({
      quantity: tonesList.length,
      winner: winner,
      buttons: Array(tonesList.length).fill(0),
      gameComplete: false,
      play: false,
      source: tonesList[winner][1],
    })
    this.audio.setAttribute('src', tonesList[winner][1])
  }


  render() {
    let buttonArray = [];

    for (var i = 0; i < this.state.buttons.length; i++) {
      buttonArray.push(
        <MButton
          value={i}
          key={i}
          status={this.state.buttons[i]}
          onClick={(i) => this.handleClick(i)
          }
        />
      )
    }
    return (
      <div>
        <div className="Button-app">
          <div className="Header-title">Audio Frequency Game</div>
          <div className="Main-buttons">
            <Tone play={this.state.play} onClick={() => this.togglePlay()} />
            <button className="My-button Reset" onClick={() => this.handleReset()}>Reset</button>
          </div>
          <div className="Button-array">
            {buttonArray}
          </div>
        </div>
      </div>
    );
  }

}

class MButton extends React.Component {
  render() {
    let currentClass = "My-button";
    let currentValue = tonesList[this.props.value][0]

    if (this.props.status === 2) {
      currentClass = "My-button My-button-winner";

    }
    else if (this.props.status === 1) {
      currentClass = "My-button My-button-clicked";

    }
    return (
      <button
        className={currentClass}
        onClick={() => this.props.onClick(this.props.value)}
      >
        {currentValue}
      </ button >)
  }
}


class Tone extends React.Component {

  render() {
    return (
      <button
        className="My-button Reset"
        onClick={() => this.props.onClick()}>
        {!this.props.play ? "Play" : "Stop"}
      </button>
    )
  }
}

export default App;

// **************FUNCTIONS****************

function getRandom(min = 0, max) {
  return (Math.floor(min + (Math.random() * (max - min))));
}