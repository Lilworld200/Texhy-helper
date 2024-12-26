import express from "express";
import path from "path";
//initialize express

const app = express();
app.listen(3000, () => {
	console.log("port has been initiated");
});
app.use(express.static("public"));
// app.use(
// 	"/scripts",
// 	express.static("./public/scripts", {
// 		setHeaders: (res, path) => {
// 			res.set("Content-Type", "application/javascript");
// 		}
// 	})
// );


