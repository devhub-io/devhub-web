<template>
  <div id="calendar" class="fc fc-unthemed fc-ltr">
    <div class="fc-toolbar fc-header-toolbar">
      <div class="fc-right">
        <button type="button" class="fc-today-button fc-button fc-corner-left fc-corner-right" @click="refreshDate">今天</button>
        <div class="fc-button-group">
          <button type="button" class="fc-prev-button fc-button fc-corner-left" @click="prevMonth">
            <span class="fc-icon fc-icon-left-single-arrow"/>
          </button>
          <button type="button" class="fc-next-button fc-button fc-corner-right" @click="nextMonth">
            <span class="fc-icon fc-icon-right-single-arrow"/>
          </button>
        </div>
      </div>
      <div class="fc-center"><h3>{{ selectMonthStr }}</h3></div>
      <div class="fc-clear"/>
    </div>
    <div class="fc-view-container" style="">
      <div class="fc-view fc-month-view fc-basic-view" style="">
        <div class="fc-row fc-widget-header">
          <table class="day-header">
            <thead>
              <tr>
                <th class="fc-day-header fc-widget-header"><span>日</span></th>
                <th class="fc-day-header fc-widget-header"><span>一</span></th>
                <th class="fc-day-header fc-widget-header"><span>二</span></th>
                <th class="fc-day-header fc-widget-header"><span>三</span></th>
                <th class="fc-day-header fc-widget-header"><span>四</span></th>
                <th class="fc-day-header fc-widget-header"><span>五</span></th>
                <th class="fc-day-header fc-widget-header"><span>六</span></th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="fc-day-grid fc-unselectable">
          <div v-for="(week, index) in calendar" :key="'week' + index" class="fc-row fc-rigid" style="height: 85px;">
            <div class="fc-bg">
              <table>
                <tbody>
                  <tr>
                    <td v-for="(day, index) in week" :key="'d1' + index" :class="{ 'use': day.data !== null }" @click="selectDate(day)" />
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="fc-content-skeleton">
              <table>
                <thead>
                  <tr>
                    <td v-for="(day, index) in week" :key="'d2' + index" :class="{ 'fc-day-top': true, 'use': day.data !== null }" @click="selectDate(day)">
                      <span class="fc-day-number">{{ day.day }}</span>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td v-for="(day, index) in week" :key="'d3' + index" :class="{ 'use': day.data !== null }" @click="selectDate(day)">
                      {{ day.data !== null ? '￥' + day.data.selling_price : '' }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { getGoodsCalendar } from '@/api/repos'

const month_olympic = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const month_normal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

export default {
  name: 'Calendar',
  props: {
    goodsId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      calendar: [],
      month: '',
      selectMonth: null,
      selectMonthStr: '',
      goodsCalendar: []
    }
  },
  computed: {
    today() {
      return new Date()
    }
  },
  watch: {
    selectMonth() {
      this.selectMonthStr = moment(this.selectMonth).format('YYYY-MM')
      this.refreshDate()
    }
  },
  mounted() {
    this.selectMonth = new Date()
    this.getGoodsCalendar()
  },
  methods: {
    daysMonth(month, year) {
      if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return (month_olympic[month])
      } else {
        return (month_normal[month])
      }
    },
    dayStart(month, year) {
      const tmpDate = new Date(year, month, 1)
      return (tmpDate.getDay())
    },
    getGoodsCalendar() {
      getGoodsCalendar(this.goodsId).then(res => {
        if (res.code === 200) {
          this.goodsCalendar = res.data
          this.refreshDate()
        }
      })
    },
    refreshDate() {
      const _date = this.selectMonth
      const _year = _date.getFullYear()
      const _month = _date.getMonth()
      const startMonth = moment(_date).startOf('month').toDate()

      const date = []
      // 获取该月总天数
      const totalDay = this.daysMonth(_month, _year)
      // 获取该月第一天是星期几
      const firstDay = this.dayStart(_month, _year)
      for (let i = 1; i < firstDay; i++) {
        date.push('')
      }
      for (let i = 1; i <= totalDay; i++) {
        date.push(i)
      }

      const gcLength = this.goodsCalendar.length
      let offset = 0

      let j = 0
      let tmp = []
      const calendar = []
      date.forEach(i => {
        j = j + 1
        const format_date = i > 0 ? moment(startMonth).add(i - 1, 'd').format('YYYY-MM-DD') : ''
        let data = null
        for (let l = offset; l < gcLength; l++) {
          if (this.goodsCalendar[l].date === format_date) {
            offset = offset + 1
            data = this.goodsCalendar[l]
          }
        }
        tmp.push({ date: format_date, day: i, data: data })
        if (j % 7 === 0 || j === date.length) {
          if (j === date.length) {
            const pl = 7 - tmp.length
            for (let k = 1; k <= pl; k++) {
              tmp.push({ date: '', day: '', data: null })
            }
          }
          calendar.push(tmp)
          tmp = []
        }
      })
      this.calendar = calendar
    },
    nextMonth() {
      if (moment(this.selectMonth).add(1, 'M').format('YYYYMM') < moment(this.today).add(2, 'M').format('YYYYMM')) {
        this.selectMonth = moment(this.selectMonth).add(1, 'M').toDate()
      }
    },
    prevMonth() {
      if (moment(this.selectMonth).subtract(1, 'M').format('YYYYMM') >= moment(this.today).format('YYYYMM')) {
        this.selectMonth = moment(this.selectMonth).subtract(1, 'M').toDate()
      }
    },
    selectDate(day) {
      if (day.data !== null) {
        this.$emit('selectDay', day.data)
      }
    }
  }
}
</script>

