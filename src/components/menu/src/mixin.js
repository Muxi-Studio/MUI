module.exports = {
    methods: {
        selectMenu(e) {
            this.openMethod(e)
            this.$router.push(this.index)
            this.rootMenu.$emit("select", this.index)
        },
        updateFocus(e) {
            if (this.index !== e) {
                this.active = false
            }
        },
        updateFocusArray(e) {
            if (e.indexOf(this.index) !== -1) {
                this.active = true
            } else {
                this.active = false
            }
        },
        openMethod(e) {
            e.stopPropagation()
            this.active = true
            this.rootMenu.modify(this.index)
        },
        closeMethod() {
            this.active = false
        },
    },
    computed: {
        rootMenu() {
            let parent = this.$parent
            while (parent.$options.name !== "m-menu") {
                parent = parent.$parent
            }
            return parent
        },
    },
}
