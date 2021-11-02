import logo from './logo.svg';
import './App.css';
import Signup from './FrontEnd/Signup';
import Signin from './FrontEnd/Signin';
import Home from './FrontEnd/Home';
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';
import appadmin from './Admin/appadmin';

function App() {
  return (
    <div className="App">
      <Router>
<ul >
<li >
  <Link to ="/"></Link>
  </li>
  <li >
  <Link to ="signin">Signin</Link>
  </li>
  <li>
    <Link to ="signup">Signup</Link>
  </li>
</ul>
<switch>
<Route exact path='/' component={Home}></Route>
  <Route exact path='/signin' component={Signin}></Route>
  <Route exact path='/signup' component={Signup}></Route>
  
  <Route exact path='/appadmin' component={appadmin}></Route>
  
</switch>
      </Router>

      
    </div>
  );
}

export default App;
