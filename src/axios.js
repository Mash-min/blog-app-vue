import axios from 'axios'

axios.defaults.baseURL = 'https://mm-blog-app.herokuapp.com/'
axios.defaults.headers['Authorization'] = "Bearer " + localStorage.getItem('token')