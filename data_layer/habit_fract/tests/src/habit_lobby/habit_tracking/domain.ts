
import { Orchestrator, Player, Cell } from "@holochain/tryorama";
import { config, installation, sleep } from '../../utils';

export default (orchestrator: Orchestrator<any>) =>  {
  
  orchestrator.registerScenario("domain CRUD tests", async (s, t) => {
    // Declare two players using the previously specified config, nicknaming them "alice" and "bob"
    // note that the first argument to players is just an array conductor configs that that will
    // be used to spin up the conductor processes which are returned in a matching array.
    const [alice_player, bob_player]: Player[] = await s.players([config, config]);

    // install your happs into the conductors and destructuring the returned happ data using the same
    // array structure as you created in your installation array.
    const [[alice_happ]] = await alice_player.installAgentsHapps(installation);
    const [[bob_happ]] = await bob_player.installAgentsHapps(installation);

    await s.shareAllNodes([alice_player, bob_player]);

    const alice = alice_happ.cells.find(cell => cell.cellRole.includes('/habit_lobby.dna')) as Cell;
    const bob = bob_happ.cells.find(cell => cell.cellRole.includes('/habit_lobby.dna')) as Cell;

    const entryContents = {"name":"sports","hashtag":"#cool"};

    // Alice creates a domain
    let create_output = await alice.call(
        "habit_tracking",
        "create_domain",
        entryContents
    );
    t.ok(create_output.header_hash);
    t.ok(create_output.entry_hash);

    await sleep(50);
    
    
    
  });

}

