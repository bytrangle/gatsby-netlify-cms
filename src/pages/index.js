import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>This site is built with Gatsby with content sourced from Netlify CMS.</p>
    <h2>Blog</h2>
    {/* {data.allMarkdownRemark.nodes.map(node => (
      <article key={node.id}>
          <h2>
              <Link to={`/blog/${node.frontmatter.path}`}>
                  {node.frontmatter.title}
              </Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
      </article>
    ))} */}
  </Layout>
)

// export const query = graphql`
//     query {
//         allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
//             nodes {
//                 frontmatter {
//                     date(formatString: "YYYY-MM-DD")
//                     title
//                     path
//                 }
//                 id
//             }
//         }
//     }
// `

export default IndexPage
