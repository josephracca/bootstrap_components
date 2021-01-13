import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/navbar/navbar'
import Car from './components/carousel/car'
// import Buttons from './components/buttons/buttons'
// import Groups from './components/groups/groups'
import Footer from './components/footer/footer'
import Counter from './components/counter/counter'
import "./App.css";

//all names must start with a capital letter
// now we have to define everything...
// becase the name is the samea s the compoinent, it's running an infinite loop
// got stuck because you were using the same name for
// functional components
// keep images in the src folder...

//create another component

//PROP: property of that component

function App() {
  return (
    <>
      <Navbar />
      <Car />
      <Counter />
      {/* <Buttons /> */}
      {/* <Groups /> */}
      <Footer />
    </>
  );
}

export default App;
