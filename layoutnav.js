document.addEventListener('DOMContentLoaded', () => {
    const navbarHTML = `
        <style>
            :root {
                --sc-white: #ffffff;
                --sc-black: #000000;
                --sc-gray: #f4f4f4;
                --sc-dark-gray: #222222;
                --sc-blue: #0081f2;
                --discord-blurple: #5865F2;
            }

            .sc-nav {
                background-color: var(--sc-black);
                height: 72px;
                transition: all 0.3s ease;
                border-bottom: 1px solid rgba(255,255,255,0.1);
            }

            .sc-nav.scrolled {
                height: 64px;
                background-color: rgba(0, 0, 0, 0.95);
                backdrop-filter: blur(10px);
            }

            .sc-link {
                color: var(--sc-white);
                font-weight: 800;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                font-size: 13px;
                position: relative;
                transition: opacity 0.2s;
            }

            .sc-link:hover {
                opacity: 0.7;
            }

            .sc-id-btn {
                background-color: var(--sc-white);
                color: var(--sc-black);
                padding: 10px 20px;
                border-radius: 8px;
                font-weight: 900;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                font-size: 13px;
                transition: transform 0.2s, background-color 0.2s;
            }

            .sc-id-btn:hover {
                transform: scale(1.05);
                background-color: var(--sc-gray);
            }

            .discord-btn {
                background-color: var(--discord-blurple);
                color: white;
                padding: 10px 20px;
                border-radius: 8px;
                font-weight: 900;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                font-size: 13px;
                transition: transform 0.2s, filter 0.2s;
                display: flex;
                align-items: center;
                gap: 8px;
            }

            .discord-btn:hover {
                transform: scale(1.05);
                filter: brightness(1.1);
            }

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
                border-radius: 3px;
                transition: .25s ease-in-out;
            }

            .sc-hamburger span:nth-child(1) { top: 0; }
            .sc-hamburger span:nth-child(2) { top: 7px; }
            .sc-hamburger span:nth-child(3) { top: 14px; }

            .sc-hamburger.open span:nth-child(1) { top: 7px; transform: rotate(135deg); }
            .sc-hamburger.open span:nth-child(2) { opacity: 0; left: -60px; }
            .sc-hamburger.open span:nth-child(3) { top: 7px; transform: rotate(-135deg); }
        </style>

        <nav id="main-nav" class="sc-nav fixed top-0 left-0 right-0 z-50 flex items-center">
            <div class="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
                <div class="flex items-center gap-10">
                    <a href="index.html" class="flex items-center gap-3 group">
                        <img src="assets/navicon.png" alt="Favicon" class="h-10 w-10 transition-transform group-hover:rotate-12" onerror="this.src='https://placehold.co/40x40/black/white?text=G'">
                        <span class="text-white font-black text-xl tracking-tighter uppercase">Grinderouz</span>
                    </a>
                    
                    <div class="hidden lg:flex items-center gap-8">
                        <a href="index.html" class="sc-link">Home</a>
                        <a href="layouts.html" class="sc-link">Layouts</a>
                        <a href="clans.html" class="sc-link">Clans</a>
                    </div>
                </div>

                <div class="flex items-center gap-4">
                    <div class="hidden md:flex items-center gap-3">
                        <a href="https://discord.gg/jEN9NNdA4v" target="_blank" class="discord-btn">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
                            Discord
                        </a>
                        <a href="https://link.clashofclans.com/en?action=OpenClanProfile&tag=2QY9L2V8P" target="_blank" class="sc-id-btn">
                            Join Clan
                        </a>
                    </div>
                    
                    <button id="sc-menu-btn" class="lg:hidden ml-2 p-2 focus:outline-none">
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
        <div id="sc-overlay" class="fixed inset-0 z-40 translate-x-full transition-transform duration-300 ease-in-out lg:hidden">
            <div class="absolute inset-0 bg-black/95 backdrop-blur-xl"></div>
            <div class="relative h-full flex flex-col p-10">
                <div class="flex flex-col gap-8 mt-20">
                    <a href="index.html" class="text-3xl font-black text-white uppercase tracking-tighter">Home</a>
                    <a href="layouts.html" class="text-3xl font-black text-white uppercase tracking-tighter">Layouts</a>
                    <a href="clans.html" class="text-3xl font-black text-white uppercase tracking-tighter">Clans</a>
                </div>
                
                <div class="mt-auto flex flex-col gap-4">
                    <a href="https://discord.gg/jEN9NNdA4v" target="_blank" class="discord-btn justify-center py-4 text-xl">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
                        Join Discord
                    </a>
                    <a href="https://link.clashofclans.com/en?action=OpenClanProfile&tag=2QY9L2V8P" target="_blank" class="sc-id-btn inline-block text-center w-full py-4 text-xl">
                        Join Clan
                    </a>
                </div>
            </div>
        </div>
    `;

    const container = document.getElementById('navbar-container');
    if (container) {
        container.innerHTML = navbarHTML;
    }

    const menuBtn = document.getElementById('sc-menu-btn');
    const overlay = document.getElementById('sc-overlay');
    const hamburger = document.getElementById('sc-hamburger');
    const nav = document.getElementById('main-nav');
    let isMenuOpen = false;

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

    overlay.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu();
        });
    });
});