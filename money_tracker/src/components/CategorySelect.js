import React from 'react'
import Ionicon from 'react-ionicons'
import PropTypes from 'prop-types'
import { categories } from './__test__/CategorySelect.test'
import { category } from '../containers/Home'

class CategorySelect extends React.Component {
    constructor(props){
        super(props)
        this.state={
            selectedCategoryId: props.selectedCategory && props.selectedCategory.id
        }
    }
    selectedCategory = (event,category)=>{
        this.setState({
            selectedCategoryId:category.id
        })
        this.props.onSelectCategory(category)
        event.preventDefault()
    }
  render() {
      const {categories,selectedCategory} = this.props;
      const {selectedCategoryId} = this.state
    return (
      <div className="category-select-component">
          <div 
            className='row'
            onClick={(event)=>{this.selectedCategory(event,category)}}
          >
              {
                  categories.map((category,index)=>{
                      const activeClass = (selectedCategory.id===category.id)?'category-item col-3 active' : 'category-item col-3'
                      return(
                            <div className={activeClass} key={index}>
                                <Ionicon
                                    className='rounded-cicle'
                                    fontSize='50px'
                                    color='#555'
                                    icon={category.iconName}
                                />
                            </div>
                      )
                  })
              }
          </div>
      </div>
    )
  }
}

CategorySelect.propTypes = {
  
}
export default CategorySelect