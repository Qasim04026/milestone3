var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var addressElement = document.getElementById('address');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var profilePictureElement = document.getElementById('profilePicture');
    var cvPdfElement = document.getElementById('cvPdf');
    if (nameElement &&
        emailElement &&
        phoneElement &&
        addressElement &&
        educationElement &&
        experienceElement &&
        skillsElement &&
        profilePictureElement &&
        cvPdfElement) {
        var name_1 = nameElement.value;
        var email_1 = emailElement.value;
        var phone_1 = phoneElement.value;
        var address_1 = addressElement.value;
        var education_1 = educationElement.value;
        var experience_1 = experienceElement.value;
        var skills_1 = skillsElement.value;
        var profilePicturePreview_1 = '';
        var cvPdfLink_1 = '';
        var processFiles_1 = function () {
            if (cvPdfElement.files && cvPdfElement.files[0]) {
                var cvReader = new FileReader();
                cvReader.onload = function (e) {
                    var _a;
                    var pdfDataUrl = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                    var base64Index = pdfDataUrl.indexOf(';base64,') + ';base64,'.length;
                    var base64 = pdfDataUrl.substring(base64Index);
                    var blob = base64ToBlob(base64, 'application/pdf');
                    var blobUrl = URL.createObjectURL(blob);
                    cvPdfLink_1 = "<a href=\"".concat(blobUrl, "\" target=\"_blank\">View CV (PDF)</a>");
                    displayResume();
                };
                cvReader.readAsDataURL(cvPdfElement.files[0]);
            }
            else {
                displayResume();
            }
        };
        if (profilePictureElement.files && profilePictureElement.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                profilePicturePreview_1 = "<img id=\"profilePicturePreview\" src=\"".concat((_a = e.target) === null || _a === void 0 ? void 0 : _a.result, "\" alt=\"Profile Picture\" style=\"max-width: 150px; border-radius: 50%; display: block; margin: 10px auto;\">");
                processFiles_1(); // Call processFiles to ensure both image and PDF are processed
            };
            reader.readAsDataURL(profilePictureElement.files[0]);
        }
        else {
            processFiles_1(); // Call processFiles directly if no image is selected
        }
        function displayResume() {
            var resumeOutput = "\n                <h2>Resume</h2>\n                ".concat(profilePicturePreview_1, "\n                <p><strong>Name:</strong> ").concat(name_1, "</p>\n                <p><strong>Email:</strong> ").concat(email_1, "</p>\n                <p><strong>Phone Number:</strong> ").concat(phone_1, "</p>\n                <p><strong>Address:</strong> ").concat(address_1, "</p>\n                ").concat(cvPdfLink_1, "\n                <h3>Education</h3>\n                <p>").concat(education_1, "</p>\n                <h3>Experience</h3>\n                <p>").concat(experience_1, "</p>\n                <h3>Skills</h3>\n                <p>").concat(skills_1, "</p>\n            ");
            var resumeOutputElement = document.getElementById('resumeOutput');
            if (resumeOutputElement) {
                resumeOutputElement.innerHTML = resumeOutput;
                resumeOutputElement.style.display = 'block';
            }
            else {
                console.error('The resume output element is missing');
            }
        }
        function base64ToBlob(base64, type) {
            var byteCharacters = atob(base64);
            var byteNumbers = new Array(byteCharacters.length);
            for (var i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            return new Blob([byteArray], { type: type });
        }
    }
    else {
        console.error('One or more input elements are missing');
    }
});
