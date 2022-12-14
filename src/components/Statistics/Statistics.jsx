import PropTypes from 'prop-types'

import {  Title, StatList, StatItem, Label, Percentage } from 'components/Statistics/Statistics.styled'
import { Box } from "components/utils/Box";
import { getRandomColor } from './RandomColor'


export const Statistics = ({ stats, title }) => {
  return <Box
      width="334px"
      ml="auto"
      mr="auto"
      mb={6}
      pt={4}
      bg="white"
      borderRadius="normal"
      boxShadow="shadow"
      as="section">
    
      {title && (<Title >Upload stats</Title>)}      

      <StatList>
          {stats.map(each => (
              <StatItem key={each.id} style={{backgroundColor:getRandomColor()}}>
              <Label >{each.label}</Label>
              <Percentage >{each.percentage}%</Percentage>
              </StatItem>
          ))}
      </StatList>
    
  </Box>
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};


