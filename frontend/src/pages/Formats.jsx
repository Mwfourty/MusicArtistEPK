import SectionWrapper from '../components/SectionWrapper'
import GoldDivider from '../components/GoldDivider'
import { formats } from '../data/artist'
import { Piano, Mic, Music, Users } from 'lucide-react'

const iconMap = { Piano, Mic, Music, Users }

export default function Formats() {
  return (
    <SectionWrapper id="formats" style={{ background: '#161616' }}>
      <div style={{ padding: 'var(--section-pad) clamp(1.5rem, 6vw, 6rem)' }}>

        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <p style={{
            fontFamily:    'var(--font-body)',
            fontSize:      '0.6rem',
            fontWeight:    500,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color:         'var(--gold)',
          }}>Configuration</p>
        </div>

        <GoldDivider />

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize:   'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 300,
            color:      'var(--cream)',
            lineHeight: 1.15,
          }}>
            Performance{' '}
            <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Formats</em>
          </h2>
        </div>

        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap:                 '1px',
          background:          'rgba(201,168,76,0.1)',
          border:              '1px solid rgba(201,168,76,0.1)',
          maxWidth:            '1000px',
          margin:              '0 auto',
        }}>
          {formats.map((format, i) => {
            const Icon = iconMap[format.icon] || Music
            return (
              <FormatCard key={format.name} format={format} Icon={Icon} index={i} />
            )
          })}
        </div>

        {/* Repertoire note */}
        <div style={{
          maxWidth:      '700px',
          margin:        '4rem auto 0',
          textAlign:     'center',
          padding:       '2rem',
          borderTop:     '1px solid rgba(201,168,76,0.15)',
        }}>
          <p style={{
            fontFamily:    'var(--font-body)',
            fontSize:      '0.55rem',
            fontWeight:    500,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color:         'var(--gold)',
            marginBottom:  '1rem',
            opacity:       0.7,
          }}>Repertoire Includes</p>
          <p style={{
            fontFamily:   'var(--font-accent)',
            fontSize:     'clamp(1rem, 2vw, 1.2rem)',
            fontStyle:    'italic',
            color:        'var(--cream)',
            opacity:      0.65,
            lineHeight:   1.8,
          }}>
            Original Afro-contemporary compositions · Smooth jazz standards ·
            Soul jazz · Contemporary lounge · Elegant instrumental classics
          </p>
        </div>

      </div>
    </SectionWrapper>
  )
}

function FormatCard({ format, Icon, index }) {
  const isEven = index % 2 === 0
  return (
    <div
      style={{
        background:    isEven ? 'var(--charcoal)' : '#1a1a1a',
        padding:       'clamp(2rem, 4vw, 3rem) clamp(1.5rem, 3vw, 2.5rem)',
        display:       'flex',
        flexDirection: 'column',
        gap:           '1rem',
        transition:    'background 0.3s',
        cursor:        'default',
      }}
      onMouseEnter={e => e.currentTarget.style.background = '#222'}
      onMouseLeave={e => e.currentTarget.style.background = isEven ? 'var(--charcoal)' : '#1a1a1a'}
    >
      {/* Number */}
      <span style={{
        fontFamily:    'var(--font-display)',
        fontSize:      '3rem',
        fontWeight:    300,
        color:         'var(--gold)',
        opacity:       0.12,
        lineHeight:    1,
      }}>
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Icon */}
      <div style={{
        width:       '40px',
        height:      '40px',
        border:      '1px solid rgba(201,168,76,0.25)',
        display:     'flex',
        alignItems:  'center',
        justifyContent: 'center',
      }}>
        <Icon size={16} color="var(--gold)" style={{ opacity: 0.8 }} />
      </div>

      {/* Name */}
      <h3 style={{
        fontFamily:   'var(--font-display)',
        fontSize:     'clamp(1.3rem, 2.5vw, 1.6rem)',
        fontWeight:   300,
        color:        'var(--cream)',
        lineHeight:   1.2,
      }}>{format.name}</h3>

      {/* Description */}
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize:   '0.75rem',
        fontWeight: 300,
        color:      'var(--muted)',
        lineHeight: 1.8,
      }}>{format.description}</p>

      {/* Bottom accent */}
      <div style={{
        marginTop:  'auto',
        paddingTop: '1rem',
        width:      '24px',
        height:     '1px',
        background: 'var(--gold)',
        opacity:    0.35,
      }} />
    </div>
  )
}