import { useState } from 'react'
import './App.css'
import To_Do_Create_Area from './components/To_Do_Create_Area'
import To_Do_List from './components/To_Do_List'

function App() {

  //yapılacak işerimizi kaydetmek için bir dizi üretiyoruz.
  const [toDos, setToDos] = useState([]);

  console.log(toDos)

  //yeni bir todo ürettiğimizde çalışacak metodu yazıyoruz.
  const CreateToDo = (newToDo) => {
    //var olan todo larımızın üzerine yeni gelen to doyu ekliyoruz.
    setToDos([...toDos, newToDo])
  }

  /* To Do Kaldırma */
  const RemoveToDo = (toDoId) => {
    //filter fonksiyonu ile eğerki dizideki elemanlar gelen id ile eşit değilse listeye eklenecek(eşit ise eklenmeyecek)
    setToDos([...toDos.filter((todo) => (todo.id != toDoId))]);
  }

  /*To Do Güncelleme*/
  const UpdateToDo = (newtodo) => {
    const updatedToDos = toDos.map((todo) => {
      if (todo.id !== newtodo.id) {
        return todo;
      }

      return newtodo;
    })

    setToDos([...updatedToDos])
  }

  return (
    <>
      <div className='to-do-list-holder'>
        <To_Do_Create_Area OnCreateToDo={CreateToDo} />
        <To_Do_List todos={toDos} removeToDo={RemoveToDo} UpdateToDo={UpdateToDo} />
      </div>
    </>
  )
}

export default App
