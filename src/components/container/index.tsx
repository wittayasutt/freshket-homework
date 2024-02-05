import styled from 'styled-components';
import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

const Wrapper = styled.div``;

const Container = ({ children }: Props) => {
	return <Wrapper>{children}</Wrapper>;
};

export default Container;
