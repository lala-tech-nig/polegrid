import {
  RouterProvider,
} from "react-router-dom";
import { route } from "./route";
import './App.css';

function App() {
  

  return (
    <>
    <RouterProvider router={route} />
    {/* WhatsApp icon */}
    <a
    href="https://wa.me/2348037662723"
    className="whatsapp_float"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="bi bi-whatsapp whatsapp-icon"></i>
  </a>
    </>
  )
}

export default App