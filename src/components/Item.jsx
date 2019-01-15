import React, { Component } from 'react';
import trash from '../images/trash.png';

class Item extends Component {
  render() {
    const style = {
      width: '200px',
      padding: '10px',
      marginBottom: '5px',
      background: 'white',
      border: '1px solid #a1a1a1',
    };

    const { item, showCount, onDragStart, draggable, canDelete, deleteItem } = this.props;

    return (
      <div
        style={style}
        draggable={draggable}
        onDragStart={onDragStart}
      >
        <span>{item.name}</span>
        {showCount && (
          <span
            style={{
              marginLeft: '20px',
              padding: '2px 15px',
              border: '1px solid #ccc'
            }}
          >{item.count}</span>
        )}
        {canDelete && (
          <button
            onClick={() => deleteItem(item.id)}
            style={{
              background: '#fff',
              border: 'none',
              width: '30px',
              marginLeft: '20px',
              cursor: 'pointer'
            }}
          ><img style={{ width: '100%' }} src={trash} alt="delete"/></button>
        )}
      </div>
    );
  }
}

export default Item;
