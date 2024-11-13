import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import AboutPage from './pages/AboutPage.jsx'
import HomePage from './pages/HomePage.jsx'
import ContactUsPage from './pages/ContactUsPage.jsx'
import Note from './components/notes/Note.jsx'
import Auth from './components/auth/Auth.jsx'
import AuthState from './context/auth/AuthState.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route exact path='' element={<HomePage />} />
      <Route exact path='/about' element={<AboutPage />} />
      <Route exact path='/contact' element={<ContactUsPage linkedinLink={'https://www.linkedin.com/in/atharva-mane/'} githubLink={"https://github.com/atharva026"} />} />
      <Route exact path='/note' element={<Note />} />
      <Route exact path='/signin' element={<AuthState><Auth panel={true} /></AuthState>} />  
      <Route exact path='/signup' element={<AuthState><Auth panel={false} /></AuthState>} />   
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
