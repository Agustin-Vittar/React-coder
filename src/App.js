import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Components/Cart/Cart";
import Login from "./Components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<ItemListContainer />} />

        <Route path="/category/:categoryName" element={<ItemListContainer />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />

        <Route path="/login" element={<Login />} />

        <Route path="*" element={<h1> Error 404: Not found </h1>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
