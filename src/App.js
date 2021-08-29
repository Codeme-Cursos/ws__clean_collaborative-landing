import Form from "./Form";
import Navbar from "./Navbar";
import Cards from "./Cards";
import Table from "./Table"
import Footer from "./Footer";


function App() {
  return (
    <div className="container">
      <Navbar />
      <Cards />
      <Table />
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
