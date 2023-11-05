import React, {useEffect}  from 'react';
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


useEffect(() => {
  fetch(`http://localhost:3000`)
  .then(res =>res.json())
  .then(json => (console.log(json)))
  
 
},[])

  return (

   
    <div className="App">
      <header>
        <title>
          Rept-i-book
        </title>
      </header>
      <NavBar /> 
        <Switch>
          
         
          <Route path = "/submit">
            <Submit />
          </Route>
          <Route path = "/Snakes">
            <Snakes />
          </Route>
          <Route path = "/Geckos">
            <Geckos />
          </Route>
          <Route path = "/Lizards" >
            <Lizard />
          </Route>
          <Route exact path = "/">
            <Home />
          </Route>


        </Switch>
      
     

    </div>
  );
}

export default App;
