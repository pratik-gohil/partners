import { useEffect, useState } from "react";

export const useInView = (ref: React.RefObject<HTMLElement>) => {
    const [inView, setInView] = useState(false);

    function callback(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
        entries.forEach((entry) => {
            const target = entry.target;
            if (entry.isIntersecting) {
                setInView(true)
                observer.unobserve(target);
            }
        });
    };

    useEffect(() => {
        const el = ref.current;
        const observer = new IntersectionObserver(callback);

        if (el) {
            observer.observe(el)
        }

        return () => { el && observer.unobserve(el) }
    }, [ref]);

    return inView
}