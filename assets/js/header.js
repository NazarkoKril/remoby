const header = document.querySelectorAll(".header_component");
const headerComponent = `
		<header>
            <div class="header-container">
                
                <div class="header-logo">
                    <a href="/"><img src="/assets/img/logo.svg" alt="Remoby Logo"></a>
                </div>
                <div class="header-menu">
                    <nav>
                        <ul class="header-menu-list">
                            <li><a class="header-link" href="/features.html">Features</a></li>
                            <li><a class="header-link" href="/careers.html">Careers</a></li>
                            <li><a class="header-link" href="/about.html">About</a></li>
                            <li><a class="header-link" href="/contact.html">Contact Us</a></li>
                            
                        </ul>
                    </nav>
                </div>
                <div class="header-btn">
                    <a href="/access.html" class="btn1">Get Access</a> 
                </div>
                <button class="burger">
                    <img src="/assets/img/icons/burger.svg" alt="">
                </button>
            </div>
            <div class="header-mobile-container">
                <button class="header-close">
                    <img src="/assets/img/icons/crose.svg" alt="">
                </button>
                <div class="header-mobile-menu">
                    <ul class="header-mobile-menu-list">
                       <li><a class="header-link" href="/features.html">Features</a></li>
                            <li><a class="header-link" href="/careers.html">Careers</a></li>
                            <li><a class="header-link" href="/about.html">About</a></li>
                            <li><a class="header-link" href="/contact.html">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </header>`;
header.forEach((el) => {
	return (el.innerHTML = headerComponent);
});
