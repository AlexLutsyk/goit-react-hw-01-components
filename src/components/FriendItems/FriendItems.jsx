import PropTypes from 'prop-types';

import s from './FriendItems.module.css';

function FriendItems({ status, avatar, name, isOnline, id }) {
  return (
    <>
      <li className={s.item} key={id}>
        <span className={isOnline ? s.online : s.offline} />
        <img className={s.avatar} src={avatar} alt="avatar" width="48" />
        <p className={s.name}>{name}</p>
      </li>
    </>
  );
}

FriendItems.propTypes = {
  status: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};

export default FriendItems;
