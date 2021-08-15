import Form from "./Form";
import Navbar from "./Navbar";
import Cards from "./Cards";

import Footer from "./Footer";


function App() {
  return (
    <div className="container">
      <Navbar />

      <Cards />
      
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
