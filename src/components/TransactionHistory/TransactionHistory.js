import PropTypes from 'prop-types'
import { Box } from "components/utils/Box";
import {TH,TR, Thead, Tabledata} from 'components/TransactionHistory/TransactionHistory.styled'

export const TransactionHistory = ({ items }) => {
    return <Box
        ml="auto"
        mr="auto"
        bg="white"
        borderRadius="normal"
        boxShadow="boxShadow"
        as="table"
        >
        <Thead>
            <TR>
            <TH>Type</TH>
            <TH>Amount</TH>
            <TH>Currency</TH>
            </TR>
        </Thead>

        <tbody>
            {items.map(item => (
            <TR key={item.id}>
            <Tabledata>{item.type}</Tabledata>
            <Tabledata>{item.amount}</Tabledata>
            <Tabledata>{item.currency}</Tabledata>
            </TR>
            ))}
        </tbody>
    </Box>
}


TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};


