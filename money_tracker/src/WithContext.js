import React,{Component} from 'react'
import {AppContext} from './App'

const WithContext = (Component) =>{
    return (props) =>{
        return(
            <AppContext.Consumer>
                {
                    ({state})=>{
                        return <Component {...props} data={state}></Component>
                    }
                }
            </AppContext.Consumer>
        )
    }
}

export default WithContext;