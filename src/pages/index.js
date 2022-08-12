import * as React from "react"
import Layout from "../components/Layout"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/global.css'
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  aboutContainer,
  biocontainer,
  imagecontainer,
  bioImage
} from '../styles/about.module.css'

/*
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
  integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
  crossorigin="anonymous"
/>
*/

const Home = ({data}) => {
  const image = getImage(data.file);
  return (
    <Layout pageTitle="Home">
      <div className={aboutContainer}>
        <div className={biocontainer}>
          <p>
            Hello! I am a sophomore studying <a href='https://cs.illinois.edu' target='_blank' rel='noreferrer'>Computer Science</a> and 
            Music at the University of Illinois Urbana-Champaign.
          <br />
          <br />
            Along with doing <Link to="/projects">projects</Link>, I enjoy playing
            trombone and hiking. Currently, I'm a frontend developer for ACM; we're rebuilding
            the entire site to fit the community's needs, and I'll work on the backend in the future.
            <br />
            <br />
            Thank you for stopping by! I'm looking for SWE opportunities in the future.
          </p>
        </div>
        <div className={imagecontainer}>
          <GatsbyImage className={bioImage} image={image} alt="aden krakman" /> 
        </div>
      </div>
    </Layout>
  )
}

export const imgQuery = graphql`
  query getImage {
     file(extension: {eq: "jpg"}, name: {eq: "me"}) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, width: 300, height: 400, formats: WEBP)
      }
    }
  }
`

export default Home