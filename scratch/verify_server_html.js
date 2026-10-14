const http = require('http');

http.get('http://localhost:5035/personal-info', (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
        console.log('Status:', res.statusCode);
        console.log('Has #alaram_box:', data.includes('id="alaram_box"'));
        console.log('Has #divLoader:', data.includes('id="divLoader"'));
        console.log('Has CheckMeliCode:', data.includes('CheckMeliCode'));
        console.log('Has alarm_progress_bar:', data.includes('alarm_progress_bar'));
        
        // Find where alaram_box is located in HTML
        const idx = data.indexOf('id="alaram_box"');
        if (idx !== -1) {
            console.log('Context around #alaram_box:');
            console.log(data.substring(Math.max(0, idx - 100), Math.min(data.length, idx + 200)));
        }
    });
}).on('error', (err) => {
    console.error('Error fetching:', err.message);
});
