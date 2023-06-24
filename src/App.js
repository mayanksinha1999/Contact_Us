import Navbar from './components/Navbar/Navbar';
import './App.css';
import ContactHeader from './components/ContactHeader/ContactHeader';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main className="main_Container">
      <ContactHeader/>
      <ContactForm/>
      </main>
    </div>
  );
}

export default App;
