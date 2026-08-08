import { TodoProvider  } from "./TodoContext"
import {useState,useEffect} from "react"
import {TodoForm , TodoItem }from "/Users/sumitkumarmaurya/React/10TodoContextLocal/src/Components/index.js"


function App() {
  const[todos , setTodos] = useState([]) // inital value should be empty array , taki loop jab ham run karein toh koi dikkat naa aye

  const addTodo = (todo) =>{
    // in addTodo there will be text and then we have to first create an object with that text and then we have to add in our todos[] with the help of setTodos
    

    setTodos((prev) => {
      
      return [todo , ...prev]
    })

  }

  const updateTodo = (id , updatedTodo) => {
    // setTodos((prevTodoArray) => {
    //   for(const todo of prevTodoArray){
    //     if(todo.id == id){
    //       todo.text = text;
    //       todo.completed = false;
    //     }
    //   }
    // })
    // this is wrong as React mein state immutable honi chahiye
    // aur upar se ham kuch return bhi nhi kar rhe hain
    // correct way -->
      setTodos((prev) => {
        return prev.map((prevTodo) => {
          if(prevTodo.id===id){
            return updatedTodo
          }
          return prevTodo
        })
      })
  }
    
    const deleteTodo = (id) => {
      setTodos((prev) => {
        return prev.filter((prevTodo) => {
          return prevTodo.id!==id
        })
      })
    }

    const toggleComplete = (id) => {
      setTodos((prev) => {
        return prev.map((prevTodo) => {
          return prevTodo.id===id ? {...prevTodo , completed : !prevTodo.completed} : prevTodo
        })
      })
    }

    // now we have to work with localStorage 
    // first i want that whenever i do some refresh or load my project then todos must be set again tabhi toh hamlog website pe render kara payega firse jo bhi hamne phle add kiya tha warna toh refresh hua aur todos array empty ho jayega ,, ab agar hame vo pichla todos array wapas chahiye after refresh then hame use karna padega local storage {browser hame ek parmanent storage provide karta to store the thing in the form of key and value pair (Strings)}

    useEffect(() => {
      const data = JSON.parse(localStorage.getItem("todos"));
      if(data && data.length>0){
          setTodos(data);
      }

    } , [])

    // now when , we create any new todos , or make some changes in the todos then also we need to store in the localStorage
    useEffect(() => {
      localStorage.setItem("todos" , JSON.stringify(todos));
    },[todos]) // here the dependicy is the todos itself;


  return (
    < TodoProvider value={{todos , addTodo , updateTodo , deleteTodo , toggleComplete}} >
        <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here so we will pass one by one todo */}
                        {todos.map((value) => (
                          <div
                          className = 'w-full'
                          key = {value.id}
                          >
                            <TodoItem todoObject={value}/>
                          </div>
                        ))}

                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
