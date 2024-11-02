<script>
    import { IconDeviceDesktop } from '@tabler/icons-svelte';
    import { IconDeviceMobile } from '@tabler/icons-svelte';
    import { IconCode } from '@tabler/icons-svelte';
    import { IconPaint } from '@tabler/icons-svelte';
</script>

<div id="servicos-component" class="flex flex-col gap-8 w-full items-center">
    <h1 class="text-2xl lg:text-4xl font-bold text-lime-10">Serviços</h1>
    <section id="cards" class="flex flex-col lg:flex-row gap-12 items-center">
        <div id="one" class="w-72 lg:w-80 h-96 rounded-xl flex flex-col gap-8 items-start p-8 bg-traspgray-100 border-white text-white backdrop-blur-3xl">
            <div class="flex flex-col gap-2">
                <IconCode size="36"/>
                <h2 class="text-xl lg:text-2xl font-bold">Desenvolvimento Web</h2>
            </div>
            <p class="text-lg">
                Seu site, sua cara. Criamos soluções web personalizadas e responsivas que entregam resultados, utilizando linguagens como HTML, CSS e Javascript.
            </p>
        </div>
        <div id="two" class="w-72 lg:w-80 h-96 rounded-xl flex flex-col gap-8 items-start p-8 bg-lime-10 border-white text-black-800 backdrop-blur-3xl">
            <div class="flex flex-col gap-2">
                <IconDeviceMobile size="36"/>
                <h2 class="text-xl lg:text-2xl font-bold">Desenvolvimento Mobile</h2>
            </div>
            <p class="text-lg">
                Leve sua marca para o bolso. Apps nativos e híbridos otimizados para todas as plataformas, entregando alta performance e usabilidade.
            </p>
        </div>
        <div id="three" class="w-72 lg:w-80 h-96 rounded-xl flex flex-col gap-8 items-start p-8 bg-traspgray-100 border-white text-white backdrop-blur-3xl">
            <div class="flex flex-col gap-2">
                <IconPaint size="36"/>
                <h2 class="text-xl lg:text-2xl font-bold">UI/UX Design</h2>
            </div>
            <p class="text-lg">
                Experiências digitais memoráveis. Transformamos ideias em interfaces intuitivas e elegantes, eleve sua marca e fidelize seus clientes.
            </p>
        </div>
    </section>
</div>

<!-- <style>
    .height-mid {
        height: 26rem;
    }

    .height-max {
        height: 30rem;
    }
</style> -->