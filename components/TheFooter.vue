<template>
	<footer>
		<nav>
			<NuxtLink to="/" v-if="logo">
				<img class="footer-img" :src="logo.url" :alt="logo.alt" />
			</NuxtLink>
			<ul class="footer-menu">
				<template v-for="item in menu">
					<li :key="item.ID" v-if="item.menu_item_parent == 0">
						<NuxtLink v-if="!isExternalAbsoluteUrl(item.url)" :to="toInternalPath(item.url)">{{
							item.title
						}}</NuxtLink>
						<a v-else :href="item.url" target="_blank">{{ item.title }}</a>
						<ul class="sub-menu" v-if="hasSubItems(item.ID)">
							<template v-for="subItem in menu">
								<li :key="subItem.ID" v-if="subItem.menu_item_parent == item.ID">
									<NuxtLink
										v-if="!isExternalAbsoluteUrl(subItem.url)"
										:to="toInternalPath(subItem.url)"
										>{{ subItem.title }}</NuxtLink
									>
									<a v-else :href="subItem.url" target="_blank">{{ subItem.title }}</a>
								</li>
							</template>
						</ul>
					</li>
				</template>
			</ul>
		</nav>
		<Social :social="social" />
	</footer>
</template>

<script>
export default {
	name: 'TheFooter',
	props: {
		logo: Object,
		menu: Array,
		social: Array
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
			if (typeof url !== 'string') return url;

			if (this.isSameBackendUrl(url)) {
				const backendURL = (process.env.backendURL || '').replace(/\/+$/, '');
				const stripped = url.slice(backendURL.length);
				if (!stripped) return '/';
				return stripped.startsWith('/') ? stripped : `/${stripped}`;
			}

			return url;
		},
		hasSubItems(parentID) {
			let subItemFound = false; // kick off found flag
			this.menu.forEach((item) => {
				// loop through menu items
				if (item.menu_item_parent != 0 && item.menu_item_parent == parentID) {
					// if an item's parent ID matches the ID passed
					subItemFound = true; // flag is true
					return; // return early
				}
			});
			return subItemFound;
		}
	}
};
</script>

<style scoped lang="scss">
ul,
li {
	padding: 0;
	margin: 0;
	list-style: none;
}
footer {
	border-top: 1px solid black;
	margin-top: 50px;
	padding: 30px;
	display: flex;
	justify-content: space-between;
	@media (max-width: 850px) {
		flex-direction: column;
		align-items: center;
	}
}
nav {
	display: flex;
	align-items: flex-start;
	@media (max-width: 700px) {
		flex-direction: column;
		align-items: center;
	}
}
.footer-img {
	width: 150px;
	padding-right: 30px;
	@media (max-width: 700px) {
		width: 100px;
		padding-right: 0;
	}
	@media (max-width: 500px) {
		width: 80px;
	}
}
.footer-menu {
	display: flex;
	flex-wrap: wrap;
	@media (max-width: 700px) {
		margin-top: 20px;
	}
	@media (max-width: 500px) {
		flex-direction: column;
		text-align: center;
	}
	> li {
		margin-right: 20px;
		@media (max-width: 700px) {
			&:last-of-type {
				margin-right: 0;
			}
		}
		@media (max-width: 500px) {
			margin-right: 0;
		}
	}
	a {
		font-weight: bold;
		color: black;
		margin-right: 20px;
		text-decoration: none;
		border-bottom: 1px solid transparent;
		padding-bottom: 3px;
		&.nuxt-link-exact-active {
			color: #0073e6;
			border-bottom: 1px solid #0073e6;
		}
		&:hover {
			color: #0073e6;
			border-bottom: 1px solid #0073e6;
		}
		&:last-of-type {
			margin-right: unset;
		}
	}
}
</style>
