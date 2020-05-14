import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Masonry from 'react-masonry-component';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';

import '../styles/card.sass';
import '../styles/showcase.sass';

const Index = ({ data }) => (
  <Layout>
    <Box>{data.portfolioJson.content.childMarkdownRemark.rawMarkdownBody}</Box>
    <Masonry className="showcase">
      {data.portfolioJson.projects.map((project, i) => (
        <div key={i} className="showcase__item">
          <figure className="card">
            {project.isExternal ? (
              <a href={project.path}>
                <Img
                  fluid={
                    project.image ? project.image.childImageSharp.fluid : {}
                  }
                  alt={project.title}
                />
              </a>
            ) : (
              <Link to={project.path} className="card__image">
                <Img
                  fluid={
                    project.image ? project.image.childImageSharp.fluid : {}
                  }
                  alt={project.title}
                />
              </Link>
            )}
            <figcaption className="card__caption">
              <h6 className="card__title">
                {project.isExternal ? (
                  <a href={project.path}>{project.title}</a>
                ) : (
                  <Link to={project.path}>{project.title}</Link>
                )}
              </h6>
              <div className="card__description">
                <p>{project.description}</p>
              </div>
            </figcaption>
          </figure>
        </div>
      ))}
    </Masonry>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query portfolioQuery {
    portfolioJson {
      title
      content {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      projects {
        title
        description
        path
        isExternal
        image {
          childImageSharp {
            fluid(maxHeight: 400, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
