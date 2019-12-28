<template>
    <el-row :gutter="0" v-wechat-title="$route.meta.title" class="h1">
        <el-col :span="5" class="h1 c1">
            <left></left>
        </el-col>
        <el-col :span="6" class="h1 mroll">
            <middle></middle>
        </el-col>
        <el-col :span="13" class="h1 mrolla">
            <right></right>
        </el-col>
    </el-row>
</template>
<script>
    import left from './left';
    import middle from './middle';
    import right from './right';

    export default {
        components: {
            left,
            middle,
            right
        }
    };
</script>
