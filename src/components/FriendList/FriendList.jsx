import React from 'react';
import PropTypes from 'prop-types'; 
import FriendListItem from './FriendListItem';


const FriendList = ({ friends }) => {
    return (
    <ul className="friend-list">
            {friends.map((friend) => (
                <FriendListItem key={friend.id} {...friend} />
            ))}
           </ul>
    )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
export default FriendList;