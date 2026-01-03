import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// Hook to get site metadata for SEO
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetadataQuery {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
            author
            siteUrl
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

// SEO component for use in Gatsby Head API
const SEO = ({ title, description, pathname, keywords = [], children }) => {
  const siteMetadata = useSiteMetadata();

  const metaDescription = description || siteMetadata.description;
  const canonical = pathname ? `${siteMetadata.siteUrl}${pathname}` : null;
  const fullTitle = title ? `${title} | ${siteMetadata.title}` : siteMetadata.title;

  return (
    <>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={siteMetadata.social.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      {canonical && <link rel="canonical" href={canonical} />}
      {children}
    </>
  );
};

export default SEO;
