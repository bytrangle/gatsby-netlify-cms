import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Blogpost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{__html: post.html}}/>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: {path: {eq: "insert-image-from-cloudinary"}}) {
      html
      frontmatter {
        title
      }
    }
  }
`
