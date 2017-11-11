class timeFormat {

	constructor() {
		this.seconds = 0;
	}

	time_string() {
		let seconds = this.seconds;
		let hours = Math.floor(seconds / 3600);
		seconds -= hours * 3600;
		let minutes = Math.floor(seconds / 60);
		seconds -= minutes * 60;


		return this.pad(hours) + ":" + this.pad(minutes) + ":" + this.pad(seconds);
	}

	pad(number) {
		if (String(number).length < 2) {
			return "0" + String(number);
		} else {
			return String(number);
		}
	}
}

module.exports = {
	timeFormat
}
