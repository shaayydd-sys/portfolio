import { useInView } from 'react-intersection-observer';

/**
 * MorphIn — wraps any element and plays a blur→sharp morph animation
 * once when it enters the viewport.
 *
 * Props:
 *   as        — HTML tag to render (default: "div")
 *   delay     — animation-delay in seconds (default: 0)
 *   duration  — animation duration in seconds (default: 0.9)
 *   threshold — IntersectionObserver threshold (default: 0.1)
 *   className — forwarded to the element
 */
const MorphIn = ({
    children,
    as: Tag = 'div',
    className,
    delay = 0,
    duration = 0.9,
    threshold = 0.1,
    style,
    ...props
}) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold });

    return (
        <Tag
            ref={ref}
            className={className}
            style={{
                opacity: inView ? undefined : 0,
                animation: inView
                    ? `morphIn ${duration}s cubic-bezier(0.16,1,0.3,1) ${delay}s both`
                    : undefined,
                ...style,
            }}
            {...props}
        >
            {children}
        </Tag>
    );
};

export { MorphIn };
