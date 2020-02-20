import React from 'react'
import { shallow } from 'enzyme'
import CategorySelect from '../CategorySelect'
import Ionicon from 'react-ionicons'
import { items } from '../../containers/Home'

export const categories = [
   {
    "id": "1",
    "name": "旅行",
    "type": "outcome",
    "iconName": "ios-plane",    
  },
   {
    "id": "2",
    "name": "理财",
    "type": "income",
    "iconName": "logo-yen", 
  },
  {
    "id": "3",
    "name": "理财",
    "type": "income",
    "iconName": "logo-yen", 
  }
]

let props = {
  categories,
  onSelectCategory: jest.fn()
}

let props_with_category = {
  categories,
  onSelectCategory: jest.fn(),
}

describe('test CategorySelect component',()=>{
    // it('renders with categories should render the correst items',()=>{
    //     const wrapper = 
    // })
})