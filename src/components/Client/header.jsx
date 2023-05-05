import styles from './styles.module.css'
import { BsFillChatDotsFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { AiFillCloud, AiOutlineLogin } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
const Header = () => {
    const url = "http://localhost:5173/";
    const assets = url + 'src/assets/'
  return (
    <>
      <header className={styles.container}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <img src={`${assets}/images/logo2.png`} alt="" />
          </div>
          <ul className={styles.nav}>
            <NavLink to={`#`}>
              <li>
                <BsFillChatDotsFill />
              </li>
            </NavLink>
            <NavLink to={`#`}>
              <li>
                <FaUserFriends />
              </li>
            </NavLink>
            <NavLink to={`#`}>
              <li>
                <AiFillCloud />
              </li>
            </NavLink>
          </ul>
          <div className={styles.login}>
            <NavLink to={`login`}>
              Login <AiOutlineLogin />
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header