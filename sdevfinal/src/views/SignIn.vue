<template>
  <form>
    <v-text-field
      v-model="Username"
      :error-messages="UsernameErrors"
      :counter="10"
      label="Username"
      required
      @input="$v.Username.$touch()"
      @blur="$v.Username.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="Password"
      :error-messages="PasswordErrors"
      label="Password"
      required
      @input="$v.Password.$touch()"
      @blur="$v.Password.$touch()"
    ></v-text-field>

    <v-btn
      class="mr-4"
      @click="submit"
    >
      submit
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength} from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin],

    validations: {
        Username: { required, maxLength: maxLength(10) },
        Password: { required, Password: maxLength(10) },
        select: { required },
        checkbox: {
            checked(val) {
                return val
            },
        },
    },

    data: () => ({
        Username: '',
        Password: '',
    }),

    computed: {
        checkboxErrors() {
            const errors = []
            if (!this.$v.checkbox.$dirty) return errors
            !this.$v.checkbox.checked && errors.push('You must agree to continue!')
            return errors
        },
        selectErrors() {
            const errors = []
            if (!this.$v.select.$dirty) return errors
            !this.$v.select.required && errors.push('Item is required')
            return errors
        },
        UsernameErrors() {
            const errors = []
            if (!this.$v.Username.$dirty) return errors
            !this.$v.Username.maxLength && errors.push('Username must be at most 10 characters long')
            !this.$v.Username.required && errors.push('Username is required.')
            return errors
        },
        PasswordErrors() {
            const errors = []
            if (!this.$v.Password.$dirty) return errors
            !this.$v.Password.Password && errors.push('Must be valid e-mail')
            !this.$v.Password.required && errors.push('E-mail is required')
            return errors
        },
    },

    methods: {
        submit() {
            this.$v.$touch()
        },
        clear() {
            this.$v.$reset()
            this.Username = ''
            this.Password = ''
        },
    },
}
</script>