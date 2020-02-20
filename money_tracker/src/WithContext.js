import React,{Component} from 'react'
import {AppContext} from './App'

const WithContext = (Component) =>{
    return (props) =>{
        return(
            <AppContext.Consumer>
                {
                    ({state,actions})=>{
                        return <Component {...props} data={state} actions={actions}></Component>
                    }
                }
            </AppContext.Consumer>
        )
    }
}

export default WithContext;