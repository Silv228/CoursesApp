import { withLayout } from "@/layout/Layout";
import Link from "next/link";

function Custom404() {
    return (
        <div className="errorBlock">
            <h1>404 - Страница не найдена</h1>
            <Link href={'/'}>Перейти на главную</Link>
        </div>
    )
}
export default withLayout(Custom404) 