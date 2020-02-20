import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import axios from 'axios'

// axios.get('/items')
// .then((res)=>{
//     console.log(res.data)
// })

// const newItem ={
//     title: "treat others",
//     price: 2000,
//     date: "2018-11-15",
//     monthCategory: "2018-11",
//     id: "_qmatbbw",
//     cid: "3",
//     timestamp: 1542896269180
// }

// axios.post('/items',newItem)
// .then((res)=>{
//     console.log('post request')
//     console.log(res)
// })
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
