# Selected Projects

## Machine Maintenance and Uptime Data Pipeline

- Built a local Python and CSV pipeline that joins synthetic machine, IoT telemetry, and maintenance data through a stable machine ID.
- Added validation and quarantine for invalid and unknown records.
- Created rule-based health, failure count, downtime, MTTR, fixed-window availability, combined machine summary, and maintenance-priority outputs.

## Production Incident AI Assistant

- Created Python contracts for incidents and evidence from alerts, logs, metrics, traces, deployments, pipeline runs, and data-quality events.
- Added source and timestamp provenance fields, a read-only evidence-source interface, and one provenance test.
- Documented a future investigation flow where evidence stays traceable and an engineer keeps the final decision.

## Manufacturing & Retail Supply Chain Lakehouse

- Created an early Python source-contract model for dataset grain, business keys, event time, arrival time, and change mode.
- Added one validation test and a CI file for the current scaffold.
- Documented a proposed supply-chain data model and future pipeline plan; no working lakehouse pipeline or business result is claimed yet.
