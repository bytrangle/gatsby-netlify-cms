import * as React from "react"
import { graphql } from "gatsby"
import Layout from '../../components/layout'

export default function BlogPost({
    data // this prop will be injected by the graphql query below
}) {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    return (
        <Layout pageTitle={frontmatter.title}>
            <p>{frontmatter.date}</p>
            <div className="blog-post-content" dangerouslySetInnerHTML={{__html: html}}/>
        </Layout>

    )
}

export const pageQuery = graphql`
    query($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                date(formatString: "YYYY-MM-DD")
                path
                title
            }
        }
    }
`