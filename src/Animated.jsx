
import 'animate.css'
import { For, children, Show } from 'solid-js';

export default function Animated ({ name, options, children, style }) {
    name = `animate__animated animate__delay1s animate__${name?.replace("animate__", "") || 'bounceInLeft'}  ${options || ""}`
    let ref

    const enabled = document.location.search.includes('disable-animations') ? false : true

    return <>
        <Show when={enabled} fallback={<>{children}</>}>
            <div class={name} style={style} ref={ref}>
                {children}
            </div>
        </Show>
    </>
}

export function AnimatedSequence (props) {
    const delay = props.delay || 0.5;
    const kids = children(() => props.children).toArray();
    return <>
        <For each={kids}>
            {(child, i) => {
                return <Animated name={props.name || "bounceInLeft"} style={{ ...props.style, ...{ 'animation-delay': `${i() * delay}s` } }}>{child}</Animated>
            }}
        </For>
    </>
}

///////////////////

function isElementInViewport (el) {
    const rect = el.getBoundingClientRect();
    const top = window.innerHeight || document.documentElement.clientHeight
    console.log({ rect, top })
    return rect.top <= top && rect.bottom >= 0
}

function handleScroll () {
    const listItems = document.querySelectorAll('.hiding');
    listItems.forEach(item => {
        if (item.classList.contains('hiding')
            && !item.classList.contains('animate__animated')
            && isElementInViewport(item)) {
            item.style.opacity = 1;
            item.classList.add('animate__animated');
            item.classList.remove('hiding');
        }
    });
}

// Initial check on load
// handleScroll();
// window.addEventListener('scroll', handleScroll);