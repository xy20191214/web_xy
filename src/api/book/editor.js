import request from '../base/request';

export function getType(id, page = 1)
{
    return request({
        url: '/book/type/handles',
        params:{
            id:id,
            page:page
        }
    });
}