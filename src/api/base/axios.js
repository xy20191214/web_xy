import axios from 'axios';

// 创建axios实例
const service = axios.create({
    // api的base_url
    baseURL: process.env.BASE_API,

    // 请求超时时间
    timeout: 5000
});

export default service;
