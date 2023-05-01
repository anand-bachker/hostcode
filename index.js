// host a directory of static files
// and serve them on port 3000

// import the http module
const express  = require('express');

// create an instance of the http server

const app1 = express();
const app2 = express();
const fs = require('fs');
// define the port

const port1 = 3000;
const port2 = 9000;

const basePath1 = "./files1";
const basePath2 = "./files2";

// define the route



app1.get("/", (req, res) => {
    fs.readdir(basePath1, (err, files) => {
        if (err) {
            res.send(err);
        } else {
            res.send(
                files.map((file) => {
                    return `
                    <div>
                        <a href="/serve?filename=${file}">${file}</a>
                        <a href="/download?filename=${file}">Download</a>
                    </div>
                    `;
                }).join("<br/>")
            )
        }
    });
});


app1.get("/serve", (req, res) => {
    const filename = req.query.filename;
    const filepath = `${basePath1}/${filename}`;
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

app1.get("/download", (req, res) => {
    const filename = req.query.filename;
    const filepath = `${basePath1}/${filename}`;
    fs.readFile(filepath, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.download(filepath);
        }
    });
});





app2.get("/", (req, res) => {
    fs.readdir(basePath2, (err, files) => {
        if (err) {
            res.send(err);
        } else {
            res.send(
                files.map((file) => {
                    return `
                    <div>
                        <a href="/serve?filename=${file}">${file}</a>
                        <a href="/download?filename=${file}">Download</a>
                    </div>
                    `;
                }).join("<br/>")
            )
        }
    });
});


app2.get("/serve", (req, res) => {
    const filename = req.query.filename;
    const filepath = `${basePath2}/${filename}`;
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

app2.get("/download", (req, res) => {
    const filename = req.query.filename;
    const filepath = `${basePath2}/${filename}`;
    fs.readFile(filepath, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.download(filepath);
        }
    });
});





// start the server

app1.listen(port1, () => {
    console.log(`Server running on port: ${port1}`);
});

app2.listen(port2, () => {
    console.log(`Server running on port: ${port2}`);
});