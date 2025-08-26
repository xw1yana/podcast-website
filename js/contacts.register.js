const form = document.getElementById("contact-form");

async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const result = await fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    });
}
form.addEventListener("submit", handleSubmit);