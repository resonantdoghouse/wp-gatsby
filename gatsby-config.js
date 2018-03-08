module.exports = {
  siteMetadata: {
    title: 'Gatsby WP Starter',
    subtitle: 'ham',
  },
  plugins: ['gatsby-plugin-react-helmet',
  {
    resolve: "gatsby-source-wordpress",
    options: {
      baseUrl: "catkittycat.com",
      protocol: 'http',
      hostingWPCOM: false,
      useACF: false,
      verboseOutput: true
    }
  }],
};
