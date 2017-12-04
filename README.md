An example of a Bar Chart built in React with fictional data of pig populations in Hawaii.

## Setup

* Run `yarn install` to install required dependencies
* Run `yarn start` and view page at `http://localhost:3000/`

## Libraries

* [history](https://www.npmjs.com/package/history) Required for manipulating and updating page based on url

* [react-url-query](https://www.npmjs.com/package/react-url-query) Library that allows easy updating and reading of url query params

* [recharts](https://www.npmjs.com/package/recharts) React charting library built on top of D3

## Notes

* The chart is unable to display all the x-axis labels on smaller screens. Tapping or hovering brings up a tooltip which I decided was sufficient. I experimented with transforming the text but the nature of the chart made it difficult to position the vertical label properly.

