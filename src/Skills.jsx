
import { For, Show } from 'solid-js';
import './Skills.css';
import Animated, { AnimatedSequence } from './Animated'

export default function ({ data }) {
    const skills = data.skills;
    return <>
        <section id="skills">
            <h2>{skills.title}</h2>
            <For each={skills.items}>
                {(item) => (
                    <div >
                        <h3>{item.category}</h3>
                        <ul>
                            <AnimatedSequence delay={0.1} name="fadeIn" style={{ display: 'inline' }}>
                                <For each={item.skills}>
                                    {(skill) => <li >{skill}</li>}
                                </For>
                            </AnimatedSequence>
                        </ul>
                    </div>
                )}
            </For>
        </section >
    </>
}