
import { createRoot } from 'react-dom/client'

import { RouterProvider , createBrowserRouter ,createRoutesFromElements ,Route} from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Layout from './Layout.jsx'

import './index.css'
import Contact from './Components/Contact/Contact.jsx'

import User from './Components/User/User.jsx'
import Products from './Components/Products/Products.jsx'


import productInfoLoader from "/Users/sumitkumarmaurya/React/07ReactRouter/React Router/src/Components/Products/ProductInfoLoader.jsx"
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx'

// const router = createBrowserRouter([
//   {
//     path : "/",
//     element :<Layout />,
//     children : [
//       {
//         path : "",
//         element : <Home />
//       },
//       {
//         path : "about",
//         element : <About />
//       },
//       {
//         path : "contact",
//         element : <Contact />
//       },
  
//       {
//         path : "user:userid",
//         element : <User />
//       }
//     ]
//   }
// ]);

// we can also create router by another way
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path ="" element={<Home />}/>
      <Route path ="about" element={<About />}/>
      <Route path ="contact" element={<Contact />}/>
      <Route path ="user/:userId" element={<User />}/>
      <Route path="products" element={<Products />} />
      <Route 
      loader={productInfoLoader}
      path="products/:productId" 
      element={<ProductDetails />}
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
