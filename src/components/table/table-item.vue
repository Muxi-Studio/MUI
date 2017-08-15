<template>
    <div v-for="info in tableinfo" class="m-table-item" v-bind:style="{ width: info.width + 'px'}">
		<slot></slot>
		<template v-if="!$slots.default">{{item[info.order]}}</template>		
	</div>
</template>