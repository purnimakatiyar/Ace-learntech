
import './App.css';

import Header from "./components/Header/Header";
import Home from './components/Home/home';
// import Main from "./Main";
// import Main from "./components/Main"
import Services from './components/UI/Services';
import About from "./components/UI/About";
import Team from "./components/UI/Team";


function App() {
  return (
    <>
      <Header />
      <Home/>
 
<Services/>
<About/>
<Team/>

    </>
  )

}

export default App;
