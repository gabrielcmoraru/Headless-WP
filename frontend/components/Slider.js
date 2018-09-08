import React, { Component } from 'react'
import Carousel from "nuka-carousel";
import fetch from 'isomorphic-unfetch';
import { Config } from '../config';

export default class Slider extends Component {

  state = {
    slides: []
  };

  async componentWillMount() {
    const slidesRes = await fetch(`${Config.apiUrl}/wp-json/wp/v2/slide?_embed`)
    const slides = await slidesRes.json();
    this.setState( {
      slides
    });
  }

  render() {
    const { slides } = this.state;
    return (
      <div>
        <Carousel>
          {slides.map(slide =>
            <img
            style={{width: '100%'}}
            key={slide.id}
            alt={slide.title.rendered}
            src={slide._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url}/>
            )}
        </Carousel>
      </div>
    )
  }
}
