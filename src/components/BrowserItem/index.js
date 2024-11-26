import './index.css'

const BrowserItem = props => {
  const {HistoryDetails, onAddDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = HistoryDetails

  const onClickButton = () => {
    onAddDelete(id)
  }
  return (
    <li className="list">
      <div className="all-items">
        <p className="time">{timeAccessed}</p>
        <img className="logo-url" src={logoUrl} alt="logo" />
        <p className="title">{title}</p>
        <p className="domain">{domainUrl}</p>
      </div>
      <div className="button-container">
        <button type="button" onClick={onClickButton}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default BrowserItem
