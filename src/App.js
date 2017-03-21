import React, { Component } from 'react';
import { DefaultPlayer as Video } from 'react-html5video';

import LandingModal from './components/LandingModal.js'
import PlaylistContainer from './components/PlaylistContainer.js'
import MoodForm from './components/MoodForm.js'

// import 'react-html5video/dist/styles.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { mood: '', name: '', formSubmitted: false, showLandingModal: false }
  }

  showLandingModal() {
    this.setState({ showLandingModal: true })
  }

  hideLandingModal() {
    this.setState({ showLandingModal: false })
  }

  render() {
    return (
      <div>
        {this.getChild()}
        {this.getLandingModal()}
      </div>
    )
  }

  getChild() {
    if( this.state.formSubmitted ) {
      return <PlaylistContainer />
    } else {
      return (
        <div className="page-banner">
          <Video autoPlay loop muted poster=""
            controls={["Captions"]}>
            <source src="https://d1235ca2z646oc.cloudfront.net/videos/processed/33/Cold2520Winter2520Dream-HD3_1.mp4.mp4" type="video/mp4" />
          </Video>
          <a href="#" onClick={this.showLandingModal.bind(this)}><h1>Mood</h1></a>
        </div>
      )
    }
  }

  getLandingModal() {
    if( this.state.showLandingModal ) {
      return (
        <LandingModal hideLandingModal={this.hideLandingModal.bind(this)}>
          <MoodForm submitForm={this.moodFormSubmitted.bind(this)} />
        </LandingModal>
      )
    } else {
      return <div></div>
    }
  }

  moodFormSubmitted(mood, name) {
    this.setState({ mood, name, formSubmitted: true, showLandingModal: false })
  }

}


export default App;
