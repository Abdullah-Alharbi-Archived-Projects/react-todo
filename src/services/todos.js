const axios = require('axios');

const _API = "https://jsonplaceholder.typicode.com/todos";


const get = () => {
    return axios.get(_API);
}

const show = id => {
    return axios.get(`${_API}/${id}`);
}

const create = todo => {
    return axios.post(_API, todo);
}

const update = (id, todo) => {
    return axios.patch(`${_API}/${id}`, todo);
}

const destroy = id => {
    return axios.delete(`${_API}/${id}`);
}

module.exports = {
    get,
    show,
    create,
    update,
    destroy
};
