import React, {Component} from 'react';
import unsplash from '../apis/unsplash'
import SearchBar from './search-bar'
import ImageList from './image-list'

class App extends Component {

    state = {
        images: []
    }

    onSubmit = async (term) => {
        const response = await unsplash.get('/photos', {params: {query: term}})
        this.setState({images: response.data.results})
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;