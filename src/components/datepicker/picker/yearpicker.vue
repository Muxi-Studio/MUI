<template>
	<div class="m-yearpicker-container">
        <div>
            <a v-for="year in years" class="m-yearpicker-item" @click="chooseYear(year)">{{ year }}</a>
        </div>
	</div>
</template>
<script>
import bus from "../../../emitter/bus"

export default {
    props: {
        pyear: [String, Number],
    },
    data() {
        return {
            year: "",
            years: [],
        }
    },
    mounted() {
        this.year = this.pyear
        this.countYear()
        bus.$on("yearpage", this.turnpage)
    },
    methods: {
        chooseYear(year) {
            this.$emit("yearchange", year)
        },
        turnpage(e) {
            this.year = e
            this.countYear()
        },
        countYear() {
            this.years = []
            if (this.year % 2 === 0) {
                for (let i = 6; i > -4;) {
                    this.years.push(this.year - i)
                    i -= 1
                }
            } else {
                for (let i = 7; i > -3;) {
                    this.years.push(this.year - i)
                    i -= 1
                }
            }
        },
    },
}
</script>
<style lang="scss">
@import '../../../scss/common/color.scss';
@import '../../../scss/common/font.scss';
.m-yearpicker-container{
    font-size: 0;
    padding:0 1px;
    .m-yearpicker-item{
        margin:4px 10px;
        display: inline-block;
        width: 70px;
        line-height: 26px;
        font-size: 14px;
        text-align: center;
        color:$text-darker;
        border-radius: 2px;
        &:hover{
            background-color: $primary-darker;
            color: #fff;
            cursor: pointer;
        }
    }
}
</style>