window.function = function (deviceToken) {
    // Retrieve the token from localStorage or generate a new one
    let token = localStorage.getItem('deviceToken') ?? Date.now().toString(36);
    localStorage.setItem('deviceToken', token);

    // Compare the token with the one passed from Glide
    const isAuthorized = deviceToken.value === token;

    return {
        result: {
            token: token, // Return the current device's token
            isAuthorized: isAuthorized, // Return authorization status
        }
    };
};
