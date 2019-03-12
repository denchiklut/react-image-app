import React, {Component} from 'react';

class ImageItem extends Component {
    state = {spans: 0}
    imageRef = React.createRef()

    setSpans = () => {
        const height = this.imageRef.current.clientHeight
        const spans = Math.ceil(height / 10)

        this.setState({spans})
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    render() {
        const {image} = this.props
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`, textAlign: 'center' }}>
                <img
                    ref={ this.imageRef }
                    src={ image.urls.regular }
                    alt={ image.description  }
                />
            </div>
        );
    }
}

export default ImageItem;