import React from 'react';

import './SearchResults.css';

import TrackList from '../TrackList/TrackList';


class SearchResult extends React.Component {
    render() {
        console.log('a', this.props.searchResults)
        return (
            <div className="SearchResults">
            <h2>Results</h2>
            <TrackList tracks={this.props.searchResults} 
                        onAdd={this.props.onAdd}
                        isRemoval={false}/>
            </div>
        )
    }
}

export default SearchResult;
