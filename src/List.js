import React from 'react';

class List extends React.Component {

  render () {
    var items = this.props.toDoList.map(function (item, i) {
      return (
        <h1 key={i}>
        {item}
        </h1>
      )
    })
    return (
      <div>
        {items}
      </div>
    )
  }
}

export default List;
