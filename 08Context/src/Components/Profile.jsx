import React from "react";
import UserContext from "/Users/sumitkumarmaurya/React/08Context/src/context/UserContext.js";

function Profile() {
    const { user ,setUser } = React.useContext(UserContext);

    if (!user) {
        return(
            <div>
                <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
                    <h2 className="text-2xl font-bold text-red-500 mb-3">
                        Access Denied
                    </h2>

                    <p className="text-gray-600">
                        Please login to view your profile.
                    </p>
                </div>
            </div>
            
        );
    }

    return (
        
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">

                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold">
                    {user.charAt(0).toUpperCase()}
                </div>

                <h1 className="text-3xl font-bold text-gray-800">
                    Welcome 👋
                </h1>

                <p className="mt-3 text-xl text-blue-600 font-semibold">
                    {user}
                </p>

                <p className="mt-2 text-gray-500">
                    You have successfully logged in.
                </p>

                <button
                    type="button"
                    onClick={() => setUser(null)}
                    className="mt-6 w-full bg-red-500 text-white py-2 px-4 rounded-lg font-semibold cursor-pointer hover:bg-red-600 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Profile;