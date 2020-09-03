import {request} from '@/network/request'

export function getProduct(pagesize, pageindex,name,cid ) {
	let config = {
		url: '/product/query',
		data: {
			pagesize: pagesize,
			pageindex: pageindex,
			name:name,
			cid:cid,
			isrecommend:1
		}
	}
	return new Promise( resolve => {
		request(config).then(res => {
			resolve(res)
		})
	} )
}


