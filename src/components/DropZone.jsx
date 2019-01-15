import React, { Component } from 'react';

class DropZone extends Component {
  state = {
    styles: {
      display: 'flex',
      width: '250px',
      minHeight: '300px',
      alignItems: 'center',
      flexFlow: 'column',
      border: '1px solid #a1a1a1',
      margin: '20px',
      padding: '5px',
      background: 'white',
      boxSizing: 'border-box'
    }
  }

  handleDragOver = e => {
    e.preventDefault();
  };

  handleDragEnter = e => {
    e.preventDefault();
    this.setState(prevState => {
      return {
        styles: {
          ...prevState.styles,
          border: '1px dashed #a1a1a1',
          background: '#98FB98'
        }
      }
    });
  }

  resetDrag = () => {
    this.setState({
      styles: {
        display: 'flex',
        width: '250px',
        minHeight: '300px',
        alignItems: 'center',
        flexFlow: 'column',
        border: '1px solid #a1a1a1',
        margin: '20px',
        padding: '5px',
        background: 'white',
        boxSizing: 'border-box'
      }
    });
  };

  onDragDrop = (e) => {
    this.resetDrag();
    this.props.onDrop(e);
  }

  render() {
    return (
      <div
        style={this.state.styles}
        onDragOver={this.handleDragOver}
        onDragEnter={this.handleDragEnter}
        onDragLeave={this.resetDrag}
        onDrop={this.onDragDrop}
      >
        {this.props.children}
      </div>
    )
  }
}

export default DropZone;
