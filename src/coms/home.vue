<!-- home.vue -->
<template>
	<div>
	  <v-parallax src="/public/material.jpg" height="650">
	    <v-layout column align-center justify-center>
	      <h1 class="white--text">Hello from Kuan</h1>
	      <h4 class="white--text">Design | Code</h4>
	    </v-layout>
	  </v-parallax>
	  <v-parallax src="/public/material2.jpg" height="500">
		<v-layout align-center justify-center>
			<v-flex xs12 sm8 style="text-align:center;">
				<h4>My Interest includes</h4>
				<h4>UI Designer / Web App Developer</h4>
			</v-flex>
		</v-layout>
	  </v-parallax>
	  <v-parallax src="/public/material.jpg" height="500">
		<v-layout align-center justify-center>
			<v-flex xs12 sm8>
				<v-card class="green lighten-1 elevation-8">
					<v-card-media src="/public/desert.jpg" height="200px">
					</v-card-media>
					<v-card-title primary-title>
						<div>
						<h3 class="headline mb-0">Kangaroo Valley Safari</h3>
						<div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
						</div>
					</v-card-title>
					<v-card-actions>
						<v-btn flat class="orange--text">Share</v-btn>
						<v-btn flat class="orange--text">Explore</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	  </v-parallax>
	  <v-parallax src="/public/material2.jpg" height="550">
		<v-layout align-center justify-center>
			<v-flex xs12 sm8>
				<v-card class="cyan darken-2 elevation-8">
					<v-card-media src="/public/desert.jpg" height="200px">
					</v-card-media>
					<v-card-title primary-title>
						<div>
						<h3 class="headline mb-0">Kangaroo Valley Safari</h3>
						<div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
						</div>
					</v-card-title>
					<v-card-actions>
						<v-btn flat class="orange--text">Share</v-btn>
						<v-btn flat class="orange--text">Explore</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	  </v-parallax>
	</div>

	
</template>

<script>
  export default {
    data () {
      return {
        card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
      }
    }
  }
</script>