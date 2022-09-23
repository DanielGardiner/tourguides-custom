import { getSession } from "next-auth/react";
import Layout from "../components/Layout";
import tourService from "../server/services/tour";
import useGetTours from "../hooks/useGetTours";
import Card from "../components/Card";

export async function getServerSideProps({ req, res }) {
  try {
    const session = await getSession({ req });

    const tours = await tourService.getTours();

    return {
      props: {
        session,
        tours,
      },
    };
  } catch (e) {
    console.error(e);

    // If error redirect user to homepage
    return {
      redirect: {
        destination: "/",
      },
    };
  }
}

export default function ToursPage({ session, tours: initialTours }) {
  const { data: tours } = useGetTours({ initialTours });

  return (
    <Layout session={session}>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {tours?.map((tour) => (
            <Card tour={tour} key={tour.id} />
          ))}
        </div>
    </Layout>
  );
}