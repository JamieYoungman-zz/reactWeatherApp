import React from 'react';
import styled from 'styled-components';

import Weather from './components/Weather';

const Container = styled.div`
	margin: 0 auto;
	width: 96%;
	max-width: 1200px;
`;

const App = () => {
	return (
		<Container>
			<Weather test="test" />
		</Container>
	);
};

export default App;
