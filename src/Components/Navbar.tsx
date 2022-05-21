import React from 'react';

const Navbar: React.FC = () => {
    return (
        <div className='h-16 w-full bg-white rounded-xl drop-shadow-xl'>
            <div className='h-full flex justify-between justify-center items-center pr-8 pl-8'>
                <div>
                    <p>UPayments Store</p>
                </div>
                <div>
                    <p>Register</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
