import React from 'react';

const Layout = ({children}) => {
    return (
        <div className='w-screen h-screen overflow-y-hidden flex items-center justify-center'>
            {children}
        </div>
    );
}

export default Layout;
