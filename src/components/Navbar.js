import PropTypes from 'prop-types'
import React,{ useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'

export default function Navbar (props) {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    navigate(`/search?q=${searchQuery}`); // Navigate to search results page with query
  };
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            NewsMonkey
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link active' aria-current='page' to='/'>
                  Home
                </Link>
                {/* </li>
        <li className="nav-item"><a className="nav-link" to="/">Link</a>
        </li> */}
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/artificial intelligence'>
                  Artificial intelligence
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/electric vehicles'>
                  Electric vehicles
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/renewable energy'>
                  Renewable energy
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/climate crisis'>
                  Climate crisis
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/global warming'>
                  Global warming
                </Link>
              </li>

              {/* <li className="nav-item dropdown">
          <Link classNameName="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" to="/">Action</a></li>
            <li><a className="dropdown-item" to="/">Another action</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" to="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a> */}
              {/* </li>
      </ul> */}
            </ul>
            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
            <form className='d-flex' role='search' onSubmit={handleSearchSubmit}>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
                value={searchQuery}
                onChange={handleInputChange}
              />
              <button className='btn btn-outline-success' type='submit'>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  text: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  text: 'Hello'
}
