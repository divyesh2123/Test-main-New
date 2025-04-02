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
import Task from './Task.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Task/>
    
  </StrictMode>,
)
