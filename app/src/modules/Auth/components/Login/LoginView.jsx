import React from 'react';
import { SpinnerCircular } from 'spinners-react';
import { Statuses } from '../../../../helpers/constants/loadingStatus';
import GLRLogo from './GLRLogo';

const LoginView = ({
    setEmail,
    setPassword,
    submitForm,
    loginStatus
}) => {
    return (
        <div className="flex items-center w-screen md:h-screen md:justify-center">
            <div className="flex items-center drop-shadow-xl w-full justify-center p-4 flex-col sm:px-6 md:py-12 md:items-stretch md:flex-row lg:px-8">
                <div className="bg-glr-green-500 relative flex h-60 min-h-full w-full md:max-w-xl rounded-t-xl justify-center items-center md:rounded-tr-none md:rounded-l-xl md:h-auto">
                    <iframe title="animationFrame" className="w-full h-full" src="https://embed.lottiefiles.com/animation/82423"></iframe>
                    <div className="absolute w-full h-full" />
                </div>
                <div className="w-full md:max-w-sm shrink-0 space-y-8 p-12 bg-white rounded-b-xl md:rounded-r-xl md:rounded-bl-none">
                    <div>
                        <div className="h-28 w-28 m-auto">
                            <GLRLogo />
                        </div>
                        <h2 className="mt-6 text-center text-3xl tracking-tight text-gray-900">
                            Sign in to GLR Dash
                        </h2>
                        {loginStatus === Statuses.ERROR ? (
                            <p className="mt-3 text-center text-sm tracking-tight text-red-500">
                                Something went wrong while trying to sign in. Please check your email and password.
                            </p>
                        ) : (
                            <p className="mt-3 text-center text-sm tracking-tight text-gray-300">
                                GLR Dash tries to tie all lose software ends together in one user-friendly platform.
                            </p>
                        )}
                    </div>
                    <form className="mt-8 space-y-6">
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
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-glr-green-500 focus:outline-none focus:ring-glr-green-500 sm:text-sm"
                                    placeholder="Email address"
                                    onInput={e => setEmail(e.target.value)}
                                    disabled={loginStatus === Statuses.PENDING}
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
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-glr-green-500 focus:outline-none focus:ring-glr-green-500 sm:text-sm"
                                    placeholder="Password"
                                    onInput={e => setPassword(e.target.value)}
                                    disabled={loginStatus === Statuses.PENDING}
                                />
                            </div>
                        </div>
                        <div>
                            <button 
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-glr-green-500 py-2 px-4 text-sm font-medium text-white hover:bg-glr-green-600 focus:outline-none focus:ring-2 focus:ring-glr-green-500 focus:ring-offset-2 disabled:bg-slate-100"
                                disabled={loginStatus === Statuses.PENDING}
                                onClick={() => submitForm()}
                            >
                                {loginStatus === Statuses.PENDING ? (
                                    <SpinnerCircular size={28} thickness={100} speed={100} color="rgba(143, 210, 63, 1)" secondaryColor="rgba(212, 212, 212, 1)" />
                                ) : (
                                    <div className="py-1">
                                        Sign in
                                    </div>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginView;