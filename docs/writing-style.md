# Writing in my own voice

Use this guide for portfolio pages, project READMEs, journals and technical notes. It reflects the preference expressed in the portfolio review: direct, personal writing, with technical substance before the discussion of impact.

## Voice

Write like I am explaining the project to another engineer. Use first person when describing an actual choice or piece of work. Prefer short sentences with a clear subject and verb. Keep spelling and grammar polished without making the text sound like a brochure.

Do not imitate typos or add invented personal stories. The writing should reflect the facts and choices I can stand behind. It should not claim that edited text was written without assistance.

## Order

1. State what exists now.
2. Explain the inputs, keys, transformations and outputs.
3. Show the decision, alternative and trade-off when they matter.
4. Link the test, code or saved output.
5. Explain the practical use.
6. State limitations and the next task.

Problem discovery still comes before implementation. This is the order for presenting a project to a reader.

## Examples

| Avoid | Prefer |
| --- | --- |
| I engineered a comprehensive industrial intelligence ecosystem. | I started with machine, sensor and maintenance CSV files. |
| A governed data foundation enables actionable insights. | The scripts join records through asset_id and write a maintenance-priority CSV. |
| PySpark enables enterprise-grade scalability. | I plan to use PySpark to test the same transformations on larger telemetry data. I have not run that version yet. |
| Challenges were encountered during ingestion. | The record failed validation because its machine ID was missing from the master file. |
| The solution optimizes operational efficiency. | The output puts the readings and maintenance history in one review file. I have not measured review time yet. |
| A revolutionary AI assistant identifies the root cause. | The planned assistant will retrieve maintenance records and explain the evidence for an engineer to review. |

## Technical detail

Use details that help someone check the work: file names, join keys, event time, validation rules, equations, API routes, rejected records and failure cases. Explain an unfamiliar term once where it is needed.

Avoid a wall of tool names. Separate tools used by current code from tools being considered for a later phase.

## Business impact

Distinguish the intended benefit from a measured result. A sample priority score is a program output, not proof of lower downtime. A performance claim needs the workload, environment, baseline, correctness check and repeated measurements. A business claim needs an observed change in the actual process.

## Final pass

Remove generic claims, repeated warnings, unexplained acronyms and sentences that could describe any project. Check whether each first-person statement is supported. Do not invent deployments, users, results, awards, metrics or completed work.
