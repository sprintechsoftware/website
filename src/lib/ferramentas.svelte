<script>
    import csharp from "../images/csharp.svg";
    import svelte from "../images/svelte.svg";
    import dotnet from "../images/dotnet.svg";
    import nodejs from "../images/nodejs.svg";
    import postgresql from "../images/postgresql.svg";
</script>

<div id="servicos-component" class="flex flex-col gap-16 pt-16 w-full items-center">
    <h1 class="text-2xl lg:text-4xl font-normal text-white">Nossa caixa de <span class="text-lime-10">Ferramentas</span></h1>
    <section id="icons" class="flex flex-wrap items-center justify-center gap-12 lg:gap-20 w-11/12 lg:w-full">
        <img src={csharp} alt="Csharp Logo" class="icones w-16 lg:w-20 lg:grayscale hover:filter-none">
        <img src={svelte} alt="Svelte Logo" class="icones w-36 lg:w-48 lg:grayscale hover:filter-none">
        <img src={dotnet} alt="Dotnet Logo" class="icones w-16 lg:w-20 lg:grayscale hover:filter-none">
        <img src={nodejs} alt="Nodejs Logo" class="icones w-16 lg:w-20 lg:grayscale hover:filter-none">
        <img src={postgresql} alt="Postgresql Logo" class="icones w-16 lg:w-20 lg:grayscale hover:filter-none">
    </section>
</div>

<style>
    .icones {
        transition: filter 0.2s ease;
        opacity: 0.8;
    }
</style>