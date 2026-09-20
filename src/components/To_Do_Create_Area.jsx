import React, { useState } from 'react'
import '../css/To_Do_List.css'

function To_Do_Create_Area({ OnCreateToDo }) {

    //yeni yapılacak işimizi tutmak için bir değişken oluşturuyoruz.
    const [newToDo, setNewToDo] = useState('');

    const ClearInputArea = ()=>{
        setNewToDo('');
    }

    //yeni todo oluşturmak için metod yazdık
    const CreateToDo = () => {
        //eğerki gelen değer dolu değilse boş dondür.
        if (!newToDo) return;

        //gelen değer dolu ise nesne tutan bir değişken oluşturup içerisine değer olarak veriyoruz.
        const request = {
            id: Math.floor(Math.random() * 999999),
            content: newToDo
        }

        //bir üst sınıftaki nesneye yeni todoyu parametre olarak gönderiyoruz.
        OnCreateToDo(request);
        ClearInputArea();

    }
    return (
        <div className='todoCreate'>
            <input type='text' value={newToDo} onChange={(e) => (setNewToDo(e.target.value))} className='createTextArea' placeholder='Yeni Yapılacak İş Giriniz...'></input>
            <button className='createButton' onClick={CreateToDo}>Oluştur</button>
        </div>
    )
}

export default To_Do_Create_Area