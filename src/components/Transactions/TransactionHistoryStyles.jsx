import styled from '@emotion/styled';

export const Table = styled.table`
  margin-top: 20px;

  width: 600px;
  background-color: white;
  border-collapse: collapse;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 4px, rgba(0, 0, 0, 0.24) 0px 2px 4px;
`;

export const Head = styled.thead`
  background-color: #45c1e8;
`;

export const HeadRow = styled.tr``;

export const RowTitle = styled.th`
  padding: 12px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
  font-size: 10px;

  width: 150px;
  border-left: 1px solid white;
  :first-of-type {
    border-top-left-radius: 2px;
    border-left: none;
  }
  :last-of-type {
    border-top-right-radius: 2px;
  }
`;

export const Body = styled.tbody``;

export const BodyRow = styled.tr`
  :nth-of-type(2n) {
    background-color: #e8e8e8;
  }
  :last-of-type {
    td {
      border-bottom: none;
    }
    td:first-of-type {
      border-bottom-left-radius: 2px;
    }
    td:last-of-type {
      border-bottom-right-radius: 2px;
    }
  }
`;

export const BodyItem = styled.td`
  text-align: center;

  padding: 10px;
  color: grey;
  font-size: 12px;
  border: 1px solid #a3a0a0;
  :first-of-type {
    text-transform: capitalize;
    border-left: none;
  }
  :last-of-type {
    border-right: none;
  }
`;
