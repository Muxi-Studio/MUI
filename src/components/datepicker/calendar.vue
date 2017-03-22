<template>
<div class="m-calendar">
    <div class="m-calendar-bar">
        <a class="arrow-icon"><<</a>
        <a class="arrow-icon"><</a>
        <div class="m-calendar-ym">
            <a class="m-calendar-tag">{{ year }}</a> 
            <a class="m-calendar-tag">年</a> 
            <a class="m-calendar-tag">{{ month }}</a>
            <a class="m-calendar-tag">月</a>
        </div>
        <a class="arrow-icon">>></a>
        <a class="arrow-icon">></a>
    </div>
</div>
</template>
<script>
export default {
    name: "m-calendar",
    props: {
        value: String,
        label: String,
    },
    data() {
        return {
            year: "",
            month: "",
        }
    },
}
</script>
<style lang="scss">
@import '../../scss/common/color.scss';
@import '../../scss/common/font.scss';
.m-calendar{
    width:200px;
    height: 300px;
    padding: 8px;
    .m-calendar-bar{
        width:100%;
        .arrow-icon{
            display: inline-block;
            line-height: 30px;
            vertical-align: middle;
        }
        .m-calendar-ym{
            display: inline-block;
            width :60%;
            font-size: 0;
            vertical-align: middle;
            .m-calendar-tag{
                display: inline-block;
                font-size: 14px;
                text-align: center;
                line-height: 30px;
                width:25%;
            }
        }
    }
}
</style>
