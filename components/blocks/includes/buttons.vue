<template>
	<div class="buttons" v-if="buttons">
		<template v-for="(row, index) in buttons">
			<a
				v-if="row.button && isExternalAbsoluteUrl(row.button.url)"
				:key="`ext-${index}`"
				:href="row.button.url"
				:target="row.button.target"
				class="btn btn-main rounded-pill"
				>{{ row.button.title }}</a
			>
			<NuxtLink
				v-else-if="row.button && row.button.url"
				:key="`int-${index}`"
				:to="toInternalPath(row.button.url)"
				:target="row.button.target"
				class="btn btn-main rounded-pill"
				>{{ row.button.title }}</NuxtLink
			>
		</template>
	</div>
</template>

<script>
export default {
	name: 'Buttons',
	props: {
		buttons: Array
	},
	methods: {
		isAbsoluteHttpUrl(url) {
			return typeof url === 'string' && /^https?:\/\//i.test(url);
		},
		isSameBackendUrl(url) {
			if (!this.isAbsoluteHttpUrl(url)) return false;

			const backendURL = process.env.backendURL;
			if (!backendURL || typeof backendURL !== 'string') return false;

			const normalizedBackendURL = backendURL.replace(/\/+$/, '');
			const normalizedUrl = url.replace(/\/+$/, '');

			return normalizedUrl.startsWith(normalizedBackendURL);
		},
		isExternalAbsoluteUrl(url) {
			return this.isAbsoluteHttpUrl(url) && !this.isSameBackendUrl(url);
		},
		toInternalPath(url) {
			if (this.isSameBackendUrl(url)) {
				const backendURL = (process.env.backendURL || '').replace(/\/+$/, '');
				const stripped = url.slice(backendURL.length);
				if (!stripped) return '/';
				return stripped.startsWith('/') ? stripped : `/${stripped}`;
			}

			return url;
		}
	}
};
</script>

<style scoped lang="scss">
.buttons {
	margin-top: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
	.btn {
		margin-bottom: 20px;
		width: auto;
		min-width: 256px;
	}
}
</style>
