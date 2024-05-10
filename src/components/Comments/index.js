import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import './index.css'
import CommentItem from '../CommentItem'
const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
const initialCommentsList = []
class Comments extends Component {
  state = {
    commentsList: initialCommentsList,
    name: '',
    comment: '',
  }
  onAddComment = event => {
    event.preventDefault()
    const randomNum = Math.ceil(
      Math.random() * initialContainerBackgroundClassNames.length - 1,
    )
    const randomColor = initialContainerBackgroundClassNames[randomNum]
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      date: formatDistanceToNow(new Date()),
      isLiked: false,
      backGroundColor: randomColor,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }
  onChangeName = event => {
    this.setState({
      name: event.target.value,
    })
  }
  onChangeComment = event => {
    this.setState({
      comment: event.target.value,
    })
  }
  likedImageStatus = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }
  commentDelete = id => {
    const {commentsList} = this.state
    const filteredComments = commentsList.filter(
      eachComment => eachComment.id !== id,
    )
    this.setState({
      commentsList: filteredComments,
    })
  }
  render() {
    const {commentsList, name, comment} = this.state
    return (
      <div className="big-container">
        <h1 className="main-heading">Comments</h1>
        <div className="comment-and-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="comments-image"
            alt="comments"
          />
          <div className="textarea-input-button-container">
            <p className="main-description">
              Say something about 4.O Technologies
            </p>
            <form onSubmit={this.onAddComment}>
              <input
                className="name-imput-element"
                placeholder="Your Name"
                value={name}
                onChange={this.onChangeName}
              />
              <textarea
                rows="8"
                cols="30"
                placeholder="Your Comment"
                className="comments-textarea"
                value={comment}
                onChange={this.onChangeComment}
              ></textarea>
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
          </div>
        </div>
        <hr className="seperator" />
        <ul className="comments-container">
          <li className="fixed-list-item">
            <span className="comments-count">{commentsList.length}</span>{' '}
            Comments
          </li>
          {commentsList.map(eachComment => (
            <CommentItem
              commentDetails={eachComment}
              key={eachComment.id}
              likedImageStatus={this.likedImageStatus}
              commentDelete={this.commentDelete}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
