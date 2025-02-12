import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import List from "./components/list/List";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <Card />

        <List />
        <Footer />
      </div>
    </>
  );
}

export default App;
