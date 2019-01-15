import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DropZone from './components/DropZone';
import Item from './components/Item';

class App extends Component {
  state = {
    draggingElId: null,
    availableItems: [
      { id: 1, name: 'Item 1', count: 1 },
      { id: 2, name: 'Item 2', count: 1 },
      { id: 3, name: 'Item 3', count: 1 },
      { id: 4, name: 'Item 4', count: 1 },
      { id: 5, name: 'Item 5', count: 1 },
    ],
    movedItems: []
  }

  handleDragStart = (id) => {
    if (!id) return;
    this.setState({ draggingElId: id });
  }

  handleOnDrop = () => {
    if (!this.state.draggingElId) return;

    this.setState(prevState => {
      const foundItem = prevState.movedItems.find(item => item.id === prevState.draggingElId);

      if (foundItem) {
        const newMovedItems = prevState.movedItems;
        newMovedItems.find(item => item.id === prevState.draggingElId).count += 1;
        return {
          movedItems: newMovedItems
        }
      }

      return {
        movedItems: [
          ...prevState.movedItems,
          prevState.availableItems.find(item => item.id === prevState.draggingElId),
        ],
        draggingElId: null
      }
    })
  }

  handleDeleteItem = (id) => {
    this.setState(prevState => {
      prevState.movedItems.find(item => item.id === id).count = 1;
      return {
        movedItems: prevState.movedItems.filter(item => item.id !== id)
      }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>React Drag and Drop</h3>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="container">
          <div className="items-container">
            {
              this.state.availableItems.map(item => (
                <Item
                  draggable
                  key={item.id}
                  item={item}
                  onDragStart={() => this.handleDragStart(item.id)}
                />
              ))
            }
          </div>

          <DropZone
            onDrop={this.handleOnDrop}
          >
            {
              this.state.movedItems.length > 0 &&
              this.state.movedItems.map(item => (
                <Item
                  showCount
                  canDelete
                  draggable={false}
                  key={item.id}
                  item={item}
                  deleteItem={this.handleDeleteItem}
                />
              ))
            }
          </DropZone>
        </div>
      </div>
    );
  }
}

export default App;
