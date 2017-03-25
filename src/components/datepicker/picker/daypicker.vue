<template>
	<div class="m-daypicker-container">
		<div class="m-daypicker-bar">
			<a class="m-daypicker-item">日</a>
			<a class="m-daypicker-item">一</a>
			<a class="m-daypicker-item">二</a>
			<a class="m-daypicker-item">三</a>
			<a class="m-daypicker-item">四</a>
			<a class="m-daypicker-item">五</a>
			<a class="m-daypicker-item">六</a>
		</div>
		<div>
			<a v-for="item in date" v-bind:class="item.class" class="m-daypicker-item" @click="chooseDay(item)">{{item.text}}</a>
		</div>
	</div>
</template>
<script>
import bus from "../../../emitter/bus"

export default {
    props: {
        pyear: [String, Number],
        pmonth: [String, Number],
    },
    data() {
        return {
            date: [],
            year: "",
            month: "",
        }
    },
    created() {
        this.year = this.pyear
        this.month = this.pmonth
        this.getDayRange(this.year, this.month)
    },
    mounted() {
        bus.$on("yearbtn", this.updateyear)
        bus.$on("monthbtn", this.updatemonth)
    },
    methods: {
        getDayCount(year, month) {
            const dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
            if (month === 1) {
                if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
                    return 29
                }
            }
            return dict[month]
        },
        getDayRange(year, month) {
            this.date = []
            const date = new Date(year, month, 1)
            const firstDay = date.getDay()
            const dayCount = this.getDayCount(year, month)
            let predate
            if (firstDay) {
                if (this.month) {
                    predate = this.getDayCount(year, month - 1)
                } else {
                    predate = 31
                }
                for (let i = firstDay - 1; i > -1;) {
                    this.date.push({ text: predate - i, class: "inactive" })
                    i -= 1
                }
            }
            for (let i = 1; i <= dayCount;) {
                this.date.push({ text: i, class: "active" })
                i += 1
            }
            for (let i = 1; i <= 42 - dayCount - firstDay;) {
                this.date.push({ text: i, class: "inactive" })
                i += 1
            }
        },
        chooseDay(item) {
            if (item.class === "active") {
                this.$emit("daychange", item.text)
            }
        },
        updateyear(e) {
            this.year = e
            this.getDayRange(this.year, this.month)
        },
        updatemonth(e) {
            this.month = e
            this.getDayRange(this.year, this.month)
        },
    },
}
</script>
<style lang="scss">
@import '../../../scss/common/color.scss';
@import '../../../scss/common/font.scss';
.m-daypicker-container{
	font-size: 0;
	.m-daypicker-bar{
		width: 100%;
		height: 30px;
		font-weight: bold;
	}
	.m-daypicker-item{
		font-size: 14px;
		display: inline-block;
		width: 26px;
		height: 26px;
		text-align: center;
		line-height: 26px;
		border-radius: 2px;
	}
	.active{
		color: $text-darker;
		&:hover{
			background-color: $primary-darker;
			color: #fff;
            cursor: pointer;
		}
	}
	.inactive{
		color: $secondary-color;
	}
}
</style>