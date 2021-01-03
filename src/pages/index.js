import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Aakarshna Portfolio" />
        <>
          <div className="main-wrap">
            <div className="container">
              <div className="my-img">
                <img src="preview.png" />
              </div>
              <div className="title">
                <h1>Aakarshna</h1>
              </div>
              <div className="what-i-do">
                <div className="w-wrap">
                  <ul>
                    <li><a href="https://zomato.com" target="__blank">I work at zomato ✨</a></li>
                    <li><a href="https://designletter.co/?ref=aakarshna" target="__blank">I curate Designletter 🎨</a></li>
                    <li><a href="https://aakarshna.co/noted/" target="__blank">I built Noted for Figma 📝</a></li>
                    <li><a href="https://medium.com/@aakarshnaanand/" target="__blank">I write on Medium ✍🏼</a></li>
                  </ul>
                </div>
              </div>
              <div className="social-link">
                <div className="s-wrap">
                  <a href="https://twitter.com/aakarshnaanand/"><img src="twitter.svg"/></a>
                  <a href="https://linkedin.com/in/aakarshnaanand/"><img src="linkedin.svg"/></a>
                </div>
              </div>
            </div>
          </div>
        </>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt(format: HTML)
          html
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title

          }
        }
      }
    }
  }
`
