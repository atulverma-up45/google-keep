import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/image");
  },

  filename: function (req, file, cb) {
    
    const fileExt = path.extname(file.originalname);
    
    // Generate a unique filename with the original extension
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const newFilename = file.fieldname + "-" + uniqueSuffix + fileExt;

    cb(null, newFilename);
  },
});

const fileUpload = multer({
  storage: storage,
});

export default fileUpload;
