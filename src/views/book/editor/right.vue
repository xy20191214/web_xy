<template>
    <div class="grid-content">
        <div class="editor-tip">已保存</div>
        <div class="editor-title">
            <input type="text" :value="value" class="editor-title-input">
        </div>
        <mavon-editor
                ref="editor"
                :toolbars="markdownOption"
                :boxShadow="false"
                toolbarsBackground="#d9d9d9"
                :subfield="subfield"
                placeholder="忘了怎么用？请看右上角'?'，如果命令不好使请在符号后面加空格"
                class="esytle"
                @subfieldToggle="subfieldToggle"
                @fullScreen="fullScreen"
        >
        </mavon-editor>
    </div>
</template>
<style>
    .esytle{
        width: 100%;
        border: 0;
        height: 100%;
    }
    .editor-tip{
        font-size: 12px;
        float: right;
    }
    .editor-tip{
        height: 16px;
    }
    .editor-title{
        height : 50px;
        width: 100%;
    }
    .editor-title-input
    {
        outline: none;
        padding-left:20px;
        border: 0;
        height: 35px;
        font-size: 20px;
        color: #595959;
        font-weight: blod;
        width: 100%;
    }
</style>
<script>
    import { mavonEditor } from "mavon-editor";
    import "mavon-editor/dist/css/index.css";

    var day = new Date();

    export default {
        name: "Create",
        components: {
            mavonEditor
        },
        methods: {
            subfieldToggle(status)
            {
                let subfiledparpo = this.$refs.editor.$el.children[1]; // 获取父级
                let subfieldpo = subfiledparpo.children[0].classList; // 获取双栏子级

                if (! status)
                {
                    subfiledparpo.children[1].style.display = "none"
                    subfieldpo.add("scroll-style-border-radius");
                    subfieldpo.add("single-edit");
                    this.subfield = false;
                }
            },
            fullScreen(status)
            {
                let subfiledparpo = this.$refs.editor.$el.children[1]; // 获取父级
                let subfieldpo = subfiledparpo.children[0].classList; // 获取双栏子级

                // 开启关闭双栏
                if (status)
                {
                    subfiledparpo.children[1].style.display = "";
                    subfieldpo.remove("scroll-style-border-radius");
                    subfieldpo.remove("single-edit");
                    this.subfield = true;
                }else
                {
                    subfiledparpo.children[1].style.display = "none"
                    subfieldpo.add("scroll-style-border-radius");
                    subfieldpo.add("single-edit");
                    this.subfield = false;
                }
            }
        },
        data(){
            return {
                subfield: false,
                value: "没有名字的" + day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + day.getDate() + "作品",
                markdownOption: {
                    superscript: true, // 上角标
                    subscript: true, // 下角标
                    quote: true, // 引用
                    link: true, // 链接
                    imagelink: true, // 图片链接
                    code: true, // code
                    table: true, // 表格
                    fullscreen: true, // 全屏编辑
                    readmodel: false, // 沉浸式阅读
                    htmlcode: false, // 展示html源码
                    help: true, // 帮助
                    /* 1.3.5 */
                    undo: true, // 上一步
                    redo: true, // 下一步
                    trash: true, // 清空
                    save: true, // 保存（触发events中的save事件）
                    /* 1.4.2 */
                    navigation: false, // 导航目录
                    /* 2.1.8 */
                    alignleft: false, // 左对齐
                    aligncenter: false, // 居中
                    alignright: false, // 右对齐
                    /* 2.2.1 */
                    subfield: true, // 单双栏模式
                    preview: false, // 预览
                }
            }
        }
    }
</script>
