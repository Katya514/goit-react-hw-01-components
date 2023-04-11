import PropTypes from 'prop-types';
import {
  Item,
  Online,
  Offline,
  Image,
  Name,
} from '../FriendListItem/FriendListItemStyles';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      {isOnline ? <Online /> : <Offline />}
      <Image src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};
