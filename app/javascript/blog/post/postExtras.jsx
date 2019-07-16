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
        content = <Thread postId={props.postId}/>
        break;
      case 'posts':
        content = <OtherPosts authorId={props.authorId}/>
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
        <div className={`post-extras-header-item ${extra === 'posts'  ? 'post-extras-header-item-selected' : ''}`} onClick={() => setExtra('posts')}>Other Posts</div>
        <div className={`post-extras-header-item ${extra === 'thread' ? 'post-extras-header-item-selected' : ''}`} onClick={() => setExtra('thread')}>Comments</div>
      </div>
      <div className='post-extras-content'>
        {renderContent()}
      </div>
    </div>
  )
}
