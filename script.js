// Event listener for the button click
document.getElementById('generateBtn').addEventListener('click', generatePassword);

// Function to generate password based on user selection
function generatePassword() {
    // Alert for password criteria
    const length = prompt('Enter the length of the password (between 8 and 128):');
    
    // Validate password length
    if (length < 8 || length > 128 || isNaN(length)) {
        alert('Password length must be a number between 8 and 128.');
        return;
    }

    // Confirm which character types to include
    const includeLowercase = confirm('Include lowercase letters?');
    const includeUppercase = confirm('Include uppercase letters?');
    const includeNumeric = confirm('Include numbers?');
    const includeSpecialChars = confirm('Include special characters?');

    // Include at least one character type selected
    if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecialChars)) {
        alert('At least one character type must be selected.');
        return;
    }

    // Generate password
    const password = generateRandomPassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecialChars);

    // Display the generated password
    alert('Your generated password:\n\n' + password);
}

// Function to generate a random password based on selected preference
function generateRandomPassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecialChars) {
    // Character sets for each type
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numericChars = '0123456789';
    const specialChars = '!@#$%^&*()-=_+[]{}|;:,.<>?';

    // Combine selected character sets
    let allChars = '';
    if (includeLowercase) allChars += lowercaseChars;
    if (includeUppercase) allChars += uppercaseChars;
    if (includeNumeric) allChars += numericChars;
    if (includeSpecialChars) allChars += specialChars;

    // Generate password
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
    }

    return password;
}
