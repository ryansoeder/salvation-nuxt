<template>
	<div class="header-banner">
		<span v-if="message" class="message">{{ message }}</span>
		<a
			v-if="link.url.includes('http') || link.url.includes('https')"
			:href="link.url"
			:target="link.target"
			class="btn btn-main rounded-pill"
			>{{ link.title }}</a
		>
		<NuxtLink v-else :to="link.url" :target="link.target" class="btn btn-main rounded-pill">{{
			link.title
		}}</NuxtLink>
	</div>
</template>

<script>
export default {
	name: 'HeaderBanner',
	props: {
		message: String,
		link: Object
	}
};
</script>

<style lang="scss" scoped>
.header-banner {
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem 2rem;
	width: 100%;
	background: #0073e6;
	color: white;
	font-size: 1.5rem;
	z-index: 999;
	@media (max-width: 800px) {
		font-size: 16px;
		font-weight: bold;
		padding: 1rem;
	}
	@media (max-width: 500px) {
		position: absolute;
		top: -74px;
	}

	.btn {
		margin: 0 2rem;
		border-color: white;
		color: white;
		&:hover,
		&:focus {
			border-color: black;
		}
	}
}
</style>
