export default {
  mounted(el, binding) {
    const className = binding.value || 'in-view'
    const options = binding.arg || {}
    el._observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add(className)
        } else {
          el.classList.remove(className)
        }
      })
    }, options)
    el._observer.observe(el)
  },
  unmounted(el) {
    if (el._observer) {
      el._observer.disconnect()
      delete el._observer
    }
  },
}
