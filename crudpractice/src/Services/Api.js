import axios from 'axios';


const API_URL = 'http://localhost:3002/user';

// form data to database api..
export const getFormData = async(data) => {
    try{
        return await axios.post(API_URL, data)
    }catch(error){
        console.log("error in tha api while getting data from the form to the database", error.message)
    }
}

//form data sending to table api..
export const tableData = async() => {
    try{
        return await axios.get(API_URL);
    }catch(error){
        console.log("error in the api while setting the form data to table.", error.message);
    }
}

//delete api..
export const deleteApi = async(id) => {
    try{
        return await axios.delete(`${API_URL}/${id}`)
    }catch(error){
        console.log("error occured in delete api.", error.message);
    }
}

//edit api..
export const editApi = async(data) => {
    try{
        return await axios.get(`${API_URL}/${data}`)
    }catch(error){
        console.log("error occured when editing the table data.", error.message );
    }
}

export const editSubmitApi = async(data, id) => {
    try{
        return await axios.put(`${API_URL}/${id}`,data)
    }catch(error){
        console.log("error in the api while submiting edited data.", error.message);
    }
}