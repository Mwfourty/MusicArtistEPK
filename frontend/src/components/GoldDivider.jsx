export default function GoldDivider({ label = '' }) {
  return (
    <div style={{
      display:        'flex',
      alignItems:     'center',
      justifyContent: 'center',
      gap:            '1rem',
      margin:         '0 auto 3rem',
      maxWidth:       '320px',
    }}>
      <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, var(--gold-dark))' }} />
      <div style={{
        display:     'flex',
        alignItems:  'center',
        gap:         '0.4rem',
        color:       'var(--gold)',
        fontSize:    '0.6rem',
        fontFamily:  'var(--font-body)',
        fontWeight:  500,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        whiteSpace:  'nowrap',
      }}>
        <span style={{ fontSize: '0.5rem' }}>◆</span>
        {label && <span>{label}</span>}
        <span style={{ fontSize: '0.5rem' }}>◆</span>
      </div>
      <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, var(--gold-dark), transparent)' }} />
    </div>
  )
}