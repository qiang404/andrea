import {
	request
} from '@/network/request'

export function getBanner(pagesize, callback) {
	let config = {
		url: '/banner/query',
		data: {
			pagesize: pagesize
		}
	}
	request(config).then(res => {
		if (res.message === 'success' && res.status === 0) {
			callback && callback(res.table)
		}
	})
}