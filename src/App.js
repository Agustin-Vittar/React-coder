import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import ProductCard from "./Components/ProductCard/ProductCard";

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting={"Hola Coders"}/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <Footer/>
    </div>
  );
}

export default App;
