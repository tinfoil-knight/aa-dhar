import moment from 'moment'

export default function getFormattedTime(time) {
	return moment(time).format('DD-MM-YY, hh:mm a')
}
