import React from 'react'
import TabItem from './TabItem'
import User from './User'
import NewUser from './NewUser'
import './../styles/tab.css';

function Tab() {
  const tabItems = [
    {
      id: 1,
      icon: 'tabitem__icon fas fa-users',
      title: 'メンバー',
      content: ( <User /> ),
    },
    {
      id: 2,
      icon: 'tabitem__icon fas fa-user-plus',
      title: '追加',
      content: ( <NewUser /> ),
    },
    // {
    //   id: 3,
    //   icon: 'tabitem__icon fas fa-edit',
    //   title: '編集',
    //   content: 'edit function',
    // },
    // {
    //   id: 4,
    //   icon: 'tabitem__icon fas fa-user-slash',
    //   title: '削除',
    //   content: 'delete function',
    // },
  ];
  
  const [active, setActive] = React.useState(0);
  
  return (
    <div className="wrapper">
      <div className="tabs">
        {tabItems.map(({ id, icon, title }) => (
          <TabItem key={id}
            icon={icon}
            title={title}
            onItemClicked={() => setActive(id)}
            isActive={active === id}
          />
        ))}
      </div>
      {/* {console.log("==========")} */}
      <div className="content">
        {tabItems.map(({ id, content }) => {
          // console.log(active, id)
          return active === id ? content : ''
        })}
      </div>
     </div>
  )
}

export default Tab