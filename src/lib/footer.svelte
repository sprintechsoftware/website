<script>
    import logo from "../images/sprintechLogo.png";
    import instagram from "../images/instagram.png";
    import linkedin from "../images/linkedin.png";
    import github from "../images/github.png";
</script>

<div id="footer-component" class="border-t-2 w-full border-traspgray-100 flex flex-col gap-8 items-center pl-16 pr-16 pt-8 pb-8">
    <div id="one" class="w-full justify-between flex flex-col lg:flex-row gap-8 lg:gap-1">
        <div id="left" class="flex gap-8 items-center justify-center">
            <img src={logo} alt="Sprintech Logo" title="Sprintech Logo" class="max-w-14">
            <span class="text-base lg:text-lg text-white">Desenvolvimento de softwares e outras aplicações.</span>
        </div>
        <div id="rigth" class="flex flex-col items-start gap-6">
            <h3 class="text-white font-semibold text-xl lg:text-2xl">Nossas Redes</h3>
            <ul class="flex gap-6">
                <li><a href="https://www.instagram.com/sprintech.net_"><img src={instagram} alt="Instagram" title="Instagram" class="max-w-6"></a></li>
                <li><a href="https://www.linkedin.com/company/sprintech-software"><img src={linkedin} alt="linkedin" title="Linkedin" class="max-w-6"></a></li>
                <li><a href="https://github.com/orgs/sprintechsoftware/"><img src={github} alt="github" title="Github" class="max-w-6"></a></li>
            </ul>
        </div>
    </div>
    <p class="text-white font-light text-sm lg:text-base">© 2024 Sprintech. All Rights Reserved.</p>
</div>