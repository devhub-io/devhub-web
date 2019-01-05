const TokenKey = 'token'

export function getToken() {
  if (process.browser) {
    return localStorage.getItem(TokenKey)
  } else {
    return null
  }
}

export function setToken(token) {
  if (process.browser) {
    return localStorage.setItem(TokenKey, token)
  } else {
    return null
  }
}

export function removeToken() {
  if (process.browser) {
    return localStorage.removeItem(TokenKey)
  } else {
    return null
  }
}
