import React, { Component } from 'react';
import {LIST_VIEW,CHART_VIEW,TYPE_INCOME,TYPE_OUTCOME,parseToYearAndMonth,padLeft} from '../utility'
import PriceList from '../components/PriceList'
import ViewTab from '../components/ViewTab'
import MonthPicker from '../components/MonthPicker'
import TotalPrice from '../components/TotalPrice'
import CreateBtn from '../components/CreateBtn'
import {Tabs, Tab} from '../components/Tabs'
import Ionicon from 'react-ionicons'
import {AppContext} from '../App'

export const category = {
    '1':{
        'id':'1',
        'name':'travel',
        'type':'income',
        'iconName':'ios-plane'
    },
    '2':{
        'id':'2',
        'name':'travel',
        'type':'income',
        'iconName':'ios-plane'
    }
}
export const items = [
    {
      'id':1,
      'title':'travel in Astralia',
      'price':200,
      'date':'2020-02-10',
      'cid':1
    },
    {
      'id':2,
      'title':'travel in England',
      'price':400,
      'date':'2020-02-10',
      'cid':2
    },
    {
        'id':3,
        'title':'travel in England',
        'price':400,
        'date':'2020-02-10',
        'cid':2
    },
    {
        'id':4,
        'title':'travel in England',
        'price':400,
        'date':'2020-07-10',
        'cid':2
    }
  ]
const newItem = {
    'id':1,
    'title':'travel in China',
    'price':300,
    'date':'2020-09-10',
    'cid':1
}  
const tabsText = [LIST_VIEW,CHART_VIEW]
class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            items,
            currentDate:parseToYearAndMonth(),
            tabView:tabsText[0]
        }
    }

    onChangeView = (index) =>{
        this.setState({
            tabView:tabsText[index]
        })
    }

    onChangeDate = (year,month) =>{
        this.setState({
            currentDate:{year,month}
        })

    }

    modifyItem = (modifyItem) => {
        const modifiedItems = this.state.items.map(item=>{
            if(item.id === modifyItem.id){
                return {...item,title:'has been edited'}
            }else{
                return item
            }
        })
        this.setState({
            items:modifiedItems
        })
    }

    createItem = () => {
        this.setState({
            items:[newItem,...this.state.items]
        })
    }

    deleteItem = (deleteItem) => {
        const filteredItems = this.state.items.filter(item=>(item.id!==deleteItem.id))
        this.setState({
            items:filteredItems
        })
    }

    render(){
        const {items,currentDate,tabView} = this.state;
        const itemsWithCategory = items.map(item=>{
            item.category = category[item.cid]
            return items
        }).filter((item,index)=>{
            return item[index].date.includes(`${currentDate.year}-${padLeft(currentDate.month)}`)
        })
        let totalIncome=0, totalOutcome=0;
        itemsWithCategory.forEach((item,index)=>{
            if(item[index].category.type===TYPE_OUTCOME){
                totalOutcome += item[index].price
            }else{
                totalIncome += item[index].price
            }
        })
        return(
            <AppContext.Consumer>
                {
                    ({state}) => {
                        console.log(state)
                        return(
                            <React.Fragment>
                                <header className='App-header'>
                                    <div className='row mb-5'>
                                        <h1>Money Tracker</h1>
                                    </div>
                                    <div className='row'>
                                        <div className='col'>
                                            <MonthPicker
                                                year={2020}
                                                month={2}
                                                onChange={this.onChangeDate}
                                            />
                                        </div>
                                        <div className='col'>
                                            <TotalPrice
                                                income = {totalIncome}
                                                outcome = {totalOutcome}
                                            />
                                        </div>
                                    </div>
                                </header>
                                <div className='content-area py-3 px-3'>
                                    <Tabs activeIndex={0} onTabChange={this.onChangeView}>
                                        <Tab>
                                        <Ionicon
                                            className='rounded-circle mr-2'
                                            fontSize='25px'
                                            color={'#007bff'}
                                            icon='ios-paper'
                                        />
                                        List Mode
                                        </Tab>
                                        <Tab>
                                            <Ionicon
                                                className='rounded-circle mr-2'
                                                fontSize='25px'
                                                color={'#007bff'}
                                                icon='ios-pie'
                                            />
                                            Chart Mode
                                        </Tab>
                                    </Tabs>
                                    {/* <ViewTab
                                        activeTab={LIST_VIEW}
                                        onTabChange={this.onChangeView}
                                    />  */}
                                    <CreateBtn onClick={this.createItem}/>
                                    { tabView === LIST_VIEW &&
                                    <PriceList 
                                        items = {itemsWithCategory}
                                        onModifyItem = {this.modifyItem}
                                        onDeleteItem = {this.deleteItem}
                                    ></PriceList>
                                    }
                                    {
                                        tabView === CHART_VIEW &&
                                        <h1>This is chart mode</h1>
                                    }
                                </div>
                            </React.Fragment>
                        )
                    }
                }
            
            </AppContext.Consumer>
          )
      }
  }

export default Home;