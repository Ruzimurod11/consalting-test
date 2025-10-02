import { setLocale } from "@/lib/next-intl/set-locale"
import { PropsWithChildrenLocale } from "@/types/common"

export default async function Layout({
    children,
    params,
}: PropsWithChildrenLocale) {
    setLocale(params)

    return <main>{children}</main>
}
