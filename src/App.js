import Header from './Components/Header';
import './Styles/App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Delicacies from './Pages/Delicacies';
import Vendors from './Pages/Vendors';
import ContactUs from './Pages/ContactUs';


const router = createBrowserRouter([
  {path:"/home", element:<Home />},
  {path:"/about", element:<AboutUs />},
  {path:"/delicacies", element:<Delicacies />},
  {path:"/vendors", element:<Vendors />},
  {path:"/contact-us", element:<ContactUs />}
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
