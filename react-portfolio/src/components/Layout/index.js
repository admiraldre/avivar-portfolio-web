import './index.scss';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='App'>
            <Sidebar />
            <div className='page'>
                {/* <span className='tags top-tags'>int main{'\uFF08'}{'\uFF09'}{'\uFF5B'}</span>  */}
                <Outlet />
                {/* <span className='tags bottom-tags'>
                    <span className='bottom-tags-html'>{'\uFF5D'}</span>
                </span> */}
            </div>
        </div>
    )
}

export default Layout;