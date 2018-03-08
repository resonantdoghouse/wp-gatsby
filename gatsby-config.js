module.exports = {
  siteMetadata: {
    title: 'Gatsby WP Starter',
    subtitle: 'ham',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  {
    resolve: "gatsby-source-wordpress",
    options: {
      baseUrl: "catkittycat.com",
      protocol: 'http',
      hostingWPCOM: false,
      useACF: true,
      verboseOutput: true
    }
  }],
};
