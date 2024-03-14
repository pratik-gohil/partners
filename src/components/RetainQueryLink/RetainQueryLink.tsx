"use client"
import Link, { LinkProps } from "next/link";
import { useSearchParams } from "next/navigation";
import { PropsWithChildren } from "react";

const RetainQueryLink = ({ href, ...props }: LinkProps & PropsWithChildren) => {
    // 1. use useRouter hook to get access to the current query params
    const searchParams = useSearchParams();
    const searchParamsQuery = Object.fromEntries(searchParams)

    // 2. get the pathname
    const pathname = typeof href === "object" ? href.pathname : href;

    // 3. get the query from props
    const query =
        typeof href === "object" && typeof href.query === "object"
            ? href.query
            : {};

    return (
        <Link
            {...props}
            href={{
                pathname,
                // combine router.query and query props
                query: {
                    ...searchParamsQuery,
                    ...query,
                },
            }}
        />
    );
};
export default RetainQueryLink;