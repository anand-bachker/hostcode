// host a directory of static files
// and serve them on port 3000

// import the http module
const express  = require('express');

// create an instance of the http server

const app = express();
const fs = require('fs');
// define the port

const port = 3000;

const basePath = "./files";

// define the route








app.get("/", (req, res) => {
    fs.readdir(basePath, (err, files) => {
        if (err) {
            res.send(err);
        } else {
            res.send(
                files.map((file) => {
                    // make <a> tag for each file
                    return `<a href="/serve?filename=${file}">${file}</a>`;
                }).join("<br/>")
            )
        }
    });
});


app.get("/serve", (req, res) => {
    const filename = req.query.filename;
    const filepath = `${basePath}/${filename}`;
    fs.readFile(filepath, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            const mimeType = "text/plain";
            res.writeHead(200, {
                "Content-Type": mimeType
            });
            res.end(data);
        }
    });
});



// start the server

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});