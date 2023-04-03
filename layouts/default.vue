<template>
	<div class="site-wrapper" :style="siteOptions.enable_header_banner ? 'top: 74px;' : ''">
		<HeaderBanner
			v-if="siteOptions.enable_header_banner"
			:message="siteOptions.banner_message"
			:link="siteOptions.banner_link"
		/>
		<TheHeader
			v-if="siteOptions && menu"
			:logo="siteOptions.header_logo"
			:menu="menu"
			:social="siteOptions.social"
		/>
		<main>
			<Nuxt />
		</main>
		<TheFooter
			v-if="siteOptions && menu"
			:logo="siteOptions.footer_logo"
			:menu="menu"
			:social="siteOptions.social"
		/>
	</div>
</template>

<script>
export default {
	name: 'IndexPage',
	data() {
		return {
			siteOptions: null,
			menu: null
		};
	},
	async fetch() {
		const apiURL =
			process.env.NUXT_ENV_ENVIRONMENT === 'local'
				? 'http://tattoo-salvation.local/wp-json/wp/v2'
				: 'https://content.tattoosalvation.com/wp-json/wp/v2';

		const res = await fetch(`${apiURL}/site_options`);
		const options = await res.json();
		this.siteOptions = await options[0];

		const menuRes = await fetch(`${apiURL}/main_menu`);
		this.menu = await menuRes.json();
	},
	mounted() {
		const script = require('~/assets/js/script.js');
	}
};
</script>

<style scoped>
.site-wrapper {
	display: flex;
	position: relative;
	min-height: 100vh;
	flex-direction: column;
	justify-content: space-between;
}
</style>
