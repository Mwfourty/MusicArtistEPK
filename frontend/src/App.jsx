import Navbar from './components/Navbar'
import Cover from './pages/Cover'
import About from './pages/About'
import Experience from './pages/Experience'
import Discography from './pages/Discography'
import Formats from './pages/Formats'
import Gallery from './pages/Gallery'
import Videos from './pages/Videos'
import Booking from './pages/Booking'

export default function App() {
  return (
    <div style={{ background: 'var(--charcoal)', minHeight: '100vh' }}>
      <Navbar />
      <Cover />
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="discography">
        <Discography />
      </section>
      <section id="formats">
        <Formats />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="videos">
        <Videos />
      </section>
      <section id="booking">
        <Booking />
      </section>
    </div>
  )
}