import React from 'react'

const Nav = () => {
    return (
        <div className="shadow-md navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Mission</a></li>
                        <li>
                            <a>Services</a>

                        </li>
                        <li><a>About</a></li>
                    </ul>
                </div>
                <a className="p-2 text-xl font-medium ">Eimi Tech</a>
            </div>
            <div className="hidden navbar-center lg:flex">
                {/* TODO:active  */}
                <ul className="px-1 menu menu-horizontal">
                    <li><a> Mission</a></li>
                    <li>
                        <a> Services </a>
                    </li>
                    <li><a> About </a></li>
                </ul>
            </div>
            <div className="gap-3 navbar-end">
                <a className="rounded-sm btn bg-btnBg text-bgText w-30 hover:bg-btnHover">Contact Us</a>
                <a className="rounded-sm w-30 btn bg-btnBg text-bgText hover:bg-btnHover">Join us...</a>
            </div>
        </div>
    )
}

export default Nav