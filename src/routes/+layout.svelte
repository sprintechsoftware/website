<script>
    import "../app.css";
    import Header from "../lib/header.svelte";
    import Footer from "../lib/footer.svelte";
</script>

<div class="h-full w-full">
    <header><Header></Header></header>
    <main>
        <slot />
    </main>
    <footer id="contato"><Footer></Footer></footer>
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap");

    :global(html) {
        font-family: "Plus Jakarta Sans", sans-serif;
        scroll-behavior: smooth;
    }

    :global(body) {
        background-color: #131212;
        position: relative;
        background-image: 
            radial-gradient(#424b443e 1px, transparent 1px), /* Dots */
            radial-gradient(circle 400px at 100% 100px,#04650d,transparent), /* Radial do Fundo */
            radial-gradient(circle 400px at 0% 850px,#04650d,transparent), /* Radial do Fundo */
            radial-gradient(150% 150% at 20% 10%, #000000 40%, #04650d 100%); /* Radial do Topo */
        background-size: 16px 16px, auto, auto, auto;
        background-position: 0 0, center, center, center;
        background-repeat: repeat, no-repeat, no-repeat, no-repeat;
    }
    

    :global(body::-webkit-scrollbar-track) {
        background: #131212; /* color of the tracking area */
    }

    :global(body::-webkit-scrollbar-thumb) {
        background-color: #222222;
    }
</style>