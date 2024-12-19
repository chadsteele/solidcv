import { For, Show } from 'solid-js';
import './Education.css';
import Animated, { AnimatedSequence } from './Animated'

export default function ({ data }) {
    data = data.education;
    return <>
        <section id="education">
            <h2>{data.title}</h2>

            <For each={data.items} fallback={<p>Loading...</p>}>
                {(item) => (
                    <article>
                        <h3>{item.institution}</h3>
                        <h4>{item.degree}</h4>
                        <Show when={item.achievements}>

                            <ul class="sidebar">
                                <AnimatedSequence name="bounceInLeft">
                                    <For each={item.achievements}>
                                        {(achievement) => <li>{achievement}</li>}
                                    </For>
                                </AnimatedSequence>
                            </ul>
                        </Show>
                    </article>
                )}
            </For>

        </section>
    </>
}