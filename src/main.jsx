import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home1 from './Home.jsx'
import Counter from './Counter.jsx'
import Header from './Header.jsx'
import SideBar from './SideBar.jsx'
import Footer from './Footer.jsx'
import Product from './Product.jsx'
import Registratioin from './Registratioin.jsx'
import Comments from './Comments.jsx'
import './global.js';
import Post from './Post.jsx'
import Button from './Button.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Header/>
    <Comments/>
    <Post/>
  <Button text="This is click"></Button>
  <Button text="This is click1"></Button>
  <Button text="This is click2"></Button>
  <Button text="This is click3"></Button>
  <Button text="This is click5" variant="primary" >
  <i class="bi bi-0-circle-fill"></i>
  </Button>
   <Footer/>
    
  </StrictMode>,
)
