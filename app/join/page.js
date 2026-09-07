'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
export default function JoinPage() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  const [theme, setTheme] = useState('dark')
  useEffect(() => { const saved = window.localStorage.getItem('site-theme'); if (saved === 'light' || saved === 'dark') setTheme(saved) }, [])
  return <main className="join-page" data-theme={theme} onMouseMove={(event) => setPointer({ x: (event.clientX - window.innerWidth / 2) * 0.5, y: (event.clientY - window.innerHeight / 2) * 0.5 })} style={{ '--pointer-x': `${pointer.x}px`, '--pointer-y': `${pointer.y}px` }}><header className="join-page-header"><Link className="join-logo" href="/" aria-label="DraperU India home"><img className="join-logo-light" src="/logos/draperu-india-light-horizontal.png" alt="DraperU India" /><img className="join-logo-blue" src="/logos/draperu-india-blue-horizontal.png" alt="" aria-hidden="true" /></Link><Link className="back-link" href="/">← Back home</Link></header><section className="join-layout"><div><p className="eyebrow">JOIN THE NETWORK</p><h1>Are you building<br />something?</h1><p className="join-lead">Create your founder profile and put your startup in front of the ecosystem.</p><Link className="button button-primary" href="#profile-form">Create Your Profile <span className="arrow">↗</span></Link></div><div className="benefits"><h2>Make your work visible.</h2><ul><li>Build your founder profile</li><li>Showcase your startup</li><li>Connect with other founders</li><li>Discover investors &amp; opportunities</li><li>Share your milestones</li></ul></div></section></main>
}
