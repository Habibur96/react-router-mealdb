
import './App.css';

import { Routes, Route } from "react-router-dom";
import Header from './componants/Header/Header';
import About from './componants/About/About';
import Home from './componants/Home/Home';
import NotFound from './componants/NotFound/NotFound';
import Restaurant from './componants/Restaurant/Restaurant';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        {/* <Route path="/" element={<Header></Header>}></Route> */}
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/restaurant' element={<Restaurant></Restaurant>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes >
    </div >
  );
}

export default App;
