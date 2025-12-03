//import Delicacy from "../Models/delicacyModel.js";

const Delicacy = require("../Models/delicacyModel.js");
const http = require('http');

//return JSON.parse(result);

export const getAllDelicacies = () => {
    const result = http.get(`http://localhost:8080/api/delicacies`);
    return result.data;
};

export const getDelicacy = (id) => {
    const result = http.get(`http://localhost:8080/api/delicacies/${id}`);
    return result.data;
};

export const postDelicacy = (data) => {
    const result = http.post(`http://localhost:8080/api/delicacies`, JSON.stringify(data));
    return result.data;
};

export const putDelicacy = (id, data) => {
    const result = http.put(`http://localhost:8080/api/delicacies/${id}`, JSON.stringify(data));
    return result.data;
};

export const deleteDelicacy = (id) => {
    const result = http.delete(`http://localhost:8080/api/delicacies/${id}`);
    return result.data;
};