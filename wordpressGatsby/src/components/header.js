import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle, menu }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav>
        {menu.map(item =>
          <Link
          to={`/${item.object_slug}`}
          >
            {item.title}
          </Link>
        )}
      </nav>
    </div>
  </div>
)

export default Header
