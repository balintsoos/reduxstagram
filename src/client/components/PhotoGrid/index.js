import React from 'react'
import Photo from '../Photo'

const PhotoGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => {
          return (
            <Photo {...this.props} key={i} index={i} post={post} />
          )
        })}
      </div>
    )
  }
})

export default PhotoGrid
