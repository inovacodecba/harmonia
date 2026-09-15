import { PortalShell } from "@/app/portal-shell";
import { requireChatGPTUser } from "@/app/chatgpt-auth";

export const dynamic = "force-dynamic";

export default async function Home() {
  await requireChatGPTUser("/");
  return <PortalShell initialSection="inicio" />;
}
