import React, { Component } from 'react'
import Layout from '../components/Layout.js';
import PostIndex from '../components/PostIndex';
import fetch from 'isomorphic-unfetch';
import { Config } from '../config';

export default class PostIndexPage extends Component {

  render() {
    return (
      <Layout index={false}>
        <h1>Post Index</h1>
        <PostIndex limit={5}/>
      </Layout>
    )
  }
}
