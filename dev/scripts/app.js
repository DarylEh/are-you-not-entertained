import _ from 'lodash'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

	const API_KEY = 'AIzaSyCS8kD6lDWohsJrxiCMsjmiiu19a9S2Gzk';

	class App extends Component {
	constructor(props){
		super(props);

		this.state = {
		videos: [],
		selectedVideo: null
		};

		this.videoSearch('spider-man');
	}

	videoSearch(term) {
		YTSearch({
		key: API_KEY, term: term
		}, (videos) => {
		this.setState({
			videos: videos,
			selectedVideo: videos[0]
		});
	});
	}

	render() {
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)
		return (
		<div className = "wrapper">
			<SearchBar onSerchTermChange={videoSearch} />
			<div className="video-main">
			<VideoDetail vid={this.state.selectedVideo} />
			<div className="video-main-list inner-wrapper">
				<h1>Top 5 Results</h1>
				<VideoList
				onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
				videos={this.state.videos} />
			</div>
			
			</div>
		</div>
		);
	}
	}

	ReactDOM.render(<App />, document.getElementById('app'));
