import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby-link'

import ThemeProvider from '../components/ThemeProvider';

const Layout = ({ children, data }) => (
  <div>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <link rel="apple-touch-icon" sizes="180x180" href={withPrefix('/apple-touch-icon.png')} />
      <link rel="icon" type="image/png" sizes="32x32" href={withPrefix('/favicon-32x32.png')} />
      <link rel="icon" type="image/png" sizes="16x16" href={withPrefix('/favicon-16x16.png')} />
      <link rel="manifest" href={withPrefix('/site.webmanifest')} />
      <link rel="mask-icon" color="#5bbad" href={withPrefix('/safari-pinned-tab.svg')} />
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta property="og:image" content={withPrefix('/og_image.png')} />
    </Helmet>
    <ThemeProvider>
      {children()}
    </ThemeProvider>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title,
        description
      }
    }
  }
`;
