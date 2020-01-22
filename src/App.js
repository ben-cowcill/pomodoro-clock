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
    <div>Session</div>
  );
}

const TimeLeft = (props) => {
  return(
    <div>25:00</div>
  );
}

const Duration = (props) => {
  return(
    <div>5</div>
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
      <TimerLabel/>
      <TimeLeft/>
    </div>
  );
}

const Session = (props) => {
  return(
    <div className="session">
      <div>Session</div>
      <div className="flexRow">
        <Decrement/>
        <Duration/>
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
        <Duration/>
        <Increment/>
      </div>
    </div>
  );
}

class App extends React.Component {
  render(){
    return(
      <div className="appWrapper">
        <main>
          <h1>Pomodoro Clock</h1>
          <div className="flexRow">
            <Break/>
            <Session/>
          </div>
          <div className="timer flexCol">
            <Timer/>
          </div>
          <Controls/>
        </main>
        
      </div>
    );
  }
}

export default App;
