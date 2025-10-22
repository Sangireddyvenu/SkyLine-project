// Toggle mobile navigation menu
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.onclick = () => {
  navMenu.classList.toggle("active");
};

// Function to handle form submission
const handleFormSubmission = (formId, nameField, emailField, mobileField) => {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById(nameField).value.trim();
        const email = document.getElementById(emailField)?.value.trim() || 'N/A'; // Email might not exist in all forms
        const mobile = document.getElementById(mobileField).value.trim();

        if (name && mobile) {
            alert(`Thank you, ${name}! We'll contact you at ${mobile} soon.`);
            form.reset();
        } else {
            alert("Please fill in all required fields (Name and Mobile number).");
        }
    });
};

// Handle Brand/Top Enquiry form submission
handleFormSubmission("topEnquiryForm", "brandFullName", "brandEmailId", "brandMobileNo");

// Handle Bottom Enquiry form submission
handleFormSubmission("bottomEnquiryForm", "fullName", "emailId", "mobileNo");


// Gallery dot activation (for the final gallery section)
const galleryNav = document.querySelector(".gallery-nav");
if (galleryNav) {
    const dots = galleryNav.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            dots.forEach((d) => d.classList.remove("active"));
            dot.classList.add("active");
            // Add logic here to switch visible gallery images
        });
    });

    // Simple alert for navigation arrows (you'd replace this with actual carousel logic)
    galleryNav.querySelectorAll(".nav-arrow").forEach(arrow => {
        arrow.addEventListener("click", () => {
            alert("This arrow would trigger the carousel/image slider!");
        });
    });
}