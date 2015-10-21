var React = require('react');

// Paging - react component for previous-next buttons and pages gap
// used by external Griddle component
var Paging = React.createClass({

  getDefaultProps: function(){
    return{
      "maxPage": 0,
      "nextText": "",
      "previousText": "",
      "currentPage": 0,
    }
  },

  render: function() {

    var previous = "";
    var next = "";
    var classPrevious = "";
    var classNext = "";

    classPrevious = (this.props.currentPage > 0)? "enabled" : "disabled";

    classNext = (this.props.currentPage != (this.props.maxPage -1))? "enabled" : "disabled";

    previous = <span onClick={this.props.previous} className={classPrevious}><i className="fa fa-chevron-up fa-2x"></i></span>

    next =     <span onClick={this.props.next} className={classNext}><i className="fa fa-chevron-down fa-2x"></i></span>    

    var currentGapFrom = this.props.currentPage * 10 + 1;
    var currentGapTo   = (this.props.currentPage != (this.props.maxPage -1))? (this.props.currentPage * 10 + 10) : window.total;

    return (
      <div className="row-custom-pager">
        <div className="row-custom-pager-gap">

          <p>{currentGapFrom}</p><p>{currentGapTo}</p> 

        </div>
        <div className="row-custom-pager-nav">

          {previous}{next}

        </div>
      </div>
    );
  }
});

module.exports = Paging;