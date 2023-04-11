import styled from '@emotion/styled';

export const ProfileCard = styled.div`
text-align: center;
padding-top: 20px;
width: 350px;
border-radius: 4px;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

export const Description = styled.div``;

export const Image = styled.img`
  width: 50%;
  border-radius: 50%;
`;
export const Name = styled.p`
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 700;
`;
export const Tag = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
  font-weight: 500;
  color: gray;
`;
export const Location = styled.p`
  margin-top: 0;
  margin-bottom: 30px;
  font-weight: 500;
  color: gray;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  margin: 0;
  padding: 0;
  height: 100px;
  list-style: none;
  background-color: #ecebeb
  ;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 33.33%;
  border-top: 1px solid #c3c8a4;
  border-right: 1px solid #c3c8a4;
`;
export const Label = styled.span`
  font-weight: 500;
  color: grey;
  margin-bottom:5px;
`;
export const Quantity = styled.span`
  font-weight: 700;
  font-size: 18px;
`;
