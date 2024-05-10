import './index.css'
const CommentItem = props => {
  const {commentDetails, key, likedImageStatus, commentDelete} = props
  const {id, name, comment, date, backGroundColor, isLiked} = commentDetails
  const clickOnLiked = () => {
    likedImageStatus(id)
  }
  const onDelete = () => {
    commentDelete(id)
  }
  const likedImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  return (
    <li className="list-item">
      <div className="comment-content-container">
        <div className={backGroundColor}>{name[0]}</div>
        <div>
          <div className="name-date-container">
            <h1 className="name-element">{name}</h1>
            <p className="date-element">{date}</p>
          </div>
          <p className="comment-element">{comment}</p>
        </div>
      </div>
      <div className="like-delete-container">
        <button className="button">
          <img
            src={likedImage}
            onClick={clickOnLiked}
            className="iamge"
            alt="like"
          />
          Like
        </button>
        <button className="button" data-testId="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="iamge"
            onClick={onDelete}
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
