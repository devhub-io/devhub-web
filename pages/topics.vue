<template>
  <section id="content">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2 style="margin-top: 50px;margin-bottom: 50px;">Topics</h2>
          <div class="row">
            <div v-for="(item, index) in topics" :key="index" class="col-md-3">
              <div class="card card-body" style="height: 50px;">
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
import { getTopics } from '@/api/repos'

export default {
  layout: 'default',
  async asyncData() {
    const topics = await getTopics().then(res => {
      return res
    })
    return { topics }
  },
  head() {
    return {
      title: 'Topics'
    }
  }
}
</script>
