import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";

import "./styles/app.scss";
import "./styles/Header.scss";
import "./styles/Home.scss";
import "./styles/cart.scss";
import "./styles/mediaquery.scss";

import {Toaster} from "react-hot-toast"


function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path = "/" element ={<Home />} />
          <Route path="/cart" element = {<Cart />}/>
        </Routes>
        <Toaster/>
    </BrowserRouter>
  );
}

export default App;