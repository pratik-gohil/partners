"use client"
import { translatePages } from "@/lib/constants/common";
import { getCookieClient } from "@/lib/utils/getCookieClient";
import Link, { LinkProps } from "next/link";
import { useSearchParams } from "next/navigation";
import { PropsWithChildren, Suspense } from "react";

const RetainQueryLink = ({ href, forceLocale, ...props }: LinkProps & PropsWithChildren & { forceLocale?: string }) => {
    // 1. use useRouter hook to get access to the current query params
    const locale = forceLocale || getCookieClient("locale") || "en"
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
                pathname: (translatePages.includes(pathname) ? (locale === "en" ? "" : ("/" + locale)) : "") + pathname,
                // combine router.query and query props
                query: {
                    ...searchParamsQuery,
                    ...query,
                },
            }}
        />
    );
};

const RetainQueryLinkWithSuspense = ({ href, forceLocale, ...props }: LinkProps & PropsWithChildren & { forceLocale?: string }) => {
    return <Suspense>
        <RetainQueryLink href={href} forceLocale={forceLocale} {...props} />
    </Suspense>
}

export default RetainQueryLinkWithSuspense;