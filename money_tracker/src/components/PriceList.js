import React from 'react'
import Ionicon from 'react-ionicons'
import PropTypes from 'prop-types'

const PriceList = ({items,onModifyItem,onDeleteItem}) =>{
    console.log('items[0]')
    console.log(items)
    return (
        <ul className="list-group list-group-flush">
            {
                items.map((item,index)=>(
                    <li 
                        className='list-group-item d-flex justify-content-between align-items-center'
                        key={item[index].id}
                    >
                        <span className='col-1 badge badge-primary'>
                            <Ionicon
                                className='rounded-circle'
                                fontSize='30px'
                                style={{backgroundColor:'#007bff',padding:'5px'}}
                                color={'#fff'}
                                icon={item[index].category.iconName}
                            />
                        </span>
                        <span className='col-5'>
                            {item[index].title}
                        </span>
                        <span className='col-2 font-weight-bold'>
                            {(item[index].category.type === 'income') ? '+' : '-'}
                            ${item[index].price}
                        </span>
                        <span className='col-2'>
                            {item[index].date}
                        </span>
                        <a 
                            className='col-1'
                            // onClick={()=>{onModifyItem(item)}}
                            onClick={()=>{onModifyItem(item[index])}}
                        >
                            <Ionicon
                                className='rounded-circle'
                                fontSize='30px'
                                style={{backgroundColor:'#28a745',padding:'5px'}}
                                color={'#fff'}
                                icon='ios-create-outline'
                            />
                        </a>
                        <a className='col-1'
                            onClick={()=>{onDeleteItem(item[index])}}
                            // onClick={()=>alert(item[index])}
                        >
                            <Ionicon
                                className='rounded-circle'
                                fontSize='30px'
                                style={{backgroundColor:'#dc3545',padding:'5px'}}
                                color={'#fff'}
                                icon='ios-close'
                            />
                        </a>
                    </li> 
                ))
            }
        </ul>
    )
}

PriceList.propTypes={
    items:PropTypes.array.isRequired,
    onModifyItem:PropTypes.func.isRequired,
    onDeleteItem:PropTypes.func.isRequired
}
PriceList.defaultProps={
    onModifyItem:()=>{}
}
export default PriceList;