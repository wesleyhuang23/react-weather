import React from 'react';
import Nav from './../nav/Nav'

export default class VideosView extends React.Component{
  render(){
    return(
    <div className="videos">
      <Nav />
      <h1>Video</h1>
      <iframe width="800" height="450" src="https://www.youtube.com/embed/BNwpNlNR6dY" frameborder="0" allowfullscreen></iframe>
    </div>
    )
  }
}
