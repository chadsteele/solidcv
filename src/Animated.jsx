
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
