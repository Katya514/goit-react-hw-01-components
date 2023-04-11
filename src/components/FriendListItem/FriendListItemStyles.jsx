import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  width: 240px;
  height: 65px;

  background-color: white;

  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 4px, rgba(0, 0, 0, 0.24) 0px 2px 4px;
`;

export const Online = styled.span`
display block;
  width: 15px;
  height: 15px;
  background-color: #54b154;
  border-radius: 50%;
  margin-left:10px;
`;

export const Offline = styled.span`
display block;
  width: 15px;
  height: 15px;
  background-color: #dd4040;
  border-radius: 50%;
  margin-left:10px;
`;

export const Image = styled.img``;

export const Name = styled.p`
  font-size: 19px;
  font-weight: 500;
`;
