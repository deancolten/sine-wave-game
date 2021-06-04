import './App.css';
import React from 'react';

const tonesListHard = [
  ['50hz', 'https://dl.dropbox.com/s/ll1och6sxbqbcwj/50.mp3?dl=0'],
  ['62hz', 'https://dl.dropbox.com/s/djob6jh23et18fv/62.mp3?dl=0'],
  ['80hz', 'https://dl.dropbox.com/s/br7lhepc0gz76m0/80.mp3?dl=0'],
  ['100hz', "https://dl.dropbox.com/s/sg4lgrcgbujdl4s/100.mp3?dl=0"],
  ['200hz', "https://dl.dropbox.com/s/gwevky1s0x08l2o/200.mp3?dl=0"],
  ['250hz', "https://dl.dropbox.com/s/xba229w5m6urjql/250.mp3?dl=0"],
  ['300hz', "https://dl.dropbox.com/s/1ag8zcusloae9w2/300.mp3?dl=0"],
  ['400hz', "https://dl.dropbox.com/s/23f599vgxvgqkc5/400.mp3?dl=0"],
  ['500hz', "https://dl.dropbox.com/s/bf1lgsf7qs58k4c/500.mp3?dl=0"],
  ['800hz', "https://dl.dropbox.com/s/02z99w9sg867wzy/800.mp3?dl=0"],
  ['1khz', "https://dl.dropbox.com/s/h4yfpizlqx178p6/1000.mp3?dl=0"],
  ['1.5khz', "https://dl.dropbox.com/s/4wie3f9mi24xh8z/1500.mp3?dl=0"],
  ['2khz', "https://dl.dropbox.com/s/s70tzbwdab0a3pi/2000.mp3?dl=0"],
  ['3khz', "https://dl.dropbox.com/s/lldvr2d5dnlurzw/3000.mp3?dl=0"],
  ['4khz', "https://dl.dropbox.com/s/px7vxm2lpcrqyuz/4000.mp3?dl=0"],
  ['5khz', "https://dl.dropbox.com/s/00sjdvwa79f9lc0/5000.mp3?dl=0"],
  ['6khz', "https://dl.dropbox.com/s/s1lv1p5kowag5s6/6000.mp3?dl=0"],
  ['8khz', "https://dl.dropbox.com/s/9cgcd5ozkq57eex/8000.mp3?dl=0"],
  ['10khz', "https://dl.dropbox.com/s/leb7zhmwx1mo4ik/10000.mp3?dl=0"],
  ['12khz', "https://dl.dropbox.com/s/5cpdn18y1yze1m5/12000.mp3?dl=0"],
  ['16khz', "https://dl.dropbox.com/s/jfzk1jvkf6zb7t7/16000.mp3?dl=0"],
]
const tonesListMed = [

  ['62hz', 'https://dl.dropbox.com/s/djob6jh23et18fv/62.mp3?dl=0'],
  ['100hz', "https://dl.dropbox.com/s/sg4lgrcgbujdl4s/100.mp3?dl=0"],
  ['200hz', "https://dl.dropbox.com/s/gwevky1s0x08l2o/200.mp3?dl=0"],
  ['400hz', "https://dl.dropbox.com/s/23f599vgxvgqkc5/400.mp3?dl=0"],
  ['500hz', "https://dl.dropbox.com/s/bf1lgsf7qs58k4c/500.mp3?dl=0"],
  ['800hz', "https://dl.dropbox.com/s/02z99w9sg867wzy/800.mp3?dl=0"],
  ['1khz', "https://dl.dropbox.com/s/h4yfpizlqx178p6/1000.mp3?dl=0"],
  ['2khz', "https://dl.dropbox.com/s/s70tzbwdab0a3pi/2000.mp3?dl=0"],
  ['4khz', "https://dl.dropbox.com/s/px7vxm2lpcrqyuz/4000.mp3?dl=0"],
  ['6khz', "https://dl.dropbox.com/s/s1lv1p5kowag5s6/6000.mp3?dl=0"],
  ['8khz', "https://dl.dropbox.com/s/9cgcd5ozkq57eex/8000.mp3?dl=0"],
  ['10khz', "https://dl.dropbox.com/s/leb7zhmwx1mo4ik/10000.mp3?dl=0"],
  ['16khz', "https://dl.dropbox.com/s/jfzk1jvkf6zb7t7/16000.mp3?dl=0"],
]
const tonesListEasy = [

  ['62hz', 'https://dl.dropbox.com/s/djob6jh23et18fv/62.mp3?dl=0'],
  ['100hz', "https://dl.dropbox.com/s/sg4lgrcgbujdl4s/100.mp3?dl=0"],
  ['200hz', "https://dl.dropbox.com/s/gwevky1s0x08l2o/200.mp3?dl=0"],
  ['400hz', "https://dl.dropbox.com/s/23f599vgxvgqkc5/400.mp3?dl=0"],
  ['1khz', "https://dl.dropbox.com/s/h4yfpizlqx178p6/1000.mp3?dl=0"],
  ['4khz', "https://dl.dropbox.com/s/px7vxm2lpcrqyuz/4000.mp3?dl=0"],
  ['10khz', "https://dl.dropbox.com/s/leb7zhmwx1mo4ik/10000.mp3?dl=0"],
  ['16khz', "https://dl.dropbox.com/s/jfzk1jvkf6zb7t7/16000.mp3?dl=0"],
]
const mainTonesLists = [tonesListEasy, tonesListMed, tonesListHard];

