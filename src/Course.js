import React, { Component } from 'react';
import './App.css';
import Section from './Section';
import Subsection from './Subsection';

import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

class Course extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rating: 'Not rated',
    }
    this.setRating1 = this.setRating1.bind(this);
    this.setRating2 = this.setRating2.bind(this);
    this.setRating3 = this.setRating3.bind(this);
    this.setRating4 = this.setRating4.bind(this);
    this.setRating5 = this.setRating5.bind(this);
  }

  setRating1() {
    this.setState({ rating: 1, });
    // console.log(this.state.rating);
  }
  setRating2() {
    this.setState({ rating: 2, });
    // console.log(this.state.rating);
  }
  setRating3() {
    this.setState({ rating: 3, });
    // console.log(this.state.rating);
  }
  setRating4() {
    this.setState({ rating: 4, });
    // console.log(this.state.rating);
  }
  setRating5() {
    this.setState({ rating: 5, });
    // console.log(this.state.rating);
  }

  render() {

    return (
      <div>
        <h6>###########################################</h6>
        <Section data={this.props.data} compactMode={this.props.compactMode} />
        <Subsection data={this.props.data} compactMode={this.props.compactMode} />
        <h6>###########################################</h6>
        {this.props.compactMode &&  <>
          <h5>rating {this.state.rating}</h5>
          
            <Button
              onClick={this.setRating1}
            >★</Button>  
            <Button
              onClick={this.setRating2}
            >★</Button>  
            <Button
              onClick={this.setRating3}
            >★</Button>  
            <Button
              onClick={this.setRating4}
            >★</Button> 
            <Button
              onClick={this.setRating5}
            >★</Button> 
          </>}
      </div>
    )
  }
}

export default Course;

