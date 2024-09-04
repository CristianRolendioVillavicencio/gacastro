import { Image } from "react-grid-gallery";

export interface CustomImage extends Image {
  original: string;
  service: string; // Nuevo campo
}

// Definir la función para crear imágenes similares
function createImageBlock(
  urls: string[],
  service: string,
  tags: { value: string; title: string }[],
  caption: string
) {
  return urls.map((url) => ({
    src: url,
    original: url,
    width: 320, // Puedes ajustar esto según sea necesario
    height: 213, // Puedes ajustar esto según sea necesario
    tags,
    caption,
    service,
  }));
}

// Crear el array de imágenes
export const images: CustomImage[] = [
  ...createImageBlock(
    [
      "https://iili.io/dj9294f.jpg",
      "https://iili.io/dj92dYl.jpg",
      "https://iili.io/dj92J24.jpg",
      "https://iili.io/dj9dyEG.jpg",
      "https://iili.io/dj923pS.jpg",
      "https://iili.io/dj92KT7.jpg",
    ],
    "roofing",
    [
      { value: "Flat Roof", title: "Flat Roof" },
      { value: "Epdm Roof", title: "Epdm Roof" },
    ],
    "Ga Castro Construction - Roofing"
  ),
  ...createImageBlock(
    [
      "https://iili.io/dj9aj6J.jpg",
      "https://iili.io/dj9aN3v.jpg",
      "https://iili.io/dj9ahGa.jpg",
      "https://iili.io/dj9aOaR.jpg",
      "https://iili.io/dj9a8uI.jpg",
      "https://iili.io/dj9aSjt.jpg",
      "https://iili.io/dj9aUZX.jpg",
      "https://iili.io/dj9arnn.jpg",
      "https://iili.io/dj9a66G.jpg",
      "https://iili.io/djHt5gI.jpg",
      "https://iili.io/djHtAfp.jpg",
      "https://iili.io/djJFr4n.jpg",
    ],
    "siding",
    [
      { value: "Siding", title: "Siding" },
      { value: "Exterior", title: "Exterior" },
    ],
    "Ga Castro Construction - Siding"
  ),
  // Nuevo bloque para "Asphalt Shingle Roofing"
  ...createImageBlock(
    [
      "https://iili.io/djHxzCl.jpg",
      "https://iili.io/djHxT4S.jpg",
      "https://iili.io/djHxIG2.jpg",
      "https://iili.io/djHxA37.jpg",
      "https://iili.io/djHx5ve.jpg",
      "https://iili.io/djHMd2n.jpg",
      "https://iili.io/djHM91t.jpg",
      "https://iili.io/djHMHrX.jpg",
      "https://iili.io/djHGyBI.jpg",
      "https://iili.io/djHkKcQ.jpg",
      "https://iili.io/djHkFKx.jpg",
      "https://iili.io/djHkdMb.jpg",
      "https://iili.io/djHk2Pj.jpg",
      "https://iili.io/djHsYtR.jpg",
      "https://iili.io/djHscnp.jpg",
      "https://iili.io/djHs7wv.jpg",
      "https://iili.io/djHslMN.jpg",
      "https://iili.io/djHsEFt.jpg",
      "https://iili.io/djHtYJt.jpg",
      "https://iili.io/djHt5gI.jpg",
      "https://iili.io/djHtAfp.jpg",
      "https://iili.io/djHtR0N.jpg",
      "https://iili.io/djHta5X.jpg",
      "https://iili.io/djHtcen.jpg",
      "https://iili.io/djHtlbs.jpg",
      "https://iili.io/djHt1zG.jpg",
      "https://iili.io/djHtEXf.jpg",
      "https://iili.io/djHtGs4.jpg",
      "https://iili.io/djHtVql.jpg",
      "https://iili.io/djHtW12.jpg",
      "https://iili.io/djHtjd7.jpg",
      "https://iili.io/djHtw79.jpg",
      "https://iili.io/djHtNee.jpg",
      "https://iili.io/djHtOmu.jpg",
      "https://iili.io/djHt8Lx.jpg",
      "https://iili.io/djHtUqQ.jpg",
      "https://iili.io/djHtg1V.jpg",
      "https://iili.io/djHtrrB.jpg",
      "https://iili.io/djHtP71.jpg",
      "https://iili.io/djHtikF.jpg",
    ],
    "roofing",
    [
      { value: "Asphalt Shingle", title: "Asphalt Shingle" },
      { value: "Roofing", title: "Roofing" },
    ],
    "Ga Castro Construction - Asphalt Shingle Roofing"
  ),
  ...createImageBlock(
    [
      "https://iili.io/djHgZKu.jpg",
      "https://iili.io/djHgLPe.jpg",
      "https://iili.io/djHgtcb.jpg",
      "https://iili.io/djHgDSj.jpg",
      "https://iili.io/djHgmHx.jpg",
    ],
    "roofing",
    [
      { value: "Metal Roof", title: "Metal Roof" },
      { value: "Roofing", title: "Roofing" },
    ],
    "Ga Castro Construction - Metal Roofing"
  ),
  ...createImageBlock(
    [
      "https://iili.io/djJ9Ydl.jpg",
      "https://iili.io/djJ9a72.jpg",
      "https://iili.io/djJ95g4.jpg",
      "https://iili.io/djJ9ceS.jpg",
      "https://iili.io/djJ9lm7.jpg",
      "https://iili.io/djJ91I9.jpg",
      "https://iili.io/djJ9GLu.jpg",
      "https://iili.io/djJ9Vqb.jpg",
      "https://iili.io/djJ9W1j.jpg",
      "https://iili.io/djJ9Xrx.jpg",
      "https://iili.io/djJ9jdQ.jpg",
      "https://iili.io/djJ9w7V.jpg",
      "https://iili.io/djJ9NkB.jpg",
      "https://iili.io/djJ9OmP.jpg",
      "https://iili.io/djJ9kI1.jpg",
      "https://iili.io/djJ98Lg.jpg",
      "https://iili.io/djJ9UBa.jpg",
      "https://iili.io/djJ9gEJ.jpg",
      "https://iili.io/djJ962R.jpg",
      "https://iili.io/djJ9P7p.jpg",
      "https://iili.io/djJ9ikN.jpg",
    ],
    "roofing",
    [
      { value: "Wood Shake Roof", title: "Wood Shake Roof" },
      { value: "Roofing", title: "Roofing" },
    ],
    "Ga Castro Construction - Wood Shake Roof"
  ),
  ...createImageBlock(
    [
      "https://iili.io/djJ2WZP.jpg",
      "https://iili.io/djJ2hn1.jpg",
      "https://iili.io/djJ2MuV.jpg",
      "https://iili.io/djJ2VwB.jpg",
      "https://iili.io/djJ2jMF.jpg",
      "https://iili.io/djJ2w6g.jpg",
      "https://iili.io/djJ2OFa.jpg",
      "https://iili.io/djJ2ecJ.jpg",
      "https://iili.io/djJ2k8v.jpg",
      "https://iili.io/djJ289R.jpg",
      "https://iili.io/djJ2Sup.jpg",
      "https://iili.io/djJ2UwN.jpg",
      "https://iili.io/djJ2gtI.jpg",
      "https://iili.io/djJ24nt.jpg",
      "https://iili.io/djJ2PPn.jpg",
      "https://iili.io/djJ26MX.jpg",
      "https://iili.io/djJKdyx.jpg",
      "https://iili.io/djJKJvj.jpg",
      "https://iili.io/djJK3TQ.jpg",
      "https://iili.io/djJKFjV.jpg",
      "https://iili.io/djJKqCP.jpg",
      "https://iili.io/djJKBG1.jpg",
      "https://iili.io/djJKC6F.jpg",
      "https://iili.io/djJKo3g.jpg",
      "https://iili.io/djJKxaa.jpg",
    ],
    "copper",
    [
      { value: "Copper", title: "Cooper" },
      { value: "Copper", title: "Copper" },
    ],
    "Ga Castro Construction - Copper Roof"
  ),
];
