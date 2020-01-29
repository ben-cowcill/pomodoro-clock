import React from 'react';
import './App.css';

const Reset = (props) => {
  return(
    <div>&#8635;</div>
  );
}

const Stop = (props) => {
  return(
    <div>&#9208;</div>
  );
}

const Start = (props) => {
  return(
    <div>&#9654;</div>
  );
}

const TimerLabel = (props) => {
  return(
    <div>{props.label}</div>
  );
}

const TimeLeft = (props) => {
  return(
    <div>{props.minutes}:{props.seconds}</div>
  );
}

const Duration = (props) => {
  return(
    <div>{props.length}</div>
  );
}

const Increment = (props) => {
  return(
    <div>&#8593;</div>
  );
}

const Decrement = (props) => {
  return(
    <div>&#8595;</div>
  );
}

const Controls = (props) => {
  return(
    <div>
      <div className="flexRow">
        <Start/>
        <Stop/>
        <Reset/>
      </div>
    </div>
  );
}

const Timer = (props) => {
  return(
    <div>
      <TimerLabel label={props.label}/>
      <TimeLeft minutes={props.minutes} seconds={props.seconds}/>
    </div>
  );
}

const Session = (props) => {
  return(
    <div className="session">
      <div>Session</div>
      <div className="flexRow">
        <Decrement/>
        <Duration length={props.length}/>
        <Increment/>
      </div>
    </div>
  );
}

const Break = (props) => {
  return(
    <div className="break">
      <div>Break</div>
      <div className="flexRow">
        <Decrement/>
        <Duration length={props.length}/>
        <Increment/>
      </div>
    </div>
  );
}

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      label:'Session',
      breakLength: 5,
      sessionLength: 25,
      minutes:25,
      seconds:0
    }

  }
  

  render(){
    return(
      <div className="appWrapper">
        <main>
          <h1>Pomodoro Clock</h1>
          <div className="flexRow">
            <Break length={this.state.breakLength}/>
            <Session length={this.state.sessionLength}/>
          </div>
          <div className="timer flexCol">
            <Timer label={this.state.label} minutes={this.state.minutes} seconds={this.state.seconds}/>
          </div>
          <Controls/>
        </main>
        
      </div>
    );
  }
}

export default App;
