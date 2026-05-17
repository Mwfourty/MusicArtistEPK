import SectionWrapper from '../components/SectionWrapper'
import GoldDivider from '../components/GoldDivider'
import { artist, bookingTypes } from '../data/artist'
import { Phone, Mail, CheckCircle } from 'lucide-react'
import meekLogo from '../assets/images/meekmusic-logo.png'

const socialLinks = [
  { fa: 'fab fa-instagram', label: 'Instagram', href: artist.social.instagram },
  { fa: 'fab fa-facebook',  label: 'Facebook',  href: artist.social.facebook  },
  { fa: 'fab fa-youtube',   label: 'YouTube',   href: artist.social.youtube   },
  { fa: 'fab fa-spotify',   label: 'Spotify',   href: artist.social.spotify   },
  { fa: 'fab fa-apple',     label: 'Apple Music',   href: artist.social.appleMusic },
]

export default function Booking() {
  return (
    <SectionWrapper id="booking" style={{ background: 'var(--charcoal)' }}>
      <div style={{ padding: 'var(--section-pad) clamp(1.5rem, 6vw, 6rem)' }}>

        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <p style={{
            fontFamily:    'var(--font-body)',
            fontSize:      '0.6rem',
            fontWeight:    500,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color:         'var(--gold)',
          }}>Enquiries</p>
        </div>

        <GoldDivider />

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontFamily:   'var(--font-display)',
            fontSize:     'clamp(2rem, 5vw, 3.2rem)',
            fontWeight:   300,
            color:        'var(--cream)',
            lineHeight:   1.15,
            marginBottom: '1rem',
          }}>
            Book{' '}
            <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Wowo Mndau</em>
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize:   '0.8rem',
            fontWeight: 300,
            color:      'var(--muted)',
            maxWidth:   '480px',
            margin:     '0 auto',
            lineHeight: 1.8,
          }}>
            Available for international bookings, luxury residencies, cruise ship contracts, and exclusive private engagements.
          </p>
        </div>

        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap:                 'clamp(2rem, 5vw, 5rem)',
          maxWidth:            '950px',
          margin:              '0 auto',
        }}>

          {/* Left — contact */}
          <div>
            <p style={{
              fontFamily:    'var(--font-body)',
              fontSize:      '0.55rem',
              fontWeight:    500,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color:         'var(--gold)',
              marginBottom:  '1.75rem',
              opacity:       0.8,
            }}>Management & Bookings</p>

            {/* Phone */}
            <a href={`tel:${artist.contact.phone}`} style={{
              display:        'flex',
              alignItems:     'center',
              gap:            '1rem',
              padding:        '1.25rem 1.5rem',
              border:         '1px solid rgba(201,168,76,0.15)',
              marginBottom:   '0.75rem',
              textDecoration: 'none',
              transition:     'border-color 0.3s, background 0.3s',
              background:     'transparent',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.45)'; e.currentTarget.style.background = 'rgba(201,168,76,0.04)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)'; e.currentTarget.style.background = 'transparent' }}
            >
              <div style={{
                width:       '36px',
                height:      '36px',
                border:      '1px solid rgba(201,168,76,0.3)',
                display:     'flex',
                alignItems:  'center',
                justifyContent: 'center',
                flexShrink:  0,
              }}>
                <Phone size={14} color="var(--gold)" />
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.2rem' }}>Phone</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--cream)', fontWeight: 300 }}>{artist.contact.phone}</p>
              </div>
            </a>

            {/* Email */}
            <a href={`mailto:${artist.contact.email}`} style={{
              display:        'flex',
              alignItems:     'center',
              gap:            '1rem',
              padding:        '1.25rem 1.5rem',
              border:         '1px solid rgba(201,168,76,0.15)',
              marginBottom:   '2.5rem',
              textDecoration: 'none',
              transition:     'border-color 0.3s, background 0.3s',
              background:     'transparent',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.45)'; e.currentTarget.style.background = 'rgba(201,168,76,0.04)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)'; e.currentTarget.style.background = 'transparent' }}
            >
              <div style={{
                width:       '36px',
                height:      '36px',
                border:      '1px solid rgba(201,168,76,0.3)',
                display:     'flex',
                alignItems:  'center',
                justifyContent: 'center',
                flexShrink:  0,
              }}>
                <Mail size={14} color="var(--gold)" />
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.2rem' }}>Email</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--cream)', fontWeight: 300 }}>{artist.contact.email}</p>
              </div>
            </a>

            {/* Social links */}
            <p style={{
              fontFamily:    'var(--font-body)',
              fontSize:      '0.55rem',
              fontWeight:    500,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color:         'var(--gold)',
              marginBottom:  '1rem',
              opacity:       0.8,
            }}>Socials & Streaming</p>

            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              {socialLinks.map(({ fa, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  title={label}
                  style={{
                    width:       '40px',
                    height:      '40px',
                    border:      '1px solid rgba(201,168,76,0.2)',
                    display:     'flex',
                    alignItems:  'center',
                    justifyContent: 'center',
                    color:       'var(--gold)',
                    textDecoration: 'none',
                    transition:  'border-color 0.3s, background 0.3s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.background = 'rgba(201,168,76,0.1)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'; e.currentTarget.style.background = 'transparent' }}
                >
                  <i className={fa} style={{ fontSize: 15 }} aria-hidden="true" />
                </a>
              ))}
            </div>

            {/* Artist / label logo beneath social buttons */}
            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <img src={meekLogo} alt="Meek Music" style={{ width: 200, height: 'auto', opacity: 0.95 }} />
            </div>
          </div>

          {/* Right — booking types */}
          <div>
            <p style={{
              fontFamily:    'var(--font-body)',
              fontSize:      '0.55rem',
              fontWeight:    500,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color:         'var(--gold)',
              marginBottom:  '1.75rem',
              opacity:       0.8,
            }}>Available For</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '3rem' }}>
              {bookingTypes.map(type => (
                <div key={type} style={{
                  display:    'flex',
                  alignItems: 'center',
                  gap:        '0.75rem',
                  padding:    '0.75rem 1rem',
                  border:     '1px solid rgba(201,168,76,0.1)',
                  background: 'rgba(201,168,76,0.02)',
                }}>
                  <CheckCircle size={13} color="var(--gold)" style={{ opacity: 0.6, flexShrink: 0 }} />
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize:   '0.78rem',
                    fontWeight: 300,
                    color:      'var(--cream)',
                    opacity:    0.8,
                  }}>{type}</span>
                </div>
              ))}
            </div>

            {/* Final CTA */}
            <a href={`mailto:${artist.contact.email}`} style={{
              display:        'block',
              textAlign:      'center',
              padding:        '1rem 2rem',
              background:     'var(--gold)',
              color:          'var(--charcoal)',
              fontFamily:     'var(--font-body)',
              fontSize:       '0.65rem',
              fontWeight:     500,
              letterSpacing:  '0.22em',
              textTransform:  'uppercase',
              textDecoration: 'none',
              transition:     'background 0.25s',
            }}
            onMouseEnter={e => e.target.style.background = 'var(--gold-light)'}
            onMouseLeave={e => e.target.style.background = 'var(--gold)'}
            >
              Send a Booking Enquiry
            </a>
          </div>

        </div>

        {/* Footer signature */}
        <div style={{
          textAlign:   'center',
          marginTop:   'clamp(4rem, 8vw, 7rem)',
          paddingTop:  '3rem',
          borderTop:   '1px solid rgba(201,168,76,0.1)',
        }}>
          <p style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight:    300,
            fontStyle:     'italic',
            color:         'rgba(201,168,76,0.2)',
            letterSpacing: '0.05em',
          }}>
            Wowo Mndau
          </p>
          <p style={{
            fontFamily:    'var(--font-body)',
            fontSize:      '0.55rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color:         'rgba(201,168,76,0.15)',
            marginTop:     '0.5rem',
          }}>
            Meek Music · Gallo Music Publishers · {new Date().getFullYear()}
          </p>
        </div>

      </div>
    </SectionWrapper>
  )
}