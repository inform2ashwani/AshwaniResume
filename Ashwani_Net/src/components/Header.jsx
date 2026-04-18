import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Resume', to: '/resume' },
  { label: 'Blog', to: '/blog' },
  { label: 'Interviews', to: '/interviews' },
  { label: 'Q&A', to: '/qanda' },
]

function Header() {
  return (
    <header className="site-header">
      <div className="brand">
        <span className="brand-mark">A</span>
        <div>
          <p className="brand-name">Ashwani Net</p>
          <p className="brand-tag">Full-stack Engineer with Interview expertise</p>
        </div>
      </div>
      <nav className="site-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `nav-link${isActive ? ' nav-link-active' : ''}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header
