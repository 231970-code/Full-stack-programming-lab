const express = require('express');
const app = express();
const port = 3000;

// Student data array
const students = [
    'Ali Ahmed',
    'Sara Khan',
    'Ahmed Raza',
    'Fatima Malik',
    'Omar Hussain',
    'Aisha Imran',
    'Bilal Sheikh',
    'Zainab Ali'
];

// Route to display student list
app.get('/', (req, res) => {
    let html = '<!DOCTYPE html>';
    html += '<html><head><title>Student List</title>';
    html += '<style>';
    html += 'body { font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; padding: 40px; margin: 0; }';
    html += '.container { max-width: 600px; margin: 0 auto; background: white; border-radius: 15px; padding: 30px; box-shadow: 0 10px 40px rgba(0,0,0,0.2); }';
    html += 'h1 { color: #667eea; text-align: center; margin-bottom: 30px; font-size: 32px; }';
    html += 'ul { list-style: none; padding: 0; }';
    html += 'li { padding: 15px 20px; margin: 10px 0; background: #f8f9fa; border-left: 4px solid #667eea; border-radius: 8px; font-size: 18px; color: #333; transition: all 0.3s ease; }';
    html += 'li:hover { background: #667eea; color: white; transform: translateX(10px); border-left-color: #764ba2; }';
    html += '</style></head>';
    html += '<body><div class="container"><h1>🎓 Student List</h1><ul>';
    
    students.forEach(student => {
        html += `<li>${student}</li>`;
    });
    
    html += '</ul></div></body></html>';
    res.send(html);
});

app.listen(port, () => {
    console.log(`Task 1 Server running at http://localhost:${port}`);
});