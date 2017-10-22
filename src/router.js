// router.js
import Vue from "vue"
import VueRouter from "vue-router"

import Home from "./coms/home.vue";
import Exp from "./coms/exp.vue";
import Edu from "./coms/edu.vue";
import Contact from "./coms/contact.vue";


Vue.use(VueRouter);

// var Home = {template: "<div>Home View</div>"}
var User = {template: "<div><h4>User View</h4><v-btn>SHOW USER</v-btn></div>"}


var routes = [
	{
		path:"/",
		component: Home
	},
	{
		path:"/exp",
		component: Exp
	},
	{
		path:"/edu",
		component: Edu
	},
	{
		path:"/contact",
		component: Contact
	}
]

var router = new VueRouter({
	routes
})

export default router;