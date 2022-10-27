import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Chào mừng bạn đến với cửa hàng thú cưng tại Long An
        </p>
        
        <p className='footer-subscription-text'>
          Chúng tôi luôn luôn chào đón bạn.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email or Phone'
            />
            <Button buttonStyle='btn--outline'>Đăng nhập</Button>
                  
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Me</h2>
            <Link to='/sign-up'>Trần Minh Tiến</Link>
            <Link to='/'>1800005257</Link>
            <Link to='/'>18DTH1D</Link>
           
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Face to face</Link>
            <Link to='/'>1800005257@nttu.edu</Link>
            <Link to='/'>0397525620</Link>

          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Google</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Facebook</Link>
           
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            
              TMT
              <i className="fas fa-user-secret" />
            </Link>
          </div>
          <small className='website-rights'>TMT © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/https://www.facebook.com/xinloiduochua/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            > 
            <div className="futer">  <img src='/images/qr.jpg'/> 
            </div>
            </Link>
           
          </div>
        </div>
      </section>
    </div>
    
  );
}

export default Footer;
