<template>
	<div class="buttons" v-if="buttons">
		<a
			v-for="row in buttons"
			:key="row"
			:href="row.button.url"
			:target="row.button.target"
			class="btn btn-main rounded-pill"
			>{{ row.button.title }}</a
		>
	</div>
</template>

<script>

export default {
    name: 'Buttons',
    props: {
        buttons: Array,
    },
}
</script>

<style scoped lang="scss">
.buttons {
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
	.btn {
		margin-bottom: 20px;
		width: auto;
	}
}
</style>