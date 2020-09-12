import React from 'react';

import './App.css';

// import User from "./components/User"
// function App() {
//   return (
//     <div className="App">
//       <User firstName="Jacob" lastName="ZOUZOU" age="55"></User>
//     </div>
//   );
// }

// // import Checkbox from "./components/Reducer"
// import Checkbox from "./components/Checkbox"
// function App() {
//   return (
//     <div className="App">
//       <Checkbox/>
//     </div>
//   );
// }

// import GithubUser from "./components/GithubUser"
// function App() {
//   return (
//     <div className="App">
//       <GithubUser login="moonhighway"/>
//       <GithubUser login="eveporcello"/>
//     </div>
//   );
// }

/*CONTEXT */
// import {HelloWorld} from "./components/contextApi"
// function App() {
//   return (
//     <div className="App">
//       <HelloWorld></HelloWorld>
//     </div>
//   );
// }

/*HOC: Higher Order Component */
// import WrappedButton from "./components/hoc"
// function App() {
//   return (
//     <div className="App">
//       <WrappedButton/>
//     </div>
//   );
// }

// /*Props render */
import MouseTraker from "./components/PropRender"

function App() {
  return (
    <div className="App">
      <MouseTraker/>
    </div>
  );
}

// /*Props render wiht HOC */
// import { withMouse, Cat } from "./components/PropsRender"
// const TheCat = (mouse) => {
//   return <Cat mouse={mouse} />
// }
// function App() {
//   const WrappedMouse = withMouse(TheCat);

//   return (
//     <div className="App">
//       <WrappedMouse />
//     </div>
//   );
// }

// /*Props render bis */
// import { Parent, Blue, Red, Green, Bold } from "./components/PropsRender_bis"

// function App() {
//   return (
//     <div className="App">
//       <Parent
//         firstName={firstName => <Red firstName={firstName}/>}
//         lastName={lastName => <Green lastName={lastName}/>}
//         age={age => <Blue age={age}/>}
//       />
//       <Parent
//         firstName={firstName => <Bold firstName={firstName} />}
//         lastName={lastName => <Bold lastName={lastName} />}
//         age={age => <Bold age={age} />}
//       />
//     </div>
//   );
// }

// /* Hooks */
// import Hooks from './components/Hooks';

// function App() {
//   return (
//     <div className="App">
//       <Hooks/>
//     </div>
//   );
// }


export default App;
