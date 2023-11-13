import React, { useState}  from 'react';
import { Switch, Route} from 'react-router-dom';
import "./style.css"
import Snakes from "./Componets/Snakes";
import Home from "./Componets/Home";
import Submit from "./Componets/submit";
import Geckos from "./Componets/Geckos";
import Lizard from "./Componets/Lizards";
import NavBar from "./Componets/Navbar";



function App() {
 //const [page,  setPage] = useState(Home)
 const [geckos, setgecko ] = useState()
 const [lizard, setLizard] = useState()
 //const [snakes, setSnake] =  useState()
 const [resouresetype, setResoursetype] = useState('')
 
  

  return (

   
    <div className="App">
      <header>
        <title>
          Rept-i-book
        </title>
      </header>
      <NavBar resouresetype ={resouresetype} setResoursetype={setResoursetype}/> 
        <Switch>
          
         
          <Route path = "/submit">
            <Submit />
          </Route>
          <Route path = "/Snakes">
            <Snakes/>
          </Route>
          <Route path = "/Geckos">
            <Geckos setgecko={setgecko} geckos={geckos}/>
          </Route>
          <Route path = "/Lizards"  >
            <Lizard setLizard={setLizard} lizard={lizard} />
          </Route>
          <Route exact path = "/">
            <Home />
          </Route>


        </Switch>
      
     

    </div>
  );
}

export default App;
