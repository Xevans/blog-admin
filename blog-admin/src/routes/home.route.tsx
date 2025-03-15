import { useContext, useEffect } from 'react';
import { signInWithGooglePopup } from '../utils/firebase/firebase-conn.util';
import { UserContext } from '../context/auth/User.context';
import { UserContextType } from '../types/UserContextType';
import BlogForm from '../components/blog-form/blog-form.component';


function Home() {

    const { user } = useContext(UserContext) as UserContextType;

    useEffect(() => {
        //console.log(user);
    },[user])
    
    // google pop-up sign in method
    const logGoogleUser = async () => {
        await signInWithGooglePopup(); // retrieve the user object from the signInWithGooglePopup function.
    }

    
    function renderSwitch() {
        if (user) {
            return (
                <>
                    <div className='text-2xl font-semibold dark:text-blue-400'>
                        You are signed in!
                    </div>

                    <BlogForm />
                </>
            )
        }
        else {
            return (
                <button onClick={() => logGoogleUser()} className="mt-10 transition ease-in-out delay-10 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white font-bold py-2 px-4 rounded">
                    Sign In with Google
                </button>
            )
        }
    }


    return (
        <>
            <div className="container mt-10 pb-20 dark:bg-slate-900 max-w-screen">
                Home
                {renderSwitch()}
            </div>

            
            
            
        </>
    )
}

export default Home;