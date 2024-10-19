<script>
    export let open;
</script>

{#if open}
    <ul class="absolute w-full text-white flex flex-col items-center gap-4 lg:gap-8 text-lg lg:text-xl font-semibold">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#servicos">Servicos</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#contato" class="text-xl p-6 pt-3 pb-3 bg-lime-10 rounded-xl text-black-800 flex items-center justify-center font-semibold">Contato</a></li>
    </ul>
{/if}