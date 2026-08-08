import {useTodo} from "/Users/sumitkumarmaurya/React/10TodoContextLocal/src/TodoContext/index.js"

import {useState} from "react"
function TodoForm() {
    
    const [todo , setTodo] = useState("");

    const {addTodo} = useTodo(); 

    const add = (event) => {
        event.preventDefault();

        if(!todo) return
        const newtodo = {
            id:Date.now(),
            text:todo,
            completed:false
        }
        addTodo(newtodo);
        // abb iske badd jo todo field hain usko empty bhi toh karna padega na
        setTodo("");
    }

    return (
        <form  onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(event) => setTodo(event.target.value)}
                // value → Input mein kya dikhana hai.
                // onChange → User ne jo type kiya usko state mein save karna hai.
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;