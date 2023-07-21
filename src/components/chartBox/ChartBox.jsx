import { Link } from 'react-router-dom';
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';
import PropTypes from 'prop-types';

import './ChartBox.scss';

function ChartBox(props) {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/" style={{ color: props.color }}>
          View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: 'transparent', border: 'none' }}
                labelStyle={{ display: 'none' }}
                position={{ x: 10, y: 60 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{ color: props.percentage < 0 ? 'tomato' : 'limegreen' }}
          >
            {props.percentage}%
          </span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
}

ChartBox.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  dataKey: PropTypes.string,
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  percentage: PropTypes.number,
  chartData: PropTypes.arrayOf(PropTypes.object),
};

export default ChartBox;
