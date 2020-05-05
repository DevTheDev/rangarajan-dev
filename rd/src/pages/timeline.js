import React, { useState, useEffect } from 'react';
import rd3 from 'react-d3-library';
import node from 'timeknots.js';

const RD3Component = rd3.Component;

// export default function DynamicTimeline() {
//     const [state, setState] = useState({d3: ''})
//     useEffect(() => {
//         setState({d3: node})
//     })
//     const myLife = [
//         { name: 'Born', date: '2000-01-01' },
//         { name: 'Learned to Read', date: '2003-01-01' },
//         { name: 'Started Highschool', date: '2014-08-01' },
//         { name: 'Graduated Highschool', date: '2018-05-01' },
//         { name: 'Started at RPI', date: '2018-09-01' },
//         { name: 'Graduated RPI', date: '2021-05-01' },
//         { name: 'Moved to Chicago', date: '2021-08-01' },
//         { name: 'Quit my job', date: '2023-01-01' },
//         { name: 'Got married', date: '2027-01-01' },
//         { name: 'First Kid!', date: '2032-01-01' },
//         { name: 'Sold my company', date: '2035-01-01' },
//         { name: 'Present Day', date: '2040-01-01' },
//       ];
  
//       return (
//           node.TimeKnots.draw('#timeline2', myLife, {
//             color: '#669',
//             height: 200,
//             width: 900,
//             showLabels: false,
//             dateFormat: '%Y',
//           })
//     )
// }

export default class DynamicTimeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = { d3: '' };
  }

  componentDidMount() {
    this.setState({ d3: node });
  }

  render() {
    const myLife = [
      { name: 'Born', date: '2000-01-01' },
      { name: 'Learned to Read', date: '2003-01-01' },
      { name: 'Started Highschool', date: '2014-08-01' },
      { name: 'Graduated Highschool', date: '2018-05-01' },
      { name: 'Started at RPI', date: '2018-09-01' },
      { name: 'Graduated RPI', date: '2021-05-01' },
      { name: 'Moved to Chicago', date: '2021-08-01' },
      { name: 'Quit my job', date: '2023-01-01' },
      { name: 'Got married', date: '2027-01-01' },
      { name: 'First Kid!', date: '2032-01-01' },
      { name: 'Sold my company', date: '2035-01-01' },
      { name: 'Present Day', date: '2040-01-01' },
    ];

    node.TimeKnots.draw('#timeline2', myLife, {
      color: '#669',
      height: 200,
      width: 900,
      showLabels: false,
      dateFormat: '%Y',
    });
    return <div id="timeline2" style="width:900px;height: 200px;"></div>;
  }
}
