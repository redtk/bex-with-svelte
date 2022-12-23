<script lang="ts">
  // hack
  // Not clear why, but defining classes in <stile></style> doesn't work.
  const styles = {
    container: {
      padding: "4px",
      background: "#fff",
      position: "absolute",
      top: 0,
      left: 0,
      "font-size": "16px",
      "min-height": "100vh",
      "border-right": "1px solid #333"
    },
    link: {
      cursor: "pointer"
    }
  }

  const style = (cls, prop, val) => {
    styles[cls][prop] = val
  }

  const stringify = (obj) => {
    return Object.keys(obj)
      .map((rule) => `${rule}: ${obj[rule]};`)
      .join(" ")
  }

  $: container = stringify(styles.container)
  $: link = stringify(styles.link)
</script>

<div style={container}>
  Browser extension
  <div>
    <a
      style={link}
      href={null}
      on:click={() => style("container", "background", "red")}>red</a>
    <a
      style={link}
      href={null}
      on:click={() => style("container", "background", "green")}>green</a>
    <a
      style={link}
      href={null}
      on:click={() => style("container", "background", "blue")}>blue</a>
  </div>
</div>
