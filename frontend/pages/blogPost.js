import React, { Component } from 'react'
import { Config } from '../config';
import fetch from 'isomorphic-unfetch';

export default class blogPost extends Component {

  static async getInitialProps(context) {
    const slug = context.query.slug;

    const postRes = await fetch(`${Config.apiUrl}/wp-json/postlight/v1/post?slug=${slug}`);
    const post = await postRes.json();
    return {
      post
    }
  }

  render() {
    const { post } = this.props;
    return (
      <div>
        <h1>{post.title.rendered}</h1>
      </div>
    )
  }
}
