<template>
    <div>
        <li v-for="item in files">
            <a :href="'#/'+item">{{ item }} </a>
        </li>
    </div>
</template>

<script>
let files = ['til', 'language-log']

export default {
  name: 'article',
  data () {
    return {
      files: files
    }
  }
}
</script>
