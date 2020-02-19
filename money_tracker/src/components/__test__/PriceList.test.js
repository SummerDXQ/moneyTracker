import React from 'react'
import {shallow} from 'enzyme'
import PriceList from '../PriceList'
import {items,category} from '../../containers/Home'
import Ionicon from 'react-ionicons'

const itemsWithCategory = items.map((item)=>{
    item.category = category[item.cid]
    return items
})

const props = {
    items:itemsWithCategory,
    onModifyItem:jest.fn(),
    onDeleteItem:jest.fn()
}

let wrapper

describe('test PriceList component',()=>{
    // 在每次运行单个测试用例的时候都先运行这个
    beforeEach(()=>{
        wrapper = shallow(<PriceList {...props}/>)
    })
    it('should render the component to match snapshot',()=>{
        // 使用snapshot进行快照的测试，如果改变代码了，就会被显示出来
        expect(wrapper).toMatchSnapshot()
    })
    it('should render correct price items length',()=>{
        expect(wrapper.find('.list-group-item').length).toEqual(itemsWithCategory.length)
    })
    it('should render correct icon and price for each item',()=>{
        const iconList = wrapper.find('.list-group-item').first().find(Ionicon)
        expect(iconList.length).toEqual(3)
        // props()可以取得所有的属性
        // expect(iconList.first().props().icon).toEqual(itemsWithCategory[0].category.iconName)
    })
    it('should trigger correct function callbacks',()=>{
        const firstItem=wrapper.find('.list-group-item').first()
        firstItem.find('a').first().simulate('click')
        // expect(props.onModifyItem).toHaveBeenCalledWith 
        expect(props.onModifyItem).toHaveBeenCalledWith(itemsWithCategory[0][0])  
        firstItem.find('a').last().simulate('click')
        expect(props.onDeleteItem).toHaveBeenCalledWith(itemsWithCategory[0][0])  
    })
})