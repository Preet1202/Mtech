import { useRouter } from "next/router";
import Header from "../../../components/Header";

export default function CommentPage() {
  const router = useRouter();

  return (
    <>
      <Header />
    </>
  );
}
