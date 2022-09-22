<script setup>
import { ref } from 'vue'
import { createSSRApp } from 'vue'
import { LazyHydrationWrapper } from 'vue3-lazy-hydration'
import { useLazyHydration } from 'vue3-lazy-hydration'
import QuestionBox from './components/QuestionBox.vue'

const app = createSSRApp({})
app.component(
    // custom registered name
    'LazyHydrate',
    LazyHydrationWrapper,
    {
        props: useLazyHydration
    }
)

const questions = ref([
    {
        id: 0,
        actived: false,
        question:
            'Meus jogos anteriores do Xbox vão funcionar no Xbox Series X?',
        answer: 'A Compatibilidade com Versões Anteriores do Xbox Series X|S é gratuita e permite que você jogue alguns jogos do Xbox 360, jogos do Xbox Original e jogos do Xbox One que você já possui no Xbox Series X|S.'
    },
    {
        id: 1,
        actived: false,
        question: 'O que está incluído no Xbox Series X?',
        answer: 'Com o Xbox Series X, um console Xbox Series X, controle, cabo HDMI de alta velocidade e cabo de alimentação estão inclusos. Você pode adicionar compras autônomas do Xbox Game Pass e da Placa de expansão de armazenamento Seagate para Xbox Series X|S para ter a experiência completa.'
    },
    {
        id: 2,
        actived: false,
        question: 'Como sei se minha TV é compatível com 4K?',
        answer: 'A resolução do display deve ser: 3840 x 2160 pixels. A proporção deve ser de: 16:9 ou mais ampla, por fim, é preciso ter, pelo menos, uma entrada HDMI 2.1 (que suporta reprodução em 4K)'
    }
])

function toggleQuestion(id) {
    questions.value[id].actived = !questions.value[id].actived
}
</script>

