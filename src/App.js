import React, { Component } from 'react';
import { DefaultPlayer as Video } from 'react-html5video';

import LandingModal from './components/LandingModal'
import PlaylistContainer from './components/PlaylistContainer'
import MoodForm from './components/MoodForm'

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
          <div>
            <Video autoPlay loop muted poster="">
              <source src="https://ia902300.us.archive.org/10/items/WinterStreamCCBYNatureClip/Winter%20stream%20CC-BY%20NatureClip.mp4" type="video/mp4" />
            </Video>
          </div>
          <a className="page-heading" onClick={this.showLandingModal.bind(this)} href="#"><h1>Mood</h1></a>
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
}

export default App;
