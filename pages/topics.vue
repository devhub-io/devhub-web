<template>
  <section id="content">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Topics</h1>
          <div class="row">
            <div v-for="(item, index) in topics" :key="index" class="col-md-3 topic-item">
              <div class="card card-body">
                <div class="caption">
                  <nuxt-link :to="`/topic/${item.topic}`"><h4> {{ item.topic }}  ( {{ item.number }} )</h4></nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  layout: 'default',
  async asyncData({ store }) {
    const topics = await store.dispatch('getTopics')
    return { topics }
  },
  head() {
    return {
      title: 'Topics'
    }
  }
}
</script>

<style scoped>
  h1 {
    margin-top: 50px;
    margin-bottom: 50px;
    text-align: center;
  }
  .topic-item {
    height: 120px;
  }
</style>
