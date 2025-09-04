        const htmlEl = document.documentElement;
        (function initTheme() {
            const saved = localStorage.getItem('theme');
            if (saved === 'light') { htmlEl.classList.remove('dark'); } else { htmlEl.classList.add('dark'); }
        })();

        document.getElementById('year').textContent = new Date().getFullYear();

        const githubUsername = 'kaustavxg';
        const ghUser = document.getElementById('ghUser');
        if (ghUser) { ghUser.textContent = githubUsername; }
        const ghUserTitle = document.getElementById('ghUserTitle');
        if (ghUserTitle) { ghUserTitle.textContent = githubUsername; }

        const ghChart = document.getElementById('ghChart');
        if (ghChart) {
            ghChart.src = `https://ghchart.rshah.org/22c55e/${githubUsername}`;
            ghChart.onerror = () => {
                ghChart.src = `https://github-contributions-api.deno.dev/${githubUsername}.svg?no-total=true&format=svg&scheme=green`;
            };
        }