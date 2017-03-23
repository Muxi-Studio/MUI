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
		<div v-for="item in date" class="m-daypicker-item">
			<a v-bind:class="item.class">{{item.text}}</a>
		</div>
	</div>
</template>
<script>
export default {
    props: {
        year: [String, Number],
        month: [String, Number],
    },
    data() {
        return {
            date: [],
        }
    },
    mounted() {
        this.getDayRange(this.year, this.month)        
        console.log(this.date)
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
                    this.date.push({ text: predate - i, class: "active" } )
                    i -= 1
                }
            }
            for (let i = 1; i <= dayCount;) {
                this.date.push({ text: i, class: "inactive" })
                i += 1
            }
            for (let i = 1; i <= 35 - dayCount - firstDay;) {
                this.date.push({ text: i, class: "inactive" })
                i += 1
            }
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
		width: 30px;
		height: 30px;
		text-align: center;
		line-height: 30px;
	}
}
</style>