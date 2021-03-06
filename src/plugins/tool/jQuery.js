// 构造函数
var jQuery = function (selector)
{
    return new jQuery.fn.init(selector);
};

// 生成原型对象并覆盖prototype对象
jQuery.fn = jQuery.prototype = {
    construtor: jQuery, // 上次执行的this
    version: '1.0.0',
    length: 0,
    init: function (selector)
    {
        let d = {};

        // 对象
        if (typeof selector == 'object')
        {
            // 兼容vue
            if (selector.$el !== undefined)
            {
                return this.merge([selector.$el]);
            }

            // html对象
            if (selector instanceof HTMLElement)
            {
                return this.merge([selector]);
            }

            // event对象等
            d[0] = selector.target;
            d.length = 1;

        }else{
            // 获取相关元素
            d = document.querySelectorAll(selector);
        }

        let i = 0;
        for (; i < d.length; i++)
        {
            this[i] = d[i];
        }

        this.length = d.length;

        return this;
    },
    // 在原型上添加方法
    toArray: function (d) // 转换数组
    {
        let array = [], i = 0, len = d.length;
        for (; i < len; i++)
        {
            array[i] = d[i];
        }

        return array;
    },
    merge: function(second) // 生产新对象
    {
        var first = this.construtor(), // 获取新对象
            len = second.length,
            j = 0,
            i = first.length;

        for (; j < len; j++)
        {
            first[i++] = second[j];
        }

        first.length = i;

        // 返回jq对象
        return first;
    },
    eq: function (i) // 选择对象
    {
        return this.merge([this[i]]);
    },
    get: function (){},
    each: function (){},
    ready: function (){},
    first: function (){
        return this.eq(0);
    },
    slice: function (){},
    children: function ()
    {
        //if (val) return this.merge(this[0].children).find(val);
        return this.merge(this[0].children);
    },
    find: function ()
    {// 只支持id与class
        /*let i = 0, first = this.construtor();
        if (val.substr(0, 1) == '.')
        {

        }
        for (; i < this.length; i++)
        {
            if ()
            console.log()

        }*/

        //this.length = 1;

        return this;
    }
    // ... ...
};

jQuery.fn.init.prototype = jQuery.fn;

// 组装对象
jQuery.extend = jQuery.fn.extend = function (options)
{
    var target = this, name;

    for (name in options)
    {
        target[name] = options[name];
    }

    return target;
};

// 调用extend方法,添加到构造函数 $.xx = jQuery.xx
jQuery.extend({
    isFunction: function (){},
    type: function (){},
    parseHTML: function (){},
    parseJSON: function (){},
    ajax: function ()
    {
        // 占位
        return this;
    }
});

// 调用fn.extend方法，添加到原型上 $(init).xx = jQuery(init).xx
jQuery.fn.extend({
    queue: function () {},
    promise: function () {},
    attr: function () {},
    prop: function () {},
    addClass: function () {},
    removeClass: function () {},
    val: function (v) {
        v = this[0].defaultValue;
        return v;
    },
    css: function (attr, val)
    {
        this[0]['style'][attr] = val;
        return this;
    },
    show: function (val = 'block')
    {
        this[0]['style']['display'] = val;
        return this;
    },
    hide: function ()
    {
        this[0]['style']['display'] = 'none';
        return this;
    },
    html: function () {
        return this[0];
    },
    ht: function (i)
    {// 窗口高
        if (i) return this.css('height', i + 'px');
        return this[0].clientHeight;
    },
    oht: function ()
    {// 无边框窗口高
        return this[0].offsetHeight;
    },
    sht: function ()
    {// 滚动条高
        return this[0].scrollHeight;
    },
    st: function ()
    {// 滚动条距顶端
        return this[0].scrollTop;
    },
    wd: function ()
    {
        return this[0].offsetWidth;
    }
});
// ...

// $符号的由来，实际上它就是jQuery，一个简化的写法，在这里我们还可以替换成其他可用字符
// window.JQ = jQuery;

// 简化打印
window.dd = function (...d)
{
    return console.log(...d);
};

export default jQuery;