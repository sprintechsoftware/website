<script>
    import Servicos from "../lib/servicos.svelte";
    import Ferramentas from "../lib/ferramentas.svelte";
    import Sobre from "../lib/sobre.svelte";
    import ship from "../images/collab.svg";
</script>
    
<div id="inicio" class="flex flex-col items-center pt-12 pb-12 pl-8 pr-8 lg:pl-16 lg:pr-16 ">
    <div id="titles" class="flex flex-col lg:flex-row items-center justify-between pt-20 gap-16 lg:gap-1 lg:pt-24 pb-48">
        <div id="left" class="w-full lg:w-1/2 flex flex-col justify-center items-center text-center lg:text-start lg:items-start">
            <h1 class="text-4xl lg:text-6xl font-semibold lg:font-medium  bg-clip-text text-transparent bg-gradient-to-r from-lime-600 to-lime-10">
                Sprintech Software
            </h1>
            <h2 class="text-2xl lg:text-3xl text-slate-300 font-normal">
                Criatividade para inovar,<br> inovar para criar.
            </h2>
            <span class="text-base lg:text-xl text-gray-400 font-normal">
                Do conceito ao produto, entregamos soluções de softwares inovadoras e escaláveis para empresas de todos os tamanhos.
            </span> 
        </div>
        <img src={ship} alt="Ship It" class="w-[24rem]">
    </div>
    
    <div id="servicos" class="pt-12">
        <Servicos></Servicos>
    </div>
    <div id="ferramentas" class="pt-12">
        <Ferramentas></Ferramentas>
    </div>
    <div id="sobre" class="pt-16 pb-4">
        <Sobre></Sobre>
    </div>
</div>
