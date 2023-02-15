import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import IssueATicket from './pages/IssueATicket';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Navbar/>

        <Routes>

      

<Route path="/issueTicket" element={<IssueATicket/>}/>


</Routes>



    </div>
  );
}

export default App;
