import { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        const posts = data.map(
          (post) => new Post(post.userId, post.id, post.title, post.body)
        );
        this.setState({ posts });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error) {
    alert(error.message);
  }

  render() {
    return (
      <div className="posts">
        <h1>Blog Posts</h1>
        {this.state.posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;