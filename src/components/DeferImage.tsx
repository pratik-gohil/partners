import { useInView } from '@/hooks/useInView';
import React, { ComponentProps, useRef } from 'react'

export const DeferedImage = (props: ComponentProps<"img">) => {
    const viewRef = useRef<HTMLDivElement>(null);
    const inView = useInView(viewRef);

    return <div ref={viewRef}>
        {inView && <img {...props} loading='lazy' />}
    </div>
}