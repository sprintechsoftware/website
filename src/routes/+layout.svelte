<script>
    import "../app.css";
    import Header from "../lib/header.svelte";
    import Footer from "../lib/footer.svelte";
</script>

<div class="h-full w-full [background:radial-gradient(120%_150%_at_50%_10%,#000_40%,#223a00_100%)]">
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

    :global(body::-webkit-scrollbar) {
        width: 4px; /* width of the entire scrollbar */
    }

    :global(body::-webkit-scrollbar-track) {
        background: #131212; /* color of the tracking area */
    }

    :global(body::-webkit-scrollbar-thumb) {
        background-color: #b4ff00; /* color of the scroll thumb */
        background-color: #223a00;
    }
</style>