import axios from 'axios';

// 创建axios实例
const service = axios.create({
    // api的base_url
    baseURL: process.env.VUE_APP_REWRITE,
    method: 'get',
    // 请求超时时间
    timeout: 5000
});

// respone拦截器
service.interceptors.response.use(
    response => {
        let obj = {};
        obj.ch = false;
        obj.message = '';
        obj.data = '';

        if (response.status == 201 || response.status == 204)
        {
            obj.ch = true;
            return obj;
        }

        const code = response.data.code;

        // 接口提示
        if (code && code !== 200)
        {
            obj.message = response.data.message;

            return obj;
        }

        obj.data = response.data.data;
        return obj;
    },
    error => {

    }
);

export default service;

