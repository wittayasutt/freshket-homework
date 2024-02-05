import styled from 'styled-components';

const Wrapper = styled.div`
	background-color: ${(props) => props.theme.colors.green};
	color: ${(props) => props.theme.colors.white};
	padding: 0.25rem 0.5rem;

	border-radius: 16px;
`;

const Tag = () => {
	return <Wrapper>Tag</Wrapper>;
};

export default Tag;
