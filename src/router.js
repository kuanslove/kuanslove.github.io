// router.js
import Vue from "vue"
import VueRouter from "vue-router"

import Home from "./coms/home.vue";

Vue.use(VueRouter);

// var Home = {template: "<div>Home View</div>"}
var User = {template: "<div><h4>User View</h4><v-btn>SHOW USER</v-btn></div>"}


var routes = [
	{
		path:"/",
		component: Home
	},
	{
		path:"/user",
		component: User
	}
]

var router = new VueRouter({
	routes
})

export default router;