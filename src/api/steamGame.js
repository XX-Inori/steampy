import request from '@/utils/request'
// 热门游戏列表
export function listHot(params) {
  return request({
    url: `/steamCommon/listHot`,
    method: 'get',
    params
  })
}
