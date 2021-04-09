import './../styles/tab.css';

function TabItem({key, icon, title, onItemClicked, isActive}) {
  
  return (
    <div 
      className={isActive ? 'tabitem' : 'tabitem tabitem--inactive'} 
      onClick={onItemClicked}
    >
      <i className={icon}></i>
      <p className="tabitem__title">{title}</p>
      {console.log(isActive)}
    </div>
  )
}

export default TabItem