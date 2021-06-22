<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->

    <h1>The Back Garden</h1>

    <p>
      djm -Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <g-link to="/about/">
      <g-image alt="About" src="~/about.png" width="75" />
    </g-link>
    <g-link to="/herb-robert/"> 
      <g-image alt="Herb Robert" src="~/herb_robert_tn.png" width="75" />
    </g-link>
    <g-link to="/about/">
      <g-image alt="About" src="~/about.png" width="75" />
    </g-link>
    <g-link to="/herb-robert/"> 
      <g-image alt="Herb Robert" src="~/herb_robert_tn.png" width="75" />
    </g-link>    <g-link to="/about/">
      <g-image alt="About" src="~/about.png" width="75" />
    </g-link>
    <g-link to="/herb-robert/"> 
      <g-image alt="Herb Robert" src="~/herb_robert_tn.png" width="75" />
    </g-link>
    <!-- <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p> -->

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'The Back Garden'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
