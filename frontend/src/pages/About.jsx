import SectionWrapper from '../components/SectionWrapper'
import GoldDivider from '../components/GoldDivider'
import { artist, venues } from '../data/artist'
import { Award, Globe, Mic2 } from 'lucide-react'

const stats = [
  { icon: Award,  value: '15+', label: 'Years Experience' },
  { icon: Mic2,   value: '4',   label: 'Albums Released'  },
  { icon: Globe,  value: '5+',  label: 'Weeks on Chart'   },
]

export default function About() {
  return (
    <SectionWrapper id="about" style={{ background: 'var(--charcoal)' }}>
      <div style={{ padding: 'var(--section-pad) clamp(1.5rem, 6vw, 6rem)' }}>

        {/* Section label */}
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <p style={{
            fontFamily:    'var(--font-body)',
            fontSize:      '0.6rem',
            fontWeight:    500,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color:         'var(--gold)',
          }}>Artist Profile</p>
        </div>

        <GoldDivider />

        {/* Two-column layout */}
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
          gap:                 'clamp(3rem, 6vw, 6rem)',
          maxWidth:            '1100px',
          margin:              '0 auto',
          alignItems:          'start',
        }}>

          {/* Left — bio text */}
          <div>
            <h2 style={{
              fontFamily:   'var(--font-display)',
              fontSize:     'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight:   300,
              color:        'var(--cream)',
              lineHeight:   1.1,
              marginBottom: '2rem',
            }}>
              A Voice in<br />
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Sound & Silence</em>
            </h2>

            {artist.bio.split('\n').filter(Boolean).map((para, i) => (
              <p key={i} style={{
                fontFamily:   'var(--font-body)',
                fontSize:     'clamp(0.82rem, 1.4vw, 0.9rem)',
                fontWeight:   300,
                color:        'rgba(245,240,232,0.75)',
                lineHeight:   1.9,
                marginBottom: '1.25rem',
              }}>
                {para.trim()}
              </p>
            ))}

            {/* Stats row */}
            <div style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap:                 '1.5rem',
              marginTop:           '2.5rem',
              paddingTop:          '2rem',
              borderTop:           '1px solid rgba(201,168,76,0.15)',
            }}>
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <Icon size={18} color="var(--gold)" style={{ opacity: 0.7, marginBottom: '0.5rem' }} />
                  <p style={{
                    fontFamily:   'var(--font-display)',
                    fontSize:     '2rem',
                    fontWeight:   300,
                    color:        'var(--gold)',
                    lineHeight:   1,
                    marginBottom: '0.3rem',
                  }}>{value}</p>
                  <p style={{
                    fontFamily:    'var(--font-body)',
                    fontSize:      '0.58rem',
                    fontWeight:    400,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color:         'var(--muted)',
                  }}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — positioning */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            {/* Core identity block */}
            <div style={{
              border:  '1px solid rgba(201,168,76,0.2)',
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
            }}>
              <p style={{
                fontFamily:    'var(--font-body)',
                fontSize:      '0.55rem',
                fontWeight:    500,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color:         'var(--gold)',
                marginBottom:  '1.25rem',
              }}>Core Identity</p>

              {[
                'Contemporary Jazz Pianist',
                'Luxury Lounge Entertainment',
                'Sophisticated Piano Performance',
                'Elegant Live Music Experiences',
              ].map(item => (
                <div key={item} style={{
                  display:      'flex',
                  alignItems:   'center',
                  gap:          '0.75rem',
                  padding:      '0.6rem 0',
                  borderBottom: '1px solid rgba(201,168,76,0.08)',
                }}>
                  <span style={{ color: 'var(--gold)', fontSize: '0.45rem' }}>◆</span>
                  <span style={{
                    fontFamily:   'var(--font-body)',
                    fontSize:     '0.78rem',
                    fontWeight:   300,
                    color:        'var(--cream)',
                    opacity:      0.85,
                    letterSpacing:'0.04em',
                  }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Suitable venues block */}
            <div style={{
              background: 'rgba(201,168,76,0.03)',
              border:     '1px solid rgba(201,168,76,0.12)',
              padding:    'clamp(1.5rem, 3vw, 2.5rem)',
            }}>
              <p style={{
                fontFamily:    'var(--font-body)',
                fontSize:      '0.55rem',
                fontWeight:    500,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color:         'var(--gold)',
                marginBottom:  '1.25rem',
              }}>Suitable Environments</p>

              <div style={{
                display:   'flex',
                flexWrap:  'wrap',
                gap:       '0.5rem',
              }}>
                {venues.map(v => (
                  <span key={v} style={{
                    fontFamily:    'var(--font-body)',
                    fontSize:      '0.62rem',
                    fontWeight:    300,
                    letterSpacing: '0.08em',
                    color:         'var(--cream)',
                    border:        '1px solid rgba(201,168,76,0.25)',
                    padding:       '0.35rem 0.75rem',
                    opacity:       0.8,
                  }}>{v}</span>
                ))}
              </div>
            </div>

            {/* Publishing note */}
            <div style={{
              display:    'flex',
              alignItems: 'center',
              gap:        '1rem',
              padding:    '1rem 1.5rem',
              background: 'rgba(201,168,76,0.06)',
              borderLeft: '2px solid var(--gold)',
            }}>
              <div>
                <p style={{
                  fontFamily:   'var(--font-body)',
                  fontSize:     '0.6rem',
                  fontWeight:   500,
                  letterSpacing:'0.15em',
                  textTransform:'uppercase',
                  color:        'var(--gold)',
                  marginBottom: '0.2rem',
                }}>Label & Publishing</p>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize:   '0.75rem',
                  fontWeight: 300,
                  color:      'var(--cream)',
                  opacity:    0.75,
                }}>Meek Music · Gallo Music Publishers</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}