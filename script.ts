document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm') as HTMLFormElement;

    form?.addEventListener('submit', function (event: Event) {
        event.preventDefault();

        const nameElement = document.getElementById('name') as HTMLInputElement | null;
        const emailElement = document.getElementById('email') as HTMLInputElement | null;
        const phoneElement = document.getElementById('phone') as HTMLInputElement | null;
        const addressElement = document.getElementById('address') as HTMLInputElement | null;
        const educationElement = document.getElementById('education') as HTMLTextAreaElement | null;
        const experienceElement = document.getElementById('experience') as HTMLTextAreaElement | null;
        const skillsElement = document.getElementById('skills') as HTMLTextAreaElement | null;
        const profilePictureElement = document.getElementById('profilePicture') as HTMLInputElement | null;

        if (
            nameElement && 
            emailElement && 
            phoneElement && 
            addressElement && 
            educationElement && 
            experienceElement && 
            skillsElement && 
            profilePictureElement
        ) {
            const name = nameElement.value;
            const email = emailElement.value;
            const phone = phoneElement.value;
            const address = addressElement.value;
            const education = educationElement.value;
            const experience = experienceElement.value;
            const skills = skillsElement.value;

            let profilePicturePreview = '';

            const displayResume = () => {
                const resumeOutput = `
                    <h2>Resume</h2>
                    ${profilePicturePreview}
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone Number:</strong> ${phone}</p>
                    <p><strong>Address:</strong> ${address}</p>
                    <h3>Education</h3>
                    <p>${education}</p>
                    <h3>Experience</h3>
                    <p>${experience}</p>
                    <h3>Skills</h3>
                    <p>${skills}</p>
                `;

                const resumeOutputElement = document.getElementById('resumeOutput');
                if (resumeOutputElement) {
                    resumeOutputElement.innerHTML = resumeOutput;
                    resumeOutputElement.style.display = 'block';
                } else {
                    console.error('The resume output element is missing');
                }
            };

            if (profilePictureElement.files && profilePictureElement.files[0]) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    profilePicturePreview = `<img id="profilePicturePreview" src="${e.target?.result}" alt="Profile Picture" style="max-width: 150px; border-radius: 50%; display: block; margin: 10px auto;">`;
                    displayResume();
                };
                reader.readAsDataURL(profilePictureElement.files[0]);
            } else {
                displayResume();
            }
        } else {
            console.error('One or more input elements are missing');
        }
    });
});
