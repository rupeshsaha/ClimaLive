const navStruct = `
    <nav class="toggleNormalMenu">
        <div class="title">
            <a href="/">
                <div class="logo">
                    <img src="static/assets/logo/logo_large.png" alt="ClimaLive Logo" />
                </div>
                <h1>ClimaLive</h1>  
            </a>
        </div>
        <i class="icofont-navigation-menu hamburger-menu"></i>
        <ul class="scrollbar-none">
            <li><a href="/">home</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/contact">contact</a></li>
            <li><a href="/about">about</a></li>
        </ul>
    </nav>`

if (document.querySelector("navbar")) {
    const parser = new DOMParser();
    const newNav = parser.parseFromString(navStruct, 'text/html').body.firstChild;
    document.querySelector("navbar").replaceWith(newNav);
}

const menuIcon = document.querySelector("nav .icofont-navigation-menu");
const closeIcon = document.querySelector("nav .icofont-close");
const navbar = document.querySelector("nav");

menuIcon.onclick = e => {
    e.target.classList.toggle("icofont-navigation-menu");
    e.target.classList.toggle("icofont-close");
    navbar.classList.toggle("toggleMenu");
}

closeIcon.onclick = e => {
    e.target.classList.toggle("icofont-close");
    e.target.classList.toggle("icofont-navigation-menu");
    navbar.classList.toggle("toggleMenu");
}