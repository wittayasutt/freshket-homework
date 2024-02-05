import styled from 'styled-components';
import Card from './card';

const Wrapper = styled.div`
	padding: 1rem;

	@media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: 1rem;
	}

	@media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
		padding: 0;
	}
`;

const CardWrapper = styled.div`
	margin-bottom: 1rem;

	@media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
		grid-column: span 4;
		margin-bottom: 0;
	}

	@media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
		grid-column: span 3;
	}
`;

const Cards = () => {
	return (
		<Wrapper>
			<CardWrapper>
				<Card />
			</CardWrapper>
			<CardWrapper>
				<Card />
			</CardWrapper>
			<CardWrapper>
				<Card />
			</CardWrapper>
			<CardWrapper>
				<Card />
			</CardWrapper>
			<CardWrapper>
				<Card />
			</CardWrapper>
		</Wrapper>
	);
};

export default Cards;
