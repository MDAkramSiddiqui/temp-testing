function init() {
    // Taken from :: https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
    console.log("akram")
    function getParameterByName(name, url = window.location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    const element = document.getElementById("div--user-id");
    window.userId = getParameterByName('userId');
    element.innerText = window.userId;
}

document.addEventListener('DOMContentLoaded', () => init())


