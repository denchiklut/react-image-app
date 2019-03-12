import React, {Component} from 'react';

class SearchBar extends Component {
    state = {
        term: '',
    }

    onSubmitForm = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (

            <div className="ui segment">
                <form onSubmit={this.onSubmitForm} className="ui form">
                    <div className="ui fluid action input">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={this.state.term}
                            onChange={(e) => this.setState({term: e.target.value})}
                        />
                        <button type="submit" className="ui button">Search</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;