import "./App.css";
import HorizontalNav from "./Components/HorizontalNav";
import VerticalNav from "./Components/VerticalNav";
import CardView from "./Components/cards";
import LoginPage from "./pages/login";
import SignUp from "./pages/signup";
import { Card } from "antd";
import UserList from "./pages/Users/UserList";
function App() {
  const data = [
    {
      id: 1,
      name: "ken",
      bio: "Lorem Ipsum",
    },
    {
      id: 2,
      name: "ryu",
      bio: "Lorem Ipsum",
    },
    {
      id: 3,
      name: "Jane",
      bio: "Lorem Ipsum",
    },
  ];
  return (
    <div className="App">
      {/* <CardView cardInfo={{title:"some TExt",description:"some desc",width:240}} /> */}
      <UserList users={data} />
    </div>
  );
}

export default App;
