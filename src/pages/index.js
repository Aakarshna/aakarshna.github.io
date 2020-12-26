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
        <div className="nav">
          <div className="container">
            <div className="navbar">
              <div className="name_logo">
                <a href="#"><img src="ak_logo.svg"/></a>
              </div>
              <div className="social">
                <a href="https://twitter.com/aakarshnaanand">twitter</a>
              </div>
            </div>
          </div>
        </div>
        <div className="info">
          <div className="container">
            <div className="ak-info">
              <div className="bio">
                <p>Hello! I am a full stack product and UX enthusiast from India. I design app experiences at <a href="https://zomato.com">zomato</a> to help you to discover your favourite food and restaurants.</p>
              </div>
              <div className="products">
                <div className="p-box">
                  <div className="p-box-wrap">
                    <a href="https://designletter.co" className="designletter">
                      <img src="designletter-box.png"/>
                      <div className="p-desc">
                        <h3>designletter</h3>
                        <p>A weekly newsletter with design resources & inspiration</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="p-box">
                  <div className="p-box-wrap">
                    <a href="/noted" className="noted">
                      <img src="noted-box.png"/>
                      <div className="p-desc">
                        <h3>noted</h3>
                        <p>makes it easy for everyone to take quick notes on Figma</p>
                      </div>
                    </a>
                  </div>
                </div>

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
