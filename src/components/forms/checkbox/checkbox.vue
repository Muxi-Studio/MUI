<template>
  <label class="m-checkbox">
<!--     <span class="m-checkbox-input"
      :class="{
        'is-focus': focus
      }"
    > -->
      
      <input
        class="m-checkbox-original"
        type="checkbox"
        :id="label"
        :checked="check"
        @click="onClick">
        <div class="m-checkbox-inner"></div>
    <span class="m-checkbox-label" v-if="$slots.default || label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
export default {
    name: "m-checkbox",
    props: ["label"],
    data() {
        return {
            check:false,
            state: {},
            checkarr: [],
        }
    },
    mounted() {
        this.checkarr = this.$parent.checkarr
        var flabel = this.checkarr.find((e) => {
            return e == this.label
        })
        if (flabel) {
            this.check = true
        }
    },
    methods:{
        onClick(e){
            this.check = e.target.checked
            this.$parent.modify(this.label)
        }
    }
}
</script>
<style lang="scss">
@import '../../../scss/common/color.scss';
@import '../../../scss/common/font.scss';
.m-checkbox{
    display: block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 15px;
    cursor: pointer;
    font-size: 18px;
}
.m-checkbox-inner{
    position: absolute;
    top: 2px;
    left: 0;
    border: 1px solid $secondary-color;
    border-radius: 3px;
    box-sizing: border-box;
    height: 18px;
    width: 18px;
    background: #ffffff;
    box-sizing: border-box;
    &::after{
        display: block;
        left: 50%;
        top: 50%;
        width: 6px;
        height: 10px;
        margin-left: -3px;
        margin-top: -5px;
        box-sizing: border-box;
        border: solid #fff;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        content: ' ';
        position: absolute;
    }

}

.m-checkbox-original{
    position: absolute;
    z-index: -1;
    opacity: 0;
    &:checked{
        & ~ .m-checkbox-inner{
            background: $primary-darker;
            border: 1px solid $primary-darker;
        }
    }
    &:hover{
        & ~ .m-checkbox-inner{
            border: 1px solid $primary-darker;
        }
    }
}
</style>
