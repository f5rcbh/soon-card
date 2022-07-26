import './scss/style.css'
import Profile from './images/hero-desktop.jpg'
import Soon from './components/soon';
function App() {
  return (
    <div className="App">
      <Soon/>
      <img src={Profile} alt="" />
    </div>
  );
}

export default App;
