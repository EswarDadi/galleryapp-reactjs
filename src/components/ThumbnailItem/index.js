import './index.css'

const ThumbnailItem = props => {
  const {imagesList, clickThumbnail} = props
  const {id, thumbnailUrl, thumbnailAltText} = imagesList

  const onClickThumbnail = () => {
    clickThumbnail(id)
  }
  return (
    <div>
      <li>
        <div>
          <button type="button" onClick={onClickThumbnail} className="button">
            <img src={thumbnailUrl} alt={thumbnailAltText} />
          </button>
        </div>
      </li>
    </div>
  )
}
export default ThumbnailItem
