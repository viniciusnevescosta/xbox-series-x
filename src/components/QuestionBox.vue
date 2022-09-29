<!-- eslint-disable no-unused-vars -->
<script setup>
const props = defineProps({
    actived: {
        type: Boolean,
        default: false
    },
    question: {
        type: String,
        default: ''
    },
    answer: {
        type: String,
        default: ''
    }
})

const emit = defineEmits(['toggle-question'])

function emitValue() {
    emit('toggle-question')
}
</script>

<template>
    <div v-auto-animate class="mt-5 flex flex-col">
        <div class="flex items-center justify-between">
            <p class="text-sm lg:text-lg 2xl:text-2xl text-light font-medium">
                {{ question }}
            </p>
            <i
                :class="
                    actived
                        ? 'ri-arrow-up-s-line text-primary'
                        : 'ri-arrow-down-s-line text-gray'
                "
                class="ri-2x hover:cursor-pointer hover:text-grayLight"
                @click="emitValue"
            ></i>
        </div>
        <p
            v-if="actived"
            class="mt-4 pl-3 text-sm lg:text-lg 2xl:text-lg text-grayLight font-medium"
        >
            {{ answer }}
        </p>
        <hr class="mt-5 border border-gray" />
    </div>
</template>
