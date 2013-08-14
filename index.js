module.exports = function (el, threshold) {
  threshold = threshold || 0
  var height = window.innerHeight + threshold
  var width = window.innerWidth + threshold
  var rect = el.getBoundingClientRect()

  return rect.top >= rect.height - height
    && rect.left >= rect.width - width
    && rect.bottom <= rect.height + height
    && rect.right <= rect.width + width
}