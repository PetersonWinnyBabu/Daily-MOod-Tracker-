import './index.css'

const DateItem = props => {
  const {DateItemDetails, addEmojitoDate} = props
  const {id, date, emojiUrl, emojiName} = DateItemDetails

  const onClickDate = () => {
    addEmojitoDate(id)
  }

  return (
    <li data-testid="dateItem" className="date-item">
      <button
        type="button"
        data-testid="dateItemButton"
        className="date-item-button"
        onClick={onClickDate}
      >
        <p data-testid="date" className="date">
          {date}
        </p>
        <img
          data-testid="emoji"
          className="emoji"
          src={emojiUrl}
          alt={emojiName}
        />
      </button>
    </li>
  )
}

export default DateItem
