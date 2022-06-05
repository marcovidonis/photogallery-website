import React from "react";
import { graphql } from "gatsby";
import Gallery from "../components/gallery";

const GalleryPage = ({ data, pageContext }) => {
  const { name, options } = pageContext;
  return <Gallery name={name} options={options} photos={getPhotos(data)} />;
};

const getPhotos = (data) => {
  return (
    data.gallery.localImage.map((photo, index) => ({
      src: photo.childImageSharp.gatsbyImageData.images.fallback.src,
      width: photo.childImageSharp.gatsbyImageData.width,
      height: photo.childImageSharp.gatsbyImageData.height,
      sizes: photo.childImageSharp.gatsbyImageData.images.sources[0].sizes,
      srcSet: photo.childImageSharp.gatsbyImageData.images.sources[0].srcSet,
      alt: data.gallery.photos[index].alt,
      title: data.gallery.photos[index].alt
    }))
  )
}

export default GalleryPage;

export const query = graphql`query GalleryQuery($name: String) {
  gallery(name: {eq: $name}) {
    name
    localImage {
      childImageSharp {
        gatsbyImageData(quality: 80, placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
    photos {
      alt
    }
  }
}
`;
