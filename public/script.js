document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("data-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get the form data
        const formData = new FormData(form);
        const name = formData.get("name");
        const email = formData.get("email");

        
        fetch("/api/insert-data", {
            method: "POST",
            body: JSON.stringify({ name, email }),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            if (response.ok) {
                // Data successfully inserted
                alert("Data inserted successfully!");
            } else {
                // Handle error
                alert("An error occurred while inserting data.");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
        
    });
});
