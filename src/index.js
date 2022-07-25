import { createRoot} from "react-dom/client"
import App from './App';
import "./assets/css/reset.css"
import "./assets/css/style.css"

 const container = document.querySelector(".root")
 const root = createRoot(container)
 root.render(<App tab="home" />)