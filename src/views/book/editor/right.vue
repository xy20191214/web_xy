<template>
    <div class="grid-content">
        <div class="editor-tip"></div>
        <div class="editor-title">
            <input type="text" :value="value" class="editor-title-input">
        </div>
        <mavon-editor
                ref="editor"
                :toolbars="markdownOption"
                :boxShadow="false"
                toolbarsBackground="#d9d9d9"
                :subfield="false"
        >
        </mavon-editor>
    </div>
</template>
<style>
    .editor-tip{
        height: 20px;
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
        data(){
            return {
                value: "没有名字的" + day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + day.getDate() + "作品",
                markdownOption: {
                    boxShadowStyle:false,
                    bold: false, // 粗体
                    italic: false, // 斜体
                    header: true, // 标题
                    underline: true, // 下划线
                    strikethrough: false, // 中划线
                    mark: false, // 标记
                    superscript: true, // 上角标
                    subscript: true, // 下角标
                    quote: true, // 引用
                    ol: true, // 有序列表
                    ul: true, // 无序列表
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
