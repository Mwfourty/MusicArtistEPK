import SectionWrapper from '../components/SectionWrapper'
import GoldDivider from '../components/GoldDivider'
import { performances, collaborations } from '../data/artist'
import { MapPin, Users } from 'lucide-react'

export default function Experience() {
  return (
    <SectionWrapper id="experience" style={{ background: '#161616' }}>
      <div style={{ padding: 'var(--section-pad) clamp(1.5rem, 6vw, 6rem)' }}>

        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <p style={{
            fontFamily:    'var(--font-body)',
            fontSize:      '0.6rem',
            fontWeight:    500,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color:         'var(--gold)',
          }}>On Stage</p>
        </div>

        <GoldDivider />

        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '560px', margin: '0 auto 4rem' }}>
          <h2 style={{
            fontFamily:   'var(--font-display)',
            fontSize:     'clamp(2rem, 5vw, 3.2rem)',
            fontWeight:   300,
            color:        'var(--cream)',
            lineHeight:   1.15,
            marginBottom: '1rem',
          }}>
            Performance<br />
            <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Experience</em>
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize:   '0.8rem',
            fontWeight: 300,
            color:      'var(--muted)',
            lineHeight: 1.8,
          }}>
            A curated portfolio of venues, events, and collaborations spanning luxury hospitality, cultural institutions, and international stages.
          </p>
        </div>

        {/* Venues grid */}
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            display:             'flex',
            alignItems:          'center',
            gap:                 '0.75rem',
            marginBottom:        '1.5rem',
          }}>
            <MapPin size={14} color="var(--gold)" style={{ opacity: 0.7 }} />
            <p style={{
              fontFamily:    'var(--font-body)',
              fontSize:      '0.55rem',
              fontWeight:    500,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color:         'var(--gold)',
              opacity:       0.8,
            }}>Recent Appearances</p>
          </div>

          <div style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap:                 '1px',
            background:          'rgba(201,168,76,0.1)',
            border:              '1px solid rgba(201,168,76,0.1)',
            marginBottom:        '3rem',
          }}>
            {performances.map(({ venue, type }, i) => (
              <VenueCell key={i} venue={venue} type={type} />
            ))}
          </div>

          {/* Collaborations */}
          <div style={{
            display:    'flex',
            alignItems: 'flex-start',
            gap:        '0.75rem',
            padding:    '2rem',
            border:     '1px solid rgba(201,168,76,0.15)',
            background: 'rgba(201,168,76,0.03)',
          }}>
            <Users size={14} color="var(--gold)" style={{ opacity: 0.7, marginTop: '0.15rem', flexShrink: 0 }} />
            <div>
              <p style={{
                fontFamily:    'var(--font-body)',
                fontSize:      '0.55rem',
                fontWeight:    500,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color:         'var(--gold)',
                marginBottom:  '0.75rem',
                opacity:       0.8,
              }}>Collaborations</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {collaborations.map(name => (
                  <span key={name} style={{
                    fontFamily:    'var(--font-display)',
                    fontSize:      '1.1rem',
                    fontWeight:    300,
                    color:         'var(--cream)',
                    letterSpacing: '0.05em',
                  }}>{name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </SectionWrapper>
  )
}

function VenueCell({ venue, type }) {
  return (
    <div style={{
      background:   'var(--charcoal)',
      padding:      '1.5rem 1.75rem',
      position:     'relative',
      overflow:     'hidden',
      transition:   'background 0.3s',
      cursor:       'default',
    }}
    onMouseEnter={e => e.currentTarget.style.background = '#222'}
    onMouseLeave={e => e.currentTarget.style.background = 'var(--charcoal)'}
    >
      {/* Left gold accent */}
      <div style={{
        position:   'absolute',
        left:       0,
        top:        '20%',
        bottom:     '20%',
        width:      '2px',
        background: 'var(--gold)',
        opacity:    0.3,
      }} />
      <p style={{
        fontFamily:    'var(--font-body)',
        fontSize:      '0.55rem',
        fontWeight:    500,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color:         'var(--gold)',
        opacity:       0.6,
        marginBottom:  '0.4rem',
      }}>{type}</p>
      <p style={{
        fontFamily:   'var(--font-display)',
        fontSize:     'clamp(0.95rem, 2vw, 1.1rem)',
        fontWeight:   300,
        color:        'var(--cream)',
        lineHeight:   1.3,
      }}>{venue}</p>
    </div>
  )
}