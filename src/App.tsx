import styled, { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Container from './components/container';
import './styles/global.css';

const Title = styled.h1``;

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Container>
				<Title>title</Title>
			</Container>
		</ThemeProvider>
	);
};

export default App;
