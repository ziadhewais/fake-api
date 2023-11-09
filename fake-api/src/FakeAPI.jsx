import { useState, useEffect } from "react";
import FakeAPICardsContainer from "./FakeAPICardsContainer";

export default function FakeAPI(){
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetchTodos()
    },[])

    async function fetchTodos(){
        const response = await fetch("http://jsonplaceholder.typicode.com/todos/")
        const fetchedData = await response.json()
        console.log(fetchedData)
        setTodos(fetchedData)
    }

    return(
        <div>
            <FakeAPICardsContainer todos={todos}/>
        </div>
    )

}