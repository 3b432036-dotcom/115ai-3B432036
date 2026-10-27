/**
 * v-reveal：元素進入視窗時加上 .visible，取代原本每頁重複的 IntersectionObserver 程式碼。
 * 不支援 IntersectionObserver 的環境會直接顯示內容。
 */
const observer =
  typeof window !== 'undefined' && 'IntersectionObserver' in window
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          })
        },
        { threshold: 0.12 },
      )
    : null

export default {
  mounted(el) {
    el.classList.add('reveal')

    if (!observer) {
      el.classList.add('visible')
      return
    }

    observer.observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
