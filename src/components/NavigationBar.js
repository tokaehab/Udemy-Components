import React, { useRef } from "react";
import styles from "../styles/NavigationBar.module.css";
import { useSearchParams, Link, useNavigate } from "react-router-dom";

const NavigationBar = (props) => {
  const [search, setSearch] = useSearchParams();
  const inputRef = useRef();
  const navigate = useNavigate();

  const onFormSubmit = async (event) => {
    event.preventDefault();

    if (window.location.pathname !== "/") {
      navigate({
        pathname: "/",
        search: `?SearchValue=${inputRef.current.value}`,
      });
    } else {
      setSearch({ SearchValue: inputRef.current.value });
    }
  };
  return (
    <nav className={styles.navBar}>
      <div className={styles.sideMenu}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <Link to="/" className={styles.logo}>
        <img
          alt="udemy logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/2560px-Udemy_logo.svg.png"
        />
      </Link>
      <a href="/">Categories</a>
      <form className={styles.searchBarForm} onSubmit={onFormSubmit}>
        <div className={styles.searchBar}>
          <i className="fa fa-search"></i>
          <input placeholder="Search for anything" ref={inputRef} />
        </div>
        <button type="submit">Search</button>
      </form>
      <a href="/" className={styles.teachLink}>
        Udemy Business
      </a>
      <a href="/" className={styles.teachLink}>
        Teach on Udemy
      </a>
      <i className={`fa fa-shopping-cart ${styles.shoppingIcon}`}></i>
      <div className={styles.buttonsContainer}>
        <button className={styles.navbarButton}>Log in</button>
        <button className={`${styles.navbarButton} ${styles.signupBtn}`}>
          Sign up
        </button>
        <button className={`${styles.navbarButton} ${styles.globeBtn}`}>
          <i className="fas fa-globe"></i>
        </button>
      </div>
      <div className={styles.mobileIcons}>
        <i className="fa fa-search"></i>
        <i className={`fa fa-shopping-cart ${styles.shoppingIcon}`}></i>
      </div>
    </nav>
  );
};
export default NavigationBar;
