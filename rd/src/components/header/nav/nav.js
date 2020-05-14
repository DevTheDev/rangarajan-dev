import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Container } from './nav.css';
import Image from 'gatsby-image';
import { isMobile } from 'react-device-detect';

const Nav = () => {
  const logos = useStaticQuery(graphql`
    query navQuery {
      navJson {
        aboutIMG {
          childImageSharp {
            fixed(height: 30, width: 30) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        blogIMG {
          childImageSharp {
            fixed(height: 30, width: 30) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        portfolioIMG {
          childImageSharp {
            fixed(height: 30, width: 30) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        linkedinIMG {
          childImageSharp {
            fixed(height: 30, width: 30) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        githubIMG {
          childImageSharp {
            fixed(height: 30, width: 30) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `);
  const yoMobile = isMobile;
  return (
    <Container>
      <ul>
        <li>
          <Link to="/about">
            {yoMobile ? (
              <Image fixed={logos.navJson.aboutIMG.childImageSharp.fixed} />
            ) : (
              'About'
            )}
          </Link>
        </li>
        <li>
          <Link to="/blog">
            {yoMobile ? (
              <Image fixed={logos.navJson.blogIMG.childImageSharp.fixed} />
            ) : (
              'Blog'
            )}
          </Link>
        </li>
        <li>
          <Link to="/portfolio">
            {yoMobile ? (
              <Image fixed={logos.navJson.portfolioIMG.childImageSharp.fixed} />
            ) : (
              'Portfolio'
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
              <Image fixed={logos.navJson.linkedinIMG.childImageSharp.fixed} />
            ) : (
              'LinkedIn'
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
              <Image fixed={logos.navJson.githubIMG.childImageSharp.fixed} />
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
