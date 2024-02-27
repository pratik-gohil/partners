import { useEffect, useRef, useState } from "react";

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
        const observer = new IntersectionObserver(callback);

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => { ref.current && observer.unobserve(ref.current) }
    }, [ref]);

    return inView
}