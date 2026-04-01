document.addEventListener('DOMContentLoaded', () => {
    const navbarHTML = `
        <style>
            :root {
                --sc-white: #ffffff;
                --sc-black: #000000;
                --sc-gray: #f4f4f4;
                --sc-dark-gray: #222222;
                --sc-blue: #0081f2;
            }

            .sc-nav {
                background-color: var(--sc-black);
                height: 72px;
                transition: all 0.3s ease;
                border-bottom: 1px solid rgba(255,255,255,0.1);
            }

            .sc-nav.scrolled {
                height: 60px;
                background-color: rgba(0, 0, 0, 0.95);
                backdrop-filter: blur(10px);
            }

            .sc-link {
                color: var(--sc-white);
                font-weight: 800;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                font-size: 14px;
                position: relative;
                transition: opacity 0.2s;
            }

            .sc-link:hover {
                opacity: 0.7;
            }

            /* The "Supercell ID" style button */
            .sc-id-btn {
                background-color: var(--sc-white);
                color: var(--sc-black);
                font-weight: 900;
                padding: 8px 20px;
                border-radius: 4px;
                text-transform: uppercase;
                font-size: 13px;
                letter-spacing: 0.02em;
                transition: transform 0.2s, background-color 0.2s;
            }

            .sc-id-btn:hover {
                background-color: var(--sc-gray);
                transform: scale(1.05);
            }

            /* Mobile Menu Overlay */
            .sc-mobile-overlay {
                background-color: var(--sc-black);
                z-index: 100;
                transition: transform 0.4s cubic-bezier(0.77,0.2,0.05,1.0);
            }

            /* Animated Hamburger */
            .sc-hamburger {
                width: 24px;
                height: 18px;
                position: relative;
                cursor: pointer;
            }

            .sc-hamburger span {
                display: block;
                position: absolute;
                height: 3px;
                width: 100%;
                background: var(--sc-white);
                border-radius: 9px;
                opacity: 1;
                left: 0;
                transform: rotate(0deg);
                transition: .25s ease-in-out;
            }

            .sc-hamburger span:nth-child(1) { top: 0px; }
            .sc-hamburger span:nth-child(2) { top: 7px; }
            .sc-hamburger span:nth-child(3) { top: 14px; }

            .sc-hamburger.open span:nth-child(1) { top: 7px; transform: rotate(135deg); }
            .sc-hamburger.open span:nth-child(2) { opacity: 0; left: -60px; }
            .sc-hamburger.open span:nth-child(3) { top: 7px; transform: rotate(-135deg); }
        </style>

        <nav id="main-nav" class="sc-nav fixed top-0 left-0 w-full z-[100] flex items-center px-6 md:px-12">
            <div class="max-w-7xl w-full mx-auto flex justify-between items-center">
                
                <!-- Logo Section -->
                <div class="flex items-center gap-8">
                    <a href="index.html" class="flex items-center gap-2">
                        <div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                            <img src="assets/favicon.png" alt="Logo" class="w-8 h-8" onerror="this.src='https://supercell.com/images/23/supercell_logo.png'">
                        </div>
                        <span class="text-white font-black text-xl tracking-tighter uppercase hidden sm:block">GRINDEROUZ-DB</span>
                    </a>

                    <!-- Desktop Nav Links -->
                    <div class="hidden lg:flex items-center gap-8 ml-4">
                        <a href="https://grinderouz.github.io/clan/index.html" class="sc-link">Home</a>
                        <a href="index.html" class="sc-link">Base Layouts</a>
                        <a href="https://grinderouz.github.io/clan/index.html#stats" class="sc-link">Clan Stats</a>
                    </div>
                </div>

                <!-- Right Side Actions -->
                <div class="flex items-center gap-6">
                    <a href="https://grinderouz.github.io/clan/index.html#join" class="sc-id-btn hidden sm:block">
                        Join Clan
                    </a>
                    
                    <!-- Mobile Hamburger -->
                    <button id="sc-menu-btn" class="lg:hidden p-2 focus:outline-none">
                        <div id="sc-hamburger" class="sc-hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
            </div>
        </nav>

        <!-- Mobile Menu Overlay -->
        <div id="sc-overlay" class="sc-mobile-overlay fixed inset-0 translate-x-full lg:hidden flex flex-col pt-24 px-10">
            <div class="flex flex-col gap-8">
                <a href="https://grinderouz.github.io/clan/index.html" class="text-white text-3xl font-black uppercase tracking-widest">Home</a>
                <a href="index.html" class="text-white text-3xl font-black uppercase tracking-widest">Base Layouts</a>
                <a href="https://grinderouz.github.io/clan/index.html#stats" class="text-white text-3xl font-black uppercase tracking-widest">Clan Stats</a>
                
                <div class="mt-8 pt-8 border-t border-white/10">
                    <a href="https://grinderouz.github.io/clan/index.html#join" class="sc-id-btn inline-block text-center w-full py-4 text-xl">
                        Join Clan
                    </a>
                </div>
            </div>
        </div>
    `;

    // Inject the navbar
    const container = document.getElementById('navbar-container');
    if (container) {
        container.innerHTML = navbarHTML;
    }

    // Logic
    const menuBtn = document.getElementById('sc-menu-btn');
    const overlay = document.getElementById('sc-overlay');
    const hamburger = document.getElementById('sc-hamburger');
    const nav = document.getElementById('main-nav');
    let isMenuOpen = false;

    // Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            overlay.classList.remove('translate-x-full');
            hamburger.classList.add('open');
            document.body.style.overflow = 'hidden';
        } else {
            overlay.classList.add('translate-x-full');
            hamburger.classList.remove('open');
            document.body.style.overflow = '';
        }
    }

    if (menuBtn) {
        menuBtn.addEventListener('click', toggleMenu);
    }

    // Close menu on link click
    overlay.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) toggleMenu();
        });
    });
});