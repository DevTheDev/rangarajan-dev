import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Container } from './nav.css';
// import Image from 'gatsby-image';
import { isMobile } from 'react-device-detect';

const Nav = () => {
  const logos = useStaticQuery(graphql`
    query navQuery {
      navJson {
        blogIMG {
          publicURL
        }
        linkedinIMG {
          publicURL
        }
        githubIMG {
          publicURL
        }
        twitterIMG {
          publicURL
        }
      }
    }
  `);
  const yoMobile = isMobile;
  return (
    <Container>
      <ul>
        <li>
          <Link to="/blog">
            {yoMobile ? (
              <img src={logos.navJson.blogIMG.publicURL} alt={'blog'} />
            ) : (
              'Blog'
            )}
          </Link>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/dev-rangarajan"
            rel="noopener noreferrer"
            target="_blank"
          >
            {yoMobile ? (
              <img src={logos.navJson.linkedinIMG.publicURL} alt={'linkedin'} />
            ) : (
              'LinkedIn'
            )}
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/devrangarajan"
            rel="noopener noreferrer"
            target="_blank"
          >
            {yoMobile ? (
              <img src={logos.navJson.twitterIMG.publicURL} alt={'twitter'} />
            ) : (
              'Twitter'
            )}
          </a>
        </li>
        <li>
          <a
            href="https://github.com/DevTheDev"
            rel="noopener noreferrer"
            target="_blank"
          >
            {yoMobile ? (
              <img src={logos.navJson.githubIMG.publicURL} alt={'github'} />
            ) : (
              'Github'
            )}
          </a>
        </li>
      </ul>
    </Container>
  );
};

export default Nav;
