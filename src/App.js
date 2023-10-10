import './App.css';
import HorizontalNav from './Components/HorizontalNav';
import VerticalNav from './Components/VerticalNav';
import CardView from './Components/cards';
import LoginPage from './pages/login';
import { Card } from 'antd';
function App() {
  return (
    <div className="App">
        {/* <CardView cardInfo={{title:"some TExt",description:"some desc",width:240}} /> */}
        <LoginPage/>
    </div>
  );
}

export default App;
