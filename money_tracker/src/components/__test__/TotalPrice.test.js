import React from 'react'
import {shallow} from 'enzyme'
import TotalPrice from '../TotalPrice'

const props={
    income:1000,
    outcome:2000
}

describe('test TotalPrice component',()=>{
    it('component should render correct income&outcome number',()=>{
        // const wraper = shallow(<TotalPrice income={this.props.income} outcome={this.props.outcome}/>)
        const wraper = shallow(<TotalPrice {...props}/>)
        expect(wraper.find('.income span').text()*1).toEqual(1000)
        expect(wraper.find('.outcome span').text()*1).toEqual(2000)
    })
})