import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About',       href: '#about' },
  { label: 'Experience',  href: '#experience' },
  { label: 'Music',       href: '#discography' },
  { label: 'Perform',     href: '#formats' },
  { label: 'Gallery',     href: '#gallery' },
  { label: 'Videos',      href: '#videos' },
  { label: 'Booking',     href: '#booking' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav style={{
        position:        'fixed',
        top:             0,
        left:            0,
        right:           0,
        zIndex:          100,
        padding:         scrolled ? '0.75rem 2rem' : '1.25rem 2rem',
        background:      scrolled ? 'rgba(26,26,26,0.96)' : 'transparent',
        borderBottom:    scrolled ? '1px solid rgba(201,168,76,0.2)' : 'none',
        backdropFilter:  scrolled ? 'blur(12px)' : 'none',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'space-between',
        transition:      'all 0.4s ease',
      }}>
        {/* Wordmark */}
        <a href="#cover" style={{
          fontFamily:     'var(--font-display)',
          fontSize:       '1.35rem',
          fontWeight:     400,
          letterSpacing:  '0.08em',
          color:          'var(--gold)',
          textDecoration: 'none',
        }}>
          WOWO MNDAU
        </a>

        {/* Desktop links */}
        <ul style={{
          display:        'flex',
          gap:            '2rem',
          listStyle:      'none',
          margin:         0,
          padding:        0,
        }} className="nav-desktop">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} style={{
                fontFamily:     'var(--font-body)',
                fontSize:       '0.7rem',
                fontWeight:     500,
                letterSpacing:  '0.18em',
                textTransform:  'uppercase',
                color:          'var(--cream)',
                textDecoration: 'none',
                opacity:        0.75,
                transition:     'opacity 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.target.style.opacity = 1; e.target.style.color = 'var(--gold)' }}
              onMouseLeave={e => { e.target.style.opacity = 0.75; e.target.style.color = 'var(--cream)' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Booking CTA */}
        <a href="" style={{
          fontFamily:     'var(--font-body)',
          fontSize:       '0.65rem',
          fontWeight:     500,
          letterSpacing:  '0.18em',
          textTransform:  'uppercase',
          color:          'var(--charcoal)',
          background:     'var(--gold)',
          padding:        '0.55rem 1.25rem',
          textDecoration: 'none',
          transition:     'background 0.2s',
        }}
        className="nav-cta"
        onMouseEnter={e => e.target.style.background = 'var(--gold-light)'}
        onMouseLeave={e => e.target.style.background = 'var(--gold)'}
        >
          Book Now
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="nav-hamburger"
          style={{
            background: 'none',
            border:     'none',
            color:      'var(--gold)',
            cursor:     'pointer',
            padding:    '0.25rem',
            display:    'none',
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div style={{
        position:   'fixed',
        inset:      0,
        zIndex:     99,
        background: 'rgba(26,26,26,0.98)',
        display:    'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap:        '2rem',
        transform:  menuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
      }}>
        {navLinks.map(link => (
          <a key={link.href} href={link.href} onClick={close} style={{
            fontFamily:     'var(--font-display)',
            fontSize:       '2rem',
            fontWeight:     300,
            color:          'var(--cream)',
            textDecoration: 'none',
            letterSpacing:  '0.05em',
          }}>
            {link.label}
          </a>
        ))}
        <a href="#booking" onClick={close} style={{
          marginTop:      '1rem',
          fontFamily:     'var(--font-body)',
          fontSize:       '0.7rem',
          fontWeight:     500,
          letterSpacing:  '0.2em',
          textTransform:  'uppercase',
          color:          'var(--charcoal)',
          background:     'var(--gold)',
          padding:        '0.75rem 2rem',
          textDecoration: 'none',
        }}>
          Book Now
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-cta     { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </>
  )
}