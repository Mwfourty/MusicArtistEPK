import SectionWrapper from '../components/SectionWrapper'
import GoldDivider from '../components/GoldDivider'
import { albums } from '../data/artist'

export default function Discography() {
  return (
    <SectionWrapper id="discography" style={{ background: '#161616' }}>
      <div style={{ padding: 'var(--section-pad) clamp(1.5rem, 6vw, 6rem)' }}>

        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <p style={{
            fontFamily:    'var(--font-body)',
            fontSize:      '0.6rem',
            fontWeight:    500,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color:         'var(--gold)',
          }}>Music</p>
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
            Discography<br />
            <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Catalogue</em>
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize:   '0.8rem',
            fontWeight: 300,
            color:      'var(--muted)',
            lineHeight: 1.8,
          }}>
            A selection of albums released under Meek Music, showcasing Wowo Mndau’s elegant contemporary jazz and soulful instrumental storytelling.
          </p>
        </div>

        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
          gap:                 '1rem',
          maxWidth:            '980px',
          margin:              '0 auto',
        }}>
          {albums.map((album, index) => (
            <AlbumCard key={index} album={album} />
          ))}
        </div>

      </div>
    </SectionWrapper>
  )
}

function AlbumCard({ album }) {
  return (
    <div style={{
      background: 'var(--charcoal)',
      border:     '1px solid rgba(201,168,76,0.12)',
      padding:    '1.5rem',
      minHeight:  '170px',
      display:    'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <div>
        <p style={{
          fontFamily:    'var(--font-body)',
          fontSize:      '0.7rem',
          fontWeight:    500,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color:         'var(--gold)',
          marginBottom:  '0.5rem',
        }}>{album.year}</p>
        <h3 style={{
          fontFamily:  'var(--font-display)',
          fontSize:    'clamp(1.05rem, 2vw, 1.35rem)',
          fontWeight: 300,
          color:       'var(--cream)',
          margin:      0,
          lineHeight:  1.2,
        }}>{album.title}</h3>
      </div>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize:   '0.85rem',
        fontWeight: 300,
        color:      'var(--muted)',
        marginTop:  '1rem',
      }}>{album.label}</p>
    </div>
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