<template>
	<section class="block basic-content">
		<div class="wrapper">
			<div class="row">
				<div class="col">
					<div class="content">
						<h1 class="title" v-if="block.title">{{ block.title }}</h1>
						<p class="content" v-html="block.content" v-if="block.content" />
						<Buttons :buttons="block.buttons" v-if="block.enable_buttons"/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import Buttons from './includes/buttons.vue'

export default {
	name: 'BasicContent',
	components: {
		Buttons,
	},
	props: {
		block: Object,
	},
};
</script>

<style scoped lang="scss">
.block.basic-content {
	.content {
        margin: 0 auto;
		text-align: center;
        max-width: 600px;
		.title {
			margin-bottom: 50px;
		}
	}
}
</style>