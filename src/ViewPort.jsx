import { createSignal, onMount } from 'solid-js';

export default function ViewPort ({ children, style }) {
    let ref;
    const [showing, setShowing] = createSignal(false);

    onMount(() => {
        setShowing(isElementInViewport(ref));

        window.addEventListener('scroll', debounce(() => {
            setShowing(showing() || isElementInViewport(ref));
        }));
    })

    return <div ref={ref} style={style}>
        <Show when={showing()} >
            {children}
        </Show>
    </div>

}

const debounce = (callback, wait = 200) => {
    let timeoutId = null;
    return (...args) => {
        window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
            callback(...args);
        }, wait);
    };
}

function isElementInViewport (el) {
    const rect = el.getBoundingClientRect();
    const top = window.innerHeight || document.documentElement.clientHeight
    console.log({ rect, top })
    return rect.top <= top && rect.bottom >= 0
}
