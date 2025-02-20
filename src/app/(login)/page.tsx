import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="flex flex-col items-center space-y-4 rounded-lg bg-white bg-opacity-10 p-8">
          <h1 className="text-4xl font-bold">Vó crediario</h1>
          <input type="text" placeholder="Usuario" className="rounded-lg p-2" />
          <input
            type="password"
            placeholder="Senha"
            className="rounded-lg p-2"
          />
          <button className="w-full rounded-lg bg-[#2e026d] p-2 text-white hover:bg-[#2e299d]">
            Entrar
          </button>
        </div>
      </main>
    </HydrateClient>
  );
}
