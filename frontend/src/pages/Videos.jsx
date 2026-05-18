import SectionWrapper from '../components/SectionWrapper'
import GoldDivider from '../components/GoldDivider'
import VideoCard from '../components/VideoCard'
import { AlertCircle } from 'lucide-react'
import liveAtYamaha from '../assets/videos/live-at-yamaha.mp4'
import liveAtYamaha2 from '../assets/videos/live-at-yamaha2.mp4'
import libraryCafeSandton from '../assets/videos/library-cafe-sandton.mp4'
import signaturePerformance from '../assets/videos/library-cafe.mp4'
import blackLabone from '../assets/videos/black-labone1.mp4'
import blackLabone2 from '../assets/videos/black-labone2.mp4'
import jamSession from '../assets/videos/live-jazz-session.mp4'

const videos = [
  {
    title:       'Live at Yamaha Music and Tech Conference',
    description: 'Intimate lounge setting — original Afro-contemporary jazz composition.',
    badge:       'Highlight',
    url:         liveAtYamaha,
  },
  {
    title:       'Jazzifying The Library Cafe at Sandton',
    description: 'Full evening performance captured at a premium cafe.',
    badge:       'Highlight',
    url:         libraryCafeSandton,
  },
  {
    title:       'Three-Piece Performance at Yamaha Conference',
    description: 'Contemporary jazz ensemble piano, bass, and drums',
    url:         liveAtYamaha2,
  },
  {
    title:       'Live Jazz at Black Labone',
    description: 'Live crowd interaction and atmosphere from an executive event.',
    badge:       'Essential',
    url:         blackLabone,
  },
  {
    title:       'Signature Performance Showcase in Sandton',
    description: 'High-quality recording showcasing full range of artistry and stage presence.',
    badge:       'Highlight',
    url:         signaturePerformance,
  },
    {
    title:       'Live Jazz Jam Session',
    description: 'Informal jam session video highlighting improvisational skills and musical chemistry.',
    url:         jamSession,
  },
  {
    title:       'Live Performance at Sanctuary Mandela',
    description: 'Elegant lounge performance in a luxury hotel setting, showcasing refined stage presence and audience engagement.',
    url:         blackLabone2,
  },
]

export default function Videos() {
  return (
    <SectionWrapper id="videos" style={{ background: '#161616' }}>
      <div style={{ padding: 'var(--section-pad) clamp(1.5rem, 6vw, 6rem)' }}>

        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <p style={{
            fontFamily:    'var(--font-body)',
            fontSize:      '0.6rem',
            fontWeight:    500,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color:         'var(--gold)',
          }}>Watch</p>
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
            Performance{' '}
            <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Videos</em>
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize:   '0.8rem',
            fontWeight: 300,
            color:      'var(--muted)',
            maxWidth:   '520px',
            margin:     '0 auto',
            lineHeight: 1.8,
          }}>
            Curated for premium clients, these videos highlight compelling stagecraft, clear performance energy, and the refined presence required for luxury bookings.
          </p>
        </div>


        {/* Featured video — large */}
        <div style={{ maxWidth: '900px', margin: '0 auto 3rem' }}>
          <VideoCard
            title={videos[0].title}
            description={videos[0].description}
            badge={videos[0].badge}
            url={videos[0].url}
            index={0}
          />
        </div>

        {/* Remaining videos grid */}
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
          gap:                 'clamp(1.5rem, 3vw, 2rem)',
          maxWidth:            '900px',
          margin:              '0 auto',
        }}>
          {videos.slice(1).map((video, i) => (
            <VideoCard
              key={video.title}
              title={video.title}
              description={video.description}
              badge={video.badge}
              url={video.url}
              index={i + 1}
            />
          ))}
        </div>

      </div>
    </SectionWrapper>
  )
}