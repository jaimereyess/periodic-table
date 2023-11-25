export const containerAnimated = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.1
        }
    }
};


export const itemAnimated = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
}

export const blockAnimated = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        opacity: 1
    }
}
