import React, { Component } from 'react';
//import React, { useState } from 'react'; //useState for manage state in funcational components
// import logo from './logo.svg';
import './App.css';
import Person from './components/Person'

//on the functional components we cannot use direct "state"

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// const App = (props) => { //in the funcational based component we don't need render() Method
  
//   const [personState,setPersonState] = useState({
//           persons: [
//             { name:"daniel", age: 30 },
//             { name:"Avijit", age: 35 },
//             { name:"Palash", age: 40 }
//           ],
//           //otherState : "Some other value"
//     })

//     //we can use useState multiple times like below
//     const [otherState,setOtherState] = useState("Some other value")

//     console.log(personState,otherState);

//     const  switchNameHandler = () => { //we can use this function with const in functional based components
//     console.log('was clicked...');
//     //this.state.persons[0].name = "Avijit Mondal" //Do not do this direct
//     setPersonState({
//       persons: [
//         { name:"daniel", age: 30 },
//         { name:"developer avijit", age: 35 },
//         { name:"Palash", age: 45 }
//       ],
//       //otherState : personState.otherState
//       //if we use useState multiple times then we don't need to add manually state
//       //but if you want to use manually merge otherState then you can do this
//     })
//   }

//   return(
//         <div className="App">
//                    react
//          {/* { console.log(this.state.persons) } */}
//          {/* <Person name="Avi" age="25">Hobby : Bike Ridding</Person>
//          <Person name="Palash" age="27"/>
//          <Person name="Shambhu" age="30"/> */}
//          {/*
//          in the class based componet we use this like "this.switchNameHandler"
//          but on function based component we use without this like "switchNameHandler"
//          */}
//          <br/><button onClick={switchNameHandler}>switch name</button>
//          <Person name={personState.persons[0].name } age={ personState.persons[0].age }>Hobby : Bike Ridding</Person>
//          <Person name={ personState.persons[1].name } age={ personState.persons[1].age }/>
//          <Person name={ personState.persons[2].name } age={ personState.persons[2].age }/>
//         </div>
//   )
// }

class App extends Component { //this is Class based Component

  state = {
    persons: [
      { name:"daniel", age: 30 },
      { name:"Avijit", age: 35 },
      { name:"Palash", age: 40 }
    ],
    otherState : "Some other value"
  }

  switchNameHandler = (newName) => {
    console.log('was clicked...');
    //this.state.persons[0].name = "Avijit Mondal" //Do not do this direct
    this.setState({
      persons: [
        // { name:"daniel", age: 30 },
        { name:newName, age: 30 },
        { name:"developer avijit", age: 35 },
        { name:"Palash", age: 45 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        // { name:"daniel", age: 30 },
        { name:'Avijit', age: 30 },
        { name: event.target.value, age: 35 },
        { name:"Palash", age: 25 }
      ]
    })
  }

  render(){
    // const styleHere = {
    //   border:red;
    // }
    return (
      <div className="App">
        react
        {/* { console.log(this.state.persons) } */}
        {/* <Person name="Avi" age="25">Hobby : Bike Ridding</Person>
        <Person name="Palash" age="27"/>
        <Person name="Shambhu" age="30"/> */}
        <br/><button style={{  }} onClick={() => this.switchNameHandler('devsAvi')}>switch name</button>
        {/*
        old syntax : this.switchNameHandler.bind(this,'devsAvi')
        new syntax : () => this.switchNameHandler('devsAvi')
        */}
        <Person 
          name={this.state.persons[0].name } 
          age={ this.state.persons[0].age }>Hobby : Bike Ridding</Person>
        <Person 
          name={ this.state.persons[1].name } 
          age={ this.state.persons[1].age }
          clickMe={() => this.switchNameHandler('devsDaniel')} 
          changed={this.nameChangeHandler}   
          />
        <Person 
          name={ this.state.persons[2].name } 
          age={ this.state.persons[2].age }/>
      </div>
    );
  }
}

export default App;
