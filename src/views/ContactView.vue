<script setup>
import { reactive, ref } from 'vue'

import FormField from '../components/FormField.vue'
import { contactTimes, contactTypes } from '../data/site'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const fields = [
  {
    key: 'name',
    label: '姓名',
    type: 'text',
    autocomplete: 'name',
    message: '請填寫姓名。',
    test: (value) => value.trim() !== '',
  },
  {
    key: 'email',
    label: 'Email',
    type: 'email',
    autocomplete: 'email',
    message: '請填寫有效的 Email。',
    test: (value) => EMAIL_PATTERN.test(value.trim()),
  },
  {
    key: 'subject',
    label: '主旨',
    type: 'text',
    autocomplete: 'off',
    message: '請填寫主旨。',
    test: (value) => value.trim() !== '',
  },
  {
    key: 'message',
    label: '訊息',
    type: 'textarea',
    autocomplete: 'off',
    message: '請填寫訊息。',
    test: (value) => value.trim() !== '',
  },
  {
    key: 'type',
    label: '諮詢類型',
    type: 'select',
    options: contactTypes,
    autocomplete: 'off',
    message: '請選擇諮詢類型。',
    test: (value) => value !== '',
  },
  {
    key: 'time',
    label: '方便聯絡時間',
    type: 'select',
    options: contactTimes,
    autocomplete: 'off',
    message: '請選擇方便聯絡時間。',
    test: (value) => value !== '',
  },
]

const form = reactive(Object.fromEntries(fields.map((field) => [field.key, ''])))
const errors = reactive(Object.fromEntries(fields.map((field) => [field.key, ''])))
const submitted = ref(false)

const validateField = (field) => {
  const valid = field.test(form[field.key])
  errors[field.key] = valid ? '' : field.message
  return valid
}

/** 使用者修正內容時，即時把該欄位的錯誤訊息收起來（與原版行為一致）。 */
const revalidateField = (field) => {
  if (errors[field.key] && field.test(form[field.key])) {
    errors[field.key] = ''
  }
}

const handleSubmit = () => {
  const results = fields.map(validateField)
  if (results.includes(false)) return

  submitted.value = true
}
</script>

<template>
  <div class="contact">
    <section v-reveal>
      <p class="eyebrow">聯絡我</p>
      <h1>預約諮詢與聯絡</h1>
      <p class="lead">可透過下方表單預約諮詢。此表單為前端演示，不會實際寄送資料。</p>
    </section>

    <section v-reveal>
      <form class="form" novalidate @submit.prevent="handleSubmit">
        <FormField
          v-for="field in fields"
          :key="field.key"
          :field-id="field.key"
          :label="field.label"
          :type="field.type"
          :options="field.options"
          :autocomplete="field.autocomplete"
          :error="errors[field.key]"
          :model-value="form[field.key]"
          @update:model-value="form[field.key] = $event"
          @input="revalidateField(field)"
        />

        <button class="btn btn-primary" type="submit" :disabled="submitted">
          {{ submitted ? '已送出' : '送出訊息' }}
        </button>

        <div
          class="form-success"
          :class="{ show: submitted }"
          role="status"
          aria-live="polite"
        >
          {{ submitted ? '已收到您的訊息' : '' }}
        </div>
      </form>
    </section>
  </div>
</template>

<style scoped>
.form {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 22px;
  box-shadow: 0 8px 24px rgba(31, 58, 95, 0.05);
}

.form-success {
  display: none;
  margin-top: 16px;
  padding: 14px 16px;
  border-radius: 12px;
  background: #e6f4ea;
  color: var(--success);
  font-weight: 700;
}

.form-success.show {
  display: block;
}
</style>
