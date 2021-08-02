import { withPageAuthRequired } from "@auth0/nextjs-auth0/dist/frontend";

export default function Dashboard() {
  return <div>Dashboard</div>;
}
export const getServerSideProps = withPageAuthRequired();
