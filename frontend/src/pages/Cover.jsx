import { useEffect, useState } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import { artist } from '../data/artist'
import coverImgMobile from '../assets/images/wowo-cover-image2.jpg'
import coverImgDesktop from '../assets/images/wowo-cover-image4.jpg'

export default function Cover() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)')
    const update = event => setIsMobile(event.matches)

    setIsMobile(mediaQuery.matches)
    mediaQuery.addEventListener('change', update)
    return () => mediaQuery.removeEventListener('change', update)
  }, [])

  return (
    <SectionWrapper id="cover" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '80px',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${coverImgMobile})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: isMobile ? 1 : 0,
        transition: 'opacity 0.6s ease',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${coverImgDesktop})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: isMobile ? 0 : 1,
        transition: 'opacity 0.6s ease',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute',
        top: '-50%',
        right: '-20%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 1,
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(26,26,26,0.6) 0%, rgba(44,44,44,0.35) 100%)',
        zIndex: 2,
      }} />

      {/* Content */}
      <div style={{
        textAlign: 'center',
        maxWidth: '800px',
        padding: 'clamp(2rem, 5vw, 4rem)',
        position: 'relative',
        zIndex: 3,
      }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.65rem, 1.5vw, 0.8rem)',
          fontWeight: 500,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          marginBottom: '1.5rem',
        }}>
          Contemporary Jazz pianist Composer & Producer  
        </p>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3.5rem, 10vw, 6rem)',
          fontWeight: 300,
          color: 'var(--cream)',
          lineHeight: 1.05,
          marginBottom: '1.5rem',
          letterSpacing: '-0.02em',
        }}>
          Wowo Mndau
        </h1>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
          fontWeight: 300,
          color: 'var(--muted)',
          lineHeight: 1.8,
          marginBottom: '3rem',
          maxWidth: '600px',
          margin: '0 auto 3rem',
        }}>
          Elevate your event with bespoke live music performance
        </p>

        <a href="#booking" style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.7rem, 1.5vw, 0.85rem)',
          fontWeight: 500,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--charcoal)',
          background: 'var(--gold)',
          padding: 'clamp(0.65rem, 2vw, 0.85rem) clamp(1.5rem, 4vw, 2.5rem)',
          textDecoration: 'none',
          display: 'inline-block',
          transition: 'all 0.3s ease',
          border: '2px solid var(--gold)',
        }}
        onMouseEnter={e => {
          e.target.style.background = 'var(--charcoal)'
          e.target.style.color = 'var(--gold)'
        }}
        onMouseLeave={e => {
          e.target.style.background = 'var(--gold)'
          e.target.style.color = 'var(--charcoal)'
        }}
        >
          Book an Inquiry
        </a>
      </div>
    </SectionWrapper>
  )
}
