import { Select,Space } from "antd"

const SelectionField =({data})=>{

    return(
        <Select
            style={{width:120}}
            options={data}
            
        />

        
    )
}

export default SelectionField;