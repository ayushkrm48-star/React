import React, { useContext, useState } from "react";
import UserContext from "/Users/sumitkumarmaurya/React/08Context/src/context/UserContext.js";



function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('button clicked')
        setUser(username);
    };

    return (
        
        <div className="flex justify-center">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md"
            >
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Login
                </h1>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2 font-medium">
                        Username
                    </label>

                    <input
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 mb-2 font-medium">
                        Password
                    </label>

                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <button
                    type='submit'
                    className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;