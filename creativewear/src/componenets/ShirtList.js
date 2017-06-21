import React, { Component } from 'react';


class ShirtList extends Component {
  render() {
    return (
      <ul className="Shirtist">
        
        {this.props.data.map((shirts) => {
          return (
            <li>{this.props.data.imgUrl}</li>
          )
        })}
      </ul>
    );
  }
}

export default QuoteList;