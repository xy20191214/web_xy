import request from '@/plugins/request/request.js';

var api = {
    /**
     * ch 修改id
     * pch 父类id
     * pagech 分页id
     * limit 长度最大50
     * @returns {AxiosPromise}
     */
    getType: function (pch = 0, page = 1, limit = 50)
    {
        return request({
            url: '/book/type/handles',
            params:{
                pch:pch,
                page:page,
                limit:limit
            }
        });
    },
    /**
     * 添加修改标题
     * @param title
     * @param ch
     * @param pch
     */
    addType: function (title, ch = 0, pch = 0)
    {
        return request({
            url: '/book/type/handles',
            method: 'post',
            data: {
                title: title,
                ch: ch,
                pch: pch
            }
        });
    }
};

export default api;