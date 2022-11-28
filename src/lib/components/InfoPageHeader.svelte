<script lang="ts">
  export let title: string
  export let titleFont: number
</script>

  <div class=''>
    <h1 style="font-size: {titleFont}px;"
        class="my-20 whitespace-nowrap font-black text-center">THE {title.toUpperCase()}</h1>
  </div>
