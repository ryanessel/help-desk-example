import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import IssueATicket from './pages/IssueATicket';
import TicketListViewAdmin from './pages/TicketListViewAdmin';
import TicketDetails from './pages/TicketDetails';
import AdminAddUser from './pages/AdminAddUser';
import { Routes, Route} from 'react-router-dom';
import IsPrivate from './components/IsPrivate';

function App() {
  return (
    <div className="App">
        <Navbar/>

        <Routes>

      

<Route path="/issueTicket" element={<IssueATicket/>}/>
<Route path="/allTickets" element={<IsPrivate><TicketListViewAdmin/></IsPrivate>}/>
<Route path ="/ticket/:ticketId" element={<TicketDetails/>}/>
<Route path="/AdminAddSecretURL" element={<AdminAddUser/>}/>
</Routes>



    </div>
  );
}

export default App;
