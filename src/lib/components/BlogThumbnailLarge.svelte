<script lang="ts">
  export let coverImage: string
  export let title = 'This in an example title.'
  export let text =
    'This is example text talking about our blog post. We will talk about interesting things here. Click to read more. yada yada \
  yad yad ya ya ya'
  export let authorImage: string
  export let author = 'Author Name'
</script>


<main
  class="{$$props.class} relative h-[326px] w-[1320px] rounded-lg bg-gray-50 text-[19px] flex"
>
  <img class="h-[325px] max-w-[490px] rounded-l-lg object-cover shrink-0" alt="" src={coverImage} />

  <div class="flex h-[340px] flex-col overflow-hidden py-6 px-10">
    <h2 class="m-0 font-medium leading-10">
      {title}
    </h2>
    <div class="mt-3 mb-0 min-h-0 flex-grow overflow-hidden">
        {text}
    </div>
  </div>

  <!-- author info -->
  <div class="absolute bottom-0 left-[464px] flex items-center gap-4 p-4">
    <img class="max-h-16 rounded-full" alt="" src={authorImage} />
    <div class="text-gray-500">{author}</div>
  </div>
</main>