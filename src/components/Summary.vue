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
          key: 'status'
        },
        {
          title: '预约时间',
          key: 'pickupTime'
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
    getLocalTime (nS) {
      return new Date(parseInt(nS) * 1000).toLocaleString().replace(/年|月/g, '-').replace(/日/g, ' ')
    }
  }
}
</script>
