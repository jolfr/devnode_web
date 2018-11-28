import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Animate from '../../css/animate.css'
import Bootstrap from '../../css/bootstrap.css'
import BootstrapResponsive from '../../css/bootstrap-responsive.css'
import CSlider from '../../css/cslider.css'
import CustomFonts from '../../css/custom-fonts.css'
import FontAwesome from '../../css/font-awesome.css'
import JCarousel from '../../css/jcarousel.css'
import Overwrite from '../../css/overwrite.css'
import Style from '../../css/style.css'



import Header from './header'


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header />
        <div>
          {children}
        </div>

      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
