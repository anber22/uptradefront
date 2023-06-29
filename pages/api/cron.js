export default async function handler(req, res) {
  const response = await fetch(
    "https://api.vercel.com/v1/integrations/deploy/prj_Srf7MxyweJbepUHW6jQ4FGpiWZbD/GL0eiJD7E4",
    {
      method: "POST",
    }
  );
  return res.status(200).end("Success");
}
