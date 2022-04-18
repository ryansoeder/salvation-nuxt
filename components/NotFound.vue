<template>
	<transition name="fade">
		<section class="four-oh-four" v-if="show">
			<div class="wrapper">
				<div class="row">
					<div class="col">
						<div class="content">
							<h1 class="title">404</h1>
							<p class="content">Get out of here, you're drunk.</p>
							<NuxtLink to="/">Home, James.</NuxtLink>
						</div>
					</div>
				</div>
			</div>
		</section>
	</transition>
</template>

<script>
export default {
	name: 'NotFound',
	data() {
		return {
			show: false,
		};
	},
	created() {
		setTimeout(() => {
			this.show = !this.show;
		}, 1000);
	},
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
.four-oh-four {
	margin-top: 90px;
}
</style>