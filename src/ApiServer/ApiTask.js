import axios from "axios";
let url = "http://localhost:3004/task";
class ApiTask {
  getData = async () => {
    let data = await axios.get(url);
    return data.data;
  };
  addTask = async (obj) => {
    return await axios.post(url, obj);
  };
  updateTask = async (id, obj) => {
    return await axios.patch(`${url}/${id}`, obj);
  };
  updateTaskNew = async (id, obj) => {
    return await axios.put(`${url}/${id}`, obj);
  };

  removeTask = async (id) => {
    return await axios.delete(`${url}/${id}`);
  };
}

export default ApiTask;
