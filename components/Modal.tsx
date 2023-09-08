'use client'
import Image from "next/image"
import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { useContext, useState } from "react"
import { ModalContext } from "@/contexts"


function LoginForm({ changeContent }: { changeContent: () => void }) {
    return (
        <div className="py-6 px-6 lg:px-8 text-left">
            <h3 className="mb-5 text-xl font-medium text-gray-900">
                Sign in to CarHub
            </h3>
            <form className="space-y-6" action="#">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                    <input 
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"     
                        placeholder="name@company.com"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                    <input 
                        type="password"
                        name="password"
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"                                                    
                        required
                    />
                </div>
                <div className="flex justify-between">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input 
                                id="remember"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300"
                                required
                            />
                        </div>
                        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">Remember me</label>
                    </div>
                    <a href="#" className="text-sm text-blue-700 hover:underline">Forgot password?</a>
                </div>
                <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    Sign in
                </button>

            </form>
            <p className="text-sm font-semibold text-gray-500 mt-5">Not a member? <a href="#" onClick={changeContent} className="text-blue-700 hover:underline ml-1">Create account</a></p>
        </div>
    )
}

function SignUpForm() {
    return (
        <div className="py-6 px-6 lg:px-8 text-left">
            <h3 className="mb-5 text-xl font-medium text-gray-900">
                Create new account
            </h3>
       
            <form className="space-y-6" action="#">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                    <input 
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"     
                        placeholder="name@company.com"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                    <input 
                        type="password"
                        name="password"
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"                          
                        placeholder="must have at least 8 characters"                          
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password2" className="block mb-2 text-sm font-medium text-gray-900">Re-enter Password</label>
                    <input 
                        type="password"
                        name="password2"
                        id="password2"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"                                            
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    Register
                </button>
            </form>           
        </div>
    )
}



export default function Modal() {
    const { isOpen, closeModal } = useContext(ModalContext)
    const [isLogin, setIsLogin] = useState(true)
    const changeContent = () => {
        setIsLogin(!isLogin)
    }

    if(!isOpen) {
        return null
    }

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child 
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-50"/>
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full justify-center items-center p-4 text-center">
                            <Transition.Child 
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-300"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                                    <div className="flex justify-between">
                                        {!isLogin && (
                                            <button onClick={changeContent} className="absolute top-2 left-2 z-10 w-fit p-2">
                                               <Image src="/back.svg" alt="back icon" width={20} height={20} className="object-contain" />
                                            </button>
                                        )}

                                        <button type="button" onClick={closeModal} className="absolute top-2 right-2 z-10 w-fit p-2 ">
                                            <Image src="/close.svg" alt="close icon" width={20} height={20} className="object-contain" />
                                        </button>
                                    </div>


                                    {isLogin ? <LoginForm changeContent={changeContent} /> : <SignUpForm />}
                                    
                    
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}