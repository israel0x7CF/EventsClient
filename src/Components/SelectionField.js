import { Select,Space } from "antd"

const SelectionField =({data,setState})=>{
    const changeEvent = (value)=>{
        setState(value)
      
      }
    return(
        <Select
            style={{width:120}}
            options={data}
            onChange={changeEvent}
        />

        
    )
}

export default SelectionField;