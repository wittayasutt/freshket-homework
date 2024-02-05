import styled from 'styled-components';
import Tag from './tag';

const Wrapper = styled.div`
	display: flex;
	flex-flow: row wrap;
	margin-top: 1rem;
`;

const TagWrapper = styled.div`
	margin: 0.25rem 0.25rem 0 0;
`;

const Tags = () => {
	return (
		<Wrapper>
			<TagWrapper>
				<Tag />
			</TagWrapper>
			<TagWrapper>
				<Tag />
			</TagWrapper>
			<TagWrapper>
				<Tag />
			</TagWrapper>
			<TagWrapper>
				<Tag />
			</TagWrapper>
			<TagWrapper>
				<Tag />
			</TagWrapper>
			<TagWrapper>
				<Tag />
			</TagWrapper>
			<TagWrapper>
				<Tag />
			</TagWrapper>
			<TagWrapper>
				<Tag />
			</TagWrapper>
		</Wrapper>
	);
};

export default Tags;
