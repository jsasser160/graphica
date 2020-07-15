import React from 'react';
import styled from 'styled-components';
import Feed from '../home/Feed';
import CollectionDescription from './CollectionDescription';


const Collection = () => (
  <Wrapper>
    <CollectionDescription />
    <FeedDiv>
      <Feed />
    </FeedDiv>
  </Wrapper>
)
// styled components


const Wrapper = styled.div`
`
const FeedDiv = styled.div`
padding-top: 5%
  
`

export default Collection;