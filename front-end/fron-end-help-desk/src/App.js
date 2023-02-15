import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import IssueATicket from './pages/IssueATicket';
import TicketListViewAdmin from './pages/TicketListViewAdmin';
import TicketDetails from './pages/TicketDetails';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Navbar/>

        <Routes>

      

<Route path="/issueTicket" element={<IssueATicket/>}/>
<Route path="/allTickets" element={<TicketListViewAdmin/>}/>
<Route path ="/ticket/:ticketId" element={<TicketDetails/>}/>

</Routes>



    </div>
  );
}

export default App;
