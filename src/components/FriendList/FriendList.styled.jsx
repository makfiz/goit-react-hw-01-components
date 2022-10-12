import styled from 'styled-components'

export const FriendItem = styled.li`
    display:flex;
    padding-left: 10px;
    margin: 10px 0px;
    border:${p => p.theme.borders.profile};
    box-shadow:${p => p.theme.shadows.boxShadow};
`;

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