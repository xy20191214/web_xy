import request from '@/plugins/request/request.js';

/**
 * ch 修改id
 * pch 父类id
 * pagech 分页id
 * limit 长度最大50
 * @returns {AxiosPromise}
 */
export function getType(pch = 0, page = 1, limit = 50)
{
    return request({
        url: '/book/type/handles',
        params:{
            pch:pch,
            page:page,
            limit:limit
        }
    });
}