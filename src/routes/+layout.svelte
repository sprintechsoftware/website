<script>
    import "../app.css";
    import Header from "../lib/header.svelte";
    import Footer from "../lib/footer.svelte";
</script>

<header><Header></Header></header>
<main>
    <slot />
</main>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap");

    :global(html) {
        background: rgb(19, 18, 18);
        background: linear-gradient(
            180deg,
            rgba(19, 18, 18, 1) 0%,
            rgba(16, 22, 0, 1) 100%
        );
        background-attachment: fixed;
        background-size: cover;

        min-height: 100vh;

        font-family: "Plus Jakarta Sans", sans-serif;

        scroll-behavior: smooth;
    }

    :global(body) {
        margin: 1rem 4rem 2rem;
    }

    :global(body::-webkit-scrollbar) {
        width: 4px; /* width of the entire scrollbar */
    }

    :global(body::-webkit-scrollbar-track) {
        background: #131212; /* color of the tracking area */
    }

    :global(body::-webkit-scrollbar-thumb) {
        background-color: #b4ff00; /* color of the scroll thumb */
    }
</style>
