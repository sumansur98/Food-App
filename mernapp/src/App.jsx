import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { CartProvider } from "./components/ContextReducer";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/createuser",
      element: <SignUp/>,
    },
  ]);

  return (
    <>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
    </>
  )
}

export default App
