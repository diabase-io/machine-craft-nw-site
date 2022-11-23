<script lang="ts" context="module">
  export enum Style {
    Small,
    Medium,
    Large
  }
</script>

<script lang="ts">
  import { afterUpdate, beforeUpdate, onMount, tick } from 'svelte'

  export let style = Style.Medium
  export let coverImage: string
  export let title = 'This in an example title.'
  export let text =
    'This is example text talking about our blog post. We will talk about interesting things here. Click to read more. yada yada \
  yad yad ya ya ya'
  export let authorImage: string
  export let author = 'Author Name'

  let textToDisplay = text
  let strLen: number
  let textContainer: HTMLElement
  let textHeight: number
  let doSlice: boolean
  let reducedText = false
  let shortenTextInterval: NodeJS.Timer

  onMount(() => {
    if (textHeight > textContainer.offsetHeight) {
      doSlice = true

      // sets this interval to run outside of this codeblock
      shortenTextInterval = setInterval(() => {
        if (doSlice) {
          doSlice = false
          reducedText = true

          // find the whitespace between the current and previous word.
          for (let i = textToDisplay.length - 1; i >= 0; i--) {
            if (textToDisplay[i] === ' ') {
              if (textToDisplay[i - 1] === '.') {
                strLen = i - 1
              } else {
                strLen = i
              }
              break
            }
          }
          // slice at the whitespace
          textToDisplay = textToDisplay.slice(0, strLen)
        }
      }, 1)
    }
  })

  afterUpdate(() => {
    if (textHeight <= textContainer.offsetHeight) {
      textContainer.classList.remove('opacity-0')
      if (reducedText) {
        clearInterval(shortenTextInterval)
        textToDisplay += '...'
      }
    } else {
      doSlice = true
    }
  })
</script>

<style>
  /* adds drop shadow and hover animation */
  main {
    transition: filter 0.3s ease;
    filter: drop-shadow(2px 2px 15px rgba(0, 0, 0, 0.25));
  }
  main:hover {
    transition: filter 0.3s ease;
    filter: drop-shadow(2px 2px 15px rgba(0, 0, 80, 0.4));
  }
  p {
    word-wrap: break-word;
    display: block;
  }
</style>

<main
  class="{$$props.class} relative inline-block h-[664px] w-[380px] overflow-hidden rounded-lg bg-gray-50 text-[19px]"
>
  <img class="h-64 w-full rounded-t-lg object-cover" alt="" src={coverImage} />

  <div class="flex h-[340px] flex-col overflow-hidden p-4">
    <h2 class="m-0 font-medium leading-10">
      {title}
    </h2>
    <div bind:this={textContainer} class="mt-3 mb-0 min-h-0 flex-grow overflow-hidden opacity-0">
      <span bind:offsetHeight={textHeight}>
        {textToDisplay}
      </span>
    </div>
  </div>

  <!-- author info -->
  <div class="absolute bottom-0 flex items-center gap-4 p-4">
    <img class="max-h-16 rounded-full" alt="" src={authorImage} />
    <div class="text-gray-500">{author}</div>
  </div>
</main>
