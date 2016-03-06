import React from 'react';
import moment from 'moment';
import {} from 'react-daterange-picker';
import DateRangePicker from 'react-daterange-picker';
import RangePicker from 'react-daterange-picker';
import SweetAlert from 'sweetalert';
import {} from 'moment-range';

const stateDefinitions = {
  available: {
    color: null,
    label: 'Available',
  },
  enquire: {
    color: '#ffd200',
    label: 'Enquire',
  },
  unavailable: {
    selectable: false,
    color: '#78818b',
    label: 'Unavailable',
  },
};
const dateRanges = [
  {
    state: 'enquire',
    range: moment.range(
      moment().add(2, 'weeks').subtract(5, 'days'),
      moment().add(2, 'weeks').add(6, 'days')
    ),
  },
  {
    state: 'unavailable',
    range: moment.range(
      moment().add(3, 'weeks'),
      moment().add(3, 'weeks').add(5, 'days')
    ),
  },
];

const DatePicker = React.createClass({
  getInitialState() {
    return {
      value: null,
    };
  },

  handleSelect(range, states) {
    // range is a moment-range object
    this.setState({
      value: range,
      states: states,
    });
    var targetOfGreeting = "world";
  },
  handleClick() {
    if (this.state.value == null) {
      alert("You need to select a range first");
    }
  },

  render() {
    return (
      <div>
        <DateRangePicker
          firstOfWeek={1}
          numberOfCalendars={2}
          selectionType='range'
          minimumDate={new Date()}
          onSelect={this.handleSelect}
          stateDefinitions={stateDefinitions}
          dateStates={dateRanges}
          defaultState="available"
          showLegend={true}
          value={this.state.value}/>
        <div>
            <button
            className="btn btn-danger col-md-2"
            onClick={this.handleClick}
            ><i className="glyphicon glyphicon-plus" /> Add</button>
        </div>
        <div className="col-md-12">
        <br /><br />
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Start Date</th>
                  <th>End Date</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td>{this.state.value ? this.state.value.start.format('LL') : null}</td>
                <td>{this.state.value ? this.state.value.end.format('LL') : null}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  },
});
export default DatePicker;
