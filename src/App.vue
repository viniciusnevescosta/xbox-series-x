<script setup></script>

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
        <nav
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
        </nav>
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
                    class="headline text-light text-4xl lg:text-5xl 2xl:text-7xl font-semibold"
                >
                    Xbox series X
                </h1>
                <h2
                    class="headline uppercase text-primary lg:text-xl 2xl:text-2xl font-bold"
                >
                    pedido antecipado
                </h2>
            </div>
            <LazyHydrationWrapper
                class="relative flex items-end justify-center mt-1"
                :when-visible="{ rootMargin: '50px' }"
                @hydrated="onHydrated"
            >
                <img
                    class="headline lg:absolute 2xl:absolute"
                    src="/xbox.avif"
                    alt="xbox series x"
                    draggable="false"
                />
                <img
                    class="hidden lg:block 2xl:block"
                    src="/luz-verde.avif"
                    alt=""
                    draggable="false"
                    loading="lazy"
                />
            </LazyHydrationWrapper>
        </section>
        <section
            class="flex flex-col lg:flex-row 2xl:flex-row items-center lg:justify-between 2xl:justify-between mt-14 lg:mt-64 2xl:mt-72 lg:px-40 lg:gap-5 2xl:gap-10"
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
                    O controle sem fio Xbox traz um design elegante, conforto
                    refinado e compartilhamento instantâneo para um favorito
                    comum.
                </p>
            </div>
            <img
                class="w-52 lg:w-80 2xl:w-96 mt-12"
                src="/controle-xbox.avif"
                alt="Controle Xbox"
                loading="lazy"
            />
        </section>
        <section>
            <LazyHydrationWrapper
                class="flex flex-col lg:flex-row 2xl:flex-row mt-24 lg:mt-40 2xl:mt-80 gap-10 lg:gap-0 2xl:gap-0 lg:overflow-x-hidden 2xl:overflow-x-hidden"
                :when-visible="{ rootMargin: '50px' }"
                @hydrated="onHydrated"
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
            </LazyHydrationWrapper>
        </section>
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
            <!-- common questions -->
            <div class="flex flex-col mt-5 lg:mt-7 2xl:mt-14">
                <div class="mt-5 flex flex-col">
                    <div class="flex items-center justify-between">
                        <p
                            class="text-sm lg:text-lg 2xl:text-2xl text-light font-medium"
                        >
                            Meus jogos anteriores do Xbox vão funcionar no Xbox
                            Series X?
                        </p>
                        <i class="ri-arrow-up-s-line ri-2x text-primary"></i>
                    </div>
                    <p
                        class="mt-4 pl-3 text-sm lg:text-lg 2xl:text-lg text-grayLight font-medium"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <hr class="mt-5 border border-gray" />
                </div>
                <div class="mt-5 flex flex-col">
                    <div class="flex items-center justify-between">
                        <p
                            class="text-sm lg:text-lg 2xl:text-2xl text-light font-medium"
                        >
                            O que está incluído no Xbox Series X?
                        </p>
                        <i class="ri-arrow-down-s-line ri-2x text-gray"></i>
                    </div>
                    <hr class="mt-5 border border-gray" />
                </div>
                <div class="mt-5 flex flex-col">
                    <div class="flex items-center justify-between">
                        <p
                            class="text-sm lg:text-lg 2xl:text-2xl text-light font-medium"
                        >
                            Como sei se minha TV é compatível com 4K?
                        </p>
                        <i class="ri-arrow-down-s-line ri-2x text-gray"></i>
                    </div>
                    <hr class="mt-5 border border-gray" />
                </div>
            </div>
        </section>
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
