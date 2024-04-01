import React from 'react'
import styles from './withCustomScroll.module.scss'

function withCustomScroll<T>(BaseComponent: React.ComponentType<T>) {
    function ComponentWithCustomScroll(props: T) {
        return (
            <BaseComponent
                {...props}
                onWheelCapture={
                    (e: React.WheelEvent) => {

                        setTimeout(() => {
                            let scrollTop =
                                window.scrollY ||
                                document.documentElement.scrollTop;
                            let scrollLeft =
                                window.scrollX ||
                                document.documentElement.scrollLeft;

                            window.onscroll = function () {
                                window.scrollTo(scrollLeft, scrollTop);
                            };
                        }, 0)

                        if (e.deltaY > 0) {
                            e.currentTarget.scrollTo({
                                left: e.currentTarget.scrollLeft += 100,
                                behavior: 'smooth'
                            })
                        } else {
                            e.currentTarget.scrollTo({
                                left: e.currentTarget.scrollLeft -= 100,
                                behavior: 'smooth'
                            })
                        }

                    }
                }

                onMouseLeave={() => window.onscroll = function () { }}

                className={`${styles.scroll} ${styles.container}`}
            />
        )
    }

    return ComponentWithCustomScroll;
}

export default withCustomScroll
