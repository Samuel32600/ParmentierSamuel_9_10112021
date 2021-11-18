import React from 'react'
import PropTypes from 'prop-types'

import '../styles/tag.css'

class Tag extends React.Component {
    render() {
        return (
            <div className="container-tag" >
                <img src={this.props.iconTag} className='icon-tag' alt='icone du tag' />
                <div className='container-result-Tag'>
                    <p className='value-tag'>
                        {this.props.valueOfTag}{this.props.unitOfTag}
                    </p>
                    <span className='text-tag'>
                        {this.props.textOfTag}
                    </span>
                </div>

            </div>
        )
    }
}

export default Tag

Tag.propTypes={
    valueOfTag: PropTypes.number,
    unitOfTag: PropTypes.string,
    textOfTag:PropTypes.string,
}

