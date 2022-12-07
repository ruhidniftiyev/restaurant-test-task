import Header from './components/Header';
import Home from './pages/Home';
import '../src/scss/app.scss';
import './scss/components/_header.scss';
import { Route, Routes } from 'react-router';
import NewOrder from './pages//NewOrder';
import OrderInfo from './pages/OrderInfo';
import FoodsOrder from './pages/FoodsOrder';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<NewOrder />} />
            <Route path="/foods" element={<FoodsOrder />} />
            <Route path="/add" element={<OrderInfo />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
