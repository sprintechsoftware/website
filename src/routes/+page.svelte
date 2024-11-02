<script>
    import Servicos from "../lib/servicos.svelte";
    import Sobre from "../lib/sobre.svelte";
</script>

<div class="inset-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_0px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_90%_60%_at_50%_50%,#000_90%,transparent_100%)] lg:[mask-image:radial-gradient(ellipse_50%_70%_at_50%_50%,#000_90%,transparent_100%)]">
<div id="inicio" class="flex flex-col items-center pt-12 pb-12 pl-8 pr-8 lg:pl-16 lg:pr-16">
    <div id="titles" class="flex flex-col text-center font pt-48 pb-48">
        <h1 class="text-4xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-lime-600 to-lime-10">
            Sprintech Desenvolvimento Web
        </h1>
        <h2 class="text-xl lg:text-3xl text-slate-300 font-medium">
            Criatividade para inovar, inovar para criar.
        </h2>
        <span class="text-base lg:text-xl text-gray-400 font-normal">
            Do conceito ao produto, entregamos soluções de softwares inovadoras e escaláveis para empresas de todos os tamanhos.
        </span>
    </div>
    <div id="servicos" class="pt-12">
        <Servicos></Servicos>
    </div>
    <div id="sobre" class="pt-16 pb-4">
        <Sobre></Sobre>
    </div>
</div>

</div>