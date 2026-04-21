document.getElementById("surveyForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const toast = document.getElementById("toast");

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
});
