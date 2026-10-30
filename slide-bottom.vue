<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $frontmatter, $page } = useSlideContext()

const show = computed(() => {
  const layout = $frontmatter.layout as string | undefined
    ?? ($page.value === 1 ? 'cover' : 'default')
  const klass = String($frontmatter.class ?? '')
  // Solo meme/emoji slides: hide footer so the image owns the frame
  if (klass.split(/\s+/).includes('meme-slide'))
    return false
  return !['cover', 'section', 'statement', 'end'].includes(layout)
})

const label = computed(() => String($page.value).padStart(2, '0'))
</script>

<template>
  <footer v-if="show" class="deck-footer">
    <span>DevFest Santiago</span>
    <span class="gdots" aria-hidden="true"><i /><i /><i /><i /></span>
    <span>{{ label }}</span>
  </footer>
</template>
