export default function getDotColor(state) {
	switch (state) {
		case 'ACTIVE':
		case 'INACTIVE':
			return 'dot green'
		case 'PENDING':
		case 'CREATED':
			return 'dot yellow'
		case 'FAILED':
			return 'dot red'
		default:
			return 'dot grey'
	}
}
