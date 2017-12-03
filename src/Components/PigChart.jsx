import React, { Component } from 'react';
import { Animate, Bars, Chart, Layer, Ticks } from 'rumble-charts';
import pigData from '../wild-pig-data.json';

class PigChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayYear: 2000,
      displayData: [],
    };
  }

  componentWillMount() {
    const displayData = pigData['PIG POPULATIONS']
      .filter(populationData => {
        return populationData.year === 2000;
      })
      .map(data => {
        return { name: data.island, data: [data.pigPopulation] };
      });

    this.setState({ displayData: displayData });
  }

  render() {
    return (
      <div>
        <Chart
          height={600}
          maxY={20000}
          minY={0}
          series={this.state.displayData}
          width={600}
        >
          <Layer width="80%" height="90%" position="top center">
            <Animate ease='bounce' _ease='elastic'>
              <Ticks
                axis="y"
                labelAttributes={{ x: -5 }}
                labelStyle={{
                  dominantBaseline: 'middle',
                  fill: 'lightgray',
                  textAnchor: 'end',
                }}
                lineLength="100%"
                lineStyle={{ stroke: 'lightgray' }}
                lineVisible={true}
              />
              <Ticks
                axis="x"
                label={({ index, props }) => props.series[index].name}
                labelAttributes={{ y: 3 }}
                labelStyle={{
                  alignmentBaseline: 'before-edge',
                  fill: 'lightgray',
                  textAnchor: 'middle',
                }}
              />
              <Bars innerPadding={5} />
            </Animate>
          </Layer>
        </Chart>
      </div>
    );
  }
}

export default PigChart;
