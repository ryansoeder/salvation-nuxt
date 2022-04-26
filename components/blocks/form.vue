<template>
  <section class="block basic-content">
    <div class="wrapper">
      <div class="row">
        <div class="col">
          <div class="content">
            <form
              :action="`https://tattoo-salvation.local/wp-json/contact-form-7/v1/contact-forms/${block.form[0]}/feedback`"
              method="post"
              @submit="formSubmissionHandler"
            >
              <label for="preferred-name">Preferred name</label>
              <input id="preferred-name" type="text" name="preferred-name" />
              <label for="phone-number">Phone number</label>
              <input id="phone-number" type="tel" name="phone-number" />
              <label for="email-address">Email address</label>
              <input id="email-address" type="email" name="email-address" />
              <label for="location">Location on your body you would like the tattoo</label>
              <input id="location" type="textarea" name="location" />
              <label for="description">Tattoo description including an estimate on size</label>
              <input id="description" type="textarea" name="description" />
              <label for="specifics">Any specifics you want included (Ex: time on a clock, Dates, font styles, etc)</label>
              <input id="specifics" type="textarea" name="specifics" />
              <label for="budget">Desired budget</label>
              <input id="budget" type="text" name="budget" />
              <!-- Other input elements -->
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Form',
  props: {
    block: Object,
  },
  methods: {
    formSubmissionHandler(event) {
      // https://css-tricks.com/headless-form-submission-with-the-wordpress-rest-api/
      event.preventDefault()

      const formElement = event.target,
        { action, method } = formElement,
        body = new FormData(formElement)

      fetch(action, {
        method,
        body,
      })
        .then((response) => response.json())
        .then((response) => {
          // Determine if the submission is not valid
          if (response.status !== 'mail_sent') {
            console.log('ERROR')
            console.log(response.message)
          } else {
            console.log('SUCCESS')
            console.log(response.message)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
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
    form {
      display: flex;
      flex-direction: column;
      text-align: left;
    }
    input {
      border: 2px solid black;
    }
  }
}
</style>
