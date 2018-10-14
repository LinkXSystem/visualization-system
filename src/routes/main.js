import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './main.module.scss';

import { Chart, Tooltip, Axis, Line, Area, Guide } from 'viser-react';
import DataSet from '@antv/data-set';

import { getTemplateTestJson } from '../api/data-mock';

const scale = [
  {
    dataKey: 'time',
    range: [0, 1],
  },
];

const guides = [
  {
    type: 'dataMarker',
    position: ['2014-01-03', 6.763],
    content: '受稳健货币政策影响，协定存款利\n率居高不下,收益率达6.763%',
    style: {
      text: {
        textAlign: 'left',
      },
    },
  },
  {
    type: 'dataMarker',
    position: ['2013-05-31', 2.093],
    content: '余额宝刚成立时，并未达到目标资产\n配置，故收益率较低',
    style: {
      text: {
        textAlign: 'left',
      },
    },
  },
  {
    type: 'dataMarker',
    position: ['2016-09-04', 2.321],
    content: '受积极货币政策的影响，收益率降\n到历史最低2.321%',
    style: {
      text: {
        textAlign: 'left',
      },
    },
  },
  {
    type: 'dataRegion',
    start: ['2016-12-02', 2.517],
    end: ['2017-03-24', 3.83],
    content: '宏观经济过热，受稳健货币政策影\n响，余额宝收益率随之上升',
    lineLength: 50,
  },
];

export default class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const { data } = await getTemplateTestJson();

    this.setState({
      data,
    });
  }

  render() {
    const { data } = this.state;

    return (
      <section className={styles.container}>
        <Chart forceFit height={440} data={data} scale={scale} padding={[50]}>
          <Tooltip />
          <Axis />
          <Line position="time*rate" />
          {guides.map((opts, i) => {
            return <Guide key={i} {...opts} />;
          })}
        </Chart>
      </section>
    );
  }
}

Template.propTypes = {};
