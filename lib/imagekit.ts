import ImageKit from "imagekit-javascript"

const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
})

export default imagekit

export async function uploadToImageKit(
  file: File,
  fileName: string,
  folder: string = "medwhole"
): Promise<string> {
  const authenticationEndpoint = `${process.env.NEXT_PUBLIC_APP_URL}/api/imagekit/auth`

  return new Promise((resolve, reject) => {
    imagekit.upload(
      {
        file,
        fileName,
        folder,
      },
      (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result.url)
        }
      },
      {
        authenticationEndpoint,
      }
    )
  })
}
