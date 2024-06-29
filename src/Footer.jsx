import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <footer >
        <div className="foot">

          <span id="mad">Made with ❤️ by @Deepak</span>
          <span className="acc">
            <a href="https://www.linkedin.com/in/deepakyadav24/" target="_blank"><img src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png" alt="linkedin"/></a>
            <a href="https://github.com/deepak212001" target="_blank"><img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/github.png" alt="github"/></a>
            <a href="https://leetcode.com/u/deepakyadav21/" target="_blank"><img src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/FFFFFF/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-bold-tal-revivo.png" alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-bold-tal-revivo"/></a>
          </span>
          
        </div>

    </footer>
  )
}

export default Footer
