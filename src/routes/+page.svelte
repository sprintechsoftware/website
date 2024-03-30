<script>
    import Servicos from "../lib/servicos.svelte";
    import Footer from "../lib/footer.svelte";
</script>

<div id="inicio" class="pt-12 pb-12">
    <div id="titles" class="flex flex-col gap-2 pt-48 pb-48">
        <h1 class="text-6xl text-lime-10 font-bold">Sprintech Desenvolvimento Web</h1>
        <h2 class="text-4xl text-white font-medium">Criatividade para inovar, inovar para criar.</h2>
    </div>
    <div id="servicos" class="pt-12">
        <Servicos></Servicos>
    </div>
</div>

<div id="sobre">
    <Footer></Footer>
</div>