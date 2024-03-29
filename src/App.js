import './App.css';
import React from 'react';

const startingDifficulty = 1;

const tonesListHard = [
  ['50hz', 'https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/50.mp3'],
  ['62hz', 'https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/62.mp3'],
  ['80hz', 'https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/80.mp3'],
  ['100hz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/100.mp3"],
  ['200hz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/200.mp3"],
  ['250hz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/250.mp3"],
  ['300hz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/300.mp3"],
  ['400hz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/400.mp3"],
  ['500hz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/500.mp3"],
  ['800hz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/800.mp3"],
  ['1khz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/1000.mp3"],
  ['1.5khz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/1500.mp3"],
  ['2khz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/2000.mp3"],
  ['3khz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/3000.mp3"],
  ['4khz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/4000.mp3"],
  ['5khz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/5000.mp3"],
  ['6khz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/6000.mp3"],
  ['8khz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/8000.mp3"],
  ['10khz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/10000.mp3"],
  ['12khz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/12000.mp3"],
  ['16khz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/16000.mp3"],
]
const tonesListMed = [

  ['62hz', 'https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/62.mp3'],
  ['100hz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/100.mp3"],
  ['200hz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/200.mp3"],
  ['400hz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/400.mp3"],
  ['500hz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/500.mp3"],
  ['800hz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/800.mp3"],
  ['1khz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/1000.mp3"],
  ['2khz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/2000.mp3"],
  ['4khz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/4000.mp3"],
  ['6khz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/6000.mp3"],
  ['8khz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/8000.mp3"],
  ['10khz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/10000.mp3"],
  ['16khz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/16000.mp3"],
]
const tonesListEasy = [

  ['62hz', 'https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/62.mp3'],
  ['100hz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/100.mp3"],
  ['200hz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/200.mp3"],
  ['400hz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/400.mp3"],
  ['1khz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/1000.mp3"],
  ['4khz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/4000.mp3"],
  ['10khz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/10000.mp3"],
  ['16khz', "https://colten-test-files-1.s3.us-east-2.amazonaws.com/Sin+Wavs/16000.mp3"],
]
const mainTonesLists = [tonesListEasy, tonesListMed, tonesListHard];

class App extends React.Component {
  constructor(props) {
    super(props);
    let tonesList = mainTonesLists[startingDifficulty];
    let winner = getRandom(0, tonesList.length);
    this.audioFiles = [];
    for (let i = 0; i < tonesList.length; i++) {
      this.audioFiles.push(new Audio(tonesList[i][1]));
      console.log(this.audioFiles[i]);
    };
    this.state = {
      difficulty: 1,
      tonesList: tonesList,
      winner: winner,
      buttons: Array(tonesList.length).fill(0),
      gameComplete: false,
      play: false,
      attempts: 0,
      correct: 0,
      highLow: "Take a Guess"
    }
    this.audio = this.audioFiles[winner]

  }
  componentDidMount() {
    this.audio.addEventListener('ended', () => this.setState({ play: false }));
  }

  componentWillUnmount() {
    this.audio.removeEventListener('ended', () => this.setState({ play: false }));
  }

  togglePlay() {
    if (this.state.gameComplete) {
      this.audioFiles[this.state.winner].pause();
      this.audioFiles[this.state.winner].removeEventListener('ended', () => this.setState({ play: false }));
      let tonesList = this.state.tonesList;
      let winner = getRandom(0, tonesList.length)
      this.audioFiles[winner].addEventListener('ended', () => this.setState({ play: false }));
      this.setState({
        winner: winner,
        buttons: Array(tonesList.length).fill(0),
        gameComplete: false,
        play: false,
        highLow: "Take a Guess",
      })
      this.audioFiles[winner].currentTime = 0;
      this.setState({ play: true });
      this.audioFiles[winner].play();
    }
    else {
      let winner = this.state.winner;
      this.setState({ play: !this.state.play }, () => {
        this.state.play ? this.audioFiles[winner].play() :
          this.audioFiles[winner].pause();
        this.audioFiles[winner].currentTime = 0;
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
    this.audio.removeEventListener('ended', () => this.setState({ play: false }));
    let tonesList = difficulty !== undefined ? mainTonesLists[difficulty] : this.state.tonesList;
    let newDifficulty = difficulty !== undefined ? difficulty : this.state.difficulty;
    let winner = getRandom(0, tonesList.length)

    this.audioFiles = [];
    for (let i = 0; i < tonesList.length; i++) {
      this.audioFiles.push(new Audio(tonesList[i][1]));
    }
    this.setState({
      difficulty: newDifficulty,
      winner: winner,
      buttons: Array(tonesList.length).fill(0),
      gameComplete: false,
      tonesList: tonesList,
      play: false,
      attempts: 0,
      correct: 0,
      highLow: "Take a Guess",
    })
    this.audio = this.audioFiles[winner];
    this.audio.load();
    this.audio.addEventListener('ended', () => this.setState({ play: false }));
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