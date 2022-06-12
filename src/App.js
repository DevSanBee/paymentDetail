import './App.css';
import CreditCardForm from './components/paymentForm/Payment';
import NavTabs from './components/Nav/Nav';
import Total from './components/Total/Total';

function App() {
  return (
    <div className="App">
      <NavTabs/>
      <CreditCardForm/>
      <Total/>
    </div>
  );
}

export default App;