<style scoped>
  .use {
    background: #fcf8e3;
    cursor: pointer;
    color: #000;
  }
  .day-header {
    border-bottom: 1px solid #ddd !important;
  }

  .fc-icon, body .fc {
    font-size: 1em
  }

  .fc-button-group, .fc-icon {
    display: inline-block
  }

  .fc-bg, .fc-row .fc-bgevent-skeleton, .fc-row .fc-highlight-skeleton {
    bottom: 0
  }

  .fc-icon, .fc-unselectable {
    -khtml-user-select: none;
    -webkit-touch-callout: none
  }

  .fc {
    direction: ltr;
    text-align: left
  }

  .fc th, .fc-basic-view td.fc-week-number, .fc-icon, .fc-toolbar {
    text-align: center
  }

  .fc-unthemed .fc-content, .fc-unthemed .fc-divider, .fc-unthemed .fc-list-heading td, .fc-unthemed .fc-list-view, .fc-unthemed .fc-popover, .fc-unthemed .fc-row, .fc-unthemed tbody, .fc-unthemed td, .fc-unthemed th, .fc-unthemed thead {
    border-color: #ddd
  }

  .fc-unthemed .fc-popover {
    background-color: #fff
  }

  .fc-unthemed .fc-divider, .fc-unthemed .fc-list-heading td, .fc-unthemed .fc-popover .fc-header {
    background: #eee
  }

  .fc-unthemed .fc-popover .fc-header .fc-close {
    color: #666
  }

  .fc-icon {
    height: 1em;
    line-height: 1em;
    overflow: hidden;
    font-family: "Courier New", Courier, monospace;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
  }

  .fc-icon:after {
    position: relative
  }

  .fc-icon-left-single-arrow:after {
    content: "\02039";
    font-weight: 700;
    font-size: 200%;
    top: -7%
  }

  .fc-icon-right-single-arrow:after {
    content: "\0203A";
    font-weight: 700;
    font-size: 200%;
    top: -7%
  }

  .fc button {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    height: 2.1em;
    padding: 0 .6em;
    font-size: 1em;
    white-space: nowrap;
    cursor: pointer
  }

  .fc button::-moz-focus-inner {
    margin: 0;
    padding: 0
  }

  .fc button .fc-icon {
    position: relative;
    top: -.05em;
    margin: 0 .2em;
    vertical-align: middle
  }
  .fc-popover .fc-header .fc-close, a[data-goto] {
    cursor: default;
  }

  .fc .fc-button-group > * {
    float: left;
    margin: 0 0 0 -1px
  }

  .fc .fc-button-group > :first-child {
    margin-left: 0
  }

  .fc-ltr .fc-popover .fc-header .fc-title, .fc-rtl .fc-popover .fc-header .fc-close {
    float: left
  }

  .fc-ltr .fc-popover .fc-header .fc-close, .fc-rtl .fc-popover .fc-header .fc-title {
    float: right
  }

  .fc-popover > .ui-widget-header + .ui-widget-content {
    border-top: 0
  }

  .fc-bg table, .fc-row .fc-bgevent-skeleton table, .fc-row .fc-highlight-skeleton table {
    height: 100%
  }

  .fc-clear {
    clear: both
  }

  .fc-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0
  }

  .fc table {
    width: 100%;
    box-sizing: border-box;
    table-layout: fixed;
    border-collapse: collapse;
    border-spacing: 0;
    font-size: 1em
  }

  .fc td, .fc th {
    border-style: solid;
    border-width: 1px;
    padding: 0;
    vertical-align: top
  }

  .fc td.fc-today {
    border-style: double
  }

  a[data-goto]:hover {
    text-decoration: underline
  }

  .fc .fc-row {
    border-style: solid;
    border-width: 0
  }

  .fc-row table {
    border-left: 0 hidden transparent;
    border-right: 0 hidden transparent;
    border-bottom: 0 hidden transparent
  }

  .fc-row:first-child table {
    border-top: 0 hidden transparent
  }

  .fc-row {
    position: relative
  }

  .fc-row .fc-bg {
    z-index: 1
  }

  .fc-row .fc-bgevent-skeleton td, .fc-row .fc-highlight-skeleton td {
    border-color: transparent
  }

  .fc-row .fc-content-skeleton {
    position: relative;
    z-index: 4;
    padding-bottom: 2px
  }

  .fc-row .fc-content-skeleton td, .fc-row .fc-helper-skeleton td {
    background: 0 0;
    border-color: transparent;
    border-bottom: 0;
  }

  .fc-row .fc-content-skeleton tbody td, .fc-row .fc-helper-skeleton tbody td {
    border-top: 0
  }

  .fc-row.fc-rigid, .fc-time-grid-event {
    overflow: hidden
  }

  .fc-scroller > .fc-day-grid, .fc-scroller > .fc-time-grid {
    position: relative;
    width: 100%
  }

  .fc-not-allowed, .fc-not-allowed .fc-event {
    cursor: not-allowed
  }

  .fc-event .fc-bg {
    z-index: 1;
    background: #fff;
    opacity: .25
  }

  .fc-event.fc-allow-mouse-resize .fc-resizer, .fc-event.fc-selected .fc-resizer {
    display: block
  }

  .fc-event.fc-selected .fc-resizer:before {
    content: "";
    position: absolute;
    z-index: 9999;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 40px;
    margin-left: -20px;
    margin-top: -20px
  }

  .fc-ltr .fc-day-grid-event.fc-allow-mouse-resize .fc-start-resizer, .fc-rtl .fc-day-grid-event.fc-allow-mouse-resize .fc-end-resizer {
    margin-left: -2px
  }

  .fc-ltr .fc-day-grid-event.fc-allow-mouse-resize .fc-end-resizer, .fc-rtl .fc-day-grid-event.fc-allow-mouse-resize .fc-start-resizer {
    margin-right: -2px
  }

  .fc-day-grid .fc-row {
    z-index: 1
  }

  .fc-unselectable {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent
  }

  .fc-toolbar.fc-header-toolbar {
    margin-bottom: 1em;
  }

  .fc-toolbar .fc-left {
    float: left
  }

  .fc-toolbar .fc-right {
    float: right
  }

  .fc-toolbar .fc-center {
    display: inline-block
  }

  .fc .fc-toolbar > * > * {
    float: left;
    margin-left: .75em
  }

  .fc .fc-toolbar > * > :first-child {
    margin-left: 0
  }

  .fc-toolbar h2 {
    margin: 0
  }

  .fc-toolbar button {
    position: relative
  }

  .fc-toolbar .fc-state-hover, .fc-toolbar .ui-state-hover {
    z-index: 2
  }

  .fc-toolbar .fc-state-down {
    z-index: 3
  }

  .fc-toolbar .fc-state-active, .fc-toolbar .ui-state-active {
    z-index: 4
  }

  .fc-toolbar button:focus {
    z-index: 5
  }

  .fc-view-container *, .fc-view-container :after, .fc-view-container :before {
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box
  }

  .fc-view, .fc-view > table {
    position: relative;
    z-index: 1
  }

  .fc-basicDay-view .fc-content-skeleton, .fc-basicWeek-view .fc-content-skeleton {
    padding-bottom: 1em
  }

  .fc-basic-view .fc-body .fc-row {
    min-height: 4em
  }

  .fc-row.fc-rigid .fc-content-skeleton {
    position: absolute;
    top: 0;
    left: 0;
    right: 0
  }

  .fc-day-top.fc-other-month {
    opacity: .3
  }

  .fc-basic-view .fc-day-number, .fc-basic-view .fc-week-number {
    padding: 2px
  }

  .fc-basic-view th.fc-day-number, .fc-basic-view th.fc-week-number {
    padding: 0 2px
  }

  .fc-ltr .fc-basic-view .fc-day-top .fc-day-number {
    float: right
  }

  .fc-rtl .fc-basic-view .fc-day-top .fc-day-number {
    float: left
  }

  .fc-ltr .fc-basic-view .fc-day-top .fc-week-number {
    float: left;
    border-radius: 0 0 3px
  }

  .fc-rtl .fc-basic-view .fc-day-top .fc-week-number {
    float: right;
    border-radius: 0 0 0 3px
  }

  .fc-basic-view .fc-day-top .fc-week-number {
    min-width: 1.5em;
    text-align: center;
    background-color: #f2f2f2;
    color: grey
  }

  .fc-basic-view td.fc-week-number > * {
    display: inline-block;
    min-width: 1.25em
  }

  .fc-agenda-view .fc-day-grid {
    position: relative;
    z-index: 2
  }

  .fc-agenda-view .fc-day-grid .fc-row {
    min-height: 3em
  }

  .fc-agenda-view .fc-day-grid .fc-row .fc-content-skeleton {
    padding-bottom: 1em
  }

  .fc-list-table td {
    border-width: 1px 0 0;
    padding: 8px 14px
  }

  .fc-list-table tr:first-child td {
    border-top-width: 0
  }

  .fc-list-heading td {
    font-weight: 700
  }

  .fc-list-item:hover td {
    background-color: #f5f5f5
  }

  .fc-list-item-title a {
    text-decoration: none;
    color: inherit
  }

  .fc-list-item-title a[href]:hover {
    text-decoration: underline
  }
</style>
