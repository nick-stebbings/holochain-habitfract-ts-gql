
import { Orchestrator } from "@holochain/tryorama";

import habit_tracking_domain from './habit_lobby/habit_tracking/domain';

let orchestrator: Orchestrator<any>;

orchestrator = new Orchestrator();
habit_tracking_domain(orchestrator);
orchestrator.run();



