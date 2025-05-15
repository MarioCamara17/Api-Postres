function getFilePath(file) {
    const filePath = file.path.replace(/\\/g, "/"); // Soporte Windows/Linux
    return filePath; // Mantén "uploads/archivo.png"
  }
  
module.exports = {
    getFilePath
}



