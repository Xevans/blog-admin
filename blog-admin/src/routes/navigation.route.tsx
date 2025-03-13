import { Link, Outlet } from "react-router-dom";

function Navigation() {
    return (
        <>
            <div className="bg-gray-800 fixed top-0 left-0 right-0 z-10">
                <div className=" text-2xl">
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center md:hidden ">
                                
                            </div>
                            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                                <Link to="/">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                    alt="Xavier E."
                                    src="https://res.cloudinary.com/dn9rcml4g/image/upload/f_auto,q_auto/v1/blog-pics/monitor-512"
                                    className="h-8 w-auto"
                                    />
                                    <h4 className='ml-1 font-bold text-2xl text-blue-300'>Xavier's Blog | Admin</h4>
                                </div>
                                </Link>
                                
                                    <div className="hidden md:ml-6 md:block">
                                    <div className="flex space-x-4">
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Outlet />
            </div>
        </>
    )
}

export default Navigation;