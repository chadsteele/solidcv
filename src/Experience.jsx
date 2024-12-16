import { For } from 'solid-js';
import './Experience.css';

export default ({ workExperience }) => {
    return (
        <section id="work-experience">
            <h2>{workExperience.title}</h2>
            <h3>{workExperience.subtitle}</h3>
            <div>
                <For each={workExperience.jobs} key={job => job.company + job.title}>
                    {(job) => (
                        <div>
                            <h3><span class="dates">{job.dates}</span> • {job.company}</h3>
                            <h4>{job.title}</h4>
                            <ul>
                                <For each={job.description} key={desc => typeof desc === 'object' ? desc.project : desc}>
                                    {(desc) => (<>
                                        <Show when={typeof desc !== 'string'} fallback={<li>{desc}</li>}>
                                            <div class="projects">
                                                <h4>{desc.project}</h4>

                                                <For each={desc.details} key={detail => detail}>
                                                    {(detail) => <li>{detail}</li>}
                                                </For>

                                            </div>
                                        </Show>
                                    </>
                                    )}
                                </For>
                            </ul>
                        </div>
                    )}
                </For>
            </div>
        </section>
    );
};