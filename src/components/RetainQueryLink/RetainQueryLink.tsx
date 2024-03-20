"use client"
import { translatePages } from "@/lib/constants/common";
import { getCookieClient } from "@/lib/utils/getCookieClient";
import Link, { LinkProps } from "next/link";
import { useSearchParams } from "next/navigation";
import { PropsWithChildren, Suspense } from "react";

const RetainQueryLink = ({ href, ...props }: LinkProps & PropsWithChildren) => {
    // 1. use useRouter hook to get access to the current query params
    const locale = getCookieClient("locale")
    const searchParams = useSearchParams();
    const searchParamsQuery = Object.fromEntries(searchParams)

    // 2. get the pathname
    const pathname = (typeof href === "object" ? href.pathname : href) || "/";

    // 3. get the query from props
    const query =
        typeof href === "object" && typeof href.query === "object"
            ? href.query
            : {};

    return (
        <Link
            {...props}
            href={{
                pathname: (translatePages.includes(pathname) ? "/" + (locale || "en") : "") + pathname,
                // combine router.query and query props
                query: {
                    ...searchParamsQuery,
                    ...query,
                },
            }}
        />
    );
};

const RetainQueryLinkWithSuspense = ({ href, ...props }: LinkProps & PropsWithChildren) => {
    return <Suspense>
        <RetainQueryLink href={href} {...props} />
    </Suspense>
}

export default RetainQueryLinkWithSuspense;