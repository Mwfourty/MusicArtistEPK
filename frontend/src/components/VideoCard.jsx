import { useState } from 'react'
import { Play, ExternalLink } from 'lucide-react'

export default function VideoCard({ title, description, vimeoId, badge, index = 0 }) {
  const [hovered, setHovered] = useState(false)
  const url = vimeoId ? `https://vimeo.com/${vimeoId}` : '#'

  // Staggered cinematic tones
  const tones = [
    { bg: '#141014', line: '#2a1f10' },
    { bg: '#101418', line: '#101a20' },
    { bg: '#141010', line: '#201010' },
    { bg: '#101410', line: '#101a10' },
    { bg: '#141214', line: '#1e1020' },
  ]
  const t = tones[index % tones.length]

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:       'flex',
        flexDirection: 'column',
        cursor:        'pointer',
        transform:     hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition:    'transform 0.35s ease',
      }}
    >
      {/* Thumbnail */}
      <div style={{
        position:    'relative',
        aspectRatio: '16 / 9',
        background:  url === '#' ? t.bg : 'transparent',
        border:      `1px solid ${hovered ? 'rgba(201,168,76,0.5)' : 'rgba(201,168,76,0.12)'}`,
        overflow:    'hidden',
        marginBottom:'0.9rem',
        transition:  'border-color 0.3s',
      }}>
        {/* Vimeo preview is linked externally; no inline video preview for remote Vimeo content */}

        {/* Widescreen letterbox bars */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '10%', background: 'rgba(0,0,0,0.5)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '10%', background: 'rgba(0,0,0,0.5)' }} />

        {/* Play button */}
        <div style={{
          position:        'absolute',
          inset:           0,
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'center',
        }}>
          <div style={{
            width:      '48px',
            height:     '48px',
            borderRadius:'50%',
            border:     `1px solid rgba(201,168,76,${hovered ? 0.9 : 0.4})`,
            display:    'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: hovered ? 'rgba(201,168,76,0.15)' : 'transparent',
            transition: 'all 0.3s ease',
            transform:  hovered ? 'scale(1.1)' : 'scale(1)',
          }}>
            <Play
              size={16}
              color="var(--gold)"
              fill={hovered ? 'var(--gold)' : 'none'}
              style={{ marginLeft: '2px', transition: 'fill 0.3s' }}
            />
          </div>
        </div>

        {/* Badge */}
        {badge && (
          <div style={{
            position:      'absolute',
            top:           '0.6rem',
            left:          '0.6rem',
            padding:       '0.2rem 0.6rem',
            background:    'rgba(201,168,76,0.15)',
            border:        '1px solid rgba(201,168,76,0.3)',
            fontFamily:    'var(--font-body)',
            fontSize:      '0.5rem',
            fontWeight:    500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color:         'var(--gold)',
          }}>
            {badge}
          </div>
        )}

        {/* Watch overlay on hover */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => url === '#' && e.preventDefault()}
          style={{
            position:        'absolute',
            inset:           0,
            display:         'flex',
            alignItems:      'flex-end',
            justifyContent:  'flex-end',
            padding:         '0.75rem',
            opacity:         hovered ? 1 : 0,
            transition:      'opacity 0.3s',
            textDecoration:  'none',
          }}
        >
          <span style={{
            display:       'flex',
            alignItems:    'center',
            gap:           '0.3rem',
            fontFamily:    'var(--font-body)',
            fontSize:      '0.55rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color:         'var(--gold)',
          }}>
            Watch <ExternalLink size={10} color="var(--gold)" />
          </span>
        </a>
      </div>

      {/* Text */}
      <div>
        <p style={{
          fontFamily:   'var(--font-display)',
          fontSize:     '1rem',
          fontWeight:   400,
          color:        hovered ? 'var(--gold-light)' : 'var(--cream)',
          marginBottom: '0.3rem',
          lineHeight:   1.3,
          transition:   'color 0.3s',
        }}>
          {title}
        </p>
        {description && (
          <p style={{
            fontFamily:   'var(--font-body)',
            fontSize:     '0.7rem',
            fontWeight:   300,
            color:        'var(--muted)',
            lineHeight:   1.6,
          }}>
            {description}
          </p>
        )}
      </div>
    </div>
  )
}