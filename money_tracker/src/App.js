import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './containers/Home'
import Create from './containers/Create'
import {testItems,testCategories} from './testData'
import {flatternArr} from './utility'


// console.log(flatternArr(testItems))
export const AppContext = React.createContext()
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            item:flatternArr(testItems),
            categories:flatternArr(testCategories)
        }
    }
    render(){
        return(
            <AppContext.Provider value={{state:this.state}}>
                <Router>
                    <div className="App">
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/create" component={Create}></Route>
                        <Route path="/edit/:id" component={Create}></Route>
                    </div>
                </Router>
            </AppContext.Provider>
        )
    }
}

export default App;
