import Notification from './notification'

let messageInstance

function getMessageInstance() {
  messageInstance = messageInstance || Notification.newInstance()
  return messageInstance
}

function notice({ duration = 3, content = '' }) {
  const instance = getMessageInstance()

  instance.add({
    content: content,
    duration: duration
  })
}

export default {
  info(options) {
    return notice(options)
  }
}
