<script lang="ts">
  const style = {
    container: [
      "padding: 4px",
      "background: #fff",
      "position: absolute",
      "top: 0",
      "left: 0",
      "font-size: 16px",
      "min-height: 100vh",
      "border-right: 1px solid #333"
    ].join(";"),
    link: 'cursor: "pointer"'
  }
</script>

<div class="container" style={style.container}>
  Browser extension
  <div>
    <a class="link" style={style.link} href={null}>foo</a>
    <a style={style.link} href={null}>bar</a>
    <a style={style.link} href={null}>baz</a>
  </div>
</div>

<style>
  /* classes not working
  .container {
      padding: 4px;
      background: #fff;
      position: absolute;
      top: 0;
      left: 0;
      font-size: 16px;
      min-height: 100vh;
      border-right: 1px solid #333;
  }
  .link {
    cursor: pointer;
  } */
</style>
