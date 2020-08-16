import React, { Component } from "react";
import YourCandidates from "./pages/YourCandidates";
import ElectionCommitments from "./pages/ElectionCommitments";
import WhereToVote from "./pages/WhereToVote";
import VoterSafety from "./pages/VoterSafety";
import WhenToVote from "./pages/WhenToVote";
import Home from "./pages/Home";
import * as _ from "lodash";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 1,
      title: "gmapsSelected",
      type: "gmapsSelected",
    };
    this.gmapsSelected = this.gmapsSelected.bind(this);
    this.yourCandidates = this.yourCandidates.bind(this);
    this.whereToVote = this.whereToVote.bind(this);
    this.whenToVote = this.whenToVote.bind(this);
    this.voterSafety = this.voterSafety.bind(this);
  }

  gmapsSelected() {
    this.setState({
      selected: 1,
      title: "gmapsSelected",
      type: "gmapsSelected",
    });
  }

  yourCandidates() {
    this.setState({
      selected: 2,
      title: "yourCandidates",
      type: "yourCandidates",
    });
  }

  whereToVote() {
    this.setState({
      selected: 3,
      title: "whereToVote",
      type: "whereToVote",
    });
  }

  whenToVote() {
    this.setState({
      selected: 4,
      title: "whenToVote",
      type: "whenToVote",
    });
  }

  voterSafety() {
    this.setState({
      selected: 5,
      title: "voterSafety",
      type: "voterSafety",
    });
  }

  render() {
    let content;
    if (this.state.type === "gmapsSelected") content = <Home />;
    else if (this.state.type === "yourCandidates") content = <YourCandidates />;
    else if (this.state.type === "whereToVote") content = <WhereToVote />;
    else if (this.state.type === "whenToVote") content = <WhenToVote />;
    else if (this.state.type === "voterSafety") content = <VoterSafety />;

    return (
      <div className="App">
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">
            Plan Your Vote
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul class="navbar-nav ml-auto">
          &nbsp;
            <button type="button" class={"btn btn-outline-primary " + (this.state.selected === 1 ? 'active' : '')} onClick={this.gmapsSelected}>Home</button>	&nbsp;	&nbsp;
            <button type="button" class={"btn btn-outline-primary " + (this.state.selected === 2 ? 'active' : '')} onClick={this.yourCandidates}>Your Candidates</button>	&nbsp;	&nbsp;
            <button type="button" class={"btn btn-outline-primary " + (this.state.selected === 3 ? 'active' : '')} onClick={this.whereToVote}>Where To Vote</button>	&nbsp;	&nbsp;
            <button type="button" class={"btn btn-outline-primary " + (this.state.selected === 4 ? 'active' : '')} onClick={this.whenToVote}>How To Vote</button>	&nbsp;	&nbsp;
            <button type="button" class={"btn btn-outline-primary " + (this.state.selected === 5 ? 'active' : '')} onClick={this.voterSafety}>Voter Safety</button>	&nbsp;	&nbsp;
          </ul>
          </div>
        </nav>

        <div className="container">{content}</div>
      </div>
    );
  }
}

export default App;
