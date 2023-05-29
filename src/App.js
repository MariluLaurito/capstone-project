
import { createBrowserRouter, createRoutesFromElements, Route,  RouterProvider } from 'react-router-dom';
import Highlights from './Components/Highlights';
import Main from './Components/Main';
import Testimonials from './Components/Testimonials';
import ReserveTable from './Components/ReserveTable';
import Layout from './Components/Layout';
import About from './Components/About';
import Nav from './Components/Nav';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
    <Route exact path='/' element={<Main />} />
    <Route path='reserve' element={<ReserveTable />} />
    <Route path='menu' element={<Highlights />} />
    <Route path='about' element={<About />} />
    </Route>
  
    

  )
)


function App() {
  return (
    <>
    <RouterProvider router={router} />

   </>
  );
}

export default App;
