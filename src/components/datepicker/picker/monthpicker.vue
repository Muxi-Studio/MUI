<template>
	<div class="m-yearpicker-container">
        <div>
            <a v-for="n in 12" class="m-monthpicker-item" @click="chooseMonth(n)">{{ n }}月</a>
        </div>
	</div>
</template>
<script>
export default {
    props: {
        month: [String, Number],
    },
    data() {
        return {
            months: [],
        }
    },
    methods: {
        chooseMonth(e) {
            this.$emit("monthchange", e - 1)
        },
    },
}
</script>
<style lang="scss">
@import '../../../scss/common/color.scss';
@import '../../../scss/common/font.scss';
.m-yearpicker-container{
    font-size: 0;
    .m-monthpicker-item{
        margin: 8px 5px;
        display: inline-block;
        font-size: 14px;
        width: 50px;
        line-height: 26px;
        text-align: center;
        border-radius: 2px;
        color:$text-darker;
        &:hover{
            background-color: $primary-darker;
            color: #fff;
            cursor: pointer;           
        }
    }
}
</style>