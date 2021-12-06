import React from 'react'
import PropTypes from 'prop-types'

import '../styles/tag.css'

/**
 * component for showing the users's value on tag
 * @component
 * 
 * @return {component}
 */
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
    /**
     * define type of value on tag
     */
    valueOfTag: PropTypes.number,
    /**
     * define unit for tag
     */
    unitOfTag: PropTypes.string,
    /**
     * define format text for tag
     */
    textOfTag: PropTypes.string,
    /**
     * define format icon for tag
     */
    iconTag: PropTypes.string
}

