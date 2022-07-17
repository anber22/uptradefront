export default function test() {
  return null;
}

export async function getServerSideProps({ res, req }) {
  console.log(req);
  return { props: {} };
}
