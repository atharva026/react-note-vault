import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import NoteState from './context/note/NoteState'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <>
      <NoteState>
        <div className="flex flex-col min-h-screen">
          {/* Header for the navigation bar */}
          <header>
            <Navbar />
          </header>

          {/* Main content area where Outlet renders the routes */}
          <main className="flex-grow">
            <Outlet />
          </main>
          <Footer linkedinLink={'https://www.linkedin.com/in/atharva-mane/'} githubLink={"https://github.com/atharva026"} />
        </div>
      </NoteState>
    </>
  )
}

export default App