<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  fieldId: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  options: {
    type: Array,
    default: () => [],
  },
  autocomplete: {
    type: String,
    default: '',
  },
  error: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue', 'input'])

const onInput = (event) => {
  emit('update:modelValue', event.target.value)
  emit('input')
}
</script>

<template>
  <div class="form-row" :class="{ 'has-error': Boolean(props.error) }">
    <label :for="fieldId">{{ label }}</label>

    <select
      v-if="type === 'select'"
      :id="fieldId"
      :name="fieldId"
      :value="modelValue"
      required
      @change="onInput"
    >
      <option value="">請選擇</option>
      <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
    </select>

    <textarea
      v-else-if="type === 'textarea'"
      :id="fieldId"
      :name="fieldId"
      :value="modelValue"
      required
      @input="onInput"
    ></textarea>

    <input
      v-else
      :id="fieldId"
      :name="fieldId"
      :type="type"
      :value="modelValue"
      :autocomplete="autocomplete"
      required
      @input="onInput"
    />

    <p class="error-message">{{ error }}</p>
  </div>
</template>

<style scoped>
.form-row {
  margin-bottom: 16px;
}

.form-row label {
  display: block;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 6px;
}

.form-row input,
.form-row select,
.form-row textarea {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 12px 14px;
  background: #fff;
  color: var(--text);
  outline: none;
  transition: 0.2s;
}

.form-row input:focus,
.form-row select:focus,
.form-row textarea:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 4px rgba(74, 144, 164, 0.14);
}

.form-row textarea {
  min-height: 140px;
  resize: vertical;
}

.error-message {
  color: var(--error);
  font-size: 0.84rem;
  margin-top: 6px;
  display: none;
}

.form-row.has-error input,
.form-row.has-error select,
.form-row.has-error textarea {
  border-color: var(--error);
}

.form-row.has-error .error-message {
  display: block;
}
</style>
