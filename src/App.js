//import logo from './logo.svg';
import './App.css';
import Address from './component/Profile/Address';
import FullName from './component/Profile/FullName';
import PofilePhoto from './component/Profile/PofilePhoto';

function App() {
  return (
    <div className="App">
     <PofilePhoto/>
     <FullName/>
     <Address/>
    </div>
  );
}

export default App;
