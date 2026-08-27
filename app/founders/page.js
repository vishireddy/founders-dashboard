'use client'

import { useMemo, useState } from 'react'
import { founders } from '../data/founders'

const values = (key) => ['All', ...new Set(founders.map((founder) => founder[key]))]

export default function FoundersPage() {
  const [query, setQuery] = useState('')
  const [sector, setSector] = useState('All')
  const [city, setCity] = useState('All')
  const filtered = useMemo(() => founders.filter((founder) => {
    const text = `${founder.name} ${founder.startup} ${founder.about}`.toLowerCase()
    return text.includes(query.toLowerCase()) && (sector === 'All' || founder.sector === sector) && (city === 'All' || founder.city === city)
  }), [query, sector, city])

  return <main className="directory">
    <header className="directory-header"><a className="directory-brand" href="/" aria-label="Founders Ecosystem home">FOUNDERS<br /><span>ECOSYSTEM</span></a><a className="back-link" href="/">← Back home</a></header>
    <section className="directory-intro"><p className="eyebrow">THE NETWORK</p><h1>Explore founders.</h1><p>Meet the people building what&apos;s next across the ecosystem.</p></section>
    <section className="directory-tools" aria-label="Directory filters"><label className="search"><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search founders or startups" aria-label="Search founders or startups" /></label><select value={sector} onChange={(event) => setSector(event.target.value)} aria-label="Filter by sector">{values('sector').map((value) => <option key={value}>{value === 'All' ? 'All sectors' : value}</option>)}</select><select value={city} onChange={(event) => setCity(event.target.value)} aria-label="Filter by city">{values('city').map((value) => <option key={value}>{value === 'All' ? 'All cities' : value}</option>)}</select></section>
    <p className="result-count">Showing {filtered.length} of {founders.length} founders</p>
    <section className="founder-grid">{filtered.map((founder) => <article className="founder-card" key={founder.name}><div className="avatar">{founder.name.split(' ').map((word) => word[0]).join('')}</div><div className="card-top"><span className="card-sector">{founder.sector}</span><span className="card-cohort">{founder.cohort}</span></div><h2>{founder.name}</h2><p className="startup">{founder.role} · {founder.startup}</p><p className="about">{founder.about}</p><div className="card-footer"><span>{founder.city} · {founder.stage}</span><a href={founder.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div></article>)}</section>
    {filtered.length === 0 && <p className="empty">No founders match those filters. Try a different search.</p>}
  </main>
}
