var React = require('react');

// Griddle - React grid component / installed via npm
var Griddle = require('griddle-react');

// Row component for Griddle
var TableRow = require('./TableRow.js');

// Paging component for Griddle
var Paging = require('./Paging.js');

// External Input Data from server
var VEHICLESJSON = require('../json/vehicles.json');

// App - main component for Garage application
var App = React.createClass({

  getInitialState: function() {

    return {
      vehicles: VEHICLESJSON,
      level: 0,
      type: 0
    };
  },

  // Menu - onClick event processing
  onClickMenu: function (event) {

    var selectedLevel = this.state.level;
    var selectedType = this.state.type;

    var onClickElement = event.target;

    // Click on Level menu section
    if (onClickElement.id.slice(0,5) == 'level') {

      document.querySelector('.li-menu-level-selected').className = "li-menu-level";

      onClickElement.className = "li-menu-level-selected";

      selectedLevel = +onClickElement.id.slice(5);
    }

    // Click on Type menu section
    if (onClickElement.id.slice(0,4) == 'type') {

      document.querySelector('.li-menu-type-selected').className = "li-menu-type";
      
      onClickElement.className = "li-menu-type-selected";

      selectedType = +onClickElement.id.slice(4);
    }

    // Set component states from menu selections
    this.setState({
      level: selectedLevel,
      type: selectedType
    });
 },

  render: function() {

    // Result array creation from input data 
    var vehiclesList  = this.state.vehicles.filter(function (vehicle) {

      var levelOk = true;
      var typeOk = true;

      if (this.state.level) {
        levelOk = (vehicle.level == this.state.level)? true : false;
      }

      if (this.state.type) {
        typeOk = ( (( vehicle.type == "car"       ) && ( this.state.type == 1)) ||
                   (( vehicle.type == "motorbike" ) && ( this.state.type == 2)) )? true : false;
      }

      return (levelOk && typeOk);

    }.bind(this));

    // Total amount of vehicles
    window.total = vehiclesList.length;

    return (
      <div id="layout">

        <div className="header-bg"></div>
        <div className="apptitle"><i className="fa fa-bars enabled"></i>Vehicles</div>
        <div id="sidebar" onClick={this.onClickMenu}>
          <h3 className="h3-menu">LEVELS</h3>
          <ul className="ul-menu">
            <li id="level 0" className="li-menu-level-selected">All</li>
            <li id="level 1" className="li-menu-level">Level 1</li>
            <li id="level 2" className="li-menu-level">Level 2</li>
            <li id="level 3" className="li-menu-level">Level 3</li>
            <li id="level 4" className="li-menu-level">Level 4</li>
          </ul>
          <h3 className="h3-menu">TYPE</h3>
          <ul className="ul-menu">
            <li id="type 0" className="li-menu-type-selected">All</li>
            <li id="type 1" className="li-menu-type">Car</li>
            <li id="type 2" className="li-menu-type">Motorbike</li>
          </ul>
        </div>
        <div id="content">
          <div>
            <span className="total-slash">/</span>
            <span className="total">{window.total}</span>
            <span className="total-vehicles">VEHICLES</span>
          </div>
          <div>
            <Griddle 
              results={vehiclesList} 
              tableClassName="table" 
              showFilter={true}
              showSettings={false}
              useGriddleStyles={false}
              resultsPerPage="10"
              initialSort="level"
              filterPlaceholderText="Filter Vehicles"
              useCustomRowComponent="true"
              customRowComponent={TableRow}
              useCustomPagerComponent="true"
              customPagerComponent={Paging}
            />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = App;