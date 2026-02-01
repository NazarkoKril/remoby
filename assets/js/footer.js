const footer = document.querySelectorAll('.footer_component')
const footerComponent = `
 <footer>
        <div class="container_20">

            <div class="footer-container">
                <div class="footer-left">
                    <div class="footer-logo">
                        <a href="/">
                            <img src="/assets/img/logo-white.svg" alt="Remoby Logo"></a>
                    </div>
                    <p class="footer_p_small">28 Oktovriou, 367, Mediterranean Court, 1st Floor, Office A5, 3107,
                        Limassol, Cyprus</p>
                    <a class="footer-link" href="mailto:info@remoby.com">info@remoby.com</a>
                    <a class="footer-link" href="tel:+35794203006">+35 794 203 006</a>

                </div>
                <div class="footer-right">
                    <ul class="footer-links">
                        <h4 class="footer_title">Company</h4>
                        <li><a class="footer-link" href="/careers.html">Careers</a></li>
                        <li><a class="footer-link" href="/about.html">About</a></li>
                        <li><a class="footer-link" href="/contact.html">Contact Us</a></li>
                    </ul>
                    <ul class="footer-socials">
                        <h4 class="footer_title">Legal</h4>

                        <li><a class="footer-link" href="/terms.html">Terms of Use</a></li>
                        <li><a class="footer-link" href="/advertiser.html">Advertiser Agreement</a></li>
                        <li><a class="footer-link" href="/privacy.html">Privacy Policy</a></li>
                        <li><a class="footer-link" href="/cookie.html">Cookies Policy</a></li>
                    </ul>

                </div>
                <div class="footerleft">
                    <a href="https://linkedin.com/" class="footer_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <g clip-path="url(#clip0_2004_3558)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M16 0C7.2 0 0 7.2 0 16C0 24.8 7.2 32 16 32C24.8 32 32 24.8 32 16C32 7.2 24.8 0 16 0ZM8.32 11.92H12V22.8H8.4V11.92H8.32ZM12.24 8.56C12.24 7.52 11.44 6.64 10.24 6.64C9.04 6.64 8.16 7.44 8.16 8.56C8.16 9.6 8.96 10.48 10.16 10.48C11.44 10.4 12.24 9.6 12.24 8.56ZM20.88 11.68C23.28 11.68 25.04 13.2 25.04 16.56V22.8H21.44V16.96C21.44 15.52 20.88 14.48 19.6 14.48C18.56 14.48 18 15.12 17.76 15.84C17.6 16.08 17.6 16.4 17.6 16.72V22.8H14C14 22.8 14.08 12.96 14 11.92H17.6V13.44C18.08 12.72 18.96 11.68 20.88 11.68Z"
                                    fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2004_3558">
                                    <rect width="32" height="32" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                    <a href="https://facebook.com/" class="footer_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <g clip-path="url(#clip0_2004_3560)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M18.24 31.84C26 30.8 32 24.08 32 16C32 7.2 24.8 0 16 0C7.2 0 0 7.2 0 16C0 24 5.84 30.56 13.44 31.76V21.04H9.44V16.32H13.44V12.08C13.44 9.44 15.6 7.28 18.24 7.28H22.56V11.36H19.76C18.96 11.36 18.24 12 18.24 12.88V16.4H22.56L21.84 21.12H18.24V31.84Z"
                                    fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2004_3560">
                                    <rect width="32" height="32" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </div>
                <div class="footerright">
                    <p class="reserved">© 2026 Remobly LTD. All rights reserved</p>
                </div>
            </div>
        </div>
    </footer>`
footer.forEach( (el) => {
  return el.innerHTML = footerComponent
}
)

