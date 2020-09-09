import { Link } from "gatsby"
import React from "react"
import classes from "./header.module.css"

const Header = (props) => (
  <header className={classes.Header}>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link to="/" className={classes.HeaderLink}>
          {props.siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
