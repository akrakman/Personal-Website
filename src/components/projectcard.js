//import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import {
    cardContainer,
    card,
    projectImage,
    projectCardText,
    projectTitle,
    projectDescription
} from "../styles/card.module.css"
import "../styles/global.css"

const Projectcard = ({title, image, link, description, external}) => {
  return (
    <div className={`${cardContainer} zoom`}>
      <div className={card}>
        {
          // external ?
         <a href={link} target={"_blank"} rel={"noreferrer"}>
            {/*<img className={projectImage} src={image} alt={title}/>*/}
            <GatsbyImage className={projectImage} image={image} alt="aden krakman" /> 
          </a>
        //: <Link to={link}>
        //    <img className={projectImage} src={image} alt={title}/>
        //  </Link>
        } 
        
        <div className={projectCardText}>
          {
            //external ?
            <a className={projectTitle} href={link} target={"_blank"} rel={"noreferrer"}>{title}</a>
            //:<Link className={projectTitle} to={link}>{title}</Link>
          }
          <p className={projectDescription}>{description}</p>
      </div>
    </div>
  </div>
  )
}

export default Projectcard