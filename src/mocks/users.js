import React from 'react'

async function users(){
    return await axios.get('http://10.0.2.2:8080/users')
}

export default users;