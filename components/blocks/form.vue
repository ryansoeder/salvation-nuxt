<template>
	<section id="form" class="block basic-content">
		<div class="wrapper">
			<h2 class="heading">{{ block.title }}</h2>
			<div class="row">
				<div class="col">
					<div class="content">
						<ValidationObserver v-slot="{handleSubmit}">
							<form
								:action="`https://content.tattoosalvation.com/wp-json/contact-form-7/v1/contact-forms/${block.form[0]}/feedback`"
								method="post"
								@submit.prevent="
									handleSubmit(clientValidate);
									formSubmissionHandlerServer($event);
								"
								ref="form"
							>
								<ValidationProvider v-slot="{errors}" rules="required" class="validation-span">
									<label for="preferred-name"
										>Preferred name <span class="required-text"><i>(required)</i></span></label
									>
									<input
										v-model="preferredName"
										id="preferred-name"
										type="text"
										name="preferred-name"
									/>
									<span class="input-invalid-message">
										{{ errors[0] }}
									</span>
								</ValidationProvider>
								<ValidationProvider v-slot="{errors}" rules="required" class="validation-span">
									<label for="phone-number"
										>Phone number <span class="required-text"><i>(required)</i></span></label
									>
									<input v-model="phoneNumber" id="phone-number" type="tel" name="phone-number" />
									<span class="input-invalid-message">
										{{ errors[0] }}
									</span>
								</ValidationProvider>
								<ValidationProvider
									v-slot="{errors}"
									rules="required|email"
									class="validation-span"
								>
									<label for="email-address"
										>Email address <span class="required-text"><i>(required)</i></span></label
									>
									<input
										v-model="emailAddress"
										id="email-address"
										type="email"
										name="email-address"
									/>
									<span class="input-invalid-message">
										{{ errors[0] }}
									</span>
								</ValidationProvider>
								<ValidationProvider v-slot="{errors}" rules="required" class="validation-span">
									<label for="location"
										>Location on your body you would like the tattoo
										<span class="required-text"><i>(required)</i></span></label
									>
									<input v-model="location" id="location" type="textarea" name="location" />
									<span class="input-invalid-message">
										{{ errors[0] }}
									</span>
								</ValidationProvider>
								<ValidationProvider v-slot="{errors}" rules="required" class="validation-span">
									<label for="description"
										>Tattoo description including an estimate on size
										<span class="required-text"><i>(required)</i></span></label
									>
									<input
										v-model="description"
										id="description"
										type="textarea"
										name="description"
									/>
									<span class="input-invalid-message">
										{{ errors[0] }}
									</span>
								</ValidationProvider>
								<ValidationProvider
									v-slot="{errors}"
									rules="required"
									class="validation-span radios"
								>
									<span class="radio-heading"
										>Color <span class="required-text"><i>(required)</i></span></span
									>
									<div>
										<div>
											<input
												type="radio"
												name="color"
												id="black-gray"
												value="Black and gray"
												v-model="color"
											/>
											<label for="black-gray">Black and gray</label>
										</div>
										<div>
											<input type="radio" name="color" id="color" value="Color" v-model="color" />
											<label for="color">Color</label>
										</div>
									</div>
									<span class="input-invalid-message">
										{{ errors[0] }}
									</span>
								</ValidationProvider>
								<ValidationProvider
									v-slot="{errors}"
									rules="required"
									class="validation-span radios"
									v-if="block.form[0] === 295"
								>
									<!-- general consultation form -->
									<span class="radio-heading"
										>Tattoo Style <span class="required-text"><i>(required)</i></span></span
									>
									<div>
										<div>
											<input
												type="radio"
												name="style"
												id="realistic"
												value="Realistic"
												v-model="style"
											/>
											<label for="realistic">Realistic</label>
										</div>
										<div>
											<input
												type="radio"
												name="style"
												id="traditional"
												value="Traditional"
												v-model="style"
											/>
											<label for="traditional">Traditional</label>
										</div>
										<div>
											<input type="radio" name="style" id="other" value="Other" v-model="style" />
											<label for="other">Other (describe below)</label>
										</div>
									</div>
									<span class="input-invalid-message">
										{{ errors[0] }}
									</span>
								</ValidationProvider>
								<ValidationProvider v-slot="{errors}" class="validation-span">
									<label for="specifics"
										>Any specifics you want included (ex: time on a clock, dates, font styles,
										etc)</label
									>
									<input v-model="specifics" id="specifics" type="textarea" name="specifics" />
								</ValidationProvider>
								<ValidationProvider v-slot="{errors}" class="validation-span">
									<label for="budget">Desired budget</label>
									<input v-model="budget" id="budget" type="text" name="budget" />
								</ValidationProvider>
								<button class="btn btn-main rounded-pill" type="submit">Submit</button>
							</form>
							<small
								>This site is protected by reCAPTCHA and the Google
								<a href="https://policies.google.com/privacy">Privacy Policy</a>
								and
								<a href="https://policies.google.com/terms">Terms of Service</a>
								apply.
							</small>
						</ValidationObserver>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import {ValidationObserver, ValidationProvider} from 'vee-validate';
