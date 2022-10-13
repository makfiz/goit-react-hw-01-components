import PropTypes from 'prop-types'
import { BsFillCircleFill } from 'react-icons/bs';
import {FriendStatus, FriendAvatar, FriendName} from 'components/FriendList/FriendList.styled'


export const FriendListItem = ({ isOnline, avatar, name }) => {
    return  <> <FriendStatus ><BsFillCircleFill style={{ color: isOnline ? "green" : 'red'}}/></FriendStatus>
                <FriendAvatar  src={avatar} alt="User avatar" width="48" />
                <FriendName >{name}</FriendName>
            </>

}

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};