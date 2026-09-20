import React, { useState } from 'react'
import { MdEditSquare } from "react-icons/md";
import { MdOutlineRemoveCircle } from "react-icons/md";
import '../css/To_Do_List.css'
import { FaCheckSquare } from "react-icons/fa";

function To_Do({ todo, toDoRemove, UpdateToDo }) {

    /*To Do Kaldırma için kullandığımız metod */
    const Remove_To_Do = () => {
        toDoRemove(todo.id);
    }

    /* düzenlenebilir olup olmadığı*/
    const [editable, seteditable] = useState(false);
    const [newToDoContent, setNewToDoContent] = useState(todo.content);

    const Update_To_Do = () => {
        const request = {
            id: todo.id,
            content: newToDoContent
        }

        UpdateToDo(request);
        seteditable(false);
    }

    return (
        <div className='todo'>
            <div>
                {
                    editable ? <input type='text' value={newToDoContent} onChange={(e) => (setNewToDoContent(e.target.value))} className='createTextArea' style={{ width: "200%" }} /> : todo.content
                }

            </div>
            <div className='icons'>

                {
                    editable ? <FaCheckSquare className='icon' onClick={Update_To_Do} /> : <MdEditSquare className='icon' onClick={() => seteditable(true)} />
                }
                <MdOutlineRemoveCircle onClick={Remove_To_Do} className='icon' />

            </div>


        </div>
    )
}

export default To_Do