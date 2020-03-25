import React, { Component } from 'react';
import './App.css';
import SquatInput from './Component/Inputs/SquatInput';
import RepView from './Component/Views/RepView';

class App extends Component {
  state = {
    maxSquat: 225,
    backSquatProgram: [
      { week: 1, day: 1, set1: "1*10", percent1: 0.6, set2: "1*8", percent2: 0.7, set3: "1*6", percent3: 0.75, set4: "1*4", percent4: 0.8 },
      { week: 1, day: 2, set1: "1*10", percent1: 0.6, set2: "1*8", percent2: 0.65, set3: "1*8", percent3: 0.7, set4: "1*8", percent4: 0.75 },
      { week: 2, day: 1, set1: "1*10", percent1: 0.6, set2: "1*8", percent2: 0.65, set3: "1*6", percent3: 0.70, set4: "1*6", percent4: 0.75, set5: "1*6", percent5: 0.8 },
      { week: 2, day: 2, set1: "1*10", percent1: 0.6, set2: "1*8", percent2: 0.7, set3: "1*8", percent3: 0.75, set4: "1*8", percent4: 0.8 },
      { week: 3, day: 1, set1: "1*8", percent1: 0.65, set2: "1*8", percent2: 0.7, set3: "1*6", percent3: 0.8, set4: "1*6", percent4: 0.85 },
      { week: 3, day: 2, set1: "1*10", percent1: 0.6, set2: "1*10", percent2: 0.65, set3: "1*8", percent3: 0.70, set4: "1*8", percent4: 0.75 }
    ]
  };

  squatInputHandler = event => {
    this.setState({
      maxSquat: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>HATCH SQUAT</h1>
        <SquatInput onChange={this.squatInputHandler} currentMaxSquatValue={this.state.maxSquat} />

        {this.state.backSquatProgram.map(program => {
          return (
            <RepView
              week={program.week}
              day={program.day}
              maxSquat={this.state.maxSquat}
              set1={program.set1}
              set2={program.set2}
              set3={program.set3}
              set4={program.set4}
              set5={program.set5}
              percent1={program.percent1}
              percent2={program.percent2}
              percent3={program.percent3}
              percent4={program.percent4}
              percent5={program.percent5}
            />
          )
        })}
        {/* <RepView week="1" day="1" maxSquat={this.state.maxSquat} />
        <RepView week="2" day="2" maxSquat={this.state.maxSquat} />
        <RepView week="3" day="3" maxSquat={this.state.maxSquat} /> */}
      </div>
    );
  };
};



export default App;
