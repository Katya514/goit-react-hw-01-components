import PropTypes from 'prop-types';
import {
  StatSection,
  Title,
  StatList,
  StatListItem,
  Label,
  Percentage,
} from './StatisticsStyles';

export const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({id, label, percentage})=> {
            return (
            <StatListItem key={id} style={{backgroundColor: getRandomColor()}}>
          <Label>{label}</Label>
          <Percentage>{percentage}%</Percentage>
        </StatListItem>);
            })}
      </StatList>
    </StatSection>
  );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          percentage: PropTypes.number.isRequired,
        })
    ),
};

function getRandomColor() {
    let letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
  }