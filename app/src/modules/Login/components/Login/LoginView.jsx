import React from 'react';
import GLRLogo from './GLRLogo';

const LoginView = () => {
    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 p-12 bg-white rounded-md drop-shadow-xl">
                <div>
                    <div className="h-28 w-28 m-auto">
                        <GLRLogo />
                    </div>
                    <h2 className="mt-6 text-center text-3xl tracking-tight text-gray-900">
                        Sign in to GLR Dash
                    </h2>
                    <p className="mt-3 text-center text-sm tracking-tight text-gray-300">
                        GLR Dash tries to tie all lose software ends together in one user-friendly platform.
                    </p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-glr-green-500 py-2 px-4 text-sm font-medium text-white hover:bg-glr-green-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                
                            </span>
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginView;