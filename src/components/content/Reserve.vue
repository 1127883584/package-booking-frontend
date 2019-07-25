<template>
  <div>
    <div style="width: 500px; margin: 50px auto;text-align: center;">
      <h2>预约取件</h2>
      <Form :model="reserve" label-position="left" :label-width="100" style="margin-top: 20px">
        <FormItem label="运单号：">
          <Input v-model="reserve.orderNumber"/>
        </FormItem>
        <FormItem label="预约时间：">
          <DatePicker v-model="reserve.pickupTime" type="datetime" placeholder="Select date and time" style="width: 400px" ></DatePicker>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="submit">确定</Button>
          <Button style="margin-left: 8px">重置</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      reserve: {
        orderNumber: '',
        pickupTime: new Date()
      }
    }
  },
  methods: {
    submit () {
      let newReserve = {}
      for (let i = 0; i < this.$store.state.items.length; i++) {
        if (this.reserve.orderNumber === this.$store.state.items[i].orderNumber) {
          newReserve = this.$store.state.items[i]
        }
      }
      newReserve.pickupTime = this.reserve.pickupTime.getTime()
      newReserve.status = 2
      console.log(JSON.stringify(newReserve))
      this.$store.dispatch('reserve', newReserve).then(() => {
        this.$Modal.success({
          title: '预约成功！'
        })
      }).catch((e) => {
        console.log(e)
      })
    }
  }
}
</script>
