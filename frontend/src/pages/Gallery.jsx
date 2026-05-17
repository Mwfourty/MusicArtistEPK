import { useState } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import GoldDivider from '../components/GoldDivider'
import { X, ZoomIn } from 'lucide-react'
import portraitImg from '../assets/gallery/gallery-portrait.jpg'
import livePerformanceImg from '../assets/gallery/gallery-live-performance.jpg'
import pianoCloseupImg from '../assets/gallery/gallery-piano-closeup.jpg'
import venueAtmosphereImg from '../assets/gallery/gallery-venue-atmosphere.jpg'
import editorialImg from '../assets/gallery/gallery-editorial.jpg'
import editorialImg2 from '../assets/gallery/gallery-editorial2.jpg'
import audienceImg from '../assets/gallery/gallery-audience.jpg'
import studioSessionImg from '../assets/gallery/gallery-studio-session.jpg'
import extraImg1 from '../assets/gallery/gallery-extra.jpg'
import extraImg2 from '../assets/gallery/gallery-extra2.jpg'
import extraImg3 from '../assets/gallery/gallery-extra3.jpg'
import extraImg4 from '../assets/gallery/gallery-extra4.jpg'

const galleryItems = [
  { id: 1, label: 'Portrait',          aspect: 'tall',   tone: '#1a1410', image: portraitImg },
  { id: 2, label: 'Live Performance',  aspect: 'wide',   tone: '#10141a', image: livePerformanceImg },
  { id: 3, label: 'Piano Close-up',    aspect: 'square', tone: '#141018', image: pianoCloseupImg },
  { id: 4, label: 'Venue Atmosphere',  aspect: 'wide',   tone: '#101a14', image: venueAtmosphereImg },
  { id: 5, label: 'Editorial',         aspect: 'tall',   tone: '#1a1014', image: editorialImg },
  { id: 6, label: 'Audience',          aspect: 'square', tone: '#141a10', image: audienceImg },
  { id: 7, label: 'Stage Presence',    aspect: 'wide',   tone: '#181410', image:  editorialImg2},
  { id: 8, label: 'Studio Session',    aspect: 'square', tone: '#10181a', image: studioSessionImg },
  { id: 9, label: 'Extra Gallery 1',   aspect: 'wide',   tone: '#101214', image: extraImg1, hidden: true },
  { id:10, label: 'Extra Gallery 2',   aspect: 'square', tone: '#141214', image: extraImg2, hidden: true },
  { id:11, label: 'Extra Gallery 3',   aspect: 'tall',   tone: '#141014', image: extraImg3, hidden: true },
  { id:12, label: 'Extra Gallery 4',   aspect: 'wide',   tone: '#101110', image: extraImg4, hidden: true },
]

const aspectRatios = { tall: '3/4', wide: '16/9', square: '1/1' }

export default function Gallery() {
  const [active, setActive] = useState(null)
  const [showExtra, setShowExtra] = useState(false)
  const visibleItems = galleryItems.filter((item) => !item.hidden || showExtra)

  return (
    <SectionWrapper id="gallery" style={{ background: 'var(--charcoal)' }}>
      <div style={{ padding: 'var(--section-pad) clamp(1.5rem, 6vw, 6rem)' }}>

        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <p style={{
            fontFamily:    'var(--font-body)',
            fontSize:      '0.6rem',
            fontWeight:    500,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color:         'var(--gold)',
          }}>Visual</p>
        </div>

        <GoldDivider />

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize:   'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 300,
            color:      'var(--cream)',
          }}>
            Photo{' '}
            <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Gallery</em>
          </h2>
        </div>

        {/* Masonry-style grid */}
        <div style={{
          columns:         'auto 280px',
          columnGap:       '0.75rem',
          maxWidth:        '1100px',
          margin:          '0 auto',
        }}>
          {visibleItems.map((item) => (
            <GalleryCell
              key={item.id}
              item={item}
              onClick={() => setActive(item)}
            />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <button
            onClick={() => setShowExtra((prev) => !prev)}
            style={{
              border: '1px solid rgba(201,168,76,0.4)',
              background: 'transparent',
              color: 'var(--cream)',
              padding: '0.8rem 1.25rem',
              cursor: 'pointer',
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            {showExtra ? 'Hide Images' : 'Show More'}
          </button>
        </div>

        {/* Note */}
        <p style={{
          textAlign:     'center',
          fontFamily:    'var(--font-body)',
          fontSize:      '0.65rem',
          fontWeight:    300,
          color:         'var(--muted)',
          marginTop:     '3rem',
          letterSpacing: '0.06em',
        }}>
          Explore a curated collection of moments · Capturing artistry through light and perspective
        </p>

      </div>

      {/* Lightbox */}
      {active && (
        <div
          onClick={() => setActive(null)}
          style={{
            position:        'fixed',
            inset:           0,
            zIndex:          200,
            background:      'rgba(10,10,10,0.96)',
            display:         'flex',
            alignItems:      'center',
            justifyContent:  'center',
            padding:         '2rem',
          }}
        >
          <button
            onClick={() => setActive(null)}
            style={{
              position:   'absolute',
              top:        '1.5rem',
              right:      '1.5rem',
              background: 'none',
              border:     '1px solid rgba(201,168,76,0.3)',
              color:      'var(--gold)',
              cursor:     'pointer',
              padding:    '0.5rem',
              display:    'flex',
            }}
          >
            <X size={16} />
          </button>

          <div
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth:   '700px',
              width:      '100%',
            }}
          >
            <div style={{
              background:  active.tone,
              aspectRatio: aspectRatios[active.aspect],
              border:      '1px solid rgba(201,168,76,0.2)',
              display:     'flex',
              alignItems:  'center',
              justifyContent: 'center',
              marginBottom:'1rem',
              overflow:    'hidden',
            }}>
              <img
                src={active.image}
                alt={active.label}
                style={{
                  width:      '100%',
                  height:     '100%',
                  objectFit:  'cover',
                  display:    'block',
                }}
              />
            </div>
            <p style={{
              fontFamily:    'var(--font-body)',
              fontSize:      '0.6rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color:         'var(--muted)',
              textAlign:     'center',
            }}>Wowo Mndau · {active.label}</p>
          </div>
        </div>
      )}
    </SectionWrapper>
  )
}

function GalleryCell({ item, onClick }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:       'block',
        marginBottom:  '0.75rem',
        breakInside:   'avoid',
        cursor:        'pointer',
        position:      'relative',
        overflow:      'hidden',
        border:        `1px solid ${hovered ? 'rgba(201,168,76,0.4)' : 'rgba(201,168,76,0.1)'}`,
        transition:    'border-color 0.3s',
      }}
    >
      <div style={{
        aspectRatio: aspectRatios[item.aspect],
        background:  item.tone,
        display:     'flex',
        alignItems:  'center',
        justifyContent: 'center',
        position:    'relative',
        overflow:    'hidden',
      }}>
        <img
          src={item.image}
          alt={item.label}
          style={{
            width:      '100%',
            height:     '100%',
            objectFit:  'cover',
            display:    'block',
          }}
        />

        {/* Hover overlay */}
        <div style={{
          position:   'absolute',
          inset:      0,
          background: 'rgba(10,10,10,0.55)',
          display:    'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity:    hovered ? 1 : 0,
          transition: 'opacity 0.3s',
        }}>
          <ZoomIn size={22} color="var(--gold)" style={{ opacity: 0.8 }} />
        </div>
      </div>
    </div>
  )
}