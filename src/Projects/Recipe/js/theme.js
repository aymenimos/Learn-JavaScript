
const localStorageWrapper = () => {

}

export const setTheme = (theme) => {
    if (theme === null) {
        localStorage.setItem("theme", "light")
        theme = "light"
    }

    if (theme === "dark") {
        const bodyElement = document.body

        bodyElement.classList.toggle("dark-mode")
    }

    return theme
}

export const toggleTheme = () => {

}