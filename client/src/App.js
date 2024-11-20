import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import SignUp from './Components/Signup';
import ParkingSpace from './Components/ParkingBooking';
import Footer from './Components/Footer';
function App() {
  return (
    <div>
      <Navbar />
      <SignUp />
      <ParkingSpace />
      <Footer />
    </div>
  );
}

export default App;
