<!-- exp.vue -->
<template>
	<div>		
	  <v-parallax src="/public/material.jpg" height="500">
		<v-layout align-center justify-center>
			<v-flex xs12 sm8>
			      <v-card class="blue darken-3 elevation-8">
			        <v-card-media
			          class="white--text"
			          height="200px"
			          src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iIrkw6OwEVcs/v5/640x-1.jpg"
			        >
			          <v-container fill-height fluid>
			            <v-layout fill-height>
			              <v-flex xs12 align-end flexbox>
			                <span class="headline">BlackRock, Inc</span>
			              </v-flex>
			            </v-layout>
			          </v-container>
			        </v-card-media>
			        <v-card-title>
			          <div>
			            <h6 class="grey--text">Software Analyst</h6><br>
			            <span>05/2014 - Now</span><br>
			            <span>Seattle, WA</span><br>
			            <span></span>
			          </div>
			        </v-card-title>
			      </v-card>
			</v-flex>
		</v-layout>
	  </v-parallax>
	  <v-parallax src="/public/material2.jpg" height="550">
		<v-layout align-center justify-center>
			<v-flex xs12 sm8>
				<v-card class="pink darken-4 elevation-8">
			        <v-card-media
			          class="white--text purple darken-4"
			          height="200px"
			          src="https://www.srspharmacy.com/img/srs_logo_lg.png"			        >
			          <v-container fill-height fluid>
			            <v-layout fill-height>
			              <v-flex xs12 align-end flexbox>
			                <span class="headline">SRS Pharmacy System</span>
			              </v-flex>
			            </v-layout>
			          </v-container>
			        </v-card-media>
			        <v-card-title>
			          <div>
			            <h6 class="grey--text">Software Developer Intern</h6><br>
			            <span>01/2013 - 09/2013</span><br>
			            <span>Caro, MI</span>
			          </div>
			        </v-card-title>
			      </v-card>
			</v-flex>
		</v-layout>
	  </v-parallax>
		  <v-layout>
		  	<v-flex>
            <v-fab-transition>
              <v-btn
                color="pink"
                fab
                dark
                small
                fixed 
                bottom 
                right
              >
                <v-icon>eject</v-icon>
              </v-btn>
            </v-fab-transition>
		  	</v-flex>
		  </v-layout>
	</div>
</template>