import {setInteractionMode} from 'vee-validate';

setInteractionMode('eager');

export default {
	name: 'Form',
	components: {
		ValidationObserver,
		ValidationProvider
	},
	props: {
		block: Object
	},
	data() {
		return {
			preferredName: null,
			phoneNumber: null,
			emailAddress: null,
			location: null,
			description: null,
			color: null,
			specifics: null,
			budget: null
		};
	},
	async mounted() {
		try {
			await this.$recaptcha.init();
		} catch (e) {
			console.error(e);
		}
	},
	beforeDestroy() {
		this.$recaptcha.destroy();
	},
	methods: {
		normalizeContactForm7Response(response) {
			// The other possible statuses are different kind of errors
			const isSuccess = response.status === 'mail_sent';
			// A message is provided for all statuses
			const message = response.message;
			const validationError = isSuccess
				? {}
				: // We transform an array of objects into an object
				  Object.fromEntries(
						response.invalid_fields.map((error) => {
							// Extracts the part after "cf7-form-control-wrap"
							const key = /cf7[-a-z]*.(.*)/.exec(error.into)[1];

							return [key, error.message];
						})
				  );

			return {
				isSuccess,
				message,
				validationError
			};
		},
		async formSubmissionHandlerServer(event) {
			const token = await this.$recaptcha.execute('login');

			// https://css-tricks.com/headless-form-submission-with-the-wordpress-rest-api/

			const formElement = event.target,
				{action, method} = formElement,
				body = new FormData(formElement);

			//recaptcha responses to pass back to CF7
			body.append('_wpcf7_recaptcha_response', token);

			fetch(action, {
				method,
				body
			})
				.then((response) => response.json())
				.then((response) => this.normalizeContactForm7Response(response))
				.then((response) => {
					console.log(response.message);

					if (response.isSuccess) {
						formElement.reset();
					}
				})
				.catch((error) => {
					alert('Send error. Check the console for details.');
					console.log(error);
				});
		},
		clientValidate() {
			this.$swal({
				icon: 'success',
				title: 'Success!',
				text: 'Please note that reponses can take up to 1 week. If you have not heard form us in that time, check your spam folders before reaching back out. Thanks!'
			});
		}
	}
};
</script>

<style scoped lang="scss">
.block.basic-content {
	.heading {
		text-align: center;
		margin-bottom: 30px;
	}
	.content {
		margin: 0 auto;
		text-align: center;
		max-width: 600px;
		.title {
			margin-bottom: 50px;
		}
		form {
			display: flex;
			flex-direction: column;
			text-align: left;
		}
		input {
			border: 2px solid black;
			&:focus {
			}
		}
		.required-text {
			color: #e00000;
		}
		.validation-span {
			display: flex;
			flex-direction: column;
			&.radios {
				margin-bottom: 20px;
				.radio-heading {
					margin-bottom: 5px;
				}
				label,
				input {
					margin-bottom: 0;
				}
				.input-invalid-message {
					margin: 0;
				}
			}
		}
		.input-invalid-message {
			margin-bottom: 20px;
			margin-top: -20px;
			color: white;
			background-image: linear-gradient(to right, tomato 80%, white);
			padding-left: 5px;
			padding-right: 5px;
		}
		button[type='submit'] {
			width: 256px;
			margin-left: auto;
			margin-right: auto;
		}
	}
}
</style>
