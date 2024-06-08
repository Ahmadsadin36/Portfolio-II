import './App.css'
import { About, Contact, Experience, Footer, Header, Nav, Portfolio, Testimonials } from './component'

function App() {
  

  return (
    <>
    <main className=' container m-auto'>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
    </>

  )
}

export default App
