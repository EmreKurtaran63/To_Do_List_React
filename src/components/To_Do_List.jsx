import React from 'react'
import To_Do from './To_Do'
import '../css/To_Do_List.css'

function To_Do_List({ todos, removeToDo, UpdateToDo }) {



    return (
        <div className='todo-list'>
            {

                //eğerki gelen dizi dolu ise her elemanı todo olarak dönüyoruz.
                todos && todos.map((todo) => (
                    //listedeki her eleman ile bir todo oluşturup gerekli bilgileri gönderiyoruz.
                    <To_Do key={todo.id} todo={todo} toDoRemove={removeToDo} UpdateToDo={UpdateToDo}></To_Do>
                ))

            }

        </div>
    )
}

export default To_Do_List