<script lang="ts">
  export let title: string
  export let titleFont: number
</script>

<h1
  style="line-height: normal; font-size: {titleFont}px;"
  class="{$$props.class} -my-6 whitespace-nowrap text-center font-black"
>
  {title.toUpperCase()}
</h1>
