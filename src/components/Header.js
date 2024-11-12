import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext';


const Header = () => {
    // console.log('Header rendered')
  const {name} = useContext(AppContext)

    return (
        <div>
            <h1>Header Component</h1>
            <p>User : {name}</p>
        </div>
    )
}

export default Header;
// export default React.memo(Header);

