import { Button } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="p-16 absolute top-0 left-0 right-0 h-20 flex items-center justify-between px-8 md:px-10 lg:px-20">
            {/* Links/Icons on the left */}
            <div className="flex space-x-4 z-30">
                <div className="hidden md:flex">
                    <a href="#" className="text-white mr-4">Link 1</a>
                    <a href="#" className="text-white mr-4">Link 2</a>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    {mobileMenuOpen ? (
                        <button onClick={() => setMobileMenuOpen(false)}>
                            <FontAwesomeIcon icon={faTimes} className="text-white" size="lg" />
                        </button>
                    ) : (
                        <button onClick={() => setMobileMenuOpen(true)}>
                            <FontAwesomeIcon icon={faBars} className="text-white" size="lg" />
                        </button>
                    )}
                </div>
            </div>

            {/* Centered company name */}
            <div className="text-center text-white z-30">Company Name</div>

            {/* Button on the right */}
            <div className="z-30">
            <Button variant="outlined" className= "border border-white text-white py-3 px-6">
                Click Me
            </Button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center md:hidden z-20">
                    <div className="bg-white p-8 rounded shadow-lg">
                        <div className="flex justify-between">
                            <h2 className="text-2xl font-bold">Menu</h2>
                            <button onClick={() => setMobileMenuOpen(false)}>
                                <FontAwesomeIcon icon={faTimes} size="lg" />
                            </button>
                        </div>
                        <div className="mt-4 space-y-2">
                            <a href="#" className="block">Link 1</a>
                            <a href="#" className="block">Link 2</a>
                            <Button variant="filled" color="blue" className="mt-4">Button</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
