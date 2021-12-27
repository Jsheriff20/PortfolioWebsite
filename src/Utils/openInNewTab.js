function openInNewTab(url) {
    const win = window.open(url, "_blank");
    if (win != null) {
        win.focus();
    }
}

export default openInNewTab;
