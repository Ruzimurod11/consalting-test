import ReactQueryProvider from "./react-query"

export default async function Providers({
    children,
}: {
    children: React.ReactNode
}) {
    return <ReactQueryProvider>{children}</ReactQueryProvider>
}
