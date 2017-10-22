<!-- contact.vue -->
<template>
	<v-card color="grey lighten-4" flat>
		<v-card-media src="/public/plane.jpg" height="200px">
		</v-card-media>
		<v-card-title primary-title>
			<div>
				<h6 class="headline">Leave Message To Me Here</h6>
			</div>
		</v-card-title>
    	<v-card-text>
			<v-container>
				<v-layout>
					<v-flex>
					  <v-form v-model="valid">
					    <v-text-field
					      label="Name"
					      v-model="name"
					      :rules="nameRules"
					      :counter="10"
					      required
					    ></v-text-field>
					    <v-text-field
					      label="E-mail"
					      v-model="email"
					      :rules="emailRules"
					      required
					    ></v-text-field>
				        <v-btn
					      @click="submit"
					      :disabled="!valid"
					    >
					      submit
					    </v-btn>
					    <v-btn @click="clear">
						    clear
						</v-btn>
					  </v-form>
					</v-flex>
				</v-layout>
			</v-container>
    	</v-card-text>
	</v-card>

</template>

<script>
	export default {
		data(){
			return {
				valid:true
			}
		},
		methods: {
			nameRules(){
				return true;
			},
			emailRules(){
				return true;
			}
		}
	}
</script>