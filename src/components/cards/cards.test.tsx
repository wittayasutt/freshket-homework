import '@testing-library/jest-dom';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import theme from '@/styles/theme';

import Cards from '@/components/cards';

const wrapper = ({ children }: { children: ReactNode }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

describe('cards', () => {
	it('should not find any cards', () => {
		render(<Cards places={[]} />, { wrapper });
		expect(screen.queryByTestId('card')).not.toBeInTheDocument();
	});

	it('should render Cards component with correct number of cards', () => {
		const mockData = [
			{
				id: 1,
				tags: [1, 2, 3],
				name: 'Saint Mopierre',
				body: 'Saint Mopierre is a large city, known for being the birthplace of a music genre.',
				img_url: 'https://picsum.photos/id/11/1000',
			},
			{
				id: 2,
				tags: [1],
				name: 'Eulake',
				body: 'Eulake is a small town situated besides a lake. It is known for its mining heritage.',
				img_url: 'https://picsum.photos/id/11/1000',
			},
		];

		render(<Cards places={mockData} />, { wrapper });
		expect(screen.getAllByTestId('card')).toHaveLength(mockData.length);
	});
});
