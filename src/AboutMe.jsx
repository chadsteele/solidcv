import { For, Show } from 'solid-js';
import './AboutMe.css';
import Animated, { AnimatedSequence } from './Animated'

function Links ({ text }) {
    function links (word) {
        return word.match(/\w+\.\w+/);
    }
    const words = text.split(' ');

    return <>
        <For each={words}>
            {(word) => (
                <Show
                    when={links(word)}
                    fallback={`${word} `}
                >
                    <a
                        href={`https://${links(word)[0]}?referral=chadsteele.com`}
                        target={word}
                    >
                        {word}
                    </a>
                    {' '}
                </Show>
            )}
        </For>
    </>
}

export default function ({ data }) {
    data = data.aboutMe;
    return <>
        <section id="aboutme">
            <For each={data}>
                {(section) => (
                    <div key={section.title}>
                        <h2>{section.title}</h2>
                        {section.subtitle && <p>{section.subtitle}</p>}
                        <ul class="sidebar">
                            <AnimatedSequence>
                                <For each={section.items}>
                                    {(item) => (
                                        <li><Links text={item} /></li>
                                    )}
                                </For>
                            </AnimatedSequence>
                        </ul>
                    </div>
                )}
            </For>
        </section >
    </>
}