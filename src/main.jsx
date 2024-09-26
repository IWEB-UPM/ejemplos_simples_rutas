import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import LandingRutas2 from "./LandingRutas2.jsx";



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LandingRutas2 />
  </BrowserRouter>
)


