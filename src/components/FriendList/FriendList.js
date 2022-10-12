import PropTypes from 'prop-types'
import { BsFillCircleFill } from 'react-icons/bs';
import { Box } from "components/utils/Box";
import {FriendItem, FriendStatus, FriendAvatar, FriendName} from 'components/FriendList/FriendList.styled'

export const FriendList = ({friends}) => {
    return <Box
        width='310px'
        ml="auto"
        mr="auto"
        mb={6}
        bg="white"
        borderRadius="normal"
        as="ul">
        {friends.map(friend => <FriendItem key={friend.id}>
            <FriendStatus ><BsFillCircleFill style={{ color: friend.isOnline ? "green" : 'red'}}/></FriendStatus>
            <FriendAvatar  src={friend.avatar} alt="User avatar" width="48" />
            <FriendName >{ friend.name}</FriendName>
        </FriendItem>)}
    </Box>
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
