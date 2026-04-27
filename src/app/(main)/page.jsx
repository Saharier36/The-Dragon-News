import { redirect } from "next/navigation";

const defaultCategoryId = "08";

export default function Home() {
 redirect(`/category/${defaultCategoryId}`);
}
