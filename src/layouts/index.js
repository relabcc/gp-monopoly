import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import ThemeProvider from '../components/ThemeProvider';

const Layout = ({ children, data }) => (
  <div>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="og:image" content={'https:' + data.site.siteMetadata.remote + '/og-image.jpg'} />
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
        description,
        remote
      }
    }
  }
`;
