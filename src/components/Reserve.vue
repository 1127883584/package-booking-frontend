<template>
  <div>
    <div style="width: 500px; margin: 50px auto;text-align: center;">
      <h2>预约取件</h2>
      <Form :model="reserve" label-position="left" :label-width="100" style="margin-top: 20px">
        <FormItem label="运单号：">
          <Input v-model="reserve.orderNumber"/>
        </FormItem>
        <FormItem label="预约时间：">
          <DatePicker type="datetime" placeholder="Select date and time" style="width: 400px"></DatePicker>
<!--          <Input v-model="reserve.pickupTime"/>-->
        </FormItem>
        <FormItem>
          <Button type="primary">确定</Button>
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
        pickupTime: ''
      }
    }
  },
  methods: {

  }
}
</script>
