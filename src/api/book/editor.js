import request from '../base/request';

export function getType(id)
{
    return request({
        url: '/book/type/handles',
        params:{
            id:id
        }
    });
}