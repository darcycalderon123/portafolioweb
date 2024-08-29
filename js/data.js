document.getElementById('downloadCvBtn').addEventListener('click', function() {
    const filePath = "documents/cv.pdf";
    
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'CV DARCY CALDERON CHIPA.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });
    try {
        await fetch("https://formspree.io/f/mwpeqvaw", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formDataObject),
        });


        event.target.reset();
        const confirmationMessage = document.getElementById("confirmationMessage");
        confirmationMessage.style.display = "block";

        setTimeout(() => {
            confirmationMessage.style.display = "none";
        }, 4000);
    } catch (error) {
        console.error("Error al enviar el formulario:", error);
        const errorMessage = document.getElementById("errorMessage");
        errorMessage.style.display = "block";

        setTimeout(() => {
            errorMessage.style.display = "none";
        }, 4000);
    }
});