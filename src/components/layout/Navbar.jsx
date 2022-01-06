import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'


function Navbar({title}) {
    return (
        <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
            <div className="container mx-auto">
                <div className="flex px-2 mx-2">
                    <FaGithub className='inline pr-2 text-3xl' />
                    <Link to = '/' 
                    className='text-lg font-bold align-middle'>
                        {title}
                    </Link>
                </div>

                <div className="flex-1 px-2 mx-2">
                    <div className="flex justify-end">
                        <Link to= '/' 
                        className='rounded-btn btn btn-ghost btn-sm'>
                            Home
                        </Link>
                        <Link to= '/about' 
                        className='rounded-btn btn btn-ghost btn-sm'>
                            About
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.defaultProps = {
    title : 'Github Finder',
}

Navbar.propTypes = {
    title: PropTypes.string, 
}
export default Navbar
