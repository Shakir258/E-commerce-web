import React from 'react';
import styled from 'styled-components';

function Home(props) {
    return <Wrapper className="test">Home</Wrapper>;
};

const Wrapper = styled.section`
    background-color: ${(props) => props.theme.colors.bg};
    color: ${(props) => props.theme.colors.text};
    width: 20rem;
    height: 20rem;
`;

export default Home;
