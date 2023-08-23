import React from 'react'
import SunIcon from './Icons/Sun'
import GitHubIcon from './Icons/GitHub'
import Link from 'next/link'

export const NavBar = () => {
    return (
        <div className="bg-base-100 sticky top-0">
            <div className="navbar md:max-w-5xl md:mx-auto">
                <div className="block md:hidden dropdown dropdown-start">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <ul tabIndex={0} className="border-solid border-2 border-current menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Home
                            </a>
                            <hr />

                        </li>
                        <li><a>Works</a>
                            <hr />
                        </li>
                        <li><a>About</a>
                        </li>
                    </ul>
                </div>
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Federico Aletti</a>
                </div>
                <div className="navbar-end">
                    <div className="hidden md:block flex space-x-5">
                        <a href='#' className="link link-hover">
                            Home
                        </a>
                        <a href='#' className="link link-hover">
                            Work
                        </a>
                        <a href='#' className="link link-hover">
                            About
                        </a>
                    </div>
                    <button className="btn btn-ghost btn-circle">
                        <GitHubIcon />
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <SunIcon />
                        </div>
                    </button>

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://github.com/FedeAletti.png" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="border-solid border-2 border-current menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                                <hr />
                            </li>
                            <li><a>Settings</a>
                                <hr />
                            </li>
                            <li><a>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
