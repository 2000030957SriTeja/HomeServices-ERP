import React from "react";
import "./footer.css";
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import Help from './Help';
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';
function Footer() {
  return (
    <div className="main-footer">
        <div className="row">
          <div className="col">
          <Router>
<ul >
<li >
<Link to ="aboutus">Aboutus</Link>
  </li>
  <li >
  <Link to ="contactus">Contactus</Link>
  </li>
  <li>
    <Link to ="help">Help</Link>
  </li>
</ul>

<switch>
<Route exact path='/aboutus' component={Aboutus}></Route>
  <Route exact path='/contactus' component={Contactus}></Route>
  <Route exact path='/help' component={Help}></Route>
  
</switch>
      </Router>
           
      </div>
    </div>
    </div>
    
  );
}

export default Footer;