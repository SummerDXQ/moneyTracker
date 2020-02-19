import React, { Component } from 'react';
import {LIST_VIEW,CHART_VIEW,TYPE_INCOME,TYPE_OUTCOME} from '../utility'
import PriceList from '../components/PriceList'
import ViewTab from '../components/ViewTab'
import MonthPicker from '../components/MonthPicker'
// import CreateBtn from '../components'

const items = [
    {
      'id':1,
      'title':'travel in Astralia',
      'price':200,
      'date':'2018-09-10',
      'category':{
        'id':'1',
        'name':'travel',
        'type':'outcome',
        'iconName':'ios-plane'
      }
    },
    {
      'id':2,
      'title':'travel in England',
      'price':400,
      'date':'2018-09-10',
      'category':{
        'id':'1',
        'name':'travel',
        'type':'outcome',
        'iconName':'ios-plane'
      }
    }
  ]

  class Home extends Component{
      render(){
          let totalIncome=0, totalOutcome=0

          return(
              <React.Fragment>
                   <header className='App-header'>
                       <div className='row mb-5'>

                       </div>
                       <div className='row'>
                           <div className='col'>
                               {/* <PriceList 
                                    items = {items}
                                    onModifyItem = {(item)=>{alert(item.id)}}
                                    onDeleteItem = {(item)=>{alert(item.id)}}
                                ></PriceList> */}
                                {/* <ViewTab
                                    activeTab={LIST_VIEW}
                                    onTabChange={(view)=>{console.log(view)}}
                                />  */}
                                <MonthPicker
                                    year={2020}
                                    month={2}
                                    onChange={(year,month)=>{console.log(year,month)}}
                                />
                           </div>
                       </div>
                   </header>
              </React.Fragment>
          )
      }
  }

  export default Home;