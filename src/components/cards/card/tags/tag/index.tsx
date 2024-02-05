import styled from 'styled-components';
import { Tag } from '@/types/place';

type TagProps = {
	tag: Tag;
};

const Wrapper = styled.div`
	background-color: ${(props) => props.theme.colors.green};
	color: ${(props) => props.theme.colors.white};
	padding: 0.25rem 0.5rem;

	border-radius: 16px;
`;

const TagComponent = ({ tag }: TagProps) => {
	return <Wrapper>{tag}</Wrapper>;
};

export default TagComponent;
