import React from 'react'
import exemplo from 'assets/exemplo.jpg'
import axios from 'axios'

async function events(){
  return await axios.get('http://10.0.2.2:8080/user/allEvent')
}

export default events