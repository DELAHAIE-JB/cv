function changeTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        setTheme('day');
    }
    else if (localStorage.getItem('theme') === 'day') {
        setTheme('dark');
    }
    setIconTheme();
}

function loadTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        setTheme('dark');
    }
    else if (localStorage.getItem('theme') === 'day') {
        setTheme('day');
    }

    else {
        console.info("Default color scheme");
        const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
        if (systemSettingDark) {
            setTheme('dark');
        }
        else {
            setTheme('day');
        }
    }
} loadTheme();

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
    console.info("Set theme : " + themeName);
    setIconTheme();
}

async function setIconTheme() {
    var themeButton = document.getElementById('theme');
    var img = themeButton.children[0];

    if (localStorage.getItem('theme') === 'dark') {
        img.src = "./images/sun.svg";
    }
    else if (localStorage.getItem('theme') === 'day') {
        img.src = "./images/light.svg";
    }

    else { img.src = "./images/settings.svg"; }
}
