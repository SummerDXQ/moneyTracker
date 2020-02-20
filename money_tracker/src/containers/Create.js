import React,{Component} from 'react'
import CategorySelect from '../components/CategorySelect'
import {Tabs,Tab} from '../components/Tabs'
import PriceForm from '../components/PriceForm'
import {testCategories} from '../testData'
import {TYPE_INCOME,TYPE_OUTCOME} from '../utility'

class Create extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const filterCategories =  testCategories.filter(category => category.type === TYPE_OUTCOME)
        return(
            <div className='create-page py-3 py-3 rounded mt-3' style={{background:'#fff'}}>
                <Tabs activeIndex={0} onTabChange={()=>{}}>
                    <Tab>Outcome</Tab>
                    <Tab>Income</Tab>
                </Tabs>
                <CategorySelect categories={filterCategories} onSelectCategory={()=>{}}/>
                <PriceForm
                    onFormSubmit={()=>{}}
                    onCancelSubmit={()=>{}}
                />
            </div>
        )
    }
}
// const Create = ({match}) =>{
//     return <h1>this is create page{match.params.id}</h1>
// }

export default Create