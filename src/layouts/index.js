import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import ThemeProvider from '../components/ThemeProvider';


const Layout = ({ children, data }) => {
  console.log(data);
  return (
    <div>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <link rel="apple-touch-icon" sizes="180x180" href={`${data.site.pathPrefix}/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${data.site.pathPrefix}/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${data.site.pathPrefix}/favicon-16x16.png`} />
        <link rel="manifest" href={`${data.site.pathPrefix}/site.webmanifest`} />
        <link rel="mask-icon" href={`${data.site.pathPrefix}/safari-pinned-tab.svg`} color="#5bbad5" />
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:image" content={`${data.site.pathPrefix}/og_image.png`} />
      </Helmet>
      <ThemeProvider>
        {children()}
      </ThemeProvider>
    </div>
  );
};

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
      },
      pathPrefix
    }
  }
`;
