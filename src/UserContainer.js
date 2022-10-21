import React, { useEffect, useState } from 'react'
import UserList from './UserList'
import { randFirstName } from '@ngneat/falso'

const UserContainer = () => {

    const [usuarios,setUsuarios] = useState([])

    //useEffect(function [,array]) : Por default el hook ejecuta su funcion DESPUES de CADA renderizado del componente
    useEffect(()=>{
        
        console.log("Pido usuarios al servidor...")

        setTimeout(()=>{
            
            console.log("Usuarios recibidos!")
            console.log("Guardo lo que consigo en un estado sino lo pierdo")

            setUsuarios([
                {id:1,nombre:randFirstName()},
                {id:2,nombre:randFirstName()},
                {id:3,nombre:randFirstName()}
            ])

        },2000)

    },[])

    return (
        <UserList usuarios={usuarios}/>
    )
}

export default UserContainer