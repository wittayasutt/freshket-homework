import styled from 'styled-components';
import { ReactNode } from 'react';

type ContainerProps = {
	children: ReactNode;
};

const Wrapper = styled.div`
	min-height: 100vh;

	@media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
		max-width: ${(props) => props.theme.breakpoints.desktop};
		margin: auto;
	}
`;

const Container = ({ children }: ContainerProps) => {
	return <Wrapper>{children}</Wrapper>;
};

export default Container;
