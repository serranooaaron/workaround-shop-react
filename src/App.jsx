import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />

      <ItemListContainer
        greeting={"Bienvenido a mi tienda!"}
        className="color: blue; font-size: 24px;"
      />
    </>
  );
}

export default App;
