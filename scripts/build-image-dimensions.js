import { glob } from "glob";
import util from "node:util";
import image_size from "image-size";
import fsp from "node:fs/promises";

async function build() {
  const images = await glob("**/*.{jpg,jpeg,png,gif,webp}", {
    ignore: "node_modules/**",
  });

  /**@type {Array<{path: string, width: number, height: number}>} */
  const images_dimensions = [];

  for (const path of images) {
    const { width, height } = await util.promisify(image_size)(path);
    images_dimensions.push({ path, width, height });
  }

  await fsp.writeFile(
    process.argv[2],
    JSON.stringify(images_dimensions),
    "utf8"
  );
}

build();
