import request from '@/utils/request'
// 轮播图
export function listBanner(params) {
  return request({
    url: `/steamCommon/listBanner`,
    method: 'get',
    params
  })
}
