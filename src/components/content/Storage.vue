<template>
  <div>
    <div style="width: 500px; margin: 50px auto;text-align: center;">
      <h2>包裹入库</h2>
      <Form :model="storage" label-position="left" :label-width="100" style="margin-top: 20px">
        <FormItem label="运单号：">
          <Input v-model="storage.orderNumber"/>
        </FormItem>
        <FormItem label="收件人：">
          <Input v-model="storage.recipient"/>
        </FormItem>
        <FormItem label="电话：">
          <Input v-model="storage.phone"/>
        </FormItem>
        <FormItem label="重量">
          <Input v-model="storage.weight"/>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="submit">确定入库</Button>
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
      storage: {
        orderNumber: '',
        recipient: '',
        phone: '',
        weight: ''
      }
    }
  },
  methods: {
    submit () {
      this.$store.dispatch('storage', this.storage).then(() => {
        this.$Modal.success({
          title: '入库成功！'
        })
      }).catch((e) => {
        console.log(e)
      })
    }
  }
}
</script>
