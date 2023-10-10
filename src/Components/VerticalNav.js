import { Menu } from "antd";
import { useState } from "react";
const VerticalNav=()=>{

const items = [{
        label:"For You",
        key:"home"
    },
    {
        label:"Events",
        key:"event"
    },
    {
        label:'Search',
        key:'find'
    },


]
return (
    <Menu mode="inline" 
    style={{
        width: 256,
     
      }}
      items={items} 
      />
)
}


export default VerticalNav;