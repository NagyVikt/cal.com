// import { cookies, headers } from "next/headers";
// import { redirect } from "next/navigation";

// import { getServerSession } from "@calcom/features/auth/lib/getServerSession";

// import { buildLegacyRequest } from "@lib/buildLegacyCtx";

// const RedirectPage = async () => {
//   const session = await getServerSession({ req: buildLegacyRequest(await headers(), await cookies()) });

//   if (!session?.user?.id) {
//     redirect("/auth/login");
//   }
//   redirect("/event-types");
// };

// export default RedirectPage;

// app/page.tsx

// app/page.tsx
import Header from "@components/main/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <main style={{ padding: "2rem" }}>
        <h2>Welcome to Szabadvok!</h2>
        <p>This is the main public page. You can put any public information here.</p>
      </main>
    </>
  );
};

export default HomePage;

