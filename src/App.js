import { useState } from "react";
import "./App.css";
import SelectionField from "./Components/SelectionField";
import NewEvent from "./pages/Event/newEvent";
import OrganizerList from "./pages/Organizers/OrganizerLIst";
import UserList from "./pages/Users/UserList";
import Edit from "./pages/Users/UserSetting";
import Home from "./pages/home/home";
function App() {

  const [some,setSome] = useState("")
  const changeEvent = (value)=>{
    setSome(value)
    console.log(some)
  }
  const data = [
    {
      value: "ken",
      label: "ken",
      
    },
    {
      value: "ryu",
      label: "ryu",
    
    },
    {
      value: "fire",
      label: "fire",
   
    },
  ];
  // [
  //   {
  //     value: 'jack',
  //     label: 'Jack',
  //   },
  //   {
  //     value: 'lucy',
  //     label: 'Lucy',
  //   },
  //   {
  //     value: 'Yiminghe',
  //     label: 'yiminghe',
  //   },
  //   {
  //     value: 'disabled',
  //     label: 'Disabled',
  //     disabled: true,
  //   },
  // ]

  return (
    <div className="App">
      {/* <CardView cardInfo={{title:"some TExt",description:"some desc",width:240}} /> */}
      <NewEvent />
      
    </div>
  );
}

export default App;
