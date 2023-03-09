import './index.css'

const TabItem = props => {
  const {tabItem, activeTabId, activeTabItem} = props
  const {tabId, displayText} = tabItem

  const getFilteredList = () => {
    activeTabId(tabId)
  }

  const activeId = activeTabItem ? 'active-btn' : 'normal-btn'

  return (
    <li className="tab-item">
      <button type="button" className={activeId} onClick={getFilteredList}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
