import React from 'react';
import styled from 'styled-components';

const DataWrapper = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;
`;
DataWrapper.displayName = 'DataWrapper';

const DataRow = styled.div`
	width: 100%;
`;
DataRow.displayName = 'DataRow';

const Title = styled.h1`
	font-size: 36px;
	width: 100%;
	text-align: center;
`;

const WeatherFeature = styled.span`
	font-size: 36px;
	font-weight: bold;
`;

const key = "fc3ae63261dc9cc6c01a84d993569148";  // eslint-disable-line
const urlStr = "http://api.openweathermap.org/data/2.5";  // eslint-disable-line
const city = "Manchester";  // eslint-disable-line
const country = "GB";  // eslint-disable-line

class Weather extends React.Component {
	constructor(props) {
		super();
		this.state = {
			data: null,
			loadedData: false
		};
	}
	componentDidMount() {
		const url = `${urlStr}/weather?q=${city},${country}&APPID=${key}&units=metric`;
		console.log(url);
		fetch(url)
			.then(response => response.json())
			.then(json => {
				console.log(json);
				this.setState({ data: json, loaded: true });
			});
	}
	render() {
		const { data, loaded } = this.state;
		if (!loaded) {
			return null;
		}
		const {
			main: { temp }
		} = data;
		console.log(data.main.temp, 'ewcewcwecwec');

		return (
			<React.Fragment>
				<Title>Weather forecast</Title>
				<p>
					See the current Weather forecast in {city}, {country}
				</p>
				<WeatherFeature>{temp}&#8451;</WeatherFeature>
				<DataWrapper>
					{data.name}
					<DataRow>
						{/* <p>The current temperature is: {data.main.temp}</p> */}
					</DataRow>
				</DataWrapper>
			</React.Fragment>
		);
	}
}
export default Weather;
