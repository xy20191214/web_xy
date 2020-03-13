(function (ROOT)
{
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
            // 获取相关元素
            let d = document.querySelectorAll(selector), i = 0, len = d.length;

            for (; i < len; i++)
            {
                this[i] = d[i];
            }
            this.length = len;

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
                len = +second.length,
                j = 0,
                i = first.length;

            for ( ; j < len; j++ ) {
                first[i++] = second[j];
            }

            first.length = i;

            return first;
        },
        eq: function (i) // 选择对象
        {
            return this.merge([this[i]]);
        },
        get: function (){},
        each: function (){},
        ready: function (){},
        first: function (){},
        slice: function (){}
        // ... ...
    };

    jQuery.fn.init.prototype = jQuery.fn;
    jQuery.extend = jQuery.fn.extend = function (options)
    {
        var target = this;

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
        ajax: function (){}
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
        css: function () {
        },
        html: function () {
            return this[0];
        }
    });
    // ...

    // $符号的由来，实际上它就是jQuery，一个简化的写法，在这里我们还可以替换成其他可用字符
    ROOT.$ = jQuery;

    // 简化打印
    ROOT.$$ = function (...d)
    {
        return console.log(...d);
    };

})(window);