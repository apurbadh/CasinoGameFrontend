import axios from 'axios';

function createAxios(){

  let token = localStorage.getItem("token")

  return axios.create({
    baseURL: "http://localhost:8000/api/v1",
    timeout: 1000,
    headers: {
      Authorization : `Bearer ${token}`,
      Accept : 'application/json'
      
    }
  })
}


async function getUser(){

    let http = createAxios();
    try {
        let response = await http.get('user');
        let user = await response.data.user;

        return user;
    }catch (error){
      return null;
    }

}

async function loginUser(){

    const http = createAxios();

    try {
            
        const response = await http.post('login', data);

        localStorage.setItem('token', response.data.user.token);
        getUser();


    }catch (error) {
        return error.response.data.message;
    }
}

export {
    loginUser,
    getUser,
    createAxios
}
