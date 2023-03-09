import './index.css'

const AppItem = props => {
  const {appItem} = props
  const {appName, imageUrl} = appItem

  return (
    <li className="app-item">
      <img src={imageUrl} alt={appName} className="app-image" />
      <h1 className="app-name">{appName}</h1>
    </li>
  )
}
export default AppItem
