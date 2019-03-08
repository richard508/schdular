import React, { Component } from 'react'
import { connect } from "react-redux"
import {getPeople} from "../store/actions/scheduleActions"

class Scheduler extends Component {
  componentDidMount(){
    this.props.getPeople()
  }
  render() {
    return (
      <div>
        Scheduler Component
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {
    getPeople: () => dispatch(getPeople())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Scheduler)