class App extends React.Component {
  constructor(props) {
    super(props);
    let tonesList = mainTonesLists[1];
    let winner = getRandom(0, tonesList.length);
    this.state = {
      difficulty: 1,
      tonesList: tonesList,
      winner: winner,
      buttons: Array(tonesList.length).fill(0),
      gameComplete: false,
      play: false,
      source: tonesList[winner][1],
      attempts: 0,
      correct: 0,
      highLow: "Take a Guess"
    }
    this.audio = new Audio(this.state.source)

  }
  componentDidMount() {
    this.audio.addEventListener('ended', () => this.setState({ play: false }));
  }

  componentWillUnmount() {
    this.audio.removeEventListener('ended', () => this.setState({ play: false }));
  }

  togglePlay() {
    if (this.state.gameComplete) {
      this.audio.pause();
      let tonesList = this.state.tonesList;
      let winner = getRandom(0, tonesList.length)
      this.setState({
        winner: winner,
        buttons: Array(tonesList.length).fill(0),
        gameComplete: false,
        play: false,
        source: tonesList[winner][1],
        highLow: "Take a Guess",
      })
      this.audio.setAttribute('src', tonesList[winner][1])
      this.setState({ play: true });
      this.audio.play()
    }
    else {
      this.setState({ play: !this.state.play }, () => {
        this.state.play ? this.audio.play() : this.audio.load();
      })
    }

  }
  handleClick(i) {
    if (!this.state.gameComplete) {
      let nAttempts = this.state.attempts + 1;
      let nCorrect = this.state.correct;
      let newButtons = this.state.buttons.concat();
      let endGame = false;
      let highLow = "Nice!";

      if (i !== this.state.winner) { newButtons[i] = 1; highLow = this.state.winner > i ? "Too Low" : "Too High"; }
      else { newButtons[i] = 2; endGame = true; nCorrect += 1; };
      this.setState({
        buttons: newButtons,
        gameComplete: endGame,
        attempts: nAttempts,
        correct: nCorrect,
        highLow: highLow,
      })
    }
  }

  handleReset(difficulty) {
    this.audio.pause();
    let tonesList = difficulty !== undefined ? mainTonesLists[difficulty] : this.state.tonesList;
    let newDifficulty = difficulty !== undefined ? difficulty : this.state.difficulty;
    let winner = getRandom(0, tonesList.length)
    this.setState({
      difficulty: newDifficulty,
      winner: winner,
      buttons: Array(tonesList.length).fill(0),
      gameComplete: false,
      tonesList: tonesList,
      play: false,
      source: tonesList[winner][1],
      attempts: 0,
      correct: 0,
      highLow: "Take a Guess",
    })
    this.audio.setAttribute('src', tonesList[winner][1])
  }



  render() {
    let buttonArray = [];
    let stats = (this.state.attempts === 0) ? null : Math.ceil((this.state.correct / this.state.attempts) * 100);
    let statsText = `${this.state.correct} / ${this.state.attempts} Correct`;
    let statsColor;
    if (stats >= 75) { statsColor = "Stats Stats-good"; }
    else if (stats >= 50) { statsColor = "Stats Stats-ok"; }
    else if (stats !== null) { statsColor = "Stats Stats-bad"; }
    else { statsColor = "Stats" }



    for (var i = 0; i < this.state.tonesList.length; i++) {
      buttonArray.push(
        <FreqButton
          value={i}
          key={i}
          text={this.state.tonesList[i][0]}
          status={this.state.buttons[i]}
          onClick={(i) => this.handleClick(i)
          }
        />
      )
    }
    return (
      <div>
        <div className="Freq-app">
          <div className="Header-title">Sine Wav Frequency Game</div>
          <div className="Main-buttons">
            <Tone play={this.state.play} gameComplete={this.state.gameComplete} onClick={() => this.togglePlay()} />
            <button className="Freq-button Reset" onClick={() => this.handleReset()}>Reset</button>
            <div className={statsColor}>{statsText}</div>
            <div className="High-low">{this.state.highLow}</div>
          </div>
          <div className="Button-array">
            {buttonArray}
          </div>
          <div className="Difficulty-title">Change Difficulty?</div>
          <div className="Difficulty">
            <DifficultyButton text="Easy" onClick={() => this.handleReset(0)} disable={this.state.difficulty === 0} />
            <DifficultyButton text="Medium" onClick={() => this.handleReset(1)} disable={this.state.difficulty === 1} />
            <DifficultyButton text="Hard" onClick={() => this.handleReset(2)} disable={this.state.difficulty === 2} />
          </div>
        </div>
      </div >
    );
  }

}

class FreqButton extends React.Component {
  render() {
    let currentClass = "Freq-button";

    if (this.props.status === 2) {
      currentClass = "Freq-button Freq-button-winner";

    }
    else if (this.props.status === 1) {
      currentClass = "Freq-button Freq-button-clicked";

    }
    return (
      <button
        className={currentClass}
        onClick={() => this.props.onClick(this.props.value)}
      >
        {this.props.text}
      </ button >)
  }
}

class Tone extends React.Component {

  render() {
    let value;
    let color = "";
    if (this.props.gameComplete) { value = 'Next Tone'; color = "Reset-complete"; }
    else { value = !this.props.play ? "Play" : "Stop" }
    return (
      <button
        className={`Freq-button Reset ${color}`}
        onClick={() => this.props.onClick()}>
        {value}
      </button>
    )
  }
}

function DifficultyButton(props) {
  return (
    <button
      disabled={props.disable}
      className="Difficulty-button"
      onClick={() => props.onClick()}
    >
      {props.text}
    </button >
  )
}
export default App;

// **************FUNCTIONS****************

function getRandom(min = 0, max) {
  return (Math.floor(min + (Math.random() * (max - min))));
}