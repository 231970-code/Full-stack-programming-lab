const express = require('express');
const app = express();
const port = 3013;

// Root route - returns full HTML page
app.get('/', (req, res) => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Page</title>
    <style>
        body { 
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; 
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); 
            min-height: 100vh; 
            margin: 0; 
            padding: 40px;
        }
        .container { 
            max-width: 700px; 
            margin: 0 auto; 
            background: white; 
            border-radius: 20px; 
            padding: 50px; 
            box-shadow: 0 20px 60px rgba(0,0,0,0.3); 
        }
        h1 { 
            color: #1e3c72; 
            font-size: 36px; 
            margin-bottom: 20px; 
            text-align: center;
            border-bottom: 3px solid #2a5298;
            padding-bottom: 15px;
        }
        h2 { 
            color: #2a5298; 
            margin-top: 30px;
            font-size: 24px;
        }
        p { 
            font-size: 18px; 
            line-height: 1.8; 
            color: #555;
        }
        ul { 
            list-style: none; 
            padding: 0;
        }
        li { 
            margin: 15px 0; 
            padding: 15px 20px; 
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); 
            border-radius: 10px; 
            font-size: 16px; 
            color: #333;
            transition: all 0.3s ease;
            border-left: 4px solid #2a5298;
        }
        li:hover { 
            transform: translateX(10px); 
            box-shadow: 0 5px 20px rgba(30, 60, 114, 0.2);
        }
        li::before { 
            content: "✓ "; 
            color: #2a5298;
            font-weight: bold;
            margin-right: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🌟 Welcome to My Page</h1>
        <p>This is a simple HTML page rendered using Express. The page includes a title, paragraph, and a simple list of items.</p>
        <h2>Features:</h2>
        <ul>
            <li>Full HTML page structure</li>
            <li>CSS styling for better presentation</li>
            <li>Dynamic content from Express server</li>
            <li>Clean and modern design</li>
        </ul>
    </div>
</body>
</html>`;
    res.send(html);
});

app.listen(port, () => {
    console.log(`Task 4 Server running at http://localhost:${port}`);
});