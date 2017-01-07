import { InMemoryDbService } from 'angular-in-memory-web-api'

export class CustomerDataService implements InMemoryDbService
{
  createDb()
  {
    let customers = [
      { id: 1, name: 'Customer A', phone_number: '8006670001', address: '', created: '2017-01-01', wechat_id: '' },
      { id: 2, name: 'Customer B', phone_number: '8006670002', address: '', created: '2017-01-01', wechat_id: '' },
      { id: 3, name: 'Customer C', phone_number: '8006670003', address: '', created: '2017-01-01', wechat_id: '' },
      { id: 4, name: 'Customer D', phone_number: '8006670004', address: '', created: '2017-01-01', wechat_id: '' },
      { id: 5, name: 'Customer E', phone_number: '8006670005', address: '', created: '2017-01-01', wechat_id: '' },
      { id: 6, name: 'Customer F', phone_number: '8006670006', address: '', created: '2017-01-01', wechat_id: '' },
      { id: 7, name: 'Customer G', phone_number: '8006670007', address: '', created: '2017-01-01', wechat_id: '' },
      { id: 8, name: 'Customer H', phone_number: '8006670008', address: '', created: '2017-01-01', wechat_id: '' },
      { id: 9, name: 'Customer I', phone_number: '8006670009', address: '', created: '2017-01-01', wechat_id: '' },
      { id: 10, name: 'Customer J', phone_number: '8006670010', address: '', created: '2017-01-01', wechat_id: '' },
      { id: 11, name: 'Customer K', phone_number: '8006670011', address: '', created: '2017-01-01', wechat_id: '' },
      { id: 12, name: 'Customer L', phone_number: '8006670012', address: '', created: '2017-01-01', wechat_id: '' },
      { id: 13, name: 'Customer M', phone_number: '8006670013', address: '', created: '2017-01-01', wechat_id: '' },
      { id: 14, name: 'Customer N', phone_number: '8006670014', address: '', created: '2017-01-01', wechat_id: '' },
      { id: 15, name: 'Customer O', phone_number: '8006670015', address: '', created: '2017-01-01', wechat_id: '' },
      { id: 16, name: 'Customer P', phone_number: '8006670016', address: '', created: '2017-01-01', wechat_id: '' }
    ];

    return { customers };
  }
}
