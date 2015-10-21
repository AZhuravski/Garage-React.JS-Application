var React = require('react');

// TableRow - react component - grid row for external Griddle component
// shows vehivle id, type, level and slot number
var TableRow = React.createClass({

  getDefaultProps: function(){
    return { "data": {} };
  },

  render: function() {

    return (
      <div className="row-card">
        <div>
          <div className="row-id">{this.props.data.id}</div>
          <div className="row-level">Level {this.props.data.level}</div>
        </div>
        <div>
          <div className="row-type">{this.props.data.type}</div>
          <div className="row-slot">Slot: {this.props.data.slot}</div>
        </div>
      </div>
    );
  }
});

module.exports = TableRow;