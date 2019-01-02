'use strict'

const formatTime = millis => {
  const roundToThousandth = x => Math.ceil(x * 1000) / 1000

  if (millis < 1000) {
    return `${roundToThousandth(millis)} ms`
  } else {
    return `${roundToThousandth(millis) / 1000} s`
  }
}

const profile = (fn, description) => {
  description = description || fn.name

  // Use `function` because we want `this` to be the caller's.
  return function() {
    const begin = performance.now()

    const result = fn.apply(this, arguments)

    const end = performance.now()

    console.log(`${description}: ${formatTime(end - begin)}`)

    return result
  }
}

module.exports = profile
