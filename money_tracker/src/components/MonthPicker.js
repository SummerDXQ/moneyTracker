import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {padLeft,range} from '../utility'

// 点击其他地方，也收回
// help函数
// dropdown年月的改变
export default class MonthPicker extends Component{
    constructor(props){
        super(props);
        this.state={
            isOpen:true,
            selectedYear:this.props.year, 
            selectMonth:this.props.month
        }
    }
    toggleDropdown=()=>{
        this.setState({
            isOpen:!this.state.isOpen
        })
    }
    selectYear = (event,yearNumber) =>{
        event.preventDefault();
        this.setState({
            selectedYear:yearNumber
        })
    }
    selectMonth = (event, monthNumber) =>{
        event.preventDefault();
        this.setState({
            isOpen:false,
            selectMonth:monthNumber
        })
        this.props.onChange(this.state.selectedYear,monthNumber)
    }
    render(){
        const {year,month} = this.props
        const {isOpen,selectedYear,selectMonth} = this.state
        const monthRange = range(12,1)
        const yearRange = range(9,-4).map(number=>number+year)
        return(
            <div className='dropdown month_picker'>
                <h4>Choose Month</h4>
                <button 
                    className='btn btn-lg btn-secondary dropdown-toggle'
                    onClick={this.toggleDropdown}
                >
                    {`${padLeft(selectMonth)}/${selectedYear}`}
                </button>
                {
                    isOpen && 
                    <div className='dropdown-menu' style={{display:'block'}}>
                        <div className='row'>
                            <div className='col border-right'>
                                {
                                    yearRange.map((yearNumber,index)=>{
                                        return(
                                            <a 
                                                key={index} 
                                                className='dropdown-item'
                                                href='#'
                                                onClick={(event)=>this.selectYear(event,yearNumber)}
                                                className={(yearNumber===selectedYear)?'dropdown-item active':'dropdown-item'}
                                                >
                                                {yearNumber} year 
                                            </a>
                                        )
                                    })
                                }
                            </div>
                            <div className='col'>
                                {
                                    monthRange.map((monthNumber,index)=>{
                                        return(
                                            <a 
                                                key={index} 
                                                className='dropdown-item'
                                                className={(monthNumber===selectMonth)?'dropdown-item active':'dropdown-item'}
                                                onClick={(event)=>this.selectMonth(event,monthNumber)}
                                            >
                                                {padLeft(monthNumber)} Month
                                            </a>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
} 

MonthPicker.propTypes = {
    year:PropTypes.number.isRequired,
    month:PropTypes.number.isRequired,
    onChange:PropTypes.func.isRequired,
}