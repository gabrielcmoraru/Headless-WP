import React, { Component } from 'react'


export default class page extends Component {
  render() {
    const {data} = this.props;
    return (
      <div>
        <h1>{data.wordpressPage.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: data.wordpressPage.content
          }}
        />>
      </div>
    )
  }
}

export const query = graphql`
  query PageQuery($slug: String!) {
    wordpressPage(slug: {eq: $slug}) {
      title
      slug
      content
    }
  }
`;