import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import PriceList from './components/PriceList'

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
        <PriceList 
            items = {items}
            onModifyItem = {(item)=>{alert(item.id)}}
            onDeleteItem = {(item)=>{alert(item.id)}}
        ></PriceList>
    </div>
  );
}

export default App;
