import styled from 'styled-components'

const PageContainer = styled.div`  
    width:  ${props => props.width || "100%"};
    height: ${props => props.height || "100%"};
    padding: 50px;
    background-image: ${props => props.bgImg};
`;

export default PageContainer