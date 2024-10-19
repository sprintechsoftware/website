<script>
    import Servicos from "../lib/servicos.svelte";
    import Sobre from "../lib/sobre.svelte";
</script>

<div id="inicio" class="pt-12 pb-12 pl-8 pr-8 lg:pl-16 lg:pr-16">
    <div id="titles" class="flex flex-col gap-2 pt-48 pb-48">
        <h1 class="text-2xl lg:text-6xl text-lime-10 font-bold">Sprintech Desenvolvimento Web</h1>
        <h2 class="text-xl lg:text-2xl text-white font-medium">Criatividade para inovar, inovar para criar.</h2>
    </div>
    <div id="servicos" class="pt-12">
        <Servicos></Servicos>
    </div>
    <div id="sobre" class="pt-16">
        <Sobre></Sobre>
    </div>
</div>

    