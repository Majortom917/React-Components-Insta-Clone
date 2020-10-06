import React from 'react';
import './Posts.css';
import Post from './Post'

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;
const [post, setPost] = useState('')
  return (
    <div className='posts-container-wrapper'>
      setPost(post.map(posts => {

      }))
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
