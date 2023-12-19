import React from 'react';
import PropTypes from 'prop-types';  

const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
        <li key={id} className="item">
  <span className={isOnline ? 'Status online' : 'Status offline'}></span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
</li>
    )
}

FriendListItem.propTypes = {
       id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
  };

export default FriendListItem;