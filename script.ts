
// DOM Elements
const lover1 = document.getElementById("firstPerson") as HTMLInputElement | null;
const lover2 = document.getElementById("secondPerson") as HTMLInputElement | null;
const calculateButton = document.getElementById("calculate") as HTMLButtonElement | null;
const showcase1 = document.getElementById("showcase1") as HTMLDivElement | null;
const showcase2 = document.getElementById("showcase2") as HTMLDivElement | null;

// Ensure elements exist before attaching event listeners
if (lover1 && lover2 && calculateButton && showcase1 && showcase2) {
    calculateButton.addEventListener("click", () => {
        const name1 = lover1.value.trim();
        const name2 = lover2.value.trim();

        // Validate input fields
        if (!name1 || !name2) {
            // toast("Please fill in both names", "red", 3000);
            alert("Please fill in both names")
            return;
        }

        // Generate random compatibility percentage
        const percentage = Math.floor(Math.random() * 100);

        // Display results based on percentage
        if (percentage <= 40) {
            showcase(percentage, "You are not meant to be together &#128546;");
        } else if (percentage > 40 && percentage < 60) {
            showcase(percentage, "You can still work it out if you really want it &#128540;");
        } else if (percentage >= 60 && percentage < 80) {
            showcase(percentage, "Just reach out to each other &#128526;");
        } else {
            showcase(percentage, "You guys are a match made in heaven &#128525;");
        }

        // Reset fields after 4 seconds
        setTimeout(() => {
            resetFields();
        }, 4000);
    });
}

// Function to display compatibility percentage
function showcase(value: number, message: string): void {
    const showcase1 = document.getElementById("showcase1");
    const showcase2 = document.getElementById("showcase2");

    if (showcase1 && showcase2) {
        showcase1.innerHTML = `<p class="text-red-500 font-bold">${lover1?.value} and ${lover2?.value} are ${value}% compatible</p>`;
        showcase2.innerHTML = `<p class="text-gray-700">${message}</p>`;
    }
}

// Function to reset input fields and messages
function resetFields(): void {
    if (lover1 && lover2) {
        lover1.value = "";
        lover2.value = "";
    }
    const showcase1 = document.getElementById("showcase1");
    const showcase2 = document.getElementById("showcase2");

    if (showcase1) showcase1.innerHTML = "";
    if (showcase2) showcase2.innerHTML = "";
}