export default async function handler(req, res) {
  const response = await fetch(
    "https://api.vercel.com/v1/integrations/deploy/prj_ftY5ZAA3rim4F0m2ltH8OyKIOUS5/NK8jSuPgGJ",
    {
      method: "POST",
    }
  );
  return res.status(200).end("Success");
}
