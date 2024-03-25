import { readdir, rename } from "fs";
import { join } from "path";

// Function to rename files in a directory
function renameFiles(dirPath) {
  // Read the files in the directory

  readdir(dirPath, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }

    files.forEach((file) => {
      // Construct the new file name
      const oldPath = join(dirPath, file);
      const newPath = join(
        dirPath,
        `${file.replace(
          " By Dr Israr Ahmed Bayan ul Quran By Dr Israr Ahmad",
          " - Bayan ul Quran By Dr Israr Ahmad"
        )}`
      );

      // Rename the file
      rename(oldPath, newPath, (err) => {
        if (err) console.error(`Error renaming file ${oldPath}:`, err);
        else console.log(`Renamed ${oldPath} to ${newPath}`);
      });
    });
  });
}

// Example usage: Rename files in the 'example_directory' directory
renameFiles("./");
