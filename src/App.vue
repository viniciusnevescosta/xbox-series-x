<script setup></script>

<template>
    <header class="flex flex-col items-center p-6 bg-dark">
        <img
            class="h-5"
            src="src/assets/logo-xbox.png"
            alt="Logo Xbox"
            draggable="false"
        />
        <nav class="flex w-full mt-7 justify-between">
            <li
                class="px-2.5 py-1.5 list-none uppercase text-tyne text-light font-semibold bg-gray bg-opacity-40 rounded-full"
            >
                Visão geral
            </li>
            <li
                class="px-2.5 py-1.5 list-none uppercase text-tyne text-light font-semibold bg-gray bg-opacity-40 rounded-full"
            >
                Jogos
            </li>
            <li
                class="px-2.5 py-1.5 list-none uppercase text-tyne text-light font-semibold bg-gray bg-opacity-40 rounded-full"
            >
                Galeria
            </li>
            <li
                class="px-2.5 py-1.5 list-none uppercase text-tyne text-light font-semibold bg-gray bg-opacity-40 rounded-full"
            >
                Unbox
            </li>
        </nav>
        <button
            class="w-full py-3 mt-14 uppercase text-dark font-bold bg-primary"
        >
            Ver disponibilidade
        </button>
    </header>
    <main class="flex flex-col items-center p-6 bg-dark">
        <section>
            <div class="flex flex-col items-center gap-3">
                <h1 class="text-light text-4xl font-semibold">Xbox series X</h1>
                <h2 class="uppercase text-primary font-bold">
                    pedido antecipado
                </h2>
            </div>
            <div class="mt-1">
                <img src="src/assets/xbox.png" alt="xbox series x" />
            </div>
        </section>
        <section class="flex flex-col items-center mt-14">
            <h2 class="text-primary text-2xl font-semibold">Desempenho</h2>
            <h2 class="text-light text-2xl font-semibold">aperfeiçoado</h2>
            <p class="mt-6 text-center text-grayLight font-medium">
                O controle sem fio Xbox traz um design elegante, conforto
                refinado e compartilhamento instantâneo para um favorito comum.
            </p>
            <img
                class="w-52 mt-12"
                src="src/assets/controle-xbox.png"
                alt="Controle Xbox"
            />
        </section>
        <section class="flex flex-col mt-24 gap-10">
            <img
                src="src/assets/farcry.png"
                alt="Game: Far Cry 6"
                draggable="false"
            />
            <img
                src="src/assets/forza.png"
                alt="Game: Forza Horizon 5"
                draggable="false"
            />
            <img src="src/assets/fifa.png" alt="Game: FIFA" draggable="false" />
            <img
                src="src/assets/minecraft.png"
                alt="Game: Minecraft Dungeons"
                draggable="false"
            />
        </section>
        <section class="flex flex-col w-full mt-10">
            <div class="flex flex-row gap-2">
                <h2 class="text-primary text-2xl font-semibold">Perguntas</h2>
                <h2 class="text-light text-2xl font-semibold">frequentes</h2>
            </div>
            <!-- common questions -->
            <div class="flex flex-col mt-5">
                <!--  -->
                <div class="mt-5 flex flex-col">
                    <div class="flex items-center justify-between">
                        <p class="text-sm text-light font-medium">
                            Meus jogos anteriores do Xbox vão funcionar no Xbox
                            Series X?
                        </p>
                        <i class="ri-arrow-up-s-line ri-2x text-primary"></i>
                    </div>
                    <p class="mt-4 pl-3 text-sm text-grayLight font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <hr class="mt-5 border border-gray" />
                </div>
                <div class="mt-5 flex flex-col">
                    <div class="flex items-center justify-between">
                        <p class="text-sm text-light font-medium">
                            O que está incluído no Xbox Series X?
                        </p>
                        <i class="ri-arrow-down-s-line ri-2x text-gray"></i>
                    </div>
                    <hr class="mt-5 border border-gray" />
                </div>
                <div class="mt-5 flex flex-col">
                    <div class="flex items-center justify-between">
                        <p class="text-sm text-light font-medium">
                            Como sei se minha TV é compatível com 4K?
                        </p>
                        <i class="ri-arrow-down-s-line ri-2x text-gray"></i>
                    </div>
                    <hr class="mt-5 border border-gray" />
                </div>
            </div>
        </section>
        <footer class="flex flex-row w-full mt-12">
            <img
                class="h-6"
                src="src/assets/logo-xbox.png"
                alt="Logo Xbox"
                draggable="false"
            />
            <div class="flex flex-col w-full items-end">
                <p class="text-sm text-gray">© Microsoft 2022</p>
                <p class="text-sm text-gray">Todos os direitos reservados</p>
            </div>
        </footer>
    </main>
</template>
