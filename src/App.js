import Form from "./Form";
import Navbar from "./Navbar";
import Cards from "./Cards";
import Modal from "./Modal";

import Footer from "./Footer";


function App() {
  return (
    <div className="container">
      <Navbar />

      <Cards />
      <Modal/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
