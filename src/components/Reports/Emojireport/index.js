import './index.css'

const Emojireport = props => {
  const {emojireportDetails} = props
  const {emojiName, emojiUrl, count} = emojireportDetails

  return (
    <li data-testid="emojiReport" className="emoji-report">
      <p data-testid="emojiName" className="emoji-name">
        {emojiName}
      </p>
      <img
        data-testid="emojiReportImage"
        className="emoji-report-image"
        src={emojiUrl}
        alt={emojiName}
      />
      <p data-testid="countEmoji" className="count-emoji">
        {count}
      </p>
    </li>
  )
}

export default Emojireport
