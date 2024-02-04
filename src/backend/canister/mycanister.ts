import { Canister, update, None, Principal, serialize, ic } from 'azle';
import { CreateCanisterResult, managementCanister } from 'azle/canisters/management';

const canister = Canister({
    executeCreateCanister: update([], CreateCanisterResult, async () => {
        if (process.env.AZLE_TEST_FETCH === 'true') {
            const response = await fetch(`icp://aaaaa-aa/create_canister`, {
                body: serialize({
                    args: [{ settings: [], sender_canister_version: [] }],
                    cycles: 50_000_000_000_000n
                })
            });
            return await response.json();
        } else {
            return await ic.call(managementCanister.create_canister, {
                args: [{ settings: None, sender_canister_version: None }],
                cycles: 50_000_000_000_000n
            });
        }
    })
});

export default canister;