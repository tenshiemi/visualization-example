import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { addUrlProps, UrlQueryParamTypes } from 'react-url-query';
import LinearProgress from 'material-ui/LinearProgress';
import Chart from './Chart';
import Controls from './Controls';
import pigData from '../wild-pig-data.json';
import { cyan500 } from 'material-ui/styles/colors';
import './PigChart.css';

const urlPropsQueryConfig = {
  paused: { type: UrlQueryParamTypes.string },
  year: { type: UrlQueryParamTypes.number },
};

class ChartContainer extends Component {
  static propTypes = {
    paused: PropTypes.string,
    year: PropTypes.number,
    onChangePaused: PropTypes.func,
    onChangeYear: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      completed: 0,
      displayYear: 0,
      isPlaying: false,
      normalizedData: {},
      xLabels: [],
      years: [2000, 2001, 2002, 2003, 2004, 2005],
    };
  }

  componentWillMount() {
    const normalizedData = {};

    pigData['PIG POPULATIONS'].forEach(data => {
      if (normalizedData[data.year]) {
        normalizedData[data.year].push({
          name: data.island,
          value: data.pigPopulation,
        });
      } else {
        normalizedData[data.year] = [
          { name: data.island, value: data.pigPopulation },
        ];
      }
    });

    const displayYear = this.state.years.includes(this.props.year)
      ? this.state.years.indexOf(this.props.year)
      : 0;

    this.setState(
      {
        completed: displayYear === 0 ? 0 : displayYear / 5 * 100,
        displayYear: displayYear,
        normalizedData: normalizedData,
      },
      () => {
        if (this.props.paused === 'false') {
          this.startAnimation();
        }
      },
    );
  }

  advanceYear = () => {
    const newDisplayYear =
      this.state.displayYear < 5 ? this.state.displayYear + 1 : 0;

    this.setState({
      completed: newDisplayYear === 0 ? 0 : newDisplayYear / 5 * 100,
      displayYear: newDisplayYear,
    });
    this.props.onChangeYear(this.state.years[newDisplayYear]);
  };

  startAnimation = () => {
    this.setState({ isPlaying: true }, () => {
      this.timerId = setInterval(this.advanceYear, 2000);
      this.props.onChangePaused('false');
    });
  };

  stopAnimation = () => {
    this.setState({ isPlaying: false }, () => {
      clearInterval(this.timerId);
      this.props.onChangePaused('true');
    });
  };

  render() {
    return (
      <div>
        <h2 style={{ color: cyan500 }}>
          {this.state.years[this.state.displayYear]}
        </h2>
        <Chart
          displayYear={this.state.displayYear}
          normalizedData={this.state.normalizedData}
          yearsRange={this.state.years}
        />
        <div className="ToolsWrapper">
          <Controls
            isPlaying={this.state.isPlaying}
            startAnimation={this.startAnimation}
            stopAnimation={this.stopAnimation}
          />
          <LinearProgress
            mode="determinate"
            style={{ left: '50px', top: '10px', width: '80%' }}
            value={this.state.completed}
          />
        </div>
      </div>
    );
  }
}

export default addUrlProps({ urlPropsQueryConfig })(ChartContainer);
