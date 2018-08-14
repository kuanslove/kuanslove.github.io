(function() {

	function World(container) {
		var game_board = container.getElementsByClassName("game_board")[0]
		var pt_board = container.getElementsByClassName("pt_board")[0]
		var pt_text = pt_board.getElementsByClassName("total_pt")[0]
		var speed_slider = pt_board.getElementsByClassName("speed")[0]

		this.bubbles = [];
		this.removeIdset = {}
		this.points = 0;
		this.lastTs = null;
		this.size = [container.clientWidth, container.clientHeight];
		this.colors = ["#fa4960", "#41b883", "#05a5d1", "#3b5998", "orange"];
		this.speedChanged = true;
		this.speed = 100;
		var wd = this;
		this.changeSpeed = function(ev){
			wd.speed = +ev.target.value
			wd.speedChanged = true;
		}
		this.borderCheck = function(bubble) {
			if (this.size[1] < bubble.getPos()[1]) {
				this.hitBubble(bubble.getId())
			}
		}
		this.createBubble = function(bubbleModel) {
			var wd = this;
			var bubble = document.createElement("div");
			bubble.classList.add("bubble");
			bubble.style.top = bubbleModel.getPos()[1];
			bubble.style.left = bubbleModel.getPos()[0] + "px"
			bubble.style.width = (2 * bubbleModel.getR()) + "px";
			bubble.style.height = (2 * bubbleModel.getR()) + "px";
			bubble.style.borderRadius = bubbleModel.getR() + "px";
			bubble.style.backgroundColor = this.colors[Math.floor(Math.random() * 100) % 5];
			bubble.setAttribute("id", bubbleModel.getId());
			bubble.setAttribute("pt", bubbleModel.getVal());

			bubble.addEventListener("click", function(ev) {
				var bid = ev.target.getAttribute("id")
				var pt = +ev.target.getAttribute("pt")
				console.log(bid)
				wd.calcPt(pt);
				wd.hitBubble(bid);
			})
			return bubble
		}
		this.addBubble = function() {
			var bubble = new Bubble();
			var id = Date.now() + "";
			var r = 5 + Math.random() * 45;
			var x = Math.random() * (this.size[0] - 2 * r)
			bubble.setR(r)
			bubble.setId(id);
			bubble.setPos([x, 0])
			bubble.setSpeed(this.speed)
			var dom = this.createBubble(bubble);
			bubble.setDom(dom);
			game_board.appendChild(dom)
			this.bubbles.push(bubble)
		}
		this.hitBubble = function(id) {
			this.removeIdset[id] = true;
		}
		this.refreshPt = function() {
			pt_text.innerHTML  = this.points;
		}
		this.calcPt = function(pt) {
			this.points += pt;
			this.refreshPt()
		}
		this.update = function(ts) {
			var delta = ts - this.lastTs;
			this.lastTs = ts;
			var tmp = [];
			for (var i = 0; i < this.bubbles.length; i++) {
				var id = this.bubbles[i].getId();
				var b = this.bubbles[i];
				this.borderCheck(b)
				if (this.removeIdset[id]) {
					// this.calcPt(b);
					b.destroy();
					delete this.removeIdset[id];
					continue;
				}
				if(this.speedChanged){
					b.setSpeed(this.speed);
				}
				b.update(delta);
				tmp.push(b);
			}
			this.speedChanged = false;
			this.bubbles = tmp;
		}
		this.start = function() {
			var wd = this;
			wd.addBubble()

			function step(ts) {
				if (this.lastTs == null) {
					this.lastTs = ts;
					setInterval(function() {
						wd.addBubble();
					}, 1000)
				}
				wd.update(ts);
				requestAnimationFrame(step)
			}
			requestAnimationFrame(step)
		}
		// speed_slider.defaultValue = 0;
		speed_slider.addEventListener("change", this.changeSpeed)
	}

	function Bubble() {
		this.r = 0;
		this.pos = [0, 0]
		this.world = null;
		this.dom = null;
		this.id = null;
		this.speed = 0;
		this.val = 0;
		this.update = function(delta) {
			this.updatePos(delta);
			this.renderDom();
		}
		this.destroy = function() {
			this.dom.remove();
		}
		this.updatePos = function(delta) {
			this.setPos(this.pos[1] + this.speed * delta / 1000);
		}
		this.renderDom = function() {
			this.dom.style.top = this.pos[1] + "px";
		}
		this.getVal = function() {
			return this.val;
		}
		this.setVal = function(v) {
			this.val = v;
		}
		this.setSpeed = function(speed) {
			this.speed = speed;
		}
		this.getSpeed = function() {
			return this.speed;
		}
		this.setId = function(id) {
			this.id = id;
		}
		this.getId = function() {
			return this.id
		}
		this.setDom = function(dom) {
			this.dom = dom
		}
		this.setPos = function(pos) {
			if (typeof pos == "undefined") {
				throw "You need give a pos."
			}
			if (pos instanceof Array) {
				this.pos = pos
			} else {
				this.pos[1] = pos
			}
		}
		this.getPos = function() {
			return this.pos;
		}
		this.setR = function(r) {
			this.r = r;
			this.setVal(Math.ceil(50 / this.r));
		}
		this.getR = function(r) {
			return this.r;
		}
	}

	var w = new World(document.body);
	w.start()
})()