import React,{useState} from 'react';
import { Checkbox, Collapse } from 'antd';

const { Panel } = Collapse;

const Category = [
    {
        'id':1,
        'name':'Mens Clothing'
    },
    {
        'id':2,
        'name':'Jewelary'
    },
    {
        'id':3,
        'name':'Womens Clothing'
    },
    {
        'id':4,
        'name':'Electronics'
    }
]


    
const CheckBox = (props) => {
    const [Checked, setChecked] = useState([])

    const handleToggle = (value) => {

       

        const currentIndex = Checked.indexOf(value); 
        const newChecked = [...Checked];

        if (currentIndex === -1){
            newChecked.push(value)
        }else{
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)

        props.handleFilters(newChecked)
    }

    const renderCheckboxLists = () =>   Category.map((value, index) => (
        <React.Fragment key={index}>
            <Checkbox
                onChange={() => handleToggle(value.id)}
                type='checkbox'
                checked={Checked.indexOf(value.id) === -1 ? false : true}
            />
            <span>{value.name}</span>
        </React.Fragment>
    ))
    
    return (
        <div className='checkbox'>
              <Collapse defaultActiveKey={['0']}>
                <Panel header key="1">
                  {renderCheckboxLists()}
                </Panel>
              </Collapse>
        </div>
    )
}

export default CheckBox;