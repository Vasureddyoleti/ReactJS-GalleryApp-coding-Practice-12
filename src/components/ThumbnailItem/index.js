// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, changeImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const thumbnailImageClass = isActive ? 'active-btn' : ''

  const onClickChange = () => {
    changeImage(id)
  }

  return (
    <li>
      <button
        className={`button ${thumbnailImageClass}`}
        type="button"
        onClick={onClickChange}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
