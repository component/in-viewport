module.exports = function (el, threshold) {
  threshold = threshold || 0

  var rect = el.getBoundingClientRect()
  var height = (rect.height || el.clientHeight || 0) + threshold
  var width = (rect.width || el.clientWidth || 0) + threshold

  return rect.top >= - height
    && rect.left >= - width
    && rect.bottom <= height + window.innerHeight
    && rect.right <= width + window.innerWidth
}