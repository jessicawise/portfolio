<script>
export default {
  name: 'track-scroll',
  data() {
    return {
      scrollY: 0,
    }
  },

  created () {
    window.addEventListener('scroll', this.handleScroll);
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll(e) {
      this.scrollY = e.target.scrollingElement.scrollTop
    },
  }
}
</script>
