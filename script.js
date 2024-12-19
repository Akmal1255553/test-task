document.getElementById('dealForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const dealTitle = document.getElementById('dealTitle').value;
    const dealValue = document.getElementById('dealValue').value;

    const dealData = {
        title: dealTitle,
        value: dealValue,
        currency: "USD", // Укажите валюту
    };

    try {
        const response = await fetch('https://api.pipedrive.com/v1/deals?api_token=65834bc570392e7e0a2f0706c6db748bfcc95452', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dealData),
        });

        const result = await response.json();
        if (response.ok) {
            alert('Deal created successfully: ' + result.data.id);
        } else {
            alert('Error: ' + result.error);
        }
    } catch (error) {
        console.error('Error creating deal:', error);
    }
});



