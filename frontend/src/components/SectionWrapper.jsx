import { useEffect, useRef, useState } from 'react'

export default function SectionWrapper({ children, id, style = {} }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id={id}
      ref={ref}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? 'translateY(0)' : 'translateY(32px)',
        transition: 'opacity 0.75s ease, transform 0.75s ease',
        ...style,
      }}
    >
      {children}
    </section>
  )
}