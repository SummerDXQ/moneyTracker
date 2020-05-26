import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './containers/Home'
import Create from './containers/Create'
// import {testItems,testCategories} from './testData'
import {flatternArr,ID, parseToYearAndMonth} from './utility'
import axios from 'axios'
import {AppContext} from './AppContext'

// console.log(flatternArr(testItems))
// export const AppContext = React.createContext()
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            items:{},
            categories:{},
            isLoading:false,
            currentDate:parseToYearAndMonth()
        }
        // const withLoading = (cb) =>{
        //     return (...args)=>{
        //         this.setState({
        //             isLoading:true
        //         })
        //         return cb(...args)
        //     }
        // }
        this.actions = {
            // async 会返回一个promise对象，await写成类似同步的写法
            getInitialData: async ()=>{
                this.setState({isLoading:true})
                const {currentDate} = this.state
                const getURLWithData = `/items?monthCategory=${currentDate.year}-${currentDate.month}&_sort=timestamp&_order=desc`
                const result = await Promise.all([axios.get('/categories'),axios.get(getURLWithData)])
                const [categories,items] = result
                this.setState({
                    items:flatternArr(categories.data),
                    categories:flatternArr(items.data),
                    isLoading:false
                })
                return items
            },
            getEditData: async (id)=>{
                this.setState({isLoading:true})
                const {items,categories} = this.state
                let promiseArr = []
                if(Object.keys(categories).length ===0){
                    promiseArr.push(axios.get('/categories'))
                }
                const itemAlreadyFetch = (Object.keys(items).indexOf>-1)
                if(id && itemAlreadyFetch){
                    const getURLWithID = `/items/${id}`
                    promiseArr.push(axios.get(getURLWithID))
                }
                const [fetchedCategories,editItem] = await Promise.all(promiseArr)
                const finalCategories = fetchedCategories?flatternArr(fetchedCategories.data):categories
                const finalItem = editItem?editItem.data:items[id]
                if(id){
                    this.setState({
                        categories:finalCategories,
                        isLoading:false,
                        items:{...this.state.items,[id]:editItem.data}
                    })
                }else{
                    this.setState({
                        categories:finalCategories,
                        isLoading:false,
                    })
                    return {
                        categories:finalCategories,
                        editItem: finalItem
                    }
                }
            },
            selectNewMonth: async (year,month)=>{
                this.setState({isLoading:true})
                // const {currentDate} = this.state
                const getURLWithData = `/items?monthCategory=${year}-${month}&_sort=timestamp&_order=desc`
                const items = await axios.get(getURLWithData)
                this.setState({
                    items:flatternArr(items.data),
                    currentDate:{year,month}
                })
                // 可有可无，看需求
                return items
            },
            deleteItem: async (item)=>{
                this.setState({isLoading:true})
                const deleteItem = await axios.delete(`/items/${item.id}`)
                delete this.state.items[item.id]
                this.setState({
                    items:this.state.items,
                    isLoading:false
                })
                return deleteItem
            },
            createItem: async (data,categoryId)=>{
                const newId = ID()
                const parsedDate = parseToYearAndMonth(data.date)
                data.monthCategory=`${parsedDate.year}-${parsedDate.month}`
                data.timestamp=new Date(data.date).getTime()
                const newItem = await axios.post('/items',{...data,id:newId,cid:categoryId})
                this.setState({
                    items:{...this.state.items,[newId]:newItem},
                    isLoading:false
                })
                return newItem.data
            },
            updateItem: async (item,updateCategoryId)=>{
                const modifiedItem = {
                    ...item,
                    cid:updateCategoryId,
                    timeStamp:new Date(item.date).getTime()
                }
                modifiedItem = await axios.put(`/items/${item.id}`,updateData)
                this.setState({
                    items:{...this.state.items,[modifiedItem.id]:modifiedItem}
                })
                return modifiedItem.data 
            }
            
        }
    }
    
    componentDidMount(){
        this.actions.getInitialData()
    }
    render(){
        console.log('state') 
        console.log(this.state.items)
        console.log(this.state.categories)
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
