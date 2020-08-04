import React , {Component} from 'react'; // react.component
import { render } from 'react-dom';

class App extends Component {
 
constructor(){
    super()
    this.eno = 215;
    this.ename = "Ram";
    this.salary = "25000"
}

 render(){
    return(
        <div>
            <p>Hello React</p>
            <h3>Employee Details</h3>
            <label> Eno :  {this.eno}</label>
            <label> Ename  : {this.ename}</label>
            <label> Salary :  {this.salary}</label>
        </div>
    )
 }
}

render(<App/> , document.getElementById('root'))
