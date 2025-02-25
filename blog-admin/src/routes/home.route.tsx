//import { useEffect } from "react";
//import { getRedirectResult } from 'firebase/auth'


import { 
    //auth,
    signInWithGooglePopup, 
} from '../utils/firebase/firebase-conn.util';


function Home() {

    /*
    // Google sign in
    // google redirect sign in
    const doRedirectResult = async() => {
        await getRedirectResult(auth);

    }

    useEffect(() => { // useEffect does not like being declared as asyncronous, had to separate code inside a function called doRedirectResult
        doRedirectResult();
    }, [])*/
    

    // google pop-up sign in method
    const logGoogleUser = async () => {
        await signInWithGooglePopup(); // retrieve the user object from the signInWithGooglePopup function.
    }


    return (
        <>
            <div className=" mt-10">
                Home
            </div>

            <button onClick={() => logGoogleUser()} className="mt-10 transition ease-in-out delay-10 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white font-bold py-2 px-4 rounded">
                Sign In with Google
            </button>
        </>
    )
}

export default Home;