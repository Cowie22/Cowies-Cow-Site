import React, { memo } from 'react'
import AboutContent from '../components/AboutContent/AboutContent'

/* As you probably know, Gatsby makes it very easy to route the project.  You simply need to add the .js or .jsx file To the pages directory and then the name of the page becomes the route.  However, in order to organize the project Properly, you would typically put the .jsx file and the accompanying .scss file into it's own directory.  Doing That for the pages, would create a double directory for the route.  For example, /home/home.  As a result, For organization purposes, I have placed the pages here and simply returned the accompanying, 'Content' jsx. The content jsx and scss are organized as they're supposed to be, within there own directory and that is theWhere the content for each page really begins.
 */

const About = props => {
  return <AboutContent />
}

export default memo(About)