<template>
    <header
        class="flex flex-col lg:flex-row 2xl:flex-row items-center p-6 lg:p-0 2xl:p-0 lg:pt-6 2xl:pt-12 lg:px-40 2xl:px-80 bg-dark"
    >
        <img
            class="h-5 lg:h-6 2xl:h-11"
            src="/logo-xbox.avif"
            alt="Logo Xbox"
            draggable="false"
            loading="lazy"
        />
        <ul
            class="flex w-full mt-7 lg:mt-0 2xl:mt-0 justify-between lg:justify-center 2xl:justify-center lg:gap-6 2xl:gap-12"
        >
            <li
                class="px-2.5 py-1.5 list-none uppercase text-tyne lg:text-sm 2xl:text-lg text-light font-semibold bg-gray lg:bg-transparent 2xl:bg-transparent bg-opacity-40 rounded-full"
            >
                Visão geral
            </li>
            <li
                class="px-2.5 py-1.5 list-none uppercase text-tyne lg:text-sm 2xl:text-lg text-light font-semibold bg-gray lg:bg-transparent 2xl:bg-transparent bg-opacity-40 rounded-full"
            >
                Jogos
            </li>
            <li
                class="px-2.5 py-1.5 list-none uppercase text-tyne lg:text-sm 2xl:text-lg text-light font-semibold bg-gray lg:bg-transparent 2xl:bg-transparent bg-opacity-40 rounded-full"
            >
                Galeria
            </li>
            <li
                class="px-2.5 py-1.5 list-none uppercase text-tyne lg:text-sm 2xl:text-lg text-light font-semibold bg-gray lg:bg-transparent 2xl:bg-transparent bg-opacity-40 rounded-full"
            >
                Unbox
            </li>
        </ul>
        <button
            class="flex items-center justify-center w-full 2xl:h-14 lg:w-72 2xl:w-80 py-3 2xl:py-5 2xl:px-7 mt-14 lg:mt-0 2xl:mt-0 uppercase text-dark font-bold bg-primary"
        >
            Ver disponibilidade
        </button>
    </header>
    <main class="flex flex-col items-center p-6 lg:p-0 2xl:p-0 bg-dark">
        <section
            class="lg:flex 2xl:flex lg:justify-center 2xl:justify-center lg:relative 2xl:relative lg:mt-5 2xl:mt-10"
        >
            <div
                class="lg:absolute 2xl:absolute lg:top-16 2xl:top-32 flex flex-col items-center gap-3 lg:gap-6 2xl:gap-12"
            >
                <h1
                    class="text-light text-4xl lg:text-5xl 2xl:text-7xl font-semibold"
                >
                    Xbox series X
                </h1>
                <h2
                    class="uppercase text-primary lg:text-xl 2xl:text-2xl font-bold"
                >
                    pedido antecipado
                </h2>
            </div>
            <div class="relative flex items-end justify-center mt-1">
                <img
                    class="lg:absolute 2xl:absolute"
                    src="/xbox.avif"
                    alt="xbox series x"
                    draggable="false"
                />
                <img
                    class="hidden w-full lg:block 2xl:block"
                    src="/luz-verde.avif"
                    alt=""
                    draggable="false"
                    loading="lazy"
                />
            </div>
        </section>
        <section>
            <LazyHydrate
                class="flex flex-col lg:flex-row 2xl:flex-row items-center lg:justify-between 2xl:justify-between mt-14 lg:mt-64 2xl:mt-72 lg:px-40 lg:gap-5 2xl:gap-10"
                :when-visible="{ rootMargin: '50px' }"
                @hydrated="onHydrated"
            >
                <div class="flex flex-col w-2/4">
                    <h2
                        class="text-center lg:text-start 2xl:text-start text-primary text-2xl lg:text-4xl 2xl:text-6xl font-semibold"
                    >
                        Desempenho
                    </h2>
                    <h2
                        class="text-center lg:text-start 2xl:text-start text-light text-2xl lg:text-4xl 2xl:text-6xl font-semibold"
                    >
                        aperfeiçoado
                    </h2>
                    <p
                        class="mt-6 text-center lg:text-left 2xl:text-left text-grayLight lg:text-lg 2xl:text-xl font-medium"
                    >
                        O controle sem fio Xbox traz um design elegante,
                        conforto refinado e compartilhamento instantâneo para um
                        favorito comum.
                    </p>
                </div>
                <img
                    class="w-52 lg:w-80 2xl:w-96 mt-12"
                    src="/controle-xbox.avif"
                    alt="Controle Xbox"
                    loading="lazy"
                />
            </LazyHydrate>
        </section>
        <LazyHydrate
            :when-visible="{ rootMargin: '50px' }"
            @hydrated="onHydrated"
        >
            <section
                class="flex flex-col lg:flex-row 2xl:flex-row mt-24 lg:mt-40 2xl:mt-80 gap-10 lg:gap-0 2xl:gap-0 lg:overflow-x-hidden 2xl:overflow-x-hidden"
            >
                <img
                    src="/farcry.avif"
                    alt="Game: Far Cry 6"
                    draggable="false"
                    loading="lazy"
                />
                <img
                    src="/forza.avif"
                    alt="Game: Forza Horizon 5"
                    draggable="false"
                    loading="lazy"
                />
                <img
                    src="/fifa.avif"
                    alt="Game: FIFA"
                    draggable="false"
                    loading="lazy"
                />
                <img
                    src="/minecraft.avif"
                    alt="Game: Minecraft Dungeons"
                    draggable="false"
                    loading="lazy"
                />
            </section>
        </LazyHydrate>

        <LazyHydrate
            class="w-full"
            :when-visible="{ rootMargin: '50px' }"
            @hydrated="onHydrated"
        >
            <section
                class="flex flex-col w-full mt-10 2xl:mt-64 lg:px-40 2xl:px-80"
            >
                <div class="flex flex-row gap-2">
                    <h2
                        class="text-primary text-2xl lg:text-3xl 2xl:text-5xl font-semibold"
                    >
                        Perguntas
                    </h2>
                    <h2
                        class="text-light text-2xl lg:text-3xl 2xl:text-5xl font-semibold"
                    >
                        frequentes
                    </h2>
                </div>
                <div class="flex flex-col mt-5 lg:mt-7 2xl:mt-14">
                    <QuestionBox
                        v-for="items in questions"
                        :key="items.id"
                        :actived="items.actived"
                        :question="items.question"
                        :answer="items.answer"
                        @toggle-question="toggleQuestion(items.id)"
                    />
                </div>
            </section>
        </LazyHydrate>
        <footer
            class="flex flex-row w-full mt-12 lg:mt-24 2xl:mt-48 lg:mb-10 2xl:mb-20 lg:px-40 2xl:px-80"
        >
            <img
                class="h-6 2xl:h-11"
                src="/logo-xbox.avif"
                alt="Logo Xbox"
                draggable="false"
                loading="lazy"
            />
            <div
                class="flex flex-col w-full 2xl:flex-row items-end 2xl:items-center 2xl:justify-end 2xl:gap-14"
            >
                <p class="text-sm 2xl:text-lg text-gray">© Microsoft 2022</p>
                <p class="text-sm 2xl:text-lg text-gray">
                    Todos os direitos reservados
                </p>
            </div>
        </footer>
    </main>
</template>
