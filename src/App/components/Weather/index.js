import React from 'react';

class Weather extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { test } = this.props;
		return (
			<React.Fragment>
				<p>{test}</p>
				<p>test</p>
			</React.Fragment>
		);
	}
}

export default Weather;
