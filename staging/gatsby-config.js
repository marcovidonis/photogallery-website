const menuLinks = require(`../gatsby-theme-serafina/utils/default-menu-links`);


module.exports = {
  siteMetadata: {
    title: `Virginia Web`,
    description: `Collection of Creations`,
    author: "Marco Vidonis",
    image: "",
    name: `Virginia Web`,
    tagline: `Collection of Creations`,
    menuLinks,
    socialLinks: [
      {
        name: `Instagram`,
        url: `https://instagram.com`,
      },
    ],
  },
  plugins: [
    "gatsby-plugin-netlify",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Virginia Web`,
        short_name: `Virginia Web`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        icon: `src/assets/icon.png`,
        // display: `standalone`,
      },
    },
    {
      resolve: `gatsby-theme-serafina`,
    },
  ],
}
