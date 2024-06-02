import { verifyToken } from "../lib/auth";

export async function getServerSideProps(context) {
  const { req } = context;
  const token = req.cookies.token;

  const decodedToken = verifyToken(token);

  if (!decodedToken) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { userId: decodedToken.userId },
  };
}

export default function ProfilePage({ userId }) {
  return <div>Welcome to your profile, user {userId}!</div>;
}
