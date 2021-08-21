import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from '../../components/layout'

export default function BlogPost({
    data // this prop will be injected by the graphql query below
}) {
    // const { markdownRemark } = data
    // const { frontmatter, html } = markdownRemark
    return (
      <Layout pageTitle={data.mdx.frontmatter.title}>
        <p>{data.mdx.frontmatter.date}</p>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Layout>

    )
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
        body
        frontmatter {
            date(formatString: "YYYY-MM-DD")
            path
            title
        }
    }
  }
`