import { Client } from "minio";
import ytdl from "ytdl-core";

/**
 * saves a YouTube video to Backblaze
 * @param url the YouTube URL
 * @param name the general name of the file
 * @returns the backblaze URL
 */
export const saveYoutube = async (
  s3: Client,
  bucket: string,
  url: string,
  name?: string
): Promise<string> => {
  const saveName = "";

  await s3.putObject(bucket, saveName, ytdl(url));

  return "";
};
