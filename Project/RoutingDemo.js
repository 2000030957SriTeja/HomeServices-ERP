import Home from './Home'

import { BrowserRouter,Route,Link,Switch } from 'react-router-dom'

const RountingDemo = () => (
<center>
    
<BrowserRouter>
        <ul>
            <Link to="http://localhost:3000/home">
            <li>Home</li>
            </Link>
         </ul>
  

      <Switch>
 
 <Route path="http://localhost:3000/home" component={Home} exact/>

 </Switch>
</BrowserRouter>
</center>
);
export default RountingDemo