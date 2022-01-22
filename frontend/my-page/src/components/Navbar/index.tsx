import { ReactComponent as GithubIcon } from 'assets/icons/github.svg';

// CSS import
import './index.css'

function Navbar() {

  return (
    <header>
      <nav className='container'>
        <div className='movie-reviwer-nav-content'>
          <h1>Movie Reviwer</h1>
          <a href="https://github.com/iagodsv" target={'_blank'} rel="noreferrer">
            <div className='movie-reviewer-contact-container'>
              <GithubIcon />
              <p className='movie-reviewer-contact-link'>/iagoduarte</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar