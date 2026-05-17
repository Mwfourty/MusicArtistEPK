import { useState } from 'react'
import { Music2, ExternalLink } from 'lucide-react'

export default function AlbumCard({ title, year, label, index = 0 }) {
  const [hovered, setHovered] = useState(false)

  // Distinct gold-toned placeholder patterns per card
  const patterns = [
    { bg: '#1e1a10', accent: '#C9A84C', symbol: '♩' },
    { bg: '#12181e', accent: '#A08035', symbol: '♪' },
    { bg: '#1a1018', accent: '#B8923E', symbol: '♫' },
    { bg: '#101a14', accent: '#C9A84C', symbol: '♬' },
  ]
  const p = patterns[index % patterns.length]

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:       'flex',
        flexDirection: 'column',
        cursor:        'pointer',
        transform:     hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition:    'transform 0.35s ease',
      }}
    >
      {/* Album art placeholder */}
      <div style={{
        position:      'relative',
        aspectRatio:   '1 / 1',
        background:    p.bg,
        border:        `1px solid ${hovered ? p.accent : 'rgba(201,168,76,0.15)'}`,
        overflow:      'hidden',
        transition:    'border-color 0.3s ease',
        marginBottom:  '1rem',
      }}>
        {/* Background musical notation pattern */}
        <div style={{
          position:   'absolute',
          inset:      0,
          display:    'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize:   '5rem',
          color:      p.accent,
          opacity:    0.08,
          fontFamily: 'serif',
          userSelect: 'none',
          letterSpacing: '-0.1em',
        }}>
          {p.symbol}{p.symbol}
        </div>

        {/* Corner ornament top-left */}
        <div style={{
          position:    'absolute',
          top:         '0.75rem',
          left:        '0.75rem',
          width:       '16px',
          height:      '16px',
          borderTop:   `1px solid ${p.accent}`,
          borderLeft:  `1px solid ${p.accent}`,
          opacity:     0.5,
        }} />
        {/* Corner ornament bottom-right */}
        <div style={{
          position:    'absolute',
          bottom:      '0.75rem',
          right:       '0.75rem',
          width:       '16px',
          height:      '16px',
          borderBottom:`1px solid ${p.accent}`,
          borderRight: `1px solid ${p.accent}`,
          opacity:     0.5,
        }} />

        {/* Center icon */}
        <div style={{
          position:        'absolute',
          inset:           0,
          display:         'flex',
          flexDirection:   'column',
          alignItems:      'center',
          justifyContent:  'center',
          gap:             '0.5rem',
        }}>
          <Music2
            size={32}
            color={p.accent}
            style={{ opacity: hovered ? 0.9 : 0.5, transition: 'opacity 0.3s' }}
          />
          <span style={{
            fontFamily:    'var(--font-body)',
            fontSize:      '0.55rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color:         p.accent,
            opacity:       hovered ? 0.8 : 0.4,
            transition:    'opacity 0.3s',
          }}>
            {label}
          </span>
        </div>

        {/* Hover overlay with listen prompt */}
        <div style={{
          position:        'absolute',
          inset:           0,
          background:      'rgba(26,26,26,0.85)',
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'center',
          gap:             '0.4rem',
          opacity:         hovered ? 1 : 0,
          transition:      'opacity 0.3s ease',
        }}>
          <ExternalLink size={14} color="var(--gold)" />
          <span style={{
            fontFamily:    'var(--font-body)',
            fontSize:      '0.6rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color:         'var(--gold)',
          }}>
            Stream
          </span>
        </div>
      </div>

      {/* Metadata */}
      <div>
        <p style={{
          fontFamily:    'var(--font-display)',
          fontSize:      '1.05rem',
          fontWeight:    400,
          color:         hovered ? 'var(--gold-light)' : 'var(--cream)',
          marginBottom:  '0.2rem',
          lineHeight:    1.2,
          transition:    'color 0.3s',
        }}>
          {title}
        </p>
        <div style={{
          display:     'flex',
          alignItems:  'center',
          gap:         '0.5rem',
        }}>
          <span style={{
            fontFamily:    'var(--font-body)',
            fontSize:      '0.65rem',
            letterSpacing: '0.1em',
            color:         'var(--gold)',
            opacity:       0.75,
          }}>
            {year}
          </span>
          <span style={{ color: 'rgba(201,168,76,0.3)', fontSize: '0.5rem' }}>◆</span>
          <span style={{
            fontFamily:    'var(--font-body)',
            fontSize:      '0.65rem',
            letterSpacing: '0.08em',
            color:         'var(--muted)',
          }}>
            {label}
          </span>
        </div>
      </div>
    </div>
  )
}