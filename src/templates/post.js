import React, { Component } from "react"
import PropTypes from "prop-types"

import Helmet from "react-helmet"

class PostTemplate extends Component {
    render() {
        const siteMetadata = this.props.data.site.siteMetadata
        const currentPost = this.props.data.wordpressPost

        return (
            <div>
                <h1 dangerouslySetInnerHTML={{ __html: currentPost.title }} />
                <div dangerouslySetInnerHTML={{ __html: currentPost.content }} />
                <img src={currentPost.featured_media.source_url} />
            </div>
        )
    }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      featured_media {
        source_url
      }
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
    site {
      id
      siteMetadata {
        title
        subtitle
      }
    }
  }
`