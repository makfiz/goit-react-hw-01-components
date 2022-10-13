import PropTypes from 'prop-types'
import { Box } from "components/utils/Box";
import {Item} from 'components/FriendList/FriendList.styled'
import {FriendListItem} from 'components/FriendList/FriendListItem'

export const FriendList = ({friends}) => {
    return <Box
        width='310px'
        ml="auto"
        mr="auto"
        mb={6}
        bg="white"
        borderRadius="normal"
        as="ul">
        {friends.map(friend =>
            <Item key={friend.id}>
                <FriendListItem  isOnline={friend.isOnline} avatar={friend.avatar} name={friend.name} />
            </Item>)}
    </Box>
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
