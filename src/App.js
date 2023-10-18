import "./App.css";
import OrganizerList from "./pages/Organizers/OrganizerLIst";

import UserList from "./pages/Users/UserList";
import Edit from "./pages/Users/UserSetting";
function App() {
  // const data = [
  //   {
  //     id: 1,
  //     name: "ken",
  //     bio: "Lorem Ipsum",
  //   },
  //   {
  //     id: 2,
  //     name: "ryu",
  //     bio: "Lorem Ipsum",
  //   },
  //   {
  //     id: 3,
  //     name: "Jane",
  //     bio: "Lorem Ipsum",
  //   },
  // ];
  const data = [
    {
      name: "west London",
      description: "events from west london",
      followers: "12",
    },
    {
      name: "west London",
      description: "events from west london",
      followers: "12",
    },
    {
      name: "west London",
      description: "events from west london",
      followers: "12",
    },
    {
      name: "west London",
      description: "events from west london",
      followers: "12",
    },
  ];
  return (
    <div className="App">
      {/* <CardView cardInfo={{title:"some TExt",description:"some desc",width:240}} /> */}
      <OrganizerList data={data} />
    </div>
  );
}

export default App;
