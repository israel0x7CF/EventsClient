import { Menu } from "antd";
import { useState } from "react";
const HorizontalNav=()=>{

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
    <Menu mode="horizontal" items={items} />
)
}


export default HorizontalNav;