import styled from 'styled-components'
export const FriendStatus = styled.span`
    display: flex;
  justify-content: center;
  flex-direction: column;
  
`;

export const FriendAvatar = styled.img`
    margin-left:10px;
`;

export const FriendName = styled.p`
        display: flex;
  justify-content: center;
  flex-direction: column;
  font-size:${p => p.theme.fontSizes.l};
  font-weight:${p => p.theme.fontWeight.bold};
  color:${p => p.theme.colors.black};
  margin-left:10px;
`;