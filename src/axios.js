import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/';

//guarda o token no localStorage
//axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token');