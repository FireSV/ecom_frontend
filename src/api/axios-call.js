import React, { Component } from 'react'
import axios from "axios";

const postData = async (url, requestData, headers) => {
    try {
        const response = await axios.post(
            url,
            requestData,
            { headers }
        );
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}
const getData = async (url,headers) => {
    try {
        const response = await axios.get(
            url,
            { headers }
        );
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}
export { postData,getData};
