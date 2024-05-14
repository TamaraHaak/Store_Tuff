import React from 'react'
import styles from "../../styles/Footer.module.css";
import { ROUTES } from '../../utils/routes';
import { Link } from 'react-router-dom';



import LOGO from "../../images/logo.svg";


const Footer= () => ( 
  <section className={styles.footer}>
    <div className={styles.logo}>
      <Link to={ROUTES.HOME}>
        <img src={LOGO} alt="Stuff" />
      </Link>
        </div>

        <div className={styles.rights}>
          Developed by Tamara 
          <a 
          href='https://instagram.com'
          target='blank'
          rel='noreferrer'>
        </a>
        </div>

        <div className={styles.socials}>
        <a 
        href='https://linkedin.com/intamara-haak-3b51222bb/'
        target='blank'
        rel='noreferrer'>

          <svg className='icon'>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>
        </a>  
        <a 
        href='https://facebook.com'
        target='blank'
        rel='noreferrer'>

          <svg className='icon'>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>
        </a>  
        <a 
        href='https://instagram.com'
        target='blank'
        rel='noreferrer'>

          <svg className='icon'>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>
        </a>  
        </div>
    </section>
 
  
  
  );
 export default Footer; 