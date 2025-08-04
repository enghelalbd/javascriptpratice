/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";

//write your code here

// values are result.pdf,data.docx,pdfData.jpg,#exp.mp4,docx.txt,docx.xpdf,slipdf.txt
if (fileName.startsWith("#") || fileName.endsWith(".pdf") || fileName.endsWith(".docx")) {
    console.log('Store')
}

else {
    console.log("Delete")
}












