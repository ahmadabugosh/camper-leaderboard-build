import React, { Component } from 'react';
import axios from 'axios';
import CamperList from './CamperList';

export default class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      recentCampers:[],
      allTimeCampers:[],
      currentView:'recentCampers'
    };
  }

  componentWillMount () {
axios.all([this.fetchAllCampers(),this.fetchRecentCampers()])
.then(axios.spread((allTimeCampers, recentCampers) =>{
   this.setState({ allTimeCampers:allTimeCampers.data,recentCampers:recentCampers.data});
  }));


  }


  fetchAllCampers() {

  return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
}

fetchRecentCampers() {

  return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
}

changeView(currentView)
{
  this.setState({currentView});
}

  render() {
    return (
      <div className="container">
      <h1> FCC Camper Leaderboard - Ahmad Abugosh {this.state.currentView}</h1>
      <button onClick={()=> this.changeView('allTimeCampers')} className="btn btn-primary">All Time </button>
      <button onClick={()=> this.changeView('recentCampers')} className="btn btn-secondary">Recent</button>
      <CamperList campers={this.state[this.state.currentView]} />
      </div>
    );
  }
}
