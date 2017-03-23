<template>
<div>
    <m-input v-model="text" v-on:onfocus="onFocus"></m-input>
    <m-calendar v-if="calendar"></m-calendar>
</div>
</template>
<script>
import Mdatepicker from "../forms/input"
import Mcalendar from "./_index"

export default {
    name: "m-datepicker",
    props: {
        value: String,
        label: String,
    },
    components: {
        Mdatepicker,
        "m-calendar": Mcalendar,
    },
    data() {
        return {
            text: "",
            calendar: false,
        }
    },
    methods: {
        onFocus() {
            this.calendar = true
        },
    },
}
</script>
<style lang="scss">
@import '../../scss/common/color.scss';
@import '../../scss/common/font.scss';
</style>
