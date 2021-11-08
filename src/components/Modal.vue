<template>
  <div v-show="show" class="overlay">

    <div class="dialog">
      <!-- Shows the title and description based on the modal element in other components, i.e. in product page -->
      <div class="dialog__content">
        <h2 class="dialog__title" v-text="title"></h2>
        <p class="dialog__description" v-text="description"></p>
      </div>

      <hr />
      <!-- Shows the button to confirm or cancel the action -->
      <div class="dialog__footer">
        <button @click="cancel" class="dialog__cancel">Cancel</button>
        <button @click="confirm" class="dialog__confirm">Yes</button>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  // Static props is used to render the content and the buttons' action
    props: ['show', 'title', 'description', 'cancel', 'confirm']
}
</script>

<style scoped src="../assets/modal.css"></style>