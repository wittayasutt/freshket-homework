import styled from 'styled-components';
import Thumbnail from './thumbnail';
import Tags from './tags';

const Wrapper = styled.div`
	height: 100%;
	padding: 1rem;

	background-color: ${(props) => props.theme.colors.white};
	border-radius: 8px;
	box-shadow: 0 4px 8px 6px rgba(0, 0, 0, 0.1);

	overflow: hidden;
	cursor: pointer;
	transition: box-shadow 0.2s;

	&:hover {
		box-shadow: 0 4px 8px 6px rgba(0, 0, 0, 0.2);
	}
`;

const Content = styled.div``;

const Description = styled.p`
	text-align: center;
`;

const Card = () => {
	return (
		<Wrapper>
			<Content>
				<Thumbnail src='https://picsum.photos/id/11/1000' label='Test' />
				<Description>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi quo aspernatur culpa veniam
					molestiae ea unde id! Sequi libero accusantium tenetur asperiores nulla. Distinctio dolorum neque
					asperiores? Illo, laboriosam officiis.
				</Description>
			</Content>
			<Tags />
		</Wrapper>
	);
};

export default Card;
