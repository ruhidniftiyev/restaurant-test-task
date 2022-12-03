import Header from './components/Header';
import Home from './pages/Home';
import '../src/scss/app.scss';
import './scss/components/_header.scss';
import { Route, Routes } from 'react-router';
import NewOrder from './components/NewOrder';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<NewOrder />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
