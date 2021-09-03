<template>
  <button
    :class="['btn', color ? 'btn-' + color : '']"
    @click.prevent="$emit('click')"
  >
    {{ text }}
  </button>
</template>

<script>
//#region export
export default {
  //#region props
  props: {
    /**
     * Background color của button.
     * primary, secondary
     * CreatedBy: Tienvq 31/08/2021
     */
    color: {
      type: String,
      default: "primary",
    },

    /**
     * Text hiển thị của button.
     */
    text: {
      type: String,
      default: "",
    },
  },
  //#endregion
};
//#endregion
</script>