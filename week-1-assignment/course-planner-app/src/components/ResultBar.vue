<template>
<div class="mt-10">
        <div v-if="unWatchedCourseCount>0">
          <small >İzlenecek {{ unWatchedCourseCount }} adet kursunuz var.</small>
          <br>
          </div>
          <small v-if="watchedCourseCount>0">İzlenmiş {{ watchedCourseCount }} adet kursunuz var.</small>
        </div>
</template>

<script>
export default {
    props : 
    ["unWatchedCourseCount", "watchedCourseCount"],
}
</script>