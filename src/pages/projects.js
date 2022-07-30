import * as React from 'react'
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Row, Col, Container, Button } from "react-bootstrap"
import { graphql } from 'gatsby';
import {
    projectContainer,
    aboutContainer
} from '../styles/projects.module.css'

const Projects = ({data}) => {
  return (
    <Layout pageTitle="Projects">
     <Container>
     <Row>
        {data.famousPeopleInformation.edges.map(({node}) => (
          <Col lg={8} xs={6} key={node.id} className={projectContainer}>
            <GatsbyImage image={getImage(node.frontmatter.Image01)} alt={node.frontmatter.title} className={aboutContainer}/>
            <br />
            <p style={{fontWeight: 'bold'}} className={aboutContainer}>{node.frontmatter.title}</p>
            <div>{node.excerpt}</div>
            <br />
            <Button className={aboutContainer} variant="outline-secondary" href={node.frontmatter.link} target='_blank'>View on Github</Button>
            <br />
            <br />
            <br />
          </Col>
        ))}
      </Row>
       </Container>
    </Layout>
  );
}

export default Projects

// transformOptions: {cropFocus: CENTER}
export const pageQuery = graphql`
  query {
    famousPeopleInformation: allMarkdownRemark(sort: {fields: frontmatter___title, order: DESC}) {
      edges {
        node {
          id
          excerpt (pruneLength: 350)
          frontmatter {
            title
            link
            Image01 {
              childImageSharp {
                gatsbyImageData(
                    width: 500
                    height: 250
                    blurredOptions: {width: 100}
                    placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  }
`