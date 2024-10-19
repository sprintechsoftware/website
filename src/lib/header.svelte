<script>
    import { Hamburger } from "svelte-hamburgers";
    import Menu from "./Menu.svelte";
    import logo from "../images/sprintechLogo.png"

    let open;
</script>

<div id="header-component" class="w-full bg-transparent flex items-center justify-between pl-8 pr-8 lg:pl-16 lg:pr-16 text-white">
    <img src={logo} alt="Sprintech Logo" title="Sprintech Logo" class="max-w-14" />
    <ul class="flex items-center gap-2 lg:gap-8 text-base lg:text-xl font-semibold">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#servicos">Servicos</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#contato" class="text-xl p-6 pt-3 pb-3 bg-lime-10 rounded-xl text-black-800 flex items-center justify-center font-semibold">Contato</a></li>
    </ul>
    <div class="hamburguer-icon">
        <Hamburger class="hamburguer-icon" --layer-spacing="8px" --layer-height="2px" --border-radius="10px" --color="#c9ff00" bind:open  />
    </div>
</div>
<Menu class="hamburguer-menu" bind:open />

<style>
    .hamburguer-menu {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 80%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 999;
        transition: 0.3s ease;
    } 


    .hamburguer-icon {
        display: none;
        z-index: 1000;
        cursor: pointer;
        color: wheat;
    }

    .hamburguer-menu a {
        color: white;
        font-size: 24px;
        margin: 1rem 0;
    }

    /* Esconde o menu normal em telas menores */
    @media (max-width: 1000px) {
        ul {
            display: none;
        }

        .hamburguer-icon {
            display: block;
        }
    }
</style>
