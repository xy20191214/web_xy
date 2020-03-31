import constant from '@/plugins/constant/common';

// 工具类
let con = constant;
let c = {
    alert: function (t)
    {
        t.$alert(con.isnull('title'), con.tip, {
            confirmButtonText: con.ok,
            type: 'error'
        });
    }
};

export default c;