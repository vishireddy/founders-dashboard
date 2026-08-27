const Arrow = () => <span aria-hidden="true" className="arrow">↗</span>

export default function Home() {
  return (
    <main className="ecosystem" data-theme="light">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="DraperU India">
          <img className="brand-logo logo-light" src="/logos/draperu-india-light-horizontal.png" alt="DraperU India" />
          <img className="brand-logo logo-dark" src="/logos/draperu-india-dark-horizontal.png" alt="" aria-hidden="true" />
          <img className="brand-logo logo-blue" src="/logos/draperu-india-blue-horizontal.png" alt="" aria-hidden="true" />
        </a>
        <nav className="nav" aria-label="Primary navigation"><a href="#explore">Explore</a><a href="/founders">Founders</a><a href="#startups">Startups</a><a href="#insights">Insights</a></nav>
        <div className="account-actions"><a className="sign-in" href="#sign-in">Sign In</a><a className="join" href="#join">Join <Arrow /></a></div>
        <button className="menu" aria-label="Open navigation menu"><i /><i /></button>
      </header>
      <section className="hero-content" id="top">
        <p className="eyebrow">DRAPERU INDIA PRESENTS</p>
        <h1>THE FOUNDERS<br />ECOSYSTEM</h1>
        <p className="intro">Discover the people building what&apos;s next.</p>
        <p className="supporting-copy">Explore founders, startups, ideas, funding and connections across the ecosystem.</p>
        <div className="hero-actions"><a className="button button-primary" href="/founders">Explore Founders <Arrow /></a><a className="button button-secondary" href="#join">Join the Network <Arrow /></a></div>
      </section>
      <section className="statistics" aria-label="Ecosystem statistics"><div><strong>1,200+</strong><span>Founders</span></div><div><strong>650+</strong><span>Startups</span></div><div><strong>25+</strong><span>Sectors</span></div><div><strong>₹500Cr+</strong><span>Raised</span></div></section>
    </main>
  )
}
