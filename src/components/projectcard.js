import * as React from "react"
import { GatsbyImage } from 'gatsby-plugin-image'
import "../styles/global.css"
import {
    cardContainer,
    card,
    projectImage,
    projectCardText,
    projectTitle,
    projectDescription
} from "../styles/card.module.css"

const Projectcard = ({title, image, link, description, external}) => {
  return (
    <div className={`${cardContainer} zoom`}>
      <div className={card}>
        {
         <a href={link} target={"_blank"} rel={"noreferrer"}>
            <GatsbyImage className={projectImage} image={image} alt="aden krakman" /> 
          </a>
        } 
        
        <div className={projectCardText}>
          {
            <a className={projectTitle} href={link} target={"_blank"} rel={"noreferrer"}>{title}</a>
          }
          <p className={projectDescription}>{description}</p>
      </div>
    </div>
  </div>
  )
}

export default Projectcard