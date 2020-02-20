import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './containers/Home'
import Create from './containers/Create'
import {testItems,testCategories} from './testData'
import {flatternArr,ID, parseToYearAndMonth} from './utility'


// console.log(flatternArr(testItems))
export const AppContext = React.createContext()
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            items:flatternArr(testItems),
            categories:flatternArr(testCategories)
        }
        this.actions = {
            deleteItem:(item)=>{
                console.log('before delete')
                console.log(this.state.items)
                delete this.state.items[item.id]
                console.log('after delete')
                console.log(this.state.items)
                this.setState({
                    items:this.state.items
                })
            },
            createItem:(data,categoryId)=>{
                console.log('hh',data)
                console.log('cid',categoryId)
                const newId = ID()
                const parsedDate = parseToYearAndMonth(data.date)
                data.monthCategory=`${parsedDate.year}-${parsedDate.month}`
                data.timestamp=new Date(data.date).getTime()
                const newItem = {...data,id:newId,cid:categoryId} 
                this.setState({
                    items:{...this.state.items,[newId]:newItem}
                })
            }
            
        }
    }
    render(){
        return(
            <AppContext.Provider 
                value={{state:this.state,actions:this.actions}}
            >
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
