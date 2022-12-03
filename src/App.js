import Header from './components/Header';
import Home from './pages/Home';
import '../src/scss/app.scss';
import './scss/components/_header.scss'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className='content'>
        <div className='container'>
          <Home/>
        </div>
      </div>
    </div>
  );
}

export default App;
