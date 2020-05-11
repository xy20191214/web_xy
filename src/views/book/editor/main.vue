<template>
    <el-row :gutter="0" v-wechat-title="$route.meta.title" class="hw1">
        <el-col :span="5" class="hw1">
            <left></left>
        </el-col>
        <el-col :span="6" class="hw1 mroll">
            <middle></middle>
        </el-col>
        <el-col :span="13" class="hw1 mrolla">
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
