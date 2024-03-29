import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text}
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://cdn.iconscout.com/icon/free/png-256/free-batman-dc-superhero-hero-justice-league-earth-saver-28695.png" />
      <Details>
        <Name>
          Max well <Date>1 day ago</Date>
        </Name>
        <Text>
        "Endure, Master Wayne. Take it. They’ll hate you for it, but that’s the point of Batman, he can be the outcast. He can make the choice that no one else can make, the right choice." - Alfred Pennyworth, The Dark Knight 

. “Your anger gives you great power. But if you let it, it will destroy you… As it almost did me.” - Henri Ducard, Batman Begins
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
