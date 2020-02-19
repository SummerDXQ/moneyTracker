import React, { Component } from 'react';
import {LIST_VIEW,CHART_VIEW,TYPE_INCOME,TYPE_OUTCOME,parseToYearAndMonth,padLeft} from '../utility'
import PriceList from '../components/PriceList'
import ViewTab from '../components/ViewTab'
import MonthPicker from '../components/MonthPicker'
import TotalPrice from '../components/TotalPrice'
import CreateBtn from '../components/CreateBtn'
// import logo from '../logo.svg'

const category = {
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
const items = [
    {
      'id':1,
      'title':'travel in Astralia',
      'price':200,
      'date':'2020-10-10',
      'cid':1
    },
    {
      'id':2,
      'title':'travel in England',
      'price':400,
      'date':'2020-09-10',
      'cid':2
    },
    {
        'id':3,
        'title':'travel in England',
        'price':400,
        'date':'2020-08-10',
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
    'date':'2018-09-10',
    'cid':1
}  

  class Home extends Component{
      constructor(props){
          super(props);
          this.state={
              items,
              currentDate:parseToYearAndMonth(),
              tabView:LIST_VIEW
          }
      }
      onChangeView = (view) =>{
          this.setState({
            tabView:view
          })
      }
      onChangeDate = (year,month) =>{
          this.setState({
            currentDate:{year,month}
          })

      }
      modifyItem = (modifyItem) => {
        //   console.log('修改')
        //   console.log(modifyItem)
        //   console.log(this.state.items)
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
              console.log('过滤')
              console.log(item[index].date)
              return item[index].date.includes(`${currentDate.year}-${padLeft(currentDate.month)}`)
          })
        //   console.log('itemsWithCategory')
        //   console.log(itemsWithCategory)
          let totalIncome=0, totalOutcome=0;
          itemsWithCategory.forEach((item,index)=>{
            //   console.log('item')
            //   console.log(item[index])
              if(item[index].category.type===TYPE_OUTCOME){
                  totalOutcome += item[index].price
              }else{
                  totalIncome += item[index].price
              }
          })
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
                       <ViewTab
                            activeTab={LIST_VIEW}
                            onTabChange={this.onChangeView}
                        /> 
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
                            <h1>这里是图表区域</h1>
                        }
                   </div>
              </React.Fragment>
          )
      }
  }

  export default Home;