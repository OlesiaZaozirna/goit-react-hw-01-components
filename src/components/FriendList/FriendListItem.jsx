import React from 'react';
import PropTypes from 'prop-types';  
import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
        <li key={id} className={css.item}>
  <span className={isOnline ? css.status_online : css.status_offline}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
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