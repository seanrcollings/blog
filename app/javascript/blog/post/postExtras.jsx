import React, {useState, useEffect} from 'react'

import Thread from './thread';
import OtherPosts from './otherPosts';

export default function PostExtras(props) {
  const [extra, setExtra] = useState('posts')

  // Renderers
  const renderContent = () => {
    let content;
    switch (extra) {
      case 'thread':
        content = <Thread id={props.id}/>
        break;
      case 'posts':
        content = <OtherPosts/>
        break; 
      default:
        content = 'default'
        break;
    }

    return content
  }

  return (
    <div className='post-extras'>
      <div className='post-extras-header'>
        <div className='post-extras-header-item' onClick={() => setExtra('posts')}>Other Posts</div>
        <div className='post-extras-header-item' onClick={() => setExtra('thread')}>Comments</div>
      </div>
      <div className='post-extras-content'>
        {renderContent()}
      </div>
    </div>
  )
}
