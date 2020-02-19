import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
// import PriceList from './components/PriceList'
import ViewTab from './components/ViewTab'
import {LIST_VIEW} from './utility'
import MonthPicker from './components/MonthPicker'

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
function App() {
  return (
    <div className="App">
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
  );
}

export default App;
