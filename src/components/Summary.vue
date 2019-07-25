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
          render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'person'
                }
              }),
              h('span', this.getStatus(params.row.status))
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
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.show(params.index)
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
    }
  },
  mounted() {
    this.$store.dispatch('getOrders')
  }
}
</script>
