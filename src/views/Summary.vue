<template>
  <Table border :columns="columns7" :data="data6"></Table>
</template>
<script>
export default {
  data () {
    return {
      columns7: [
        {
          title: '运单号',
          key: 'orderNumber',
          render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'person'
                }
              }),
              h('strong', params.row.orderNumber)
            ])
          }
        },
        {
          title: '收件人',
          key: 'recipient'
        },
        {
          title: '电话',
          key: 'phone'
        },
        {
          title: '状态',
          key: 'status',
          filters: [
            {
              label: '未预约',
              value: 1
            },
            {
              label: '已预约',
              value: 2
            },
            {
              label: '已取件',
              value: 3
            }
          ],
          filterMultiple: false,
          filterMethod (value, row) {
            return row.status === value
          },
          render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'person'
                }
              }),
              h('span', {
                style: {
                  color: params.row.status === 3 ? '#19be6b' : 'black'
                }
              }, this.getStatus(params.row.status))
            ])
          }
        },
        {
          title: '预约时间',
          key: 'pickupTime',
          render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'person'
                }
              }),
              h('span', this.getLocalTime(params.row.pickupTime))
            ])
          }
        },
        {
          title: 'Action',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px',
                  display: params.row.status !== 3 ? 'inline-block' : 'none'
                },
                on: {
                  click: () => {
                    this.confirmReceipt(params.index)
                  }
                }
              }, '确定收货')
            ])
          }
        }
      ],
      data6: this.$store.state.items
    }
  },
  methods: {
    show (index) {
      this.$Modal.info({
        title: 'User Info',
        content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
      })
    },
    remove (index) {
      this.data6.splice(index, 1)
    },
    getLocalTime (timestamp) {
      if (!timestamp) {
        return ''
      } else {
        let d = new Date(timestamp)
        let date = (d.getFullYear()) + '-' +
          (d.getMonth() + 1) + '-' +
          (d.getDate()) + ' ' +
          (d.getHours()) + ':' +
          (d.getMinutes()) + ':' +
          (d.getSeconds())
        return date
      }
    },
    getStatus (status) {
      if (status === 1) {
        return '未预约'
      } else if (status === 2) {
        return '已预约'
      } else if (status === 3) {
        return '已取件'
      }
    },
    confirmReceipt (index) {
      this.$Modal.confirm({
        title: '确认收货?',
        onOk: () => {
          let order = this.$store.state.items[index]
          order.status = 3
          this.$store.dispatch('confirmReceipt', order)
        },
        onCancel: () => {
        }
      })
    }
  },
  mounted () {
    this.$store.dispatch('getOrders')
  }
}
</script>
