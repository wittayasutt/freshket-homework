import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import Container from './components/container';
import Cards from './components/cards';
import './styles/global.css';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Container>
				<Cards />
			</Container>
		</ThemeProvider>
	);
};

export default App;
