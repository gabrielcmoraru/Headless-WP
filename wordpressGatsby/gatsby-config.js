module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'localhost:8080',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: true
      }
    }
],
}
