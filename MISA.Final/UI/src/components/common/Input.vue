<template>
  <input
    class="input"
    :class="{ 'has-icon': hasIcon }"
    :type="type"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('input', $event.target.value.trim())"
    @blur="$emit('blur')"
  />
</template>

<script>
//#region export
export default {
  //#region props
  props: {
    /**
     * Xác định có icon không
     * CreatedBy: Tienvq 31/08/2021
     */
    hasIcon: {
      type: Boolean,
      default: false,
    },

    /**
     * Từ hint của input
     * CreatedBy: Tienvq 31/08/2021
     */
    placeholder: {
      type: String,
      default: "",
    },

    /**
     * Type của input
     * CreatedBy: Tienvq 31/08/2021
     */
    type: {
      type: String,
      default: "text",
    },

    /**
     * Giá trị của input
     * CreatedBy: Tienvq 31/08/2021
     */
    value: {
      type: String,
      default: "",
    },
  },
  //#endregion
};
//#endregion
</script>