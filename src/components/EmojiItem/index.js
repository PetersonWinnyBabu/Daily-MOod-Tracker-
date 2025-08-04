import './index.css'

const EmojiItem = props => {
  const {emojiItemDetails, onclickEmoji, isActive} = props
  const {id, emojiName, emojiUrl} = emojiItemDetails

  const setActive = () => {
    onclickEmoji(id)
  }

  return (
    <div data-testid="emojiitemContainer" className="emojiItem-container">
      <div data-testid="emojiItem" className="emoji-item">
        <p data-testid="emojiText" className="emoji-text">
          {emojiName}
        </p>
        <button
          data-testid="emojiButton"
          className={isActive ? 'button-active' : 'emoji-button'}
          type="button"
          onClick={setActive}
        >
          <img
            data-testid="emojiImage"
            className={isActive ? 'emoji-active' : 'emoji-image'}
            src={emojiUrl}
            alt={emojiName}
          />
        </button>
      </div>
    </div>
  )
}
export default EmojiItem
