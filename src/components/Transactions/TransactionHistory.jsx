import PropTypes from 'prop-types';
import {
  Table,
  Head,
  HeadRow,
  RowTitle,
  Body,
  BodyRow,
  BodyItem,
} from './TransactionHistoryStyles';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Head>
        <HeadRow>
          <RowTitle>Type</RowTitle>
          <RowTitle>Amount</RowTitle>
          <RowTitle>Currency</RowTitle>
        </HeadRow>
      </Head>

      <Body>
        {items.map(({ id, type, amount, currency }) => (
          <BodyRow key={id}>
            <BodyItem>{type}</BodyItem>
            <BodyItem>{amount}</BodyItem>
            <BodyItem>{currency}</BodyItem>
          </BodyRow>
        ))}
      </Body>